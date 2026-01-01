def test_full_booking_flow(client):
    # 1. Verify Rooms exist (seeded data)
    response = client.get("/api/rooms")
    assert response.status_code == 200
    rooms = response.json()
    assert len(rooms) > 0
    assert rooms[0]["name"] == "Odopa"

    # 2. Create a Booking
    payload = {
        "name": "Integration Tester",
        "email": "int@test.com",
        "phone": "+999000111",
        "roomType": "Odopa",
        "checkIn": "2024-12-01",
        "checkOut": "2024-12-05",
        "guests": 2,
        "message": "Integration test booking"
    }
    response = client.post("/api/bookings", json=payload)
    assert response.status_code == 201
    result = response.json()
    assert result["message"] == "Booking request received successfully"
    booking_id = result["id"]

    # 3. Verify Booking Persisted via GET
    response = client.get("/api/bookings")
    assert response.status_code == 200
    bookings = response.json()
    
    # Check if our booking is valid
    found_booking = None
    for b in bookings:
        if str(b["id"]) == str(booking_id):
            found_booking = b
            break
    
    assert found_booking is not None
    assert found_booking["name"] == "Integration Tester"
    assert found_booking["email"] == "int@test.com"
    assert found_booking["roomType"] == "Odopa"

def test_data_integrity(client):
    # Verify amenities and restaurant features seeded correctly
    resp_amenities = client.get("/api/amenities")
    assert resp_amenities.status_code == 200
    assert len(resp_amenities.json()) > 0

    resp_restaurant = client.get("/api/restaurant")
    assert resp_restaurant.status_code == 200
    data = resp_restaurant.json()
    assert len(data["features"]) > 0
    assert len(data["highlights"]) > 0
