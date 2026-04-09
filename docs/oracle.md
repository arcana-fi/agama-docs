# NAV Oracle

The NAV oracle is the only custom smart contract Agama builds. Everything else — vault shell, fees, KYC, reporting — is provided by Lagoon.

## What it does

```
  Rayls Private Node          Agama NAV Oracle           Lagoon Vault
         │                          │                         │
         │  1. ZK proof of          │                         │
         │  portfolio NAV           │                         │
         │─────────────────────────▶│                         │
         │                          │                         │
         │                          │  2. Verify proof        │
         │                          │  validity + freshness   │
         │                          │                         │
         │                          │  3. Push verified NAV   │
         │                          │────────────────────────▶│
         │                          │                         │
         │                          │  4. Trigger settlement  │
         │                          │  (expire → update →     │
         │                          │   settle)               │
         │                          │────────────────────────▶│
         │                          │                         │
         │                          │             Share price updated
         │                          │             Pending deposits settled
```

## What the oracle sees vs what it does not

The oracle reads ZK proofs. It does not have access to individual invoice data, debtor identities, invoice amounts, counterparty information, or credit scores. The proof is a cryptographic attestation: "the total NAV of this portfolio is X, computed correctly from the underlying positions." The oracle verifies the math without seeing the inputs.

## NAV computation

```
NAV(t) = Σ (face_value_i × accrual_factor_i)

accrual_factor_i = (t - t_purchase_i) / (t_maturity_i - t_purchase_i)
```

V1: daily update, linear accrual. V2: real-time feed from Nimofast Privacy Node.

## Interface

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
