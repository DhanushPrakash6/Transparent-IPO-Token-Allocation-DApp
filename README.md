# TrueShare - Transparent IPO Token Allocation dApp

A Polkadot-native application that ensures fair and verifiable token allocations using on-chain randomness, open algorithms, and governance.

## Monorepo Structure
- `chain/` — Substrate node with custom `allocation_manager` pallet
- `offchain/` — Off-chain service for aggregation and Merkle proof generation
- `frontend/` — Next.js web app for users and projects

## Setup

### Chain
```bash
cd chain
cargo build --release
./target/release/node-template --dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Offchain
```bash
cd offchain
npm install
node src/index.js
```
