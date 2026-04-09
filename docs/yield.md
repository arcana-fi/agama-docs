# Yield Mechanics

## Where the yield comes from

The yield is real. It comes from the discount spread on trade finance receivables, not from token emissions or incentive programs.

When a fuel distributor buys energy commodities on 60-day credit terms, the resulting invoice is purchased by the vault at a discount. The difference between the purchase price and the face value at maturity is the yield.

```
Face value:       $100,000
Purchase price:   $97,000
Discount:         3%
Maturity:         60 days
Annualized yield: ~18%
```

This is the oldest form of finance. Trade receivables have existed for centuries. The innovation is not the yield source — it is putting it on-chain with privacy, ZK verification, and composable vault tokens.

## NAV accrual

The vault NAV increases linearly as invoices approach maturity. The NAV oracle computes the current value of each invoice based on its accrual factor.

```
NAV(t) = Σ [purchase_price_i + (face_value_i - purchase_price_i) × accrual_factor_i]

accrual_factor = (t - t_purchase) / (t_maturity - t_purchase)

Example:
  Invoice purchased at $97,000 on day 0
  Face value $100,000, maturity 30 days

  Day 10:  accrual = 10/30 = 0.333  →  value = $98,000
  Day 20:  accrual = 20/30 = 0.667  →  value = $99,000
  Day 30:  accrual = 1.0            →  value = $100,000
```

The portfolio contains multiple invoices at different stages of maturity. As some invoices mature and pay out, new ones enter the vault. The yield is continuous and permanent.

## NAV update cycle

The vault NAV is updated daily. Between updates, deposits are queued via the ERC-7540 async flow and settled at the next NAV cycle.

```
  Investor              Vault (Lagoon)          NAV Oracle
     │                       │                       │
     │  1. Request deposit   │                       │
     │  (USDXP)              │                       │
     │──────────────────────▶│                       │
     │                       │  funds held in silo   │
     │                       │                       │
     │                       │  2. Push new NAV      │
     │                       │◀──────────────────────│
     │                       │                       │
     │                       │  3. Settle pending    │
     │                       │  deposits at new      │
     │                       │  share price          │
     │                       │                       │
     │  4. Claim shares      │                       │
     │  (agaINV)             │                       │
     │◀──────────────────────│                       │
     │                       │                       │
```

This is forward pricing: the share price is determined after the deposit, not before. No front-running is possible.
