from fastapi import FastAPI
from app.api import router

app = FastAPI(
    title="Coastaway Booking API",
    description="API for the Coastaway Booking application, serving room data, amenities, and handling bookings.",
    version="1.0.0"
)

app.include_router(router, prefix="/api")

# Serve static files (Frontend)
import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

# Ensure static directory exists (it will be populated in Docker)
static_dir = os.path.join(os.path.dirname(__file__), "static")
if os.path.exists(static_dir):
    app.mount("/assets", StaticFiles(directory=os.path.join(static_dir, "assets")), name="assets")

@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    # Verify if it's an API call that wasn't matched
    if full_path.startswith("api"):
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Not Found")

    # Serve index.html for all other routes (SPA)
    index_path = os.path.join(static_dir, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    
    return {"message": "Frontend not found. Please build the frontend."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=True)
