# Cork Protocol

Cork is not depeg insurance. Cork solves **duration risk** — the real blocker for RWA looping. This is how Avantgarde Finance uses Cork in their Protected Loops strategy.

## The duration risk problem

```
  agaINV has 30-90 day          Lending market cannot
  redemption window       ───▶  liquidate quickly
                                       │
                                       ▼
                                Lender refuses agaINV
                                as collateral
                                       │
                                       ▼
                                Looping impossible
```

A lending market needs to be able to liquidate collateral quickly if a borrower defaults. agaINV has a 30-90 day redemption window. No lending market will accept an asset it cannot exit for up to three months.

## How Cork solves it

Cork Swap Tokens (cST) give the right to exchange agaINV for USDXP instantly, at any time, regardless of the redemption queue.

```
  Lender sees agaINV as collateral
  Can I exit if borrower defaults?

  WITHOUT CORK                       WITH CORK cST
  ────────────                       ─────────────
  No — 30-90 day wait                Yes — instant swap
  Refuse collateral                  via Cork Pool
                                           │
                                           ▼
                                     Accept agaINV
                                     as collateral
                                           │
                                           ▼
                                     Looping enabled
```

For the lender: they accept agaINV as collateral because if the borrower defaults, they can exit instantly via the cST Cork swap. Duration risk eliminated. Collateral acceptable. Looping possible.

## How Avantgarde uses Cork

Avantgarde deploys Protected Loops — looping vaults where Cork Pool provides instant exit liquidity for illiquid RWA collateral. The lender (Morpho) accepts the RWA token as collateral because Cork guarantees exit liquidity. Agama follows the same model on Rayls once a native lending market becomes available.

## Cork Pool structure

A Cork Pool pairs a Collateral Asset (USDXP) with a Reference Asset (agaINV). When LPs deposit USDXP, the pool mints two tokens:

| Token | Role |
|-------|------|
| cPT (Cork Principal Token) | Represents the LP's claim on their principal. Redeemable at expiry |
| cST (Cork Swap Token) | Gives the right to swap agaINV → USDXP instantly before expiry |

The cST price is a live, public measure of perceived risk on agaINV. If the market trusts the invoices, cST is cheap (~1-2%). If risk increases, cST price rises. This creates a transparent risk signal even though the underlying assets are private.

## Agama deployment plan

Agama will deploy the first Cork depeg market on Rayls with an LP incentive program to bootstrap insurance liquidity. This is a V2 feature, dependent on a Rayls-native lending market becoming available.
