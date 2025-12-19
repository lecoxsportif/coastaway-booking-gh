from fastapi import FastAPI
from app.api import router

app = FastAPI(
    title="Coastaway Booking API",
    description="API for the Coastaway Booking application, serving room data, amenities, and handling bookings.",
    version="1.0.0"
)

app.include_router(router, prefix="/api")

@app.get("/")
def read_root():
    from fastapi.responses import RedirectResponse
    return RedirectResponse(url="/docs")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=True)
