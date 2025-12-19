from typing import List, Optional
from pydantic import BaseModel, EmailStr

class Room(BaseModel):
    id: int
    name: str
    description: str
    price: float
    capacity: int
    image: Optional[str] = None
    features: List[str]

class Amenity(BaseModel):
    title: str
    description: str
    icon: str

class RestaurantFeature(BaseModel):
    title: str
    description: str
    icon: str

class RestaurantInfo(BaseModel):
    features: List[RestaurantFeature]
    highlights: List[str]

class BookingRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    roomType: str
    checkIn: str  # Keeping as string for simplicity in mock, validation can be added later
    checkOut: str
    guests: int
    message: Optional[str] = None
