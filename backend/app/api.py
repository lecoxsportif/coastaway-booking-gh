from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from sqlalchemy.orm import Session
from . import schemas, models, data
from .database import get_db

router = APIRouter()

@router.get("/rooms", response_model=List[schemas.Room])
def get_rooms(db: Session = Depends(get_db)):
    return db.query(models.Room).all()

@router.get("/amenities", response_model=List[schemas.Amenity])
def get_amenities(db: Session = Depends(get_db)):
    return db.query(models.Amenity).all()

@router.get("/restaurant", response_model=schemas.RestaurantInfo)
def get_restaurant_info(db: Session = Depends(get_db)):
    features = db.query(models.RestaurantFeature).all()
    # Highlights are still static for now as they are simple strings in the mock data structure
    # and we didn't store them in a separate table. We can keep fetching them from data.py.
    return schemas.RestaurantInfo(
        features=features,
        highlights=data.restaurant_info.highlights
    )

@router.post("/bookings", status_code=status.HTTP_201_CREATED, response_model=schemas.BookingResponse)
def create_booking(booking: schemas.BookingRequest, db: Session = Depends(get_db)):
    db_booking = models.Booking(
        name=booking.name,
        email=booking.email,
        phone=booking.phone,
        roomType=booking.roomType,
        checkIn=booking.checkIn,
        checkOut=booking.checkOut,
        guests=booking.guests,
        message=booking.message
    )
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    
    return {"message": "Booking request received successfully", "id": str(db_booking.id)}

@router.get("/bookings", response_model=List[schemas.BookingRead])
def get_bookings(db: Session = Depends(get_db)):
    return db.query(models.Booking).all()
