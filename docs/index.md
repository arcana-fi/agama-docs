---
title: Agama Documentation
---
# What is Agama

Agama is the first native DeFi vault curator on Rayls. Our role is precise: take assets already tokenized by our partners, create structured vaults on top via Lagoon, and offer investors simple access with clear yield. We do not tokenize assets. We curate and structure the financing layer.

The Rayls ecosystem has billions in tokenized assets from regulated institutions: energy invoices from Nimofast, private credit from AmFi, corporate receivables from Santander, interbank settlements from Nuclea, and stablecoin liquidity via USDXP from XP Inc. These assets exist on-chain, but they are private by design. Debtor identities, invoice amounts, and counterparty data are commercially sensitive and must stay confidential.

The financing layer that lets investors earn yield on these assets without exposing the underlying data does not exist. Agama's NAV Oracle bridges this gap: it reads invoice data via view key, computes a ZK proof using gnark that proves the NAV and tranche breakdown (senior, mezzanine, junior) are correct without revealing individual invoice values, and publishes the verified TrancheNAV on-chain. Anyone can verify the proof independently. Investors see the yield and the risk profile. They never see the positions.

## How it works

```
  PRIVATE NODE              PUBLIC CHAIN

  Nimofast tokenizes        Agama Oracle           Lagoon Vault
  invoices via Parfin       generates ZK proof     (ERC-7540)

  ┌──────────────┐          ┌──────────────┐       ┌──────────────┐
  │  Tokenized   │  ZK proof│  NAV Oracle  │  NAV  │  agaNMF      │
  │  invoices    │─────────▶│              │──────▶│  vault       │
  │  (private)   │          │  Verified    │       │              │
  └──────────────┘          │  on-chain    │       │  USDXP in    │
                            └──────────────┘       │  agaNMF out  │
  Debtor identities                                └──────────────┘
  and amounts stay                                        │
  confidential                                     Token price rises
                                                   daily as invoices
                                                   mature
```

## The yield-bearing principle

All Agama vaults operate on the same model: the LP token appreciates in price every day. The investor does not receive yield in their wallet. Their token is simply worth more over time.

| Day | Action | Token balance | Token price |
|-----|--------|--------------|-------------|
| 1 | Deposit 1,000 USDXP | 1,000 agaNMF | 1.0000 |
| 15 | Nothing | 1,000 agaNMF | 1.0040 |
| 30 | Nothing | 1,000 agaNMF | 1.0080 |

Same mechanic as wstETH, sDAI or USDY. Yield is embedded in the token price, not distributed periodically.

This approach is ideal for institutions: no rebase, no tax event on every distribution, native DeFi composability. The token can be used as collateral, transferred, or sold at any time at fair value.

## Where the yield comes from

The yield is real. It comes from the discount spread on trade finance receivables, not from token emissions or incentive programs.

When a fuel distributor buys energy commodities on credit, the resulting invoice is purchased by the vault at a discount. The difference between the purchase price and the face value at maturity is the yield.

```
Face value:       $100,000
Purchase price:   $97,000
Discount:         3%
Maturity:         30 days

NAV accrues linearly:

  Day 0  :  $97,000
  Day 10 :  $98,000
  Day 20 :  $99,000
  Day 30 :  $100,000  ←  Nimofast repays. Vault captures the spread.

Invoices renew continuously. Yield is permanent.
```

This is the oldest form of finance. Trade receivables have existed for centuries. The innovation is not the yield source, it is putting it on-chain with privacy, ZK verification, and composable vault tokens.

## Investor access

| Channel | Description |
|---------|-------------|
| agama.finance | Native Agama frontend. Premium experience for institutional clients. Connects directly to Lagoon contracts deployed on Rayls. The Agama brand is visible at every step |
| Lagoon app | Native Lagoon interface. Agama vaults are automatically listed upon deployment on Lagoon. No additional development required. Targets DeFi power users already using Lagoon |
