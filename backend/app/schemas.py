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

    class Config:
        from_attributes = True

class Amenity(BaseModel):
    title: str
    description: str
    icon: str

    class Config:
        from_attributes = True

class RestaurantFeature(BaseModel):
    title: str
    description: str
    icon: str

    class Config:
        from_attributes = True

class RestaurantInfo(BaseModel):
    features: List[RestaurantFeature]
    highlights: List[str]

    class Config:
        from_attributes = True

class BookingRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    roomType: str
    checkIn: str  # Keeping as string for simplicity in mock, validation can be added later
    checkOut: str
    guests: int
    message: Optional[str] = None

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "phone": "+233 20 123 4567",
                "roomType": "Odopa",
                "checkIn": "2024-01-01",
                "checkOut": "2024-01-05",
                "guests": 2,
                "message": "Ground floor preferred"
            }
        }

class BookingResponse(BaseModel):
    message: str
    id: str

class BookingRead(BookingRequest):
    id: int

    class Config:
        from_attributes = True
