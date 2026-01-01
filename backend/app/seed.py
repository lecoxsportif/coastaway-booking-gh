from app.database import SessionLocal, engine, Base
from app import models, data

def seed_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    # Check if data already exists to avoid duplicates
    if db.query(models.Room).first():
        print("Database already seeded.")
        return

    print("Seeding database...")

    # Seed Rooms
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

    # Seed Amenities
    for amenity_data in data.amenities:
        amenity = models.Amenity(
            title=amenity_data.title,
            description=amenity_data.description,
            icon=amenity_data.icon
        )
        db.add(amenity)

    # Seed Restaurant Features
    # Note: data.restaurant_info is a Pydantic model (RestaurantInfo), accessed via dot notation
    for feature_data in data.restaurant_info.features:
        feature = models.RestaurantFeature(
            title=feature_data.title,
            description=feature_data.description,
            icon=feature_data.icon
        )
        db.add(feature)

    db.commit()
    db.close()
    print("Seeding complete.")

if __name__ == "__main__":
    seed_db()
