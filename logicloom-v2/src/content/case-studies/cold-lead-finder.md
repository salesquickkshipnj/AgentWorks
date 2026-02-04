---
title: "AI-Powered Cold Lead Finder"
client: "Growth Marketing Agency"
industry: "B2B Marketing"
metric: "90% Time Saved"
description: "How we automated the scraping, filtering, and enriching of high-quality leads using n8n and AI."
publishDate: 2025-10-28
tags: ["n8n", "OpenAI", "Google Sheets", "Lead Gen"]

# FUNNEL LINK
related: "audit-form-automation"
ctaText: "You have leads. Now, alert your sales team instantly."

# 1. THE VISUAL
visualType: "dashboard"
visualData:
  stats:
    - label: "Leads Scraped"
      value: "524"
      trend: "+12%"
    - label: "Email Match"
      value: "412"
      trend: "78%"
    - label: "Avg Cost"
      value: "$0.04"
      trend: "-90%"

# 2. THE STATS
stats:
  - label: "Time Savings"
    value: "90%"
  - label: "Lead Volume"
    value: "500/day"
  - label: "Data Accuracy"
    value: "99%"
  - label: "Cost/Lead"
    value: "$0.04"

# 3. THE LOGIC
codeSnippet:
  filename: "quality_filter.js"
  lang: "Logic Flow"
  code: |
    // 1. INPUT LEAD
    Business: "Joe's Plumbing"
    Rating: 3.2 stars
    Website: null

    // 2. APPLY FILTERS
    Filter A: Rating < 4.0? -> REJECT
    Filter B: No Website? -> REJECT
    Filter C: Franchise? -> REJECT

    // 3. ENRICH (Waterfall)
    If PASS -> Ping Apollo API
    If Apollo Fail -> Ping Hunter.io
    
    // 4. OUTPUT
    Result: { qualified: false, reason: "Low Rating" }
---

## The Operational Shift
We replaced manual Google Maps browsing with a headless browser fleet.

| The Old Way (Manual) | The LogicLoom Way (Automated) |
| :--- | :--- |
| **The Research:** Browsing Maps 4 hours/day. | **The Research:** Scraper runs 24/7. |
| **The Quality:** Copying bad numbers/emails. | **The Quality:** AI verifies website content. |
| **The Volume:** 20 leads/day (human limit). | **The Volume:** 500+ leads/day (API limit). |
| **The Result:** Reps hate prospecting. | **The Result:** Reps just close deals. |

<br>

## How The Logic Works
We built a scraping and enrichment pipeline that acts as a "virtual researcher."

1.  **Maps Extraction:** n8n triggers an Apify actor to scrape Google Maps for specific keywords (e.g., "Plumbers in Austin"). It grabs Name, Website, Review Count, and Phone.
2.  **AI Qualification:** This is the magic step. We visit the prospect's website and use OpenAI to answer: *"Does this company offer residential services?"* If NO, we discard them.
3.  **Waterfall Enrichment:** For qualified leads, we ping Hunter.io and Apollo APIs to find the CEO's personal email.
4.  **Sync:** The final clean list is pushed to HubSpot automatically every morning.