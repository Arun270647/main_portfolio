# Weekly SEO Report — 2026-10-12

_Re-run of the weekly routine with the GSC Wizard connector attached. Sections 1–3 duplicate this morning's `weekly-2026-10-12.md`; section 4 is new. Taken after PRs #2 and #3 deployed._

**Verdict: Watch.** The live site is fully healthy (all 13 URLs return 200 with correct canonicals and unique titles), and IndexNow submission succeeded. However, 5 of 13 URLs remain unindexed by Google — 3 were crawled but not indexed (/about, /projects, /experience) and 2 are unknown to Google entirely (/certificates, /blog/hand-cricket-ai). Impressions grew +14 week-over-week but clicks dropped to 1, and CTR fell 1.28 pp. Focus on getting the 5 unindexed pages into Google's index.

---

## 1. Sitemap Integrity

| Check | Result |
|-------|--------|
| Expected routes | 13 (8 static + 5 blog posts) |
| Routes in sitemap.xml | 13 |
| Missing from sitemap | None |
| Sitemap URLs with no route | None |

Source: `public/sitemap.xml` cross-referenced with `slug:` entries in `src/pages/BlogPost.tsx`.

## 2. Live Site Health

| URL | Status | Canonical | Title |
|-----|--------|-----------|-------|
| `/` | 200 | OK | Arun Vignesh \| Full-Stack Developer |
| `/about` | 200 | OK | About Arun Vignesh \| BCA Student & Full-Stack Web Developer Chennai |
| `/skills` | 200 | OK | Technical Skills \| React, TypeScript, Node.js Expert \| Arun Vignesh |
| `/projects` | 200 | OK | Web Development Projects Portfolio \| React & Node.js \| Arun Vignesh |
| `/certificates` | 200 | OK | Certificates \| Arun Vignesh |
| `/experience` | 200 | OK | Experience \| Arun Vignesh |
| `/contact` | 200 | OK | Contact & Hire \| Freelance Full-Stack Developer Chennai \| Arun Vignesh |
| `/blog` | 200 | OK | Blog \| Arun Vignesh |
| `/blog/track-my-academy` | 200 | OK | Building Track My Academy: A Comprehensive Management Platform \| Arun Vignesh |
| `/blog/marina-digitals` | 200 | OK | Marina Digitals: Digital Marketing Agency Website \| Arun Vignesh |
| `/blog/fufies` | 200 | OK | Fufies: E-commerce Brand Website Development \| Arun Vignesh |
| `/blog/kyra-elite` | 200 | OK | Kyra Elite: Premium E-commerce Platform with Admin Dashboard \| Arun Vignesh |
| `/blog/hand-cricket-ai` | 200 | OK | Hand Cricket AI: Building a Gesture Recognition Game \| Arun Vignesh |

| Asset | Status |
|-------|--------|
| `sitemap.xml` | 200 |
| `robots.txt` | 200 |

All pages return 200, all canonicals match, all titles are unique. No prerendering regressions detected. Source: `curl -sL` against each URL.

## 3. IndexNow Resubmission

| Check | Result |
|-------|--------|
| Key file (`…d01e`) accessible | Yes (HTTP 200, body matches) |
| Submission status | **200 — Accepted** |
| URLs submitted | 13 |

Source: POST to `https://api.indexnow.org/indexnow`. Key last 4 chars: `d01e`.

## 4. Google Search Console (sc-domain:arunvignesh.my)

### 4a. Performance Summary (28 days through 2026-10-09)

| Metric | Current | Change vs prior 28 days |
|--------|---------|------------------------|
| Clicks | 1 | -1 |
| Impressions | 103 | +14 |
| CTR | 0.97% | -1.28 pp |
| Avg Position | 7.13 | improved by 0.93 (lower is better) |

Source: `get_site_summary` via GSC Wizard MCP.

### 4b. Indexing Tracker

| Metric | Count |
|--------|-------|
| Total tracked | 13 |
| Indexed | 8 |
| Not indexed | 5 |
| Pending | 0 |
| Errors | 0 |

Last check: 2026-10-11 23:53 UTC. Source: `get_indexing_tracker` via GSC Wizard MCP.

### 4c. Sitemaps

| Sitemap | Submitted URLs | Indexed URLs | Warnings | Errors |
|---------|---------------|--------------|----------|--------|
| `sitemap.xml` | 13 | 0* | 0 | 0 |

*GSC sitemap indexed count lags; the URL inspection below shows 8 actually indexed.

Re-submitted to GSC on 2026-10-12. Source: `list_sitemaps` + `submit_sitemap` via GSC Wizard MCP.

### 4d. URL Inspection (quota: 1987/2000 remaining after run)

**Indexed (8):**

| URL | Coverage State | Last Crawl |
|-----|---------------|------------|
| `/` | Submitted and indexed | 2026-10-09 |
| `/skills` | Submitted and indexed | 2026-07-06 |
| `/contact` | Submitted and indexed | 2026-07-30 |
| `/blog` | Submitted and indexed | 2026-07-06 |
| `/blog/track-my-academy` | Submitted and indexed | 2026-07-06 |
| `/blog/marina-digitals` | Submitted and indexed | 2026-07-06 |
| `/blog/fufies` | Submitted and indexed | 2026-07-06 |
| `/blog/kyra-elite` | Submitted and indexed | 2026-07-06 |

**Not Indexed (5):**

| URL | Coverage State | Last Crawl | Cause |
|-----|---------------|------------|-------|
| `/about` | Crawled - currently not indexed | 2026-07-06 | Google crawled but chose not to index |
| `/projects` | Crawled - currently not indexed | 2026-07-06 | Google crawled but chose not to index |
| `/experience` | Crawled - currently not indexed | 2026-07-06 | Google crawled but chose not to index |
| `/certificates` | URL is unknown to Google | Never | Never crawled |
| `/blog/hand-cricket-ai` | URL is unknown to Google | Never | Never crawled |

Source: `bulk_inspect_urls` via GSC Wizard MCP.

### 4e. Top Queries (last 28 days)

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| arun vignesh | 0 | 19 | 0% | 6.1 |
| fufies | 0 | 2 | 0% | 9.0 |

Source: `query_top_queries` (limit 10) via GSC Wizard MCP.

### 4f. Scored Opportunities

| Query | Impressions | CTR | Position | Potential Clicks | Score |
|-------|-------------|-----|----------|-----------------|-------|
| arun vignesh | 19 | 0% | 6.1 | +5 | 19 |

Source: `score_opportunities` (limit 5) via GSC Wizard MCP.

---

## Recommended Actions

1. **Request indexing for /certificates and /blog/hand-cricket-ai** — both are unknown to Google. Use GSC's "Request Indexing" via URL Inspection, and ensure internal links point to them. (Source: `bulk_inspect_urls`)
2. **Improve content depth on /about, /projects, /experience** — Google crawled these but chose not to index them. Add unique, substantive text content (not just component rendering) to give Google a reason to index. (Source: `bulk_inspect_urls`)
3. **Optimize for "arun vignesh" query** — ranking at position 6.1 with 19 impressions but 0 clicks. Improve the meta title/description to increase CTR for this branded query. (Source: `score_opportunities`)
4. ~~Add structured data (Person, WebSite schemas)~~ — already present (`index.html`, `src/utils/structuredData.ts`); no action needed.
5. **Continue weekly IndexNow submissions** — keeps Bing/Yandex/Seznam aware of updates. This week's submission was accepted (HTTP 200). (Source: IndexNow API)
