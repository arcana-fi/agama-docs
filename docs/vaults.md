# Vaults

## agaINV — Invoice Vault (Priority 1)

The first Agama vault. Built on our relationship with Nimofast, it validates the entire infrastructure.

| Parameter | Value |
|-----------|-------|
| Underlying | Nimofast LNG and energy invoices tokenized on Rayls via Parfin |
| Debtors | Petrobras, Shell, regulated Brazilian energy distributors |
| Target yield | 8 to 12% APY *(to be defined with Nimofast)* |
| Duration | 30 to 90 days, continuously renewed *(to be defined)* |
| Privacy | Debtor identities and amounts concealed via Enygma ZK proofs |
| Deposit currency | USDXP (primary), USDr, USDT |
| Minimum ticket | 50,000 USDXP |

### Mechanism

```
1. Nimofast tokenizes invoices on Rayls private chain via Parfin

2. The vault buys the invoice at a discount
   e.g. $97,000 for a $100,000 invoice

3. NAV accrues linearly from $97,000 to $100,000 over 30 days

4. Enygma generates a ZK proof of NAV without revealing debtors

5. The proof is published on the public chain. agaINV price rises.

6. At maturity, Nimofast repays $100,000. The vault captures the spread.

7. Invoices renew continuously. Yield is permanent.

   ┌─────────────────────────────────────────────────────────────┐
   │                                                             │
   │   $97,000 ──────────────────────────────────▶ $100,000     │
   │   purchase                    30 days              face     │
   │   price          NAV accrues linearly             value    │
   │                                                             │
   │   Spread = $3,000 = 3% over 30 days ≈ 36% annualized       │
   │                                                             │
   └─────────────────────────────────────────────────────────────┘
```

### Stablecoins accepted at deposit

| Stablecoin | Status | Notes |
|------------|--------|-------|
| USDXP | Priority 1 | Native Rayls stablecoin issued by XP Inc. via Clear Corretora. Fully USD-backed. Natural distribution via XP's client base. Primary deposit currency for institutional onboarding |
| USDr | Native | Rayls gas stablecoin. Lower liquidity at launch. Accepted as deposit |
| USDT | Expected at mainnet | Per Messari and Bitfinex reports, USDT is expected to be available on Rayls Public Chain. Exact availability to be confirmed with Rayls team before April 30 |
| USDC | Expected at mainnet | Mentioned in Messari report as a whitelisted gas token. To be confirmed |

USDXP alone is too restrictive for day one. If USDT and USDC are natively available on the Rayls Public Chain, any global crypto fund can deposit directly without needing access to the XP/Clear ecosystem.

## Future vaults

Built on identified relationships with Rayls partners. Each vault uses the same ERC-7540 infrastructure via Lagoon, the same yield-bearing token model, and the same NAV oracle pattern. Different underlying assets and risk profiles.

| Vault | Underlying | Partner | Target APY |
|-------|-----------|---------|-----------|
| agaYLD | Institutional stablecoin yield (BUIDL 40% + USDY 30% + TBILL 20% + USDXP buffer 10%) | — | 4–5% |
| agaTRD | Letters of credit, corporate trade finance | Santander Brazil | 10–15% |
| agaCORP | Diversified corporate invoices | Santander Brazil | 7–10% |
| agaREC | Brazilian interbank receivables (100% of boletos) | Nuclea | 8–11% |
| agaPC | Tokenized private credit ($500M+ migrating to Rayls) | AmFi | 10–14% |
| agaFI | Brazilian tokenized fixed income | B3 Digitas | 5–7% |
