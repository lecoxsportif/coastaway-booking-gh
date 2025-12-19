.PHONY: install run test clean

install:
	uv sync

run:
	uv run uvicorn main:app --host 0.0.0.0 --port 3000 --reload

test:
	uv run pytest

clean:
	rm -rf __pycache__
	rm -rf .pytest_cache
	find . -type d -name "__pycache__" -exec rm -rf {} +
