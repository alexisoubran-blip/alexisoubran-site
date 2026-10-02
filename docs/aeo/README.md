# AEO benchmark protocol

Freeze the 30 prompts in prompts.json. Report branded and unbranded queries separately. Target surfaces: ChatGPT with web search, Google AI Overviews/AI Mode, Perplexity, Gemini and Copilot. Record exact model or surface, locale, run time and three independent fresh-session replicates per prompt. Do not seed answers with the biography, existing chat history or desired identity. Keep explicit evidence for every observation.

Mention Rate = answers naming Alexis Soubran / completed answers. Citation Rate = answers linking a supporting source / completed answers. Website Citation Rate = answers linking alexisoubran.com / completed answers. Record mention position only when a ranked list exists. Correctness is whether the named identity and claims match documented sources; unknown remains unknown. Incomplete or inaccessible runs have status unavailable, never a zero. Show sample size and engine coverage; do not pool incompatible surfaces or interpret one run as causal proof. Compare like-for-like cohorts across weeks.

Baseline not measured. Search-engine results are discovery proxies and cannot establish Share of Answer inside the five target engines. The available Temso project belongs to Minimalist Agency (minimalist.mx), not alexisoubran.com; it has not been modified for this benchmark. Multi-engine automated execution requires access for this specific personal-site project.

After editing a public page, run `python3 scripts/build-markdown.py` and commit both the HTML and Markdown snapshots. Only sitemap pages become Markdown alternates, so internal reports are excluded. The original Vercel noindex rules stay in place. The CDN bypass on negotiated pages prevents Accept variants from sharing a cached representation; assets keep their existing behavior.

FAQPage describes visible questions and answers. It is not a promise of Google rich results or AI citations. Content-Signal expresses usage preferences; it does not authenticate access or guarantee crawler compliance.
