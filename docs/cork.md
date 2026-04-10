---
title: Agama Documentation
---
# Cork Protocol

Cork is not depeg insurance. Cork solves **duration risk**, the real blocker for RWA looping. This is how Avantgarde Finance uses Cork in their Protected Loops strategy.

## The duration risk problem

```
  agaNMF has 30-90 day          Lending market cannot
  redemption window       ───▶  liquidate quickly
                                       │
                                       ▼
                                Lender refuses agaNMF
                                as collateral
                                       │
                                       ▼
                                Looping impossible
```

A lending market needs to be able to liquidate collateral quickly if a borrower defaults. agaNMF has a 30-90 day redemption window. No lending market will accept an asset it cannot exit for up to three months.

## How Cork solves it

Cork Swap Tokens (cST) give the right to exchange agaNMF for USDXP instantly, at any time, regardless of the redemption queue.

```
  Lender sees agaNMF as collateral
  Can I exit if borrower defaults?

  WITHOUT CORK                       WITH CORK cST
  ────────────                       ─────────────
  No. 30-90 day wait                Yes. instant swap
  Refuse collateral                  via Cork Pool
                                           │
                                           ▼
                                     Accept agaNMF
                                     as collateral
                                           │
                                           ▼
                                     Looping enabled
```

For the lender: they accept agaNMF as collateral because if the borrower defaults, they can exit instantly via the cST Cork swap. Duration risk eliminated. Collateral acceptable. Looping possible.

## How Avantgarde uses Cork

Avantgarde deploys Protected Loops, looping vaults where Cork Pool provides instant exit liquidity for illiquid RWA collateral. The lender (Morpho) accepts the RWA token as collateral because Cork guarantees exit liquidity. Agama follows the same model on Rayls once a native lending market becomes available.

## Cork Pool structure

A Cork Pool pairs a Collateral Asset (USDXP) with a Reference Asset (agaNMF). When LPs deposit USDXP, the pool mints two tokens:

| Token | Role |
|-------|------|
| cPT (Cork Principal Token) | Represents the LP's claim on their principal. Redeemable at expiry |
| cST (Cork Swap Token) | Gives the right to swap agaNMF → USDXP instantly before expiry |

The cST price is a live, public measure of perceived risk on agaNMF. If the market trusts the invoices, cST is cheap (~1-2%). If risk increases, cST price rises. This creates a transparent risk signal even though the underlying assets are private.

## Agama deployment plan

Agama will deploy the first Cork Pool on Rayls, pairing agaNMF (reference asset) with USDXP (collateral asset). This is a V2 feature, dependent on a Rayls-native lending market becoming available.

**Bootstrap problem and solution.** The Cork Pool needs USDXP liquidity from LPs before looping is viable. Without LPs, there are no cST tokens, and without cST the lending market will not accept agaNMF as collateral.

Agama bootstraps the Cork Pool in three steps:

1. Agama seeds the initial pool with protocol-owned USDXP from performance fees accumulated during V1. This provides the minimum viable liquidity.

2. Early LPs receive boosted yield: they earn the cPT return (principal back at expiry) plus a share of the cST premiums paid by loopers. At the target agaNMF yield of 8-16%, even a small cST premium (1-2%) generates attractive returns for pool LPs.

3. Once the pool has sufficient depth, loopers can buy cST and begin Protected Loops. Each looper paying cST premium feeds the LP yield, creating a self-reinforcing cycle.

The minimum viable pool size depends on the target looping volume. For the first agaNMF loops at V2, an initial pool of 500k-1M USDXP is sufficient to support 2-5M in looped positions.
