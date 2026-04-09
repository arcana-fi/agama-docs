# What is Agama

Agama is the first native DeFi vault curator on Rayls, specializing in private institutional assets.

The Rayls ecosystem has billions in tokenized assets from regulated institutions: energy invoices from Nimofast, private credit from AmFi, corporate receivables from Santander, interbank settlements from Nuclea, and stablecoin liquidity via USDXP from XP Inc. These assets exist on-chain. The financing layer that lets investors access them and earn yield does not.

Agama fills that gap. We take assets already tokenized by our partners, deploy structured vaults via Lagoon Finance, and give institutional investors simple, on-chain access to yield.

We do not tokenize assets. We curate and structure the financing layer.

## How it works

```
RAYLS PRIVATE NODE                    RAYLS PUBLIC CHAIN

  Nimofast tokenizes               Agama NAV Oracle          Lagoon Vault
  invoices via Parfin               reads ZK-verified NAV          (ERC-7540)

  ┌──────────────┐     ZK-verified NAV     ┌──────────┐           ┌──────────────┐
  │  Tokenized   │────────────────▶│   NAV    │──────────▶│   agaINV     │
  │  invoices    │  (aggregated NAV only,     │  Oracle  │  push NAV │   vault      │
  │  (private)   │   no data)      └──────────┘           │              │
  └──────────────┘                                         │  Deposit     │
                                                           │  USDXP      │
  Debtor identities                                        │  ──────▶    │
  and amounts stay                                         │  Receive    │
  confidential                                             │  agaINV     │
                                                           └──────────────┘
                                                                  │
                                                           Token price
                                                           rises daily
                                                           as invoices
                                                           mature
```

The investor deposits stablecoins (USDXP, USDr) into an Agama vault. They receive a yield-bearing LP token (agaINV, agaYLD, etc.) whose price appreciates every day as the underlying portfolio generates returns. No distributions, no rebase, no manual actions. Hold the token and its value grows.

| Day | Action | Token balance | Token price |
|-----|--------|--------------|-------------|
| 1 | Deposit 1,000 USDXP | 1,000 agaINV | 1.0000 |
| 15 | Nothing | 1,000 agaINV | 1.0040 |
| 30 | Nothing | 1,000 agaINV | 1.0080 |

Same mechanic as wstETH, sDAI, or USDY. Yield is embedded in the token price, not distributed periodically. The token can be used as collateral, transferred, or sold at any time at fair value. No tax event on each yield payment. Native DeFi composability.
