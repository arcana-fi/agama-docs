---
title: Agama Documentation
---
# Oracle Network

The NAV Oracle is not just a technical component of agaNMF. It is the core of Agama's long-term business.

Every Rayls institutional partner. Nimofast, Santander, Nuclea, AmFi. has assets sitting on their Privacy Node that generate zero yield for DeFi investors. For those assets to be accessible, something has to read the private data and publish a verified NAV on the public chain. That something is the Agama Oracle Sidecar. Without it, private assets remain locked and invisible. With it, they become financeable.

Agama deploys the sidecar at Nimofast in V1 to prove the concept. In V3, the goal is to deploy it at every institutional partner on Rayls. At that point, Agama is no longer a vault curator. It is the infrastructure layer that connects private institutional credit to public DeFi. on every Privacy Node in the Rayls ecosystem.

## The problem Agama solves at infrastructure level

Rayls has solved the privacy problem for institutions. Assets can be tokenized on a Privacy Node with debtor identities and amounts fully concealed. But privacy creates a new problem: how does a public DeFi vault read the value of an asset it cannot see?

```
PRIVACY NODE (Nimofast)
┌─────────────────────────────────────┐
│  Invoice #1: [ENCRYPTED]           │
│  Invoice #2: [ENCRYPTED]           │
│  Invoice #3: [ENCRYPTED]           │
│  Total NAV:  ???                   │
└──────────────────┬──────────────────┘
                   │
                   │  Public chain cannot read this.
                   │  A DeFi vault cannot price
                   │  what it cannot see.
                   │  The asset is stuck.
                   │
                   ▼
PUBLIC CHAIN
┌─────────────────────────────────────┐
│  agaNMF vault                       │
│  Share price: ???                   │
│  Cannot update without NAV          │
└─────────────────────────────────────┘
```

Without a bridge, the entire private asset ecosystem on Rayls has no access to DeFi liquidity. This is not a Nimofast problem. It is a structural problem for every institution on Rayls.

## The Oracle Sidecar

Agama builds and maintains a software process. the Oracle Sidecar. that runs alongside each institution's Privacy Node. The institution runs it. Agama owns the code.

```
PRIVACY NODE (Nimofast)
┌──────────────────────────────────────────────────────┐
│                                                      │
│   Invoice tokens (Enygma encrypted)                  │
│                                                      │
│   ┌──────────────────────────────────────────────┐   │
│   │  AGAMA ORACLE SIDECAR                        │   │
│   │                                              │   │
│   │  1. connector/enygma_client.go         │   │
│   │     Reads balances via view key              │   │
│   │     Decrypts locally                         │   │
│   │                                              │   │
│   │  2. calculator/nav_circuit.go                 │   │
│   │     Computes NAV per invoice                 │   │
│   │     Linear accrual + risk parameters         │   │
│   │                                              │   │
│   │  3. publisher/onchain_relay.go               │   │
│   │     Generates ZK proof via gnark                │   │
│   │     Submits (NAV, TrancheNAV, π) to AgamaOracle         │   │
│   └──────────────────────────────────────────────┘   │
│                                                      │
└────────────────────────┬─────────────────────────────┘
                         │
                         │  ZK proof π + NAV + tranching
                         │  (verified NAV + tranching —
                         │   no invoice data crosses)
                         │
                         ▼
PUBLIC CHAIN
┌──────────────────────────────────────────────────────┐
│                                                      │
│   IAgamaOracle smart contract                        │
│   Receives ZK proof, verifies on-chain via AgamaVerifier             │
│   Updates Lagoon vault share price                   │
│   agaNMF price rises as invoices mature              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

What crosses the bridge: only the aggregated NAV. No invoice details, no debtor names, no individual amounts.

What stays private: everything on the Privacy Node. The sidecar decrypts data locally using the view key, computes the NAV, and only publishes the final number.

## Why this is the real moat

The vault curator fees. 10% performance fee, 5bps curation at scale. are the V1 business. They are real but not defensible at scale. Any well-capitalized team can build a competing vault on Lagoon.

The oracle sidecar is different.

```
To compete with Agama's vault:

  Sign a commercial agreement with Nimofast    possible but takes months
  Get authorized on their Privacy Node         possible but requires trust
  Build the oracle sidecar from scratch        6+ months of development
  Convince Nimofast to run a second sidecar    why would they?
  Rebuild the entire bridge infrastructure     who does this for one vault?
```

Once the sidecar is running at Nimofast, replacing it requires rebuilding everything Agama built. The switching cost is structural, not contractual. No non-compete clause needed.

At V3, when the sidecar runs at five or more institutions simultaneously, any new vault curator that wants to access Rayls private assets must use the Agama Oracle Network to read the NAV. Agama takes fees on every third-party vault.

## V3 deployment plan

The goal is to deploy the Oracle Sidecar at every major institutional partner on Rayls. Each deployment is one more institution that is structurally dependent on Agama to connect its private assets to DeFi liquidity.

```
V1. April 2026
  Nimofast (LNG energy invoices)
  1 node, 1 asset type
  Prove the sidecar works end-to-end

V2. 6-12 months post-mainnet
  Santander Brazil (trade finance, corporate invoices)
  2 nodes, 2 asset types
  First multi-originator oracle feed

V3. 12-24 months
  Nuclea (interbank receivables)
  AmFi (private credit)
  B3 Digitas (fixed income)
  5+ nodes, 5+ asset types
  Agama becomes the reference oracle infrastructure
  for every Rayls private asset
```

| Institution | Asset type | Vault | Node status |
|-------------|-----------|-------|-------------|
| Nimofast | LNG energy invoices | agaNMF | V1. deploy April 30 |
| Santander Brazil | Trade finance, corporate invoices | agaSAN, agaCORP | V2 |
| Nuclea | Interbank receivables, boletos | agaNUC | V3 |
| AmFi | Private credit | agaPC | V3 |
| B3 Digitas | Fixed income | agaFI | V3 |

## Third-party curator fees

Once Agama operates five or more oracle nodes, the network becomes commercially viable as infrastructure. Any new vault curator that wants to launch a vault on a Rayls private asset must use the Agama Oracle Network to price the NAV.

```
NEW VAULT CURATOR wants to launch a vault
on Nimofast invoices or Santander trade finance

  Option A: Build their own sidecar
    months of development
    commercial negotiation with originator
    originator runs a second node
    expensive, slow, uncertain

  Option B: Use Agama Oracle Network
    instant access to verified NAV feed
    oracle fees to Agama
    launch in weeks
```

Oracle fee structure (V3):

| Usage | Fee |
|-------|-----|
| NAV feed subscription (per vault) | Flat monthly fee |
| Settlement event | Per-transaction micro-fee |
| Custom asset integration | One-time setup fee |

This is a recurring revenue stream independent of Agama's own vault AUM. Even if Agama stops curating vaults entirely, the oracle network generates fees from every third-party vault that reads private asset NAV through its nodes.

## The comparison

```
Chainlink    oracle for public price data
             anyone can run a node
             data is public, anyone can verify
             moat is network effect and reputation

Agama        oracle for private asset NAV
             only the sidecar with the view key can read the data
             the data is confidential by design
             moat is structural. not just reputation
```

The key difference: Chainlink's data is publicly available. Anyone can verify a price by checking multiple sources. Agama's data is not publicly available. The invoice amounts and debtor identities exist only on the Privacy Node. The only way to read them is to have the view key and run the sidecar. This makes the moat structural rather than reputational.

## Technical evolution V1 to V3

| Component | V1 | V2 | V3 |
|-----------|----|----|-----|
| NAV computation | Linear accrual, daily update | Real-time feed, multiple invoice types | Multi-source, ML risk scoring |
| Proof model | gnark ZK proof (Groth16) with TrancheNAV | gnark ZK proof + real-time feed | gnark ZK proof + ML risk scoring + multi-source |
| Nodes | 1 (Nimofast) | 2-3 (Nimofast + Santander) | 5+ (full Rayls ecosystem) |
| Third-party access | None | API preview | Full oracle network with fee structure |
| Security | gnark ZK proof, daily circuit breaker | Automated monitoring, 6h staleness | Decentralized validation, multi-relayer |

The gnark ZK proof is deployed from V1. V3 extends it with ML risk scoring integrated into the circuit and multi-source feeds from multiple Privacy Nodes simultaneously.

## The endgame

```
TODAY
  Agama builds the sidecar at Nimofast
  agaNMF goes live on Lagoon
  Investors earn 8-12% APY on LNG energy invoices

V3
  Agama Oracle Network runs at 5+ institutions
  Every private asset on Rayls is priced through Agama
  New curators pay oracle fees to launch on Rayls private assets
  Agama is the infrastructure layer, not just a curator

V4
  agaUSD is backed by the entire oracle network
  Every private asset flowing through an Agama Node
  contributes to the synthetic dollar backing
  The oracle network is the collateral base
  for the first synthetic dollar with ZK confidentiality
```

The vault curator is the first product. The oracle network is the business.
