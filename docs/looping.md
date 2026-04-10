---
title: Agama Documentation
---
# RWA Looping

Looping is the strategy that multiplies effective yield by using vault tokens as collateral in a lending protocol, borrowing stablecoins, and re-depositing into the vault. It is the core value multiplier used by Avantgarde Finance via Cork Protocol.

## The problem

agaNMF has a 30-90 day redemption window. A lending market will not accept it as collateral because it cannot liquidate quickly if the borrower defaults. This is called duration risk, and it is the core barrier to scaling RWA looping.

Agama awaits the deployment of a native lending market on the Rayls Public Chain. Once available, three looping scenarios become possible.

## Scenario A. agaNMF loop on Rayls [V2. requires Rayls lending market]

Target: 20-25% net APY.

```
  ┌──────────────────────────────────────────────────────────────┐
  │                                                              │
  │   1. Deposit 100,000 USDXP                                  │
  │      └──▶ Receive agaNMF (12% APY base)                     │
  │                                                              │
  │   2. Supply agaNMF as collateral on lending market           │
  │      └──▶ Cork cST protects lender against duration risk    │
  │                                                              │
  │   3. Borrow 70,000 USDXP (LTV 70%)                         │
  │      └──▶ Re-deposit into agaNMF vault                      │
  │                                                              │
  │   4. Repeat steps 2-3 two more times                        │
  │                                                              │
  │   Final: ~230,000 agaNMF exposure                            │
  │          for 100,000 USDXP of capital                        │
  │                                                              │
  └──────────────────────────────────────────────────────────────┘
```

| Metric | Value |
|--------|-------|
| Initial capital | 100,000 USDXP |
| Effective exposure | ~230,000 USDXP |
| Gross yield | 230,000 × 12% = 27,600/yr |
| Borrow cost | 130,000 × 5.5% = 7,150/yr |
| Net yield | ~20,450/yr on 100,000 = **~20% APY** |

## Scenario B. agaYLD loop via Arbitrum [V2]

Target: 12-15% net APY. Available earlier than Scenario A because it does not require a Rayls-native lending market.

agaYLD contains public assets (BUIDL, USDY, TBILL, USDXP). no privacy required. Bridge natively from Rayls to Arbitrum (Orbit). Supply agaYLD as collateral on Morpho Arbitrum (already deployed). Borrow USDC. Bridge back to Rayls. Re-deposit into agaYLD. Arbitrum development grants available to bootstrap liquidity.

## Scenario C. USDXP basis trade [V2. requires Rayls lending market]

Target: 15-18% net APY.

agaNMF yield at 12%. USDXP borrow rate on Rayls lending market at ~5-6%. The spread of ~6-7% is captured at 2.5x leverage via Cork-protected looping.

## Comparison with existing RWA loops

| Protocol | Underlying | Base yield | Looped yield | Chain |
|----------|-----------|-----------|-------------|-------|
| Apollo ACRED | US institutional credit | 8% | ~16% | Ethereum (Morpho) |
| PRIME | US home equity credit | 8% | ~24% | Solana (Drift) |
| Ondo USDY | Tokenized T-bills | 5% | ~10% | Ethereum |
| **Agama agaNMF** | **Brazilian energy invoices** | **8-12%** | **~20-25%** | **Rayls** |
