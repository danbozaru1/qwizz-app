# Qwizz - Real-time Competitive Trivia Game

## Overview

Qwizz is a real-time competitive trivia game built with Angular 20 (frontend) and NestJS (backend). Players compete in 2-4 player matches with speed-based scoring and latency compensation.

## Tech Stack

- **Frontend:** Angular 20, standalone components, zoneless change detection, NgRx, WebSocket
- **Backend:** NestJS, PostgreSQL, TypeORM, WebSocket
- **Monorepo:** npm workspaces
- **Code Quality:** ESLint, Prettier
- **Testing:** Jest, Cypress

## Project Structure

```
qwizz-app/
├── frontend/          # Angular 20 application
├── backend/           # NestJS application
├── docker/            # Docker configuration
├── scripts/           # Utility scripts
├── shared/            # Shared types (future)
└── .prettierrc         # Shared Prettier config
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Install dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### Development

```bash
# Start frontend (localhost:4200)
cd frontend && npm run start

# Start backend (localhost:3000)
cd backend && npm run start:dev
```

### Code Quality

```bash
# Lint all code
npm run lint

# Fix linting issues
npm run lint:fix

# Check formatting
npm run format:check

# Auto-format code
npm run format
```

### Build

```bash
# Build frontend
cd frontend && npm run build

# Build backend
cd backend && npm run build
```

## Project Phases

- **QWZ-0:** Project Foundation & Monorepo Setup ✓
- **QWZ-1:** Shared TypeScript Types & Database Schema
- **QWZ-2:** Docker Configuration
- **QWZ-3:** Authentication & Guest User System
- **QWZ-4:** Matchmaking System
- **QWZ-5:** Game Engine & Gameplay
- **QWZ-6:** TBD

## Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [Epics & User Stories](https://github.com/danbozaru1/qwizz-docs)

## License

UNLICENSED
