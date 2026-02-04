---
title: "Auto-Answer 'Where Is My Order?'"
client: "DTC Lifestyle Brand"
industry: "E-Commerce"
metric: "12hrs/Week Saved"
description: "A tool that connects your email to Shopify so it can answer tracking questions without you touching the keyboard."
publishDate: 2025-09-18
tags: ["Shopify Automation", "Customer Support", "Refunds"]

# Add to bottom of frontmatter:
related: "email-monitor"
ctaText: "Support is handled. Now let's organize your inbox."

# 1. THE VISUAL (Dashboard Stats)
visualType: "dashboard"
visualData:
  stats:
    - label: "Tickets Today"
      value: "142"
      trend: "+12%"
    - label: "Auto-Resolved"
      value: "98"
      trend: "69%"
    - label: "Avg Speed"
      value: "1m 2s"
      trend: "-95%"

# 2. THE STATS
stats:
  - label: "Inbox Zero"
    value: "Daily"
  - label: "Response Time"
    value: "2 Mins"
  - label: "Auto-Resolved"
    value: "65%"
  - label: "Happiness Score"
    value: "4.9/5"

# 3. THE LOGIC
codeSnippet:
  filename: "policy_check.txt"
  lang: "Logic Flow"
  code: |
    // 1. IDENTIFY QUESTION
    Customer asks: "Where is my package?"

    // 2. LOOKUP DATA (Shopify API)
    Order #9921 -> Status: "In Transit" (UPS)
    Location: "Columbus, OH"

    // 3. EXECUTE POLICY
    IF status == "In Transit":
    -> Reply with Tracking Link.
    -> Archive Email.
    -> DO NOT disturb staff.
---

## The Operational Shift
We removed the "Noise" so the team could focus on real problems.

| The Old Way (Manual) | The LogicLoom Way (Automated) |
| :--- | :--- |
| **Morning Routine:** 2 hours clearing spam/status checks. | **Morning Routine:** Inbox is already empty. |
| **The Search:** Switching tabs to find tracking numbers. | **The Fetch:** AI grabs tracking data instantly. |
| **The Delay:** Customers wait 24h for a link. | **The Speed:** Customers get the link in 2 minutes. |
| **The Result:** Angry reviews. | **The Result:** 5-Star Speed. |

<br>

## How The Logic Works
We installed an **Auto-Agent** that acts as a firewall for your support team.

1.  **Identify:** The system sees an email asking about shipping.
2.  **Lookup:** It grabs the customer's email, searches Shopify, and finds the UPS tracking number.
3.  **Reply:** It writes a polite email: *"Hi John, your package is currently in Ohio. Here is the link."*
4.  **Filter:** You never even see the email. It just gets handled.