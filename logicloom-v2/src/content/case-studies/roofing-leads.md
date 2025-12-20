---
title: "Instant Lead-to-Estimate Pipeline for a Roofing Team"
client: "NorthEdge Roofing"
industry: "Home Services"
metric: "4x Faster Lead Response"
description: "A lead capture + qualification system that routes the right jobs to the right estimator — automatically."
publishDate: 2025-10-02
tags: ["n8n", "HubSpot", "Calendly", "Google Sheets"]
---

<div class="not-prose">

  <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 mb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Context</div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Leads were coming in while crews were on-site. Response time depended on whoever saw the phone first.
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Build</div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Multi-channel intake → qualification → estimate booking → CRM + spreadsheet logging with fallbacks.
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Result</div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Faster first response, fewer missed calls, and quotes scheduled without the office playing phone tag.
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
    <div class="bg-white border border-gray-100 rounded-3xl p-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
          <i class="ph ph-phone-missed text-xl"></i>
        </div>
        <h2 class="font-display text-2xl font-bold">The problem</h2>
      </div>
      <p class="text-gray-600 leading-relaxed">
        Roofing teams lose jobs when the first response is slow. The best leads don’t wait.
        The office was overloaded, and the crew couldn’t stop mid-job to qualify a caller.
      </p>
      <ul class="mt-5 space-y-2 text-sm text-gray-600">
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> Missed calls during installs</li>
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> Unqualified leads eating estimator time</li>
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> No consistent follow-up sequence</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-100 rounded-3xl p-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <i class="ph ph-wrench text-xl"></i>
        </div>
        <h2 class="font-display text-2xl font-bold">What we built</h2>
      </div>

      <div class="space-y-4 text-sm text-gray-600">
        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-mono text-xs text-gray-400 mb-1">Step 01</div>
            <div class="font-semibold text-gray-900">Lead capture (call / form / text)</div>
            <div class="text-gray-600">Every inbound creates a unified lead record.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-mono text-xs text-gray-400 mb-1">Step 02</div>
            <div class="font-semibold text-gray-900">Qualification</div>
            <div class="text-gray-600">Service area, job type, timeline, budget signals.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-mono text-xs text-gray-400 mb-1">Step 03</div>
            <div class="font-semibold text-gray-900">Instant scheduling</div>
            <div class="text-gray-600">Qualified leads get an estimate slot automatically.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-mono text-xs text-gray-400 mb-1">Step 04</div>
            <div class="font-semibold text-gray-900">Logging + handoff</div>
            <div class="text-gray-600">HubSpot + Google Sheet + notifications with retries.</div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">n8n</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">HubSpot</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">Calendly</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">Google Sheets</span>
      </div>
    </div>
  </div>

  <div class="bg-slate-900 text-white rounded-3xl p-10 mb-10">
    <div class="flex items-center gap-4 mb-8 opacity-70">
      <div class="h-px bg-white flex-grow"></div>
      <span class="uppercase tracking-widest text-sm font-bold">Outcome</span>
      <div class="h-px bg-white flex-grow"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">4x</div>
        <div class="text-sm text-gray-300">Faster lead response</div>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">+ consistency</div>
        <div class="text-sm text-gray-300">Same follow-up every time</div>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">less admin</div>
        <div class="text-sm text-gray-300">Estimator time protected</div>
      </div>
    </div>

    <div class="mt-8">
      <a href="/#contact" class="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition-colors w-full md:w-auto">
        Analyze My Workflow <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>

</div>

## Notes
This case study is written to render like a landing page inside your existing case-study template, without needing extra components.
