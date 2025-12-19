from fastapi import APIRouter, HTTPException, status
from typing import List
from .models import Room, Amenity, RestaurantInfo, BookingRequest
from . import data

router = APIRouter()

@router.get("/rooms", response_model=List[Room])
def get_rooms():
    return data.rooms

@router.get("/amenities", response_model=List[Amenity])
def get_amenities():
    return data.amenities

@router.get("/restaurant", response_model=RestaurantInfo)
def get_restaurant_info():
    return data.restaurant_info

@router.post("/bookings", status_code=status.HTTP_201_CREATED)
def create_booking(booking: BookingRequest):
    # In a real app, we would save to database here
    # For now, just generate a mock ID and return success
    import uuid
    booking_id = str(uuid.uuid4())
    return {
        "message": "Booking Request Received!",
        "id": booking_id
    }
