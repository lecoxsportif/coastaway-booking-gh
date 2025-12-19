from app.api import router
from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()
app.include_router(router, prefix="/api")

client = TestClient(app)

def test_read_rooms():
    response = client.get("/api/rooms")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) > 0
    assert "name" in data[0]

def test_read_amenities():
    response = client.get("/api/amenities")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) > 0
    assert "title" in data[0]

def test_read_restaurant():
    response = client.get("/api/restaurant")
    assert response.status_code == 200
    data = response.json()
    assert "features" in data
    assert "highlights" in data

def test_create_booking():
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "phone": "+1234567890",
        "roomType": "Odopa",
        "checkIn": "2024-01-01",
        "checkOut": "2024-01-05",
        "guests": 2,
        "message": "Testing"
    }
    response = client.post("/api/bookings", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["message"] == "Booking Request Received!"
    assert "id" in data
