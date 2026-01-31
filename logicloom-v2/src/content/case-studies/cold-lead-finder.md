---
title: "AI-Powered Cold Lead Finder"
client: "Growth Marketing Agency"
industry: "B2B Marketing"
metric: "90% Time Saved"
description: "How we automated the scraping, filtering, and enriching of high-quality leads using n8n and AI."
publishDate: 2025-10-28
tags: ["n8n", "OpenAI", "Google Sheets", "Lead Gen"]
heroImage: "/cold-lead-finder.png"
---

<div class="not-prose mt-8 mb-8 p-6 bg-slate-100 rounded-2xl border-l-4 border-slate-900">
  <ul class="space-y-2 text-slate-700 font-medium">
    <li><strong>🔴 The Problem:</strong> Sales reps wasted 4 hours/day manually copying data from Google Maps.</li>
    <li><strong>🛠 The Fix:</strong> An Apify Scraper + AI Qualifier + Waterfall Enrichment pipeline.</li>
    <li><strong>🟢 The Result:</strong> 500 verified leads/day; 90% reduction in research time.</li>
  </ul>
</div>

<div class="not-prose my-12 grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Time Savings</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">90%</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Lead Volume</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">500/day</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Data Accuracy</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">99%</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Cost/Lead</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">$0.04</div>
</div>
</div>

## The "Copy-Paste" Nightmare

The agency's sales team was spending 4 hours a day manually browsing Google Maps, copying phone numbers, and guessing emails for local businesses. This manual drudgery meant they only had time to contact 20 prospects a day, most of whom were unqualified.

**The goal:** Automate the research phase so sales reps could focus purely on closing deals.

---

## Why this was hard to automate

You cannot simply "Zap" Google Maps.

* **The Anti-Scraping Hurdle:** Google aggressively blocks standard scrapers. We needed **Apify** actors running on rotating residential proxies to gather data reliably.
* **The Quality Filter:** Scraping gives you *quantity*, not quality. A simple scraper would pull 1,000 "Plumbers," but half of them might be new construction subcontractors (who don't need marketing).
* **The Logic Gap:** We needed an AI agent to actually *visit* the prospect's website and answer: *"Do they offer residential services?"* Standard automation tools cannot perform this visual verification step.

<div class="my-8 p-4 bg-blue-50 text-blue-900 rounded-xl text-sm font-semibold flex items-center gap-3">
  <span>💡 Part of the <strong>Growth Engine</strong> architecture.</span>
  <a href="/audit?context=GrowthEngine" class="underline hover:text-blue-700">See if this fits your business →</a>
</div>

---

## The Scraping & Enrichment Pipeline

We built a headless browser automation that acts as a "virtual researcher," working 24/7.

<div class="not-prose my-16">
<div class="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

<div class="grid gap-12 relative z-10">
  
<div class="flex items-start gap-6">
<div class="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-2xl">🗺️</div>
<div>
<h4 class="text-xl font-bold text-white mb-2">1. Maps Extraction</h4>
<p class="text-slate-400 leading-relaxed">
n8n triggers an Apify actor to scrape Google Maps for specific keywords (e.g., "Plumbers in Austin"). It grabs Name, Website, Review Count, and Phone.
</p>
</div>
</div>

<div class="flex items-start gap-6">
<div class="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-2xl">🧠</div>
<div>
<h4 class="text-xl font-bold text-white mb-2">2. AI Qualification</h4>
<p class="text-slate-400 leading-relaxed">
This is the magic step. We visit the prospect's website and use OpenAI to answer: <em>"Does this company offer residential services? Are they a franchise?"</em> If NO, we discard them immediately.
</p>
</div>
</div>

<div class="flex items-start gap-6">
<div class="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-2xl">✉️</div>
<div>
<h4 class="text-xl font-bold text-white mb-2">3. Waterfall Enrichment</h4>
<p class="text-slate-400 leading-relaxed">
For qualified leads, we ping Hunter.io and Apollo APIs to find the CEO's personal email. The final clean list is pushed to HubSpot automatically.
</p>
</div>
</div>

</div>
</div>
</div>

## The Filter Logic

We don't want *more* leads; we want *better* leads. The JavaScript code block in n8n enforces strict quality control before you pay for enrichment data.

<div class="not-prose bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm my-12">
<div class="bg-gray-50 px-6 py-3 border-b border-gray-200 text-xs font-mono text-gray-500 uppercase tracking-widest">
quality_filter.js
</div>
<pre class="p-8 overflow-x-auto text-sm font-mono leading-relaxed text-slate-800">
<span class="text-blue-600">const</span> lead = items[0].json;

<span class="text-gray-400">// Rule 1: Must be well-rated but not too big</span>
<span class="text-blue-600">if</span> (lead.rating < 4.0 || lead.reviewCount > 500) {
  <span class="text-blue-600">return</span> { <span class="text-purple-600">qualified</span>: <span class="text-blue-600">false</span>, <span class="text-purple-600">reason</span>: <span class="text-green-600">"Bad Fit"</span> };
}

<span class="text-gray-400">// Rule 2: Must have a website</span>
<span class="text-blue-600">if</span> (!lead.website) {
  <span class="text-blue-600">return</span> { <span class="text-purple-600">qualified</span>: <span class="text-blue-600">false</span>, <span class="text-purple-600">reason</span>: <span class="text-green-600">"No Digital Presence"</span> };
}

<span class="text-blue-600">return</span> { <span class="text-purple-600">qualified</span>: <span class="text-blue-600">true</span>, <span class="text-purple-600">data</span>: lead };</pre>
</div>

<div class="not-prose mt-20 p-10 bg-slate-50 rounded-[2rem] border border-gray-100 relative overflow-hidden">
<div class="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
<div class="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-gray-100">
🎯
</div>
<div class="flex-grow">
<h3 class="font-display font-bold text-slate-900 text-2xl">Stop manually copying from Maps.</h3>
<p class="text-slate-500 mt-2 text-base max-w-lg">
We can build a scraper that fills your CRM with 500+ verified leads every morning.
</p>
</div>
<a href="/audit?context=GrowthEngine" class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
Audit My Lead Gen
</a>
</div>
</div>

<div class="mt-12 text-center">
  <p class="text-slate-400 text-sm">Once you have leads, how do you alert your team?</p>
  <a href="/case-studies/audit-form-automation" class="text-slate-600 font-semibold hover:text-slate-900">See how we automated Sales Alerts →</a>
</div>