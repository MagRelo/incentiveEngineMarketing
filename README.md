# IncentiveEngine

Smart contract toolkit that turns users into your growth team. Built with React, TypeScript, and Vite.

## Overview

IncentiveEngine is a collection of smart contract tools designed to help projects build sustainable growth through economic incentives. The toolkit includes:

### YieldToken

Create tokens with built-in economic incentives. Plug into a variety of yield protocols to encourage users to hold and use your token. Adjust the token's velocity with concepts such as staking rewards, demurrage, and more.

Use in conjunction with **ReferralTree** to create a positive feedback loop that aligns token holders with long-term project success.

### ReferralTree

Implements a multi-level referral program with automated reward distribution. Unlock viral growth by incentivizing your users to refer new users to your product. Users can build multi-level networks where referrers earn commissions on their network's activity, creating sustainable growth incentives for decentralized applications.

Use in conjunction with **YieldToken** to create a positive feedback loop that aligns token holders with long-term project success.

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.6.3
- **Build Tool**: Vite 6.0.1
- **Styling**: Tailwind CSS 4.1.18
- **Server**: Express 4.21.2 (for production static file serving)
- **Containerization**: Docker (multi-stage Alpine builds)

## Prerequisites

- Node.js (current version recommended)
- pnpm (package manager)
- Docker (for containerized deployment)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MagRelo/incentiveEngineMarketing.git
cd incentiveEngineMarketing
```

2. Install dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## Building

Build the production bundle:

```bash
pnpm run build
```

This creates an optimized production build in the `build/` directory.

## Deployment

### Docker Deployment

The project includes a multi-stage Dockerfile for efficient containerized deployment:

1. Build and push Docker image (production):

```bash
pnpm run build-prod
```

This command:

- Builds the production bundle with Vite
- Builds a Docker image for linux/amd64 platform
- Tags it as `magrelo/mattlovan`
- Pushes to Docker registry

2. Manual Docker build:

```bash
docker build . --platform linux/amd64 -t magrelo/mattlovan
```

3. Run the container:

```bash
docker run -p 8080:8080 magrelo/mattlovan
```

The server will start on port 8080 (configurable via `PORT` environment variable).

### Production Server

For production, serve the built files with Express:

```bash
pnpm run serve
```

The server serves static files from the `build/` directory with 1-year cache headers for optimal performance.

## Project Structure

```
src/
├── assets/          # SVG graphics and assets
│   ├── YieldTokenGraphic.tsx
│   └── ReferralTreeGraphic.tsx
├── pages/           # Page components
│   └── home.tsx     # Home page (if used)
├── App.tsx          # Main app component
└── index.tsx        # Entry point

build/               # Production build output
public/              # Static public assets (favicons, images, etc.)
server.js            # Express server for production
Dockerfile           # Multi-stage Docker build configuration
tailwind.config.js   # Tailwind CSS configuration
```

## Scripts

- `dev` - Start development server with Vite
- `build` - Build production bundle
- `serve` - Start production server (requires build first)
- `build-prod` - Build and deploy Docker image
- `ssh` - SSH to production server

## License

Private project - All rights reserved.
