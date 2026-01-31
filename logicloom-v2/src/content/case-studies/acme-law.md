---
title: "Legal Ops Transformation"
client: "Estate Planning Firm (NJ)"
industry: "Legal"
metric: "20hrs/Week Reclaimed"
description: "End-to-end intake automation. Parsing unstructured PDFs into validated Clio matters with zero human data entry."
publishDate: 2025-01-15
tags: ["n8n", "Clio", "OpenAI"]
heroImage: "/legal-hero.png"
---

<div class="not-prose mt-8 mb-8 p-6 bg-slate-100 rounded-2xl border-l-4 border-slate-900">
  <ul class="space-y-2 text-slate-700 font-medium">
    <li><strong>🔴 The Problem:</strong> Attorneys wasted 20 hrs/week reading PDF referrals & manually typing data.</li>
    <li><strong>🛠 The Fix:</strong> An "AI Paralegal" agent that extracts entities & runs conflict checks.</li>
    <li><strong>🟢 The Result:</strong> 100% data accuracy; Zero manual entry; Billable hours increased.</li>
  </ul>
</div>

<div class="not-prose my-12 grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Hours Reclaimed</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">20h/wk</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Data Accuracy</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">100%</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Manual Entry</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">0 min</div>
</div>
<div class="p-6 bg-gray-50 rounded-3xl border border-gray-100">
<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Conflict Check</div>
<div class="text-3xl font-bold text-slate-900 tracking-tight">Auto</div>
</div>
</div>

## The "Data Entry Tax"

High-value attorneys were acting as expensive data clerks. Leads arrived as PDF attachments from referral sources or messy emails. The attorneys had to read them, perform a conflict check, and manually type details into Clio.

**The Cost:** 20 hours a week of non-billable administrative work.

---

## Why this was hard to automate

Legal intake isn't just data entry; it's risk management. Standard tools fail to account for the nuance of legal ethics.

* **The Unstructured Input:** Referrals often come as scanned PDF letters. Standard OCR tools make mistakes. We needed an LLM (Large Language Model) to "read" the context and distinguish between a "Plaintiff" and a "Defendant."
* **The Logic Loop:** You cannot blindly add contacts to Clio. You must search for the name first (Conflict Check). If they exist, you append a note. If they don't, you create a contact. This "Search → Decision → Action" loop is brittle in drag-and-drop builders but robust in custom logic.

<div class="my-8 p-4 bg-blue-50 text-blue-900 rounded-xl text-sm font-semibold flex items-center gap-3">
  <span>💡 Part of the <strong>Operations Autopilot</strong> architecture.</span>
  <a href="/audit?context=OpsAutopilot" class="underline hover:text-blue-700">Audit your Intake Workflow →</a>
</div>

---

## The Intake Protocol 

We deployed an autonomous agent that acts as a paralegal. It reads documents, understands legal context, and drafts matters.

<div class="not-prose my-16">
<div class="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/40 overflow-hidden">
<div class="bg-gray-50/80 backdrop-blur px-8 py-4 border-b border-gray-100 flex items-center justify-between">
<span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Paralegal Logic v2.0</span>
<span class="text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Clio Integration</span>
</div>
<div class="p-8 md:p-12 space-y-12">

<div class="flex gap-8">
<div class="flex flex-col items-center">
<div class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg">1</div>
<div class="h-full w-px bg-gray-100 mt-4"></div>
</div>
<div class="pb-4">
<h4 class="font-display text-xl font-bold text-slate-900">Entity Extraction</h4>
<p class="text-slate-500 mt-3 leading-relaxed text-lg">
The agent reads the PDF attachment using OCR and AI. It identifies potential clients, adverse parties, and key dates (e.g., court hearings).
</p>
</div>
</div>

<div class="flex gap-8">
<div class="flex flex-col items-center">
<div class="w-12 h-12 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 flex items-center justify-center font-bold text-lg">2</div>
<div class="h-full w-px bg-gray-100 mt-4"></div>
</div>
<div class="pb-4">
<h4 class="font-display text-xl font-bold text-slate-900">Automated Conflict Check</h4>
<p class="text-slate-500 mt-3 leading-relaxed text-lg">
Before creating a client, the system searches the Clio database for the extracted names. If a match is found, it flags a "Potential Conflict" to the senior partner.
</p>
</div>
</div>

<div class="flex gap-8">
<div class="flex flex-col items-center">
<div class="w-12 h-12 rounded-2xl bg-white border-2 border-green-500 text-green-600 flex items-center justify-center font-bold text-lg shadow-sm">3</div>
</div>
<div>
<h4 class="font-display text-xl font-bold text-slate-900">Draft Matter Creation</h4>
<p class="text-slate-500 mt-3 leading-relaxed text-lg">
If clear, it creates a <strong>Pending Matter</strong> in Clio with all fields populated. The attorney simply reviews and clicks "Activate."
</p>
</div>
</div>

</div>
</div>
</div>

## The Entity Extraction Code

Using OpenAI's function calling, we ensure structured data extraction every time.

<div class="not-prose bg-[#1e1e1e] rounded-3xl overflow-hidden shadow-2xl my-12 ring-1 ring-white/10">
<div class="flex items-center px-6 py-4 border-b border-white/5 bg-[#252525]">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div class="ml-4 text-xs text-gray-500 font-mono">extractor.js</div>
</div>
<pre class="p-8 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300">
<span class="text-gray-500">// AI extracts parties from PDF</span>
{
  <span class="text-[#9cdcfe]">"client"</span>: {
    <span class="text-[#9cdcfe]">"name"</span>: <span class="text-[#ce9178]">"John Doe"</span>,
    <span class="text-[#9cdcfe]">"role"</span>: <span class="text-[#ce9178]">"Plaintiff"</span>
  },
  <span class="text-[#9cdcfe]">"opposing_party"</span>: {
    <span class="text-[#9cdcfe]">"name"</span>: <span class="text-[#ce9178]">"MegaCorp Inc."</span>,
    <span class="text-[#9cdcfe]">"role"</span>: <span class="text-[#ce9178]">"Defendant"</span>
  },
  <span class="text-[#9cdcfe]">"matter_type"</span>: <span class="text-[#ce9178]">"Civil Litigation"</span>
}</pre>
</div>

<div class="not-prose mt-20 p-10 bg-slate-50 rounded-[2rem] border border-gray-100 relative overflow-hidden">
<div class="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
<div class="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-gray-100">
⚖️
</div>
<div class="flex-grow">
<h3 class="font-display font-bold text-slate-900 text-2xl">Stop doing paralegal work.</h3>
<p class="text-slate-500 mt-2 text-base max-w-lg">
Automate your intake, conflict checks, and matter creation. Focus on billing hours, not data entry.
</p>
</div>
<a href="/audit?context=OpsAutopilot" class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
Audit My Firm
</a>
</div>
</div>

<div class="mt-12 text-center">
  <p class="text-slate-400 text-sm">Need HIPAA-compliant automation?</p>
  <a href="/case-studies/dental-intake" class="text-slate-600 font-semibold hover:text-slate-900">See our Medical Intake System →</a>
</div>