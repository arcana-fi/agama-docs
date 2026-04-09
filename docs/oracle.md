# NAV Oracle

The NAV oracle is the core proprietary technology Agama builds. Everything else — vault shell, fees, KYC, reporting — is provided by Lagoon. The oracle is what makes Agama structurally non-replaceable.

## The problem: bridging private to public

For an invoice sitting on Nimofast's Privacy Node to generate yield in a public Lagoon vault, something has to bridge the gap between the two layers. Rayls calls this a relayer. Without it, the invoices stay locked in the Privacy Node — invisible, non-valorizable, non-existent for the public vault.

## The Agama Oracle Sidecar

Agama builds and maintains a software process — the Oracle Sidecar — that runs alongside the institution's Privacy Node. The institution (Nimofast) installs and runs it. Agama owns and maintains the code.

```
PRIVACY NODE NIMOFAST
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Invoices tokenized (Enygma encrypted)              │
│                                                     │
│  + AGAMA ORACLE SIDECAR                             │
│    (process running alongside the node)             │
│                                                     │
│    1. Reads invoice balances via view key            │
│    2. Computes NAV (linear accrual per invoice)      │
│    3. Signs the attestation                          │
│                                                     │
└───────────────────────┬─────────────────────────────┘
                        │
                        │  signed NAV attestation
                        │  (only the total NAV crosses,
                        │   no invoice data)
                        │
                        ▼
RAYLS PUBLIC CHAIN
┌─────────────────────────────────────────────────────┐
│                                                     │
│  IAgamaOracle smart contract                        │
│    receives the signed NAV                          │
│    updates the share price                          │
│    triggers Lagoon vault settlement                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Nimofast runs the sidecar. Agama owns, maintains, and updates it.

## What the sidecar software looks like

```
agama-oracle-node/
  ├── connector/
  │   └── privacy_node_client.ts
  │       Connects to the Privacy Node via Rayls API
  │       Authenticates with view key
  │       Reads invoice balances (decrypted locally)
  │
  ├── calculator/
  │   └── nav_engine.ts
  │       Receives decrypted amounts
  │       Computes total NAV (linear accrual)
  │       Applies risk parameters
  │
  ├── publisher/
  │   └── onchain_relay.ts
  │       Signs the NAV attestation
  │       Sends the transaction to Public Chain
  │       Calls IAgamaOracle.updateNAV()
  │
  └── config/
      └── nimofast.config.json
          Client-specific parameters
          (Privacy Node address, view key,
           update frequency, risk thresholds)
```

Each institutional client gets the same sidecar configured for their asset type. Nimofast for invoices. Santander for trade finance. Nuclea for receivables. The software is the same. The configuration changes.

## Why this is strategically critical

This is the Chainlink model. Chainlink owns the oracle node software. Institutions run the nodes. Chainlink is not easily replaceable because the software belongs to Chainlink.

For Agama:

```
Without the Agama Oracle Sidecar:
  Nimofast's invoices stay invisible on the Public Chain
  Zero yield for investors
  The vault is dead

With the sidecar:
  Nimofast is technically dependent on Agama
  for its invoices to generate liquidity
  Switching cost is enormous
  Nimofast cannot just "change curator"
  without replacing the entire bridge infrastructure
```

This is the real moat. Not the vault curator fees. The oracle infrastructure.

## The endgame: oracle network

```
V1    Deploy sidecar at Nimofast
      1 node, 1 client, prove the concept

V2    Deploy at Santander, Nuclea, AmFi
      Multiple nodes, multiple asset types
      Agama becomes the reference infrastructure
      for bridging private assets to public DeFi on Rayls

V3    Any new curator wanting to launch a vault
      on a Rayls private asset MUST use the Agama
      oracle network to read the NAV
      Agama takes fees on every third-party vault
      using its nodes

V4    agaUSD backed by the entire oracle network
      Every private asset on Rayls that passes
      through an Agama Node feeds the synthetic dollar
```

```
Chainlink  =  oracle for public price data
              everywhere, on every chain

Agama      =  oracle for private asset NAV
              everywhere, on every Rayls Privacy Node
              (and potentially other privacy chains)
```

The difference with Chainlink: the data Agama bridges is confidential by design. Only the sidecar with the view key can read it. Agama is structurally non-replaceable.

## NAV computation

```
NAV(t) = Σ (face_value_i × accrual_factor_i)

accrual_factor_i = (t - t_purchase_i) / (t_maturity_i - t_purchase_i)
```

V1: daily update, linear accrual. V2: real-time feed from the sidecar.

## On-chain interface

```solidity
interface IAgamaOracle {
    function updateNAV(
        bytes32 proofHash,
        uint256 newNAV,
        uint256 timestamp,
        bytes calldata zkProof
    ) external;

    function getLatestNAV() external view returns (
        uint256 nav,
        uint256 timestamp,
        bool isValid
    );
}
```

## Security parameters

| Parameter | V1 | V2 |
|-----------|----|----|
| Update frequency | Daily | Real-time |
| Access control | Multisig relayer | Multisig + automated |
| Circuit breaker | NAV deviation > 5% in 24h | NAV deviation > 3% in 6h |
| Staleness threshold | 48 hours | 6 hours |
