# Lagoon Integration

Agama deploys as a curator on Lagoon. We do not write, audit, or maintain any vault smart contract. The entire on-chain vault infrastructure is Lagoon's responsibility. Agama focuses exclusively on what creates value: the NAV oracle, the asset strategy, and the investor relationship.

## What Lagoon provides vs what Agama builds

| Component | Lagoon | Agama |
|-----------|--------|-------|
| Vault smart contracts | ERC-7540 shell. Written, deployed and maintained by Lagoon. Audited by Nethermind. 120+ vaults active on 18+ chains | None. We deploy as a curator on existing contracts |
| Security audit | Already done | We inherit Lagoon's security. No audit budget required |
| Deposit / withdrawal | Asynchronous request-then-claim handled natively | We trigger settlement cycles based on the NAV update schedule |
| Fee management | Management fee + performance fee with high-water mark, computed automatically on-chain | We configure the parameters. Lagoon enforces them |
| KYC / whitelist | Access control and investor whitelisting built into the vault | We manage the investor whitelist. Lagoon enforces it on-chain |
| On-chain reporting | Full NAV history, transaction log, share price evolution — all on-chain | We provide the NAV. Lagoon records and exposes it |
| NAV oracle | Lagoon accepts any valuation provider. The NAV feed is the curator's responsibility | We build this. It reads Enygma ZK proofs and pushes the verified NAV on-chain |
| Asset strategy | Infrastructure-agnostic. Does not decide what goes in the vault | We decide. Which invoices to buy, at what discount, with what risk parameters |
| Investor interface | app.lagoon.finance lists all vaults automatically | agama.financial is our branded frontend for institutional clients. Both channels coexist |

## Why this matters

By deploying on Lagoon, Agama inherits battle-tested infrastructure without the cost and timeline of building and auditing vault contracts from scratch. Time-to-market is reduced significantly. The security risk surface is limited to the NAV oracle, which is the only smart contract Agama writes.

Lagoon can activate a protocol fee up to 30% of curator fees. Currently no vault is subject to protocol fees.

## Why ERC-7540 and not ERC-4626

ERC-4626 is the classic vault standard. Deposit and share minting happen in the same block. This works for liquid assets like ETH or USDC where the price is known instantly.

For invoices with 30 or 90-day maturities, synchronous pricing is impossible. The vault cannot price an asset whose maturity is a month away in a single block.

ERC-7540 introduces the request-then-claim pattern: the investor submits a deposit request, the vault processes it at the next NAV valuation cycle, and the investor claims their shares once settlement is complete. This mirrors exactly how traditional funds operate, reproduced on-chain in a fully verifiable way.
