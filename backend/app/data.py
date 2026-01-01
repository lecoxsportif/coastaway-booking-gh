from .schemas import Room, Amenity, RestaurantInfo, RestaurantFeature

# Mock Data derived from frontend components

rooms = [
    Room(
        id=1,
        name="Odopa",
        description="Odopa means 'good love' in Twi. Odopa rooms are large with a four poster king-size bed. Odopa1 at $87 a night, boasts the best sea, garden and pool views at Afiki Beach House, plus a balcony overlooking the pool. Ododpa2 at $71 a night, boasts partial sea views and has no balcony. Odopa rooms are on the first floor of Afiki Beach House.",
        price=71.0,
        capacity=3,
        image="/assets/room-ocean.jpg",
        features=["Four Poster King-Size Bed", "Balcony (Odopa1 only)", "Sea, Garden & Pool Views (Odopa2 has partial views)", "Smart TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"]
    ),
    Room(
        id=2,
        name="Ahoto",
        description="Ahoto means 'to be in a state of peace' in Twi. The Ahoto rooms comes with a queen-size bed and great sea, garden and pool views. At $71 a night, Ahoto1 boasts a Juliet balcony and at $79 a night, Ahoto2, boasts a balcony with great views of the garden, pool and sea. Ahoto is on the first floor of Afiki Beach House.",
        price=71.0,
        capacity=2,
        image="/assets/room-ocean.jpg",
        features=["Queen-Size Bed", "Balcony (Juliet balcony to Ahoto1)", "Sea, Garden & Pool Views", "Smart TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"]
    ),
    Room(
        id=3,
        name="Hwebi",
        description="Hwebi means 'have a look' in Twi. Hwebi is a tastefully-designed room with village views and the sea beyond. Feel the sea breeze - watch life go by from your Hwebi balcony. Hwebi comes with a king-size bed. This room is on the first floor of Afiki Beach House.",
        price=69.0,
        capacity=3,
        image="/assets/room-garden.jpg",
        features=["King-Size Bed", "Balcony", "Village & Sea Views", "Smart TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"]
    ),
    Room(
        id=4,
        name="Ebusua",
        description="Ebusua means 'family' in Twi. Families of 5 need not be frustrated anymore! Ebusua comes with a double bed, a sofa bed and a bunk bed. This room is on the first floor of Afiki Beach House.",
        price=55.0,
        capacity=5,
        image="/assets/room-garden.jpg",
        features=["Double Bed", "Sofa Bed", "Bunk Bed", "Sleeps 5", "Digital TV", "Air Condition", "Refrigerator"]
    ),
    Room(
        id=5,
        name="Akyedi",
        description="Akyedi means 'gift' in Twi. All our Akyedi rooms are on the ground floor of Afiki Beach House. There are 4 Akyedi rooms: Akyedi1 comes with a king-size bed and a sofa bed. Akyedi2 comes with a king-size bed. Akyedi3 comes with a queen-size bed. Akyedi4 comes with a queen-size bed and sea views.",
        price=45.0,
        capacity=3,
        image="/assets/room-garden.jpg",
        features=["King-Size Bed (Akyedi 1 + 2)", "Queen-Size Bed (Akyedi 3 + 4)", "Ground Floor", "Air Condition", "Ceiling Fan", "Refrigerator (on request)"]
    )
]

amenities = [
    Amenity(title="Beach Access", description="Direct access to pristine beach with soft sand and Atlantic Ocean waters", icon="TreePalm"),
    Amenity(title="Swimming Pool", description="Designed by Tera Garden Design, surrounded by vibrant flowers and butterflies", icon="Waves"),
    Amenity(title="Full Body Massage", description="Head-to-toe massage in a tranquil setting to relieve stress and tension", icon="Handshake"),
    Amenity(title="Sip and Paint", description="Create beautiful masterpieces with our resident artist, Mikanda", icon="Paintbrush"),
    Amenity(title="African Drumming & Dancing", description="Drumming and dancing are deeply embedded in the Ghanaian tradition. Learn about the talking drum and its corresponding dance. This isn’t just a drumming lesson – it’s an immersion into history and culture. A lived experience like no other.", icon="Drum"),
    Amenity(title="Local Boat Rides", description="Join local fishermen for a thrilling boat ride across the sea", icon="Ship"),
    Amenity(title="Local Cooking", description="Our kitchen team will guide you in making your favourite Ghanaian dish then enjoy eating your creation.", icon="Utensils"),
    Amenity(title="Horse Riding", description="Nothing quite like a beach horse ride!", icon="PiggyBank")
]

restaurant_info = RestaurantInfo(
    features=[
        RestaurantFeature(title="Vegan Specialties", description="We specialize in vegan food with a great selection of plant-based options", icon="Leaf"),
        RestaurantFeature(title="Fresh Seafood", description="Chargrilled fresh seafood caught locally", icon="Fish"),
        RestaurantFeature(title="International Cuisine", description="Pizza, sandwiches, and international favorites", icon="Pizza"),
        RestaurantFeature(title="Ghanaian Dishes", description="Authentic fufu with goat light soup and local specialties", icon="Soup")
    ],
    highlights=[
        "Steak and caramelized onion sandwich",
        "Lentil and potato stew",
        "Pizza",
        "Chargrilled fresh seafood",
        "Fufu with goat light soup",
        "Freshly squeezed juices"
    ]
)
