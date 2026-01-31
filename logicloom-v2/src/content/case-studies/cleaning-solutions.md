---
title: "The Invisible Dispatcher"
client: "Apex Facility Services"
industry: "Field Service"
metric: "20 Hrs/Wk Saved"
description: "Eliminating the 'In-Person Estimate' trap to automate 90% of bookings and dispatch crews via SMS."
publishDate: 2026-01-18
tags: ["n8n", "Twilio", "Logistics"]
heroImage: "/cleaning-hero.png"
---

<div class="not-prose mt-8 mb-8 p-6 bg-slate-100 rounded-2xl border-l-4 border-slate-900">
  <ul class="space-y-2 text-slate-700 font-medium">
    <li><strong>🔴 The Problem:</strong> Owner was driving 10+ hours/week just to give free quotes.</li>
    <li><strong>🛠 The Fix:</strong> A "Sight Unseen" proxy calculator linked to Twilio dispatch.</li>
    <li><strong>🟢 The Result:</strong> 90% of bookings automated; Owner reclaimed their weekends.</li>
  </ul>
</div>

<div class="not-prose my-12 grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Quote Speed</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">Instant</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Site Visits</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">Zero</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Reviews</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">+400%</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Admin Saved</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">20hrs/wk</div>
</div>
</div>

## Escaping the "Free Estimate" Trap

Apex was burning fuel and time. For every residential inquiry, the owner drove to the property to give a quote. Combine that with a chaotic 6:00 AM group text to dispatch 15 crews, and the business was unscalable.

**The Solution:** A Remote Estimation Engine that standardizes pricing and handles logistics without a single phone call or site visit.

---

## Why this was hard to automate

Cleaning pricing is variable, and dispatching is logistical chaos. A simple form cannot handle the complexity of "Route Density."

* **The "Sight Unseen" Risk:** How do you price a house without seeing it? We built a calculator logic that uses proxies (Square Footage + # of Baths) to generate a binding quote that is 95% accurate to the final labor cost.
* **Geospatial Dispatch:** Assigning a job to a random crew kills efficiency. We needed logic that checks the zip code of the new job and assigns it to the crew *already* working in that sector to minimize drive time.

<div class="my-8 p-4 bg-blue-50 text-blue-900 rounded-xl text-sm font-semibold flex items-center gap-3">
  <span>💡 Part of the <strong>Operations Autopilot</strong> architecture.</span>
  <a href="/audit?context=OpsAutopilot" class="underline hover:text-blue-700">Audit your Field Ops →</a>
</div>

---

## The Automated Dispatch Flow 

This workflow connects a web calculator to Twilio SMS, handling the conversation with both the client and the crew.

<div class="not-prose my-16">
<div class="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">

<div class="grid md:grid-cols-3 gap-8 relative z-10">

<div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
<div class="text-3xl mb-4">🧮</div>
<h3 class="font-bold text-slate-900 text-lg mb-2">1. Smart Calculator</h3>
<p class="text-sm text-slate-500 leading-relaxed">
Clients input their home details. The system applies a "Price-Per-SqFt" formula and texts them an instant, bookable quote.
</p>
</div>

<div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
<div class="text-3xl mb-4">🚚</div>
<h3 class="font-bold text-slate-900 text-lg mb-2">2. Geo-Dispatch</h3>
<p class="text-sm text-slate-500 leading-relaxed">
Upon booking, the system identifies the nearest crew and texts them the address, gate codes, and "Cat Alerts" for the next morning.
</p>
</div>

<div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
<div class="text-3xl mb-4">⭐</div>
<h3 class="font-bold text-slate-900 text-lg mb-2">3. Auto-QA Loop</h3>
<p class="text-sm text-slate-500 leading-relaxed">
When the job is marked complete, the client gets a "Rate Us" text. 5-stars triggers a Google Review link; 1-star alerts the owner.
</p>
</div>

</div>
</div>
</div>

## The Result
70% of residential jobs are now booked and paid without human interaction. The owner has stopped driving to estimates and reclaimed his weekends.

<div class="not-prose mt-20 p-10 bg-slate-50 rounded-[2rem] border border-gray-100 relative overflow-hidden">
<div class="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
<div class="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-gray-100">
🧹
</div>
<div class="flex-grow">
<h3 class="font-display font-bold text-slate-900 text-2xl">Scale your service business.</h3>
<p class="text-slate-500 mt-2 text-base max-w-lg">
Stop driving to estimates. Automate your quoting, dispatching, and quality control.
</p>
</div>
<a href="/audit?context=OpsAutopilot" class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
Audit My Operations
</a>
</div>
</div>

<div class="mt-12 text-center">
  <p class="text-slate-400 text-sm">Need to automate document intake instead?</p>
  <a href="/case-studies/acme-law" class="text-slate-600 font-semibold hover:text-slate-900">See how we automated Legal Ops →</a>
</div>