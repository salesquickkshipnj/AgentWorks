---
title: "Centralized Lead Inbox"
client: "Design-Build Firm"
industry: "Construction"
metric: "20hrs/wk Saved"
description: "A system that automatically pulls leads from Angi, HomeAdvisor, and your Website, cleans them up, and puts them in your CRM."
publishDate: 2025-12-15
tags: ["Lead Automation", "No Data Entry", "Speed-to-Lead"]

# Add to bottom of frontmatter:
related: "restaurant-inquiries"
ctaText: "Leads are synced. Now let's automate the bookings."

# 1. THE VISUAL (Logic Node Graph)
visualType: "logic"
visualData:
  # No extra data needed for 'logic' type, it renders the server nodes automatically

# 2. THE STATS
stats:
  - label: "Manual Entry"
    value: "0%"
  - label: "Response Speed"
    value: "< 2 min"
  - label: "Booking Rate"
    value: "2.1x"
  - label: "ROI Speed"
    value: "14 Days"

# 3. THE LOGIC
codeSnippet:
  filename: "lead_cleaner.json"
  lang: "Data Flow"
  code: |
    // 1. INGEST (Any Source)
    Source: Angi, Thumbtack, or Web Form
    Input: "Master bath is wrecked, budget 20k?"

    // 2. NORMALIZE (AI Layer)
    Detect Intent: "Bathroom Remodel"
    Extract Budget: "$20,000"

    // 3. SYNC (CRM)
    Create Contact -> "Active Pipeline"
    
    // 4. ALERT OWNER
    Send SMS: "New Lead ($20k). Call now?"
---

## The Operational Shift
We moved the client from "Copy-Paste Purgatory" to "Instant Sync."

| The Old Way (Manual) | The LogicLoom Way (Automated) |
| :--- | :--- |
| **The Trigger:** Phone buzzes with an Angi email. | **The Trigger:** Lead hits the CRM instantly. |
| **The Action:** Owner types data into CRM manually. | **The Action:** Owner clicks one button to call. |
| **The Lag:** 4-6 hours (done after work). | **The Speed:** 15 seconds (done immediately). |
| **The Result:** Leads go cold and hire others. | **The Result:** You are the first to call. |

<br>

## How The Logic Works
This is a **"One-Stop" Lead Catcher**. It doesn't matter where the lead comes from—email, text, or web form—it all goes into the same pipe.

1.  **Capture:** We intercept the email alerts from Angi and Thumbtack instantly.
2.  **Clean Up:** Our AI reads the messy customer message (e.g., "I need a cooking space redo") and translates it into clean data (`Project: Kitchen`).
3.  **Sync:** The clean data appears in your CRM automatically.
4.  **Alert:** You get a text with a "Click-to-Call" button immediately.