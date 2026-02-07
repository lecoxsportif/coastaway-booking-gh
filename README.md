CoastAway Booking Platform



CoastAway Booking is a full-stack accommodation booking platform designed for small coastal retreat operators.
It enables guests to browse listings and make bookings while giving property owners a simple admin dashboard for availability management.

This repo contains:

Full frontend (React)

Full backend (Node/Express)

Database layer (Prisma + SQLite/Postgres)

Infrastructure & CI/CD

OpenAPI contract-first API development

End-to-end Dockerized environment

The project was built using AI-assisted workflows, ensuring a consistent and contract-driven process across all layers.

🧭 Table of Contents

Problem Description

AI-Assisted Development Workflow

Technologies & Architecture

Architecture Diagram

Frontend

Backend

OpenAPI Spec

Database Integration

Containerization

Integration Testing

Deployment

CI/CD

Reproducibility

Auto-Generated API Docs

Contributing

License

🚧 Problem Description

Small coastal retreats often rely on spreadsheets or messaging apps to coordinate bookings, which results in:

Double bookings

No shared availability calendar

No automation

Inefficiency for owners

Poor guest experience

CoastAway Booking solves this with:

A unified booking dashboard

Real-time availability

Full public guest-facing UI

Centralized admin tools

Database-backed reservation logic

Cloud deployment-ready system

🤖 AI-Assisted Development Workflow
✨ Tools Involved

AI was used throughout development using:

Lovable frontend Ai generation

Antigravity coding agent

Render cloud deployment

Auto-scaffolding unit and integration tests

Dockerfile and CI workflow generation

💡 Workflow Summary

Frontend requirements defined

OpenAPI contract auto-generated 

Backend handlers created to match the contract

DB schema generated based on model definitions

Integration tests scaffolded with AI assistance

Deployment pipeline produced

All AI output was manually reviewed and adjusted.

🏗 Technologies & Architecture
Frontend

React + TypeScript

Vite

React Query

TailwindCSS

Vitest + React Testing Library

Backend

Node.js

Express

Swagger UI for API docs

Database

Prisma ORM

PostgreSQL (production)

SQLite (dev/test)

Infrastructure

Docker

Docker Compose

GitHub Actions CI/CD

Cloud provider (Render/Fly.io/Netlify)

🗺 Architecture Diagram
                        ┌──────────────────────────┐
                        │        Frontend          │
                        │  React + TS + Zustand     │
                        └──────────────┬───────────┘
                                       │ REST API
                                       ▼
                        ┌──────────────────────────┐
                        │         Backend          │
                        │  Node.js + Express       │
                        │  OpenAPI-driven routes   │
                        └──────────────┬───────────┘
                                       │ Prisma ORM
                                       ▼
                        ┌──────────────────────────┐
                        │        Database          │
                        │ PostgreSQL / SQLite      │
                        └──────────────┬───────────┘
                                       │
                                       ▼
                      ┌──────────────────────────┐
                      │     Docker/CI/CD Stack   │
                      │  GitHub Actions + Render │
                      └──────────────────────────┘

🎨 Frontend
Features

Browse listings

Calendar-based availability view

Booking checkout flow

Admin dashboard

Client-side validation

Server state caching

Run Frontend
cd frontend
npm install
npm run dev

Frontend Tests
npm run test

🧩 Backend

Backend follows the OpenAPI spec exactly.

Features

Listing CRUD

Booking CRUD

Validation with Zod

Swagger UI

Error standardization

Run Backend
cd backend
npm install
npm run dev

Backend Tests
npm run test

📜 OpenAPI Spec

The entire API lives in:

/api/openapi.yaml


Used for:

Type generation

Backend route validation

Documentation (Swagger UI)

Integration tests

Generate client types:

npm run generate:api

🗄️ Database Integration
Supported Environments
Environment	Database
Development	SQLite
Testing	SQLite
Production	Postgres
Migrations
npx prisma migrate dev


Switch DB by editing .env:

DATABASE_URL="file:./dev.db"
# or
DATABASE_URL="postgresql://..."

🐳 Containerization

Run everything:

docker-compose up --build

Services

Frontend → http://localhost:5173

Backend → http://localhost:3000

Postgres → localhost:5432

🔌 Integration Testing

Located in:

/backend/tests/integration


Tests cover:

Booking workflows

Database read/write

Date logic

API contract compliance

Run integration tests:

npm run test:integration

☁️ Deployment

The app is deployed via cloud hosting:

Live URLs:

Frontend: https://coastaway-booking.yourdomain.com

Backend API: https://api.coastaway-booking.yourdomain.com

Deployment proof:

https://coastaway-booking.onrender.com

Public URLs

Build logs

CI/CD workflow artifacts

🔄 CI/CD

Configured via GitHub Actions:

Install deps

Lint

Run frontend tests

Run backend tests

Run integration tests

Build Docker images

Deploy on success

Workflow file:

.github/workflows/ci.yml

🔁 Reproducibility
1. Clone
git clone https://github.com/lecoxsportif/coastaway-booking-gh
cd coastaway-booking-gh

2. Add environment variables

Copy:

cp .env.example .env

3. Run manually

Frontend:

npm --prefix frontend run dev


Backend:

npm --prefix backend run dev

4. Run with Docker (recommended)
docker-compose up --build

5. Run all tests
npm run test:all
