# Architecture

## Rayls three-layer system

Agama is built on top of the Rayls architecture, which separates private institutional execution from public DeFi rails.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   LAYER 1 — PRIVACY NODES                                          │
│                                                                     │
│   Institutional assets tokenized here                               │
│   Debtor identities, amounts → confidential                        │
│   Enygma conceals transaction data between institutions                                  │
│   Gas: $RLS                                                         │
│                                                                     │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                     Agama Sidecar generates ZK proof
                     (verified on-chain, no invoice data crosses)
                           │
┌──────────────────────────┼──────────────────────────────────────────┐
│                          │                                          │
│   LAYER 2 — PRIVATE NETWORKS                                       │
│                                                                     │
│   Settlement between institutions                                   │
│   Nimofast ↔ Agama ↔ Santander                                     │
│   Gas: $RLS                                                         │
│                                                                     │
└──────────────────────────┼──────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   LAYER 3 — PUBLIC CHAIN (live April 30, 2026)                     │
│                                                                     │
│   ┌─────────────────┐    ┌──────────────────┐                      │
│   │  Agama NAV      │───▶│  Lagoon Vault    │                      │
│   │  Oracle         │    │  (ERC-7540)      │                      │
│   │                 │    │                  │                       │
│   │  Reads Enygma   │    │  agaINV token    │                      │
│   │  ZK proof       │    │  Async deposits  │                      │
│   │  Pushes NAV     │    │  KYC whitelist   │                      │
│   └─────────────────┘    └──────────────────┘                      │
│                                  │                                  │
│   Gas: USDr (USD-backed)         │                                  │
│   USDXP, USDT settle here       │                                  │
│   State roots → Ethereum L1     ▼                                  │
│                          ┌───────────────┐                         │
│                          │  Investors    │                          │
│                          │              │                           │
│                          │  agama.financial│                          │
│                          │  Lagoon app  │                           │
│                          └───────────────┘                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

For Agama: the assets live on Privacy Nodes (layer 1). The vaults and LP tokens live on the Public Chain (layer 3). The NAV oracle is the bridge between the two.

## What lives where

| Layer | Data | Visibility |
|-------|------|------------|
| Privacy Node | Invoice metadata, debtor identity, amounts, payment history | Only the originator (Nimofast) |
| Bridge | Agama Sidecar generates ZK proof, aggregated risk score | The proof is public, the inputs are not |
| Public Chain | Vault token (agaINV), share price, NAV, deposit/withdrawal history | Everyone |

## Gas management

| Chain | Gas token | Who pays |
|-------|-----------|----------|
| Public Chain (vaults, deposits, withdrawals) | USDr (Rayls native USD stablecoin) | Agama + investors |
| Privacy Nodes (invoice tokenization) | $RLS or fiat OTC | Nimofast / Parfin |
| Bridge (private → public) | $RLS | Rayls protocol |

Agama only manages gas on the Public Chain in USDr. The private chain gas costs are the responsibility of the asset originator (Nimofast) and the Rayls infrastructure (Parfin).
