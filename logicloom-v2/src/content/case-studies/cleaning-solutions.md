---
layout: ../../layouts/CaseStudyLayout.astro
title: "The 'Invisible' Dispatcher"
client: "Apex Facility Services"
industry: "Commercial & Residential Cleaning"
pubDate: 2026-01-18
description: "Eliminating the 'In-Person Estimate' trap to automate 90% of bookings and reduce admin time by 20 hours a week."
author: "LogicLoom Systems"
image:
  url: "/images/case-studies/cleaning-automation.png"
  alt: "An automated scheduling dashboard showing cleaning routes and staff dispatch."
tags: ["Automation", "Field Service", "Logistics", "AI Operations"]
---

## Client Profile

| **Metric** | **Detail** |
| :--- | :--- |
| **Client** | Apex Facility Services |
| **Location** | Short Hills, NJ |
| **Industry** | Commercial & Residential Cleaning |
| **Scale** | 15 Crews / $1.8M Annual Revenue |

---

## The Bottleneck (The "Before")

Apex was stuck in the **"In-Person Estimate" Trap**. 

For every residential inquiry (e.g., *"How much for a 4-bedroom deep clean?"*), the owner felt compelled to visit the site or spend 20 minutes on the phone to give an accurate price. This created a massive administrative bottleneck:
* **Lead Decay:** Quotes took 24-48 hours to finalize.
* **Wasted Fuel:** The owner drove ~200 miles/week just to look at houses that didn't convert.
* **Scheduling Chaos:** Dispatching 15 crews was done via a chaotic group text message every morning at 6:00 AM.

---

## The LogicLoom Solution

We engineered a **Remote Estimation & Automated Dispatch Engine** that standardizes pricing and logistics without a single site visit.

### 1. The "Calculator" Chatbot
We implemented an intelligent intake form that acts as a virtual estimator. It captures variables (Square Footage, # of Bathrooms, Pets, Flooring Type) and applies a custom pricing logic to generate an **instant, binding quote** via SMS and Email. 
* *Result:* The customer gets a price in 30 seconds, not 2 days.

### 2. The "Uber-Style" Dispatch
Once a job is booked, LogicLoom takes over the logistics. 
* **Route Optimization:** The system assigns the job to the crew geographically closest to that neighborhood.
* **Automated Briefings:** At 5:00 PM the day before, the assigned crew receives an automated SMS containing the address, gate codes, specific client notes (e.g., *"Don't let the cat out"*), and a checklist tailored to that specific package.

### 3. Quality Assurance Loop
When the crew marks the job "Complete" on their mobile link, the system automatically texts the homeowner: *"The team just finished up! Please rate your service 1-5."*
* **5 Stars:** Triggers a Google Review request.
* **1-3 Stars:** Instantly alerts the Operations Manager to call the client before they post publicly.

---

## The Results (The "After")

> *"I haven't driven to a residential estimate in six months. The system prices it perfectly, books the crew, and sends me the invoice. I finally have my weekends back."*
> — **Marcus D., Owner**

* **Admin Time:** Reduced by **20 hours/week** (Owner no longer acts as dispatcher).
* **Booking Velocity:** 70% of residential jobs are now booked and paid without human interaction.
* **Customer Satisfaction:** Google Review volume increased by **400%** due to the automated QA loop.

---

## System Architecture

* **Core Orchestration:** [n8n](https://n8n.io)
* **Communication:** Twilio (SMS Dispatch)
* **Database:** Airtable (Crew Logic & Pricing Formulas)
* **Field Software:** Jobber API