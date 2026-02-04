---
title: "The Ghost Member Detector"
client: "IronClad Performance"
industry: "Fitness / Gyms"
metric: "40% Less Cancellations"
description: "A background system that monitors attendance, identifies members who stop showing up, and texts them to get them back in the gym."
publishDate: 2026-01-18
tags: ["Retention", "Automated SMS", "Mindbody"]

# Add to bottom of frontmatter:
related: "ecom-support"
ctaText: "Members are back. Now let's automate support tickets."

# 1. THE VISUAL (Live Code, No Images)
visualType: "phone"
visualData:
  messages:
    - text: "Hey Sarah, noticed you missed Leg Day this week. Everything ok? - Coach Mike"
      sender: "me"
      time: "10:00 AM"
    - text: "Ugh, honestly just been swamped at work. I felt bad about missing it."
      sender: "them"
      time: "10:05 AM"
    - text: "Don't sweat it! We have a spot in the 6pm class tomorrow. Want me to book you?"
      sender: "me"
      time: "10:06 AM"

# 2. THE STATS (Top Bar)
stats:
  - label: "Show-Up Rate"
    value: "+65%"
  - label: "Cancellations"
    value: "-40%"
  - label: "Revenue Saved"
    value: "$5k/mo"
  - label: "Staff Time"
    value: "0 Hrs"

# 3. THE LOGIC (Sticky Code Block)
codeSnippet:
  filename: "ghost_protocol.js"
  lang: "Logic Flow"
  code: |
    // 1. SCAN DATABASE (Daily @ 8:00 AM)
    Check last_visit_date for all Active Members.

    // 2. DETECT THE DROP-OFF
    IF member was active 3x/week 
    AND visits_this_week == 0:
    -> FLAG as "At-Risk"

    // 3. EXECUTE RE-ENGAGEMENT
    Wait 24 hours (Make it look human).
    
    // 4. SEND SMS
    Send Template: "concern_check_in"
    Sender: "Coach Mike"
---

## The Operational Shift
We moved the client from "Manual Guesswork" to "Automated Detection."

| The Old Way (Manual) | The LogicLoom Way (Automated) |
| :--- | :--- |
| **Weekly Reports:** Staff prints paper attendance lists. | **Real-Time:** System scans the database every morning. |
| **Awkward Calls:** Staff hates making "salesy" check-in calls. | **Casual Texts:** System sends a friendly nudge from "Coach." |
| **Too Late:** "Ghost" members noticed after 3 weeks. | **Instant:** "Ghost" members caught in 5 days. |
| **The Result:** Members quit silently. | **The Result:** Members return immediately. |

<br>

## How The Logic Works
We do not spam your entire list. We use a **"Logic Gate"** to only message people who need it.

1.  **The Watchtower:** The system connects to your check-in software (Mindbody/ZenPlanner). It runs silently in the background 24/7.
2.  **The Filter:** It ignores members who are on vacation or have frozen accounts. It only targets active members who suddenly vanish.
3.  **The Nudge:** It triggers a text message that sounds exactly like a human coach.
    * *Example:* "Hey Sarah, I noticed you missed leg day. You coming in tomorrow?"
4.  **The Hand-off:** If the member replies, the conversation is forwarded to your phone so you can close the loop.