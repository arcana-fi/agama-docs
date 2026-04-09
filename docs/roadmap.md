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

## V3 — Oracle Network + Independent Protocol (12-24 months)

The real V3 is not just building our own vault protocol. It is deploying Agama Oracle Nodes at every Rayls institutional partner. The vault protocol is a consequence — once we control the oracle layer, every vault built on top has a structural advantage.

| Component | Description |
|-----------|-------------|
| Agama Oracle Network | Deploy the sidecar at Santander, Nuclea, AmFi, B3 Digitas. Each institution runs an Agama Node. Agama becomes the reference infrastructure for bridging private assets to public DeFi on Rayls |
| Third-party oracle fees | Any new curator wanting to launch a vault on a Rayls private asset must use the Agama oracle network. Oracle fees on every third-party vault |
| AgamaVault.sol | Native ERC-7540. Audited. Multi-asset support. Senior/junior tranching. Independent from Lagoon |
| AgamaOracle V3 | Real-time multi-source feed (Nimofast + Santander + Nuclea simultaneously). ML risk scoring with ZK proof |
| AgamaRouter | Multi-stablecoin auto-routing (USDXP, USDr, USDT, bridged assets) |

```
The real business at V3:

  Not curator fees (0.5% AUM) — that's the V1 business

  Oracle fees on every vault that reads private asset NAV
  through an Agama Node — that's the V3 business

  Chainlink model: own the software, institutions run the nodes
  Data is confidential → only Agama sidecar can read it
  Structurally non-replaceable
```

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
1M    V1  agaINV live, NAV oracle sidecar at Nimofast, Lagoon curator
10M   V2  Cork looping, agaYLD via Arbitrum, agaTRD
100M  V3  Oracle network at 5+ institutions, independent protocol,
          third-party oracle fees, the Chainlink of private credit
500M  V4  agaUSD synthetic dollar backed by the oracle network,
          sagaUSD yield layer, $AGA governance
```
