import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from fastapi.testclient import TestClient
from app.database import Base, get_db
from app.api import router
from fastapi import FastAPI
from app import schemas, models, data

# Use a separate file-based DB for integration tests to verify persistence
SQLALCHEMY_DATABASE_URL = "sqlite:///./test_integration.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="module")
def test_db():
    # Create tables
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    
    # Seed data
    if not db.query(models.Room).first():
        for room_data in data.rooms:
            room = models.Room(
                name=room_data.name,
                description=room_data.description,
                price=room_data.price,
                capacity=room_data.capacity,
                image=room_data.image,
                features=room_data.features
            )
            db.add(room)
        
        for amenity_data in data.amenities:
            amenity = models.Amenity(
                title=amenity_data.title,
                description=amenity_data.description,
                icon=amenity_data.icon
            )
            db.add(amenity)
            
        for feature_data in data.restaurant_info.features:
            feature = models.RestaurantFeature(
                title=feature_data.title,
                description=feature_data.description,
                icon=feature_data.icon
            )
            db.add(feature)
        db.commit()

    yield db
    
    # Teardown
    db.close()
    Base.metadata.drop_all(bind=engine)

@pytest.fixture(scope="module")
def client(test_db):
    app = FastAPI()
    app.include_router(router, prefix="/api")

    def override_get_db():
        try:
            yield test_db
        finally:
            pass # db closed in fixture

    app.dependency_overrides[get_db] = override_get_db
    
    with TestClient(app) as c:
        yield c
