FROM python:3.12-slim-bookworm

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY pyproject.toml uv.lock ./

# Sync dependencies
# We use --frozen to ensure we respect the lockfile
RUN uv sync --frozen

# Copy the application code
COPY . .

# Expose port
EXPOSE 3000

# Run the application
CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3000"]
