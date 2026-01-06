# Stage 1: Build Frontend
FROM node:20-alpine as frontend_builder
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Stage 2: Backend
FROM python:3.12-slim-bookworm

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

WORKDIR /app

# Copy backend dependencies
COPY backend/pyproject.toml backend/uv.lock ./

# Sync dependencies
RUN uv sync --frozen

# Copy backend code
COPY backend/ .

# Copy frontend build artifacts to static directory to be served by FastAPI
COPY --from=frontend_builder /app/frontend/dist ./static

# Expose port
EXPOSE 3000

# Run
CMD ["sh", "-c", "uv run python -m app.seed && uv run uvicorn main:app --host 0.0.0.0 --port ${PORT:-10000}"]
