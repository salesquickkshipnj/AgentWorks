---
title: "E-Com Support Triage + Refund Automation"
client: "SignalGoods"
industry: "E-Commerce"
metric: "12hrs/Week Saved"
description: "An inbox triage system that routes tickets, drafts replies, and automates low-risk refund workflows."
publishDate: 2025-09-18
tags: ["n8n", "Shopify", "Gmail", "OpenAI"]
---

<div class="not-prose">

  <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 mb-10">
    <h2 class="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-3">What changed after launch</h2>
    <p class="text-gray-600 max-w-3xl">
      Support stopped being a “panic queue.” Common issues were handled instantly, and the human team only touched edge cases.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Before</div>
        <div class="text-sm text-gray-600 leading-relaxed">
          One inbox. No routing. Refunds required manual order lookup + copy/paste replies.
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">After</div>
        <div class="text-sm text-gray-600 leading-relaxed">
          AI classification + order context + templated decisions with an approval step.
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Impact</div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Faster replies, fewer escalations, and less time spent in “where is my order?” threads.
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
    <div class="bg-white border border-gray-100 rounded-3xl p-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
          <i class="ph ph-envelope text-xl"></i>
        </div>
        <h2 class="font-display text-2xl font-bold">The problem</h2>
      </div>
      <p class="text-gray-600 leading-relaxed">
        The inbox was overloaded with repetitive tickets — order status, address changes, refunds, cancellations.
        Each one required context switching and manual lookup in Shopify.
      </p>
      <ul class="mt-5 space-y-2 text-sm text-gray-600">
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> Slow first response</li>
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> Refunds taking too long</li>
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> No consistent routing rules</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-100 rounded-3xl p-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <i class="ph ph-flow-arrow text-xl"></i>
        </div>
        <h2 class="font-display text-2xl font-bold">What we built</h2>
      </div>

      <div class="space-y-4 text-sm text-gray-600">
        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-semibold text-gray-900">Inbox triage (AI + rules)</div>
            <div class="text-gray-600">Classifies intent + urgency, then routes automatically.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-semibold text-gray-900">Order context injection</div>
            <div class="text-gray-600">Pulls Shopify details so replies aren’t guessing.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-semibold text-gray-900">Refund automation (guardrails)</div>
            <div class="text-gray-600">Low-risk refunds handled automatically; edge cases escalated.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-semibold text-gray-900">Audit trail + reporting</div>
            <div class="text-gray-600">Every decision logged for accountability.</div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">n8n</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">Shopify</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">Gmail</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">OpenAI</span>
      </div>
    </div>
  </div>

  <div class="bg-slate-900 text-white rounded-3xl p-10 mb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">12 hrs</div>
        <div class="text-sm text-gray-300">Saved weekly</div>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">faster</div>
        <div class="text-sm text-gray-300">First response</div>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">cleaner</div>
        <div class="text-sm text-gray-300">Support operations</div>
      </div>
    </div>

    <div class="mt-8">
      <a href="/#contact" class="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition-colors w-full md:w-auto">
        Build This For Me <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>

</div>
