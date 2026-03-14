# Access Layer Server

This folder contains the backend API for Access Layer.

The server is the off-chain layer for the product. It should handle the parts of the marketplace that do not need to live inside Stellar smart contracts, while coordinating with the client and contracts as the product grows.

## Purpose

The server will be responsible for:

- creator and user profile management
- auth and session-related flows
- creator metadata and perk definitions
- indexing contract activity for faster reads
- notifications, analytics, and moderation workflows
- access checks for gated off-chain content

## Tech

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL

## Current state

- Express app bootstrap exists in [src/app.ts](./src/app.ts)
- common backend middleware is already scaffolded
- the codebase still contains template-era modules and labels that should be adapted to Access Layer over time

## API direction

As Access Layer evolves, the server will likely expose endpoints for:

- creators
- wallets
- key ownership summaries
- gated resources
- activity feeds
- admin or moderation tools

## Environment

Typical variables expected by the server include:

```env
DATABASE_URL=
PORT=3000
NODE_ENV=development
```

Additional mail, auth, and third-party variables may be required depending on which modules remain from the template and which are replaced.

## Commands

```bash
npm install
npm run dev
```

If the template already provides build or lint scripts, you can run them in this folder as needed.

