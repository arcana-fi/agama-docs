# Roadmap

## V1 — Curator on Lagoon (April 30, 2026)

Deploy agaINV on Rayls mainnet day one. Prove the concept with Nimofast. Build the NAV oracle.

| Component | Status |
|-----------|--------|
| NAV oracle (linear accrual + ZK proof validation) | Build |
| Lagoon curator setup (agaINV on Rayls Public Chain) | Configure |
| USDXP deposit flow | Integrate |
| USDr gas management | Integrate |
| Daily settlement cycle trigger | Build |
| agama.finance frontend | Build |
| KYC whitelist via Lagoon | Manual V1 |
| Nimofast onboarding (first invoice batch) | In progress |

**Target: 1M AUM**

## V2 — Lending Market + RWA Looping (6-12 months)

Dependent on a native lending market deploying on the Rayls Public Chain.

| Component | Status |
|-----------|--------|
| Cork Pool agaINV/USDXP on Rayls | Deploy when lending market available |
| Protected Loop Vault agaINV | Build |
| agaYLD looping via Arbitrum bridge | Available earlier |
| agaTRD vault (Santander pipeline) | Build |
| NAV oracle V2 (real-time feed) | Build |
| Risk monitoring (circuit breakers, LTV alerts) | Build |

**Target: 10M AUM**

## V3 — Independent Protocol (12-24 months)

Exit Lagoon dependency. Build native vault infrastructure for private institutional assets on Rayls.

| Component | Description |
|-----------|-------------|
| AgamaVault.sol | Native ERC-7540. Audited. Multi-asset support. Senior/junior tranching |
| AgamaOracle V3 | Real-time multi-source feed (Nimofast + Santander + Nuclea). ML risk scoring with ZK proof |
| AgamaRouter | Multi-stablecoin auto-routing (USDXP, USDr, USDT, bridged assets) |
| Credit Vaults | Agama-native lending infrastructure per originator |

**Target: 100M AUM**

## V4 — agaUSD Synthetic Dollar (24-36 months)

The first synthetic dollar backed by private credit with ZK confidentiality.

| Component | Description |
|-----------|-------------|
| agaUSD | Synthetic dollar. Mint 1:1 against USDXP. Backed by Credit Vaults (agaINV, agaTRD, agaCORP, agaREC). Senior priority on all vaults. Composable across Rayls DeFi |
| sagaUSD | Staked agaUSD. Absorbs first-loss risk. Earns the yield from Credit Vaults. Target 8-12% APY |
| Stability reserve | Protocol buffer before sagaUSD absorbs losses. Funded by a portion of performance fees. Target 3-5% of total TVL |
| $AGA token | Governance over Credit Vault parameters (which originators, which discounts, which allocations). Revenue sharing with stakers. Emission tied to TVL milestones, not aggressive initial farming |

### agaUSD capital stack

```
SENIOR — agaUSD (peg $1 guaranteed)
  Priority repayment from all Credit Vaults
  Protected by stability reserve
  Zero yield for holder
  Composable as collateral / gas across Rayls

JUNIOR — sagaUSD (staked agaUSD)
  First-loss buffer
  Earns Credit Vault yield (8-12% APY)
  Conversion price reduces if default occurs
  and stability reserve is exhausted

STABILITY RESERVE
  Protocol buffer
  Absorbs first before sagaUSD holders
  Target: 3-5% of total TVL
```

### agaUSD backing diversification

| Vault | Allocation | Duration |
|-------|-----------|----------|
| agaINV (Nimofast invoices) | 40% | 30-90 days |
| agaTRD (Santander trade finance) | 30% | 90-180 days |
| agaCORP (corporate invoices) | 20% | 30-90 days |
| agaREC (Nuclea receivables) | 10% | Short term |

### Why agaUSD vs Pareto USP

Pareto USP is backed by public private credit — borrowers like FalconX are visible on-chain. Any institution can see who borrows in the Credit Vaults.

agaUSD is backed by confidential private credit on Rayls. The debtors behind the invoices (Petrobras, Shell, energy distributors) remain concealed via Enygma ZK proofs. For an institution that does not want competitors to see its financing activity, agaUSD is the only synthetic dollar with end-to-end confidentiality.

**Target: 500M AUM**

## Echelon summary

```
1M    V1  agaINV live, NAV oracle, USDXP, Lagoon curator
10M   V2  Cork looping, agaYLD via Arbitrum, agaTRD
100M  V3  Independent protocol, multi-vault, tranching
500M  V4  agaUSD synthetic dollar, sagaUSD yield, $AGA token
```
