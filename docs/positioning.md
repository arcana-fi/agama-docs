# Positioning

Agama is comparable to Avantgarde Finance. They are on-chain asset managers: they select strategies, deploy capital into BUIDL, Morpho and other protocols, and charge management fees on AUM. They use Enzyme as vault infrastructure on Ethereum.

Agama follows the same model with two fundamental differences: we use Lagoon as vault infrastructure instead of Enzyme, and we address private institutional assets that cannot go on Ethereum.

## Agama vs Avantgarde Finance

| | Avantgarde | Agama |
|---|---|---|
| Role | On-chain asset manager and vault curator | On-chain asset manager and vault curator |
| Infrastructure | Enzyme + Morpho | Lagoon Finance (ERC-7540) |
| Asset type | Liquid public assets: tokenized T-bills, Ethereum DeFi protocols. Visible and accessible to everyone | Private institutional assets: invoices where debtor identity is commercially sensitive, trade finance between regulated companies, interbank receivables |
| Why it works | Ethereum has deep liquidity and composability for public assets | Rayls' Enygma privacy layer is the only infrastructure that allows financing private assets on-chain while concealing counterparties |
| Market | Ethereum mainnet | Rayls ecosystem (Brazil, institutional) |
| Fee model | Management + performance with high-water mark | Same |
| Smart contracts | Writes and maintains vault logic via Enzyme | None. Deploys as curator on existing Lagoon contracts |

The critical difference is the asset class. Avantgarde works with assets that are publicly visible on Ethereum. Agama works with assets that structurally cannot go on a public chain: invoices where debtor identity is commercially sensitive, trade finance between regulated companies, interbank receivables. Rayls' privacy layer is the only infrastructure that allows financing them on-chain while concealing counterparties. This is a market Avantgarde cannot address.

## Agama vs Pareto Credit (V3-V4 target)

Pareto Credit is the protocol Agama aims to become at V3-V4. They started as Idle Finance (a yield aggregator sending liquidity to Aave and Compound), realized they captured zero value because TVL was retained by third-party protocols, and built their own credit marketplace with Credit Vaults, tranching, and USP — a synthetic dollar backed by private credit.

| | Pareto Credit | Agama (V3-V4 target) |
|---|---|---|
| Origin | Yield aggregator (Idle Finance) → built own protocol | Vault curator on Lagoon → building own protocol |
| Synthetic dollar | USP — mint 1:1 against USDC. Backed by Credit Vaults lending to institutional borrowers (FalconX, trading firms) | agaUSD — mint 1:1 against USDXP. Backed by Credit Vaults financing private invoices and trade finance |
| Yield layer | sUSP — staked USP absorbs first-loss risk, earns Credit Vault yield | sagaUSD — staked agaUSD absorbs first-loss risk, earns 8-12% APY from invoice spreads |
| Peg stability | Native backing (1:1 mint), arbitrage mechanism, stability reserve | Same: native backing, stability reserve funded by performance fees (target 3-5% TVL) |
| Credit Vaults | Lend to vetted institutional borrowers. Borrowers are public (FalconX visible on-chain) | Finance private institutional receivables. Debtor identities concealed via Enygma ZK proofs |
| Privacy | None. All positions, borrowers, and amounts are public on Ethereum | End-to-end confidentiality. Debtors (Petrobras, Shell) remain private. Only ZK-verified NAV is public |
| Chain | Ethereum mainnet | Rayls (privacy-native) |
| Token | $PAR — governance + revenue sharing | $AGA — governance + revenue sharing (V4 only, after 100M AUM) |

The key difference: Pareto's Credit Vaults lend to publicly visible borrowers on Ethereum. Agama's Credit Vaults finance private assets where debtor identity is commercially sensitive and must remain confidential. For an institution that does not want competitors to see its financing activity, agaUSD is the only synthetic dollar with end-to-end ZK confidentiality.

The trajectory is identical: aggregator → curator → protocol → synthetic dollar. Agama follows this path on the privacy-native Rayls chain.

## Agama is not a generic DeFi curator

Generic DeFi curators (Gauntlet, Steakhouse, Re7) manage public crypto assets on Morpho or Aave. They compete on quantitative risk models, and their strategies can be replicated by anyone since the assets and parameters are public.

Agama operates on private assets. The invoices, debtor identities, and commercial terms are confidential by design. Access to these assets requires direct commercial agreements with the originators (Nimofast, Santander, Nuclea). This creates a structural moat: to compete with Agama, a competitor would need to sign their own agreement with Nimofast, get authorized on their Rayls Privacy Node, and rebuild the NAV oracle infrastructure from scratch.
