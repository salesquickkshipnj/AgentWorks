---
title: "Instant Lead-to-Estimate Pipeline"
client: "Commercial Roofing Contractor"
industry: "Home Services"
metric: "4x Faster Response"
description: "High-velocity lead engine. Qualifies homeowners and dispatches nearest estimator instantly via SMS."
publishDate: 2025-10-02
tags: ["n8n", "HubSpot", "Twilio", "Google Maps API"]
heroImage: "/roofing-leads-hero.png"
---

<div class="not-prose my-12 grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Response Time</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">12s</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Lead Leakage</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">0%</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Monthly Volume</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">450+</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Stack Cost</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">$40</div>
</div>
</div>

## The Bottleneck

In the roofing industry, **speed is the only differentiator.** The client was spending $15,000/mo on Google Ads, generating high-quality leads, but their manual intake process was bleeding cash.

The old workflow was linear and slow:
1. Lead arrives via email.
2. Office admin reads email (often 30-60 mins later).
3. Admin calls lead to qualify.
4. Admin calls estimators to check location.
5. Admin manually books calendar.

**The Failure Point:** By the time the admin called back, **40% of homeowners had already booked an estimate** with a competitor who answered instantly.

---

## The Engineering Solution

We replaced the human admin with an **Event-Driven Architecture**. We don't "check email"—we listen for webhooks.

<div class="not-prose my-16">
<div class="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/40 overflow-hidden">
<div class="bg-gray-50/80 backdrop-blur px-8 py-4 border-b border-gray-100 flex items-center justify-between">
<span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Logic Flow v2.1</span>
<span class="text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full">n8n Workflow</span>
</div>
<div class="p-8 md:p-12 space-y-12">

<div class="flex gap-8">
<div class="flex flex-col items-center">
<div class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg">1</div>
<div class="h-full w-px bg-gray-100 mt-4"></div>
</div>
<div class="pb-4">
<h4 class="font-display text-xl font-bold text-slate-900">Ingestion & Standardization</h4>
<p class="text-slate-500 mt-3 leading-relaxed text-lg">
Webhook catches the raw payload from Facebook Ads. We immediately run a custom JavaScript function to normalize phone numbers to E.164 format (e.g., +15550000000) for Twilio compatibility.
</p>
</div>
</div>

<div class="flex gap-8">
<div class="flex flex-col items-center">
<div class="w-12 h-12 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 flex items-center justify-center font-bold text-lg">2</div>
<div class="h-full w-px bg-gray-100 mt-4"></div>
</div>
<div class="pb-4">
<h4 class="font-display text-xl font-bold text-slate-900">Geo-Spatial Routing</h4>
<p class="text-slate-500 mt-3 leading-relaxed text-lg">
Instead of guessing, we query the <strong>Google Maps Distance Matrix API</strong>. We calculate the real-time driving duration from the lead's address to the current location of every active estimator.
</p>
</div>
</div>

<div class="flex gap-8">
<div class="flex flex-col items-center">
<div class="w-12 h-12 rounded-2xl bg-white border-2 border-green-500 text-green-600 flex items-center justify-center font-bold text-lg shadow-sm">3</div>
</div>
<div>
<h4 class="font-display text-xl font-bold text-slate-900">Orchestrated Dispatch</h4>
<p class="text-slate-500 mt-3 leading-relaxed text-lg">
The system identifies the nearest driver and sends an SMS: <em>"New Lead 12 mins away. Reply CLAIM to book."</em> If they don't reply in 90 seconds, the logic loop escalates to the next closest driver.
</p>
</div>
</div>

</div>
</div>
</div>

## The Code Logic

Simple automations fail because they lack state management. Our system handles "Out of Service Area" edge cases automatically.

<div class="not-prose bg-[#1e1e1e] rounded-3xl overflow-hidden shadow-2xl my-12 ring-1 ring-white/10">
<div class="flex items-center px-6 py-4 border-b border-white/5 bg-[#252525]">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div class="ml-4 text-xs text-gray-500 font-mono">router.js</div>
</div>
<pre class="p-8 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300">
<span class="text-[#c586c0]">const</span> lead = items[0].json;

<span class="text-gray-500">// 1. Filter Bad Locations</span>
<span class="text-[#c586c0]">if</span> (lead.distance > 50) {
  <span class="text-[#c586c0]">return</span> { <span class="text-[#4ec9b0]">error</span>: <span class="text-[#ce9178]">"Out of Service Area"</span> };
}

<span class="text-gray-500">// 2. Calculate Fleet Distances</span>
<span class="text-[#c586c0]">return</span> mapsClient.distancematrix({
  <span class="text-[#9cdcfe]">origins</span>: [lead.address],
  <span class="text-[#9cdcfe]">destinations</span>: fleetLocations,
  <span class="text-[#9cdcfe]">mode</span>: <span class="text-[#ce9178]">"driving"</span>
});</pre>
</div>

<div class="not-prose mt-20 p-10 bg-slate-50 rounded-[2rem] border border-gray-100 relative overflow-hidden">
<div class="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
<div class="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-gray-100">
🚀
</div>
<div class="flex-grow">
<h3 class="font-display font-bold text-slate-900 text-2xl">Stop losing leads to speed.</h3>
<p class="text-slate-500 mt-2 text-base max-w-lg">
Most dispatch systems are manual. We can automate yours in less than a week.
</p>
</div>
<a href="/audit?context=Roofing+Dispatch&symptom=Slow+Lead+Response" class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
Audit My Dispatch Logic
</a>
</div>
</div>