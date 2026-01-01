from sqlalchemy import Column, Integer, String, Float, JSON, Text, Boolean
from .database import Base

class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    capacity = Column(Integer)
    image = Column(String)
    features = Column(JSON)

class Amenity(Base):
    __tablename__ = "amenities"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    icon = Column(String)

class RestaurantFeature(Base):
    __tablename__ = "restaurant_features"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    icon = Column(String)

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String)
    roomType = Column(String) # Matching frontend/schema field name for simplicity
    checkIn = Column(String)  # Storing as string for simplicity, matching schema
    checkOut = Column(String)
    guests = Column(Integer)
    message = Column(String, nullable=True)
