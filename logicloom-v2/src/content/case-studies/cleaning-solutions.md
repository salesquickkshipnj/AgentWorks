---
title: "The Invisible Dispatcher"
client: "Apex Facility Services"
industry: "Field Service"
metric: "20 Hrs/Wk Saved"
description: "Eliminating the 'In-Person Estimate' trap to automate 90% of bookings and dispatch crews via SMS."
publishDate: 2026-01-18
tags: ["n8n", "Twilio", "Logistics"]

# Add to the bottom of the Frontmatter:
related: "shipping-calculator"
ctaText: "Quotes are sent. Now let's handle complex pricing."

# 1. THE VISUAL (SMS Quote Bot)
visualType: "phone"
visualData:
  messages:
    - text: "Hi! I need a deep clean for a 3-bed, 2-bath house in Montclair."
      sender: "them"
      time: "9:15 AM"
    - text: "I can help. Based on the size (approx 1800 sqft), the estimate is $240. Want to book?"
      sender: "me"
      time: "9:15 AM"
    - text: "Yes, Tuesday works?"
      sender: "them"
      time: "9:16 AM"
    - text: "Booked for Tuesday @ 9AM. Use this link to pay deposit."
      sender: "me"
      time: "9:16 AM"

# 2. THE STATS
stats:
  - label: "Quote Speed"
    value: "Instant"
  - label: "Site Visits"
    value: "Zero"
  - label: "Reviews"
    value: "+400%"
  - label: "Admin Saved"
    value: "20h/wk"

# 3. THE LOGIC
codeSnippet:
  filename: "price_calculator.js"
  lang: "Logic Flow"
  code: |
    // 1. INPUT VARIABLES
    Bedrooms: 3
    Bathrooms: 2
    Zip: 07042

    // 2. CALCULATE PROXY
    Est_SqFt = (Bed * 400) + (Bath * 200)
    Base_Price = Est_SqFt * $0.12

    // 3. GENERATE QUOTE
    Final_Price = $240
    Action: Send SMS Quote
---

## The Operational Shift
We stopped driving to give free quotes and started closing deals over text.

| The Old Way (Manual) | The LogicLoom Way (Automated) |
| :--- | :--- |
| **The Estimate:** Owner drives to the house (1 hr). | **The Estimate:** "Sight Unseen" Algo-Quote (Instant). |
| **The Dispatch:** Group text chaos at 6 AM. | **The Dispatch:** Individual crew assignments via SMS. |
| **The Feedback:** Silence. | **The Feedback:** Auto-SMS: "Rate us 1-5" after job. |
| **The Result:** 10+ hours wasted driving. | **The Result:** 90% of bookings automated. |

<br>

## How The Logic Works
We replaced the "In-Person Estimate" with a **Remote Estimation Engine**.

1.  **Calculator:** Clients input home details (Beds/Baths). We use a "Proxy Formula" to estimate square footage and labor cost with 95% accuracy.
2.  **Quote:** The system texts a binding price immediately.
3.  **Dispatch:** Upon booking, the system identifies the crew already working in that zip code and assigns the job to minimize drive time.
4.  **Quality:** After the job, it texts the client for a review. If they rate 5 stars, it sends the Google Review link.