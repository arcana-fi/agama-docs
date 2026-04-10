---
title: Agama Documentation
---
# Rayls Integration

## Why Rayls

Agama exists because Rayls exists. The assets we vault (invoices, receivables, private credit) cannot go on a public chain. Debtor identities are commercially sensitive. Invoice amounts between regulated counterparties are confidential. Rayls is the only blockchain infrastructure that allows financing these assets on-chain while concealing counterparties.

## Mainnet architecture (April 30, 2026)

The Rayls mainnet introduces a production architecture with three distinct layers.

**Public Chain.** EVM-compatible L1. Gas fees paid in USDr, the native Rayls USD-backed stablecoin. Predictable transaction costs. $RLS token for staking and governance. State roots committed to Ethereum L1. MEV protection via encrypted mempool.

**Privacy Nodes.** Sovereign EVM chains operated by each institution. Each originator (Nimofast, Santander, Nuclea) runs their own node. Assets are tokenized here. All sensitive data stays here. The privacy node is invisible from the public chain.

**Private Networks.** Settlement between institutions. Permissioned multi-institution communication layer.

## Stablecoins on Rayls

| Stablecoin | Issuer | Backing | Role for Agama |
|------------|--------|---------|----------------|
| USDXP | XP Inc. via Clear Corretora | USD fully backed 1:1 | Primary deposit currency for all vaults. Natural distribution via XP's client base |
| USDr | Rayls native | USD-backed | Gas fees on the public chain. Also accepted as deposit |
| USDT | Tether | USD | For investors outside the Rayls ecosystem |

## Rayls partners tokenizing assets

These are the institutions building on Rayls whose assets Agama can vault. Agama does not compete with these originators. We complement them by providing the financing and investor access layer they do not build themselves.

| Partner | Assets on Rayls | Agama vault |
|---------|----------------|-------------|
| Nimofast | LNG energy invoices via Parfin | agaNMF |
| Santander Brazil | Corporate invoices, real estate, automotive | agaCORP, agaSAN |
| Nuclea | Interbank receivables, boletos | agaNUC |
| AmFi | Private credit ($500M+ tokenized) | agaPC |
| B3 Digitas | Fixed income instruments | agaFI |
| XP Inc. | USDXP stablecoin | Deposit currency across all vaults |
