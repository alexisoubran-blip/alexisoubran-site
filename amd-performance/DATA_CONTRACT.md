# AMD Performance Dashboard — data contract

## Decision layer

The UI consumes one canonical payload. Meta, Google, TikTok and Power BI remain adapters; platform-specific field names must not leak into components.

Primary grain:

- Forecast scorecard: `period × date × country × platform × campaign × metric`
- Campaign table: `period × country × platform × campaign`
- Ad drill-down: `period × country × platform × campaign × ad`
- Forecast Lab: `scenario × filter context × model_version`

## KPI definitions

| Canonical metric | Definition | Unit | Forecast rule |
|---|---|---:|---|
| `investment` | Net media spend in USD, excluding agency fees and taxes | USD | Approved pacing curve to the current date |
| `impressions` | Platform-reported served impressions | Count | Planned delivery to date |
| `link_clicks` | Outbound/link clicks only; never all clicks | Count | Planned delivery to date |
| `etailer_clicks` | Valid tagged clicks from AMD landing pages to retailer destinations | Count | Planned delivery to date |

Variance is calculated as `(actual / forecast_to_date) - 1`. Investment is a control metric: positive variance is overspend unless an approved reforecast exists. For delivery KPIs, positive variance is favorable.

## Adapter mapping

| Canonical field | Meta | Google | TikTok / landing analytics |
|---|---|---|---|
| `investment` | `spend` | `cost_micros / 1e6` | `spend` |
| `impressions` | `impressions` | `impressions` | `impressions` |
| `link_clicks` | `inline_link_clicks` | `clicks` after click-type validation | `clicks` or destination clicks |
| `etailer_clicks` | Not authoritative | Not authoritative | Tagged outbound retailer event |

## Required implementation guardrails

1. Every record carries `period_id`, `country_code`, `platform`, `campaign_id`, `currency` and `as_of`.
2. Currency conversion occurs upstream; the dashboard receives USD only and stores the FX date/rate in lineage metadata.
3. Campaign and ad IDs are platform IDs, not names. Names are mutable labels.
4. Ad preview uses `creative_url` when available, falls back to `thumbnail_url`, and preserves `platform_permalink`.
5. Forecast Lab outputs both `incremental_investment_pct` and `incremental_investment_usd`, all four projected KPIs, confidence and `model_version`.
6. Demo, partial and validated states must remain visually distinct; no forecast can be presented as validated while source health is incomplete.

The machine-readable schema is [`data-contract.json`](./data-contract.json).
