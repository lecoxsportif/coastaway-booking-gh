export interface Room {
    id: number;
    name: string;
    description: string;
    price: number;
    capacity: number;
    image: string;
    features: string[];
}

export interface Amenity {
    title: string;
    description: string;
    icon: string;
}

export interface RestaurantFeature {
    title: string;
    description: string;
    icon: string;
}

export interface RestaurantInfo {
    features: RestaurantFeature[];
    highlights: string[];
}

export interface BookingRequest {
    name: string;
    email: string;
    phone: string;
    roomType: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    message?: string;
}

export interface BookingResponse {
    message: string;
    id: string;
}

const API_BASE = '/api';

export const fetchRooms = async (): Promise<Room[]> => {
    const response = await fetch(`${API_BASE}/rooms`);
    if (!response.ok) {
        throw new Error('Failed to fetch rooms');
    }
    return response.json();
};

export const fetchAmenities = async (): Promise<Amenity[]> => {
    const response = await fetch(`${API_BASE}/amenities`);
    if (!response.ok) {
        throw new Error('Failed to fetch amenities');
    }
    return response.json();
};

export const fetchRestaurantInfo = async (): Promise<RestaurantInfo> => {
    const response = await fetch(`${API_BASE}/restaurant`);
    if (!response.ok) {
        throw new Error('Failed to fetch restaurant info');
    }
    return response.json();
};

export const createBooking = async (booking: BookingRequest): Promise<BookingResponse> => {
    const response = await fetch(`${API_BASE}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
    });
    if (!response.ok) {
        throw new Error('Failed to create booking');
    }
    return response.json();
};
