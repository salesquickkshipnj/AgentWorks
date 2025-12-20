---
title: "Automating Intake for a 50-Person Law Firm"
client: "Acme Law Group"
industry: "Legal"
metric: "20hrs/Week Saved"
description: "PDF parsing + structured intake that pushes clean matters into the case management system automatically."
publishDate: 2025-01-15
tags: ["n8n", "Clio", "OpenAI"]
---

<div class="not-prose">

  <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 mb-10">
    <h2 class="font-display text-3xl font-bold text-slate-900 mb-3">Billable hours were leaking into admin work</h2>
    <p class="text-gray-600 max-w-3xl">
      Intake data lived in PDFs, emails, and forms — then got retyped into the case system. The firm wanted speed without losing accuracy.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Input</div>
        <div class="text-sm text-gray-600">PDFs + email attachments + web form submissions</div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Processing</div>
        <div class="text-sm text-gray-600">Extraction + validation + structured mapping</div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 p-6">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Output</div>
        <div class="text-sm text-gray-600">Clean matters created inside the CMS with a full audit trail</div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
    <div class="bg-white border border-gray-100 rounded-3xl p-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
          <i class="ph ph-file-text text-xl"></i>
        </div>
        <h2 class="font-display text-2xl font-bold">The problem</h2>
      </div>

      <p class="text-gray-600 leading-relaxed">
        Intake was slow and inconsistent. Staff were manually extracting details from PDFs and emails,
        which caused errors and delayed case creation.
      </p>

      <ul class="mt-5 space-y-2 text-sm text-gray-600">
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> Copy/paste data entry</li>
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> Missing required fields</li>
        <li class="flex gap-2"><i class="ph ph-x-circle text-red-500 mt-[2px]"></i> No standardized intake pipeline</li>
      </ul>
    </div>

    <div class="bg-white border border-gray-100 rounded-3xl p-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <i class="ph ph-shield-check text-xl"></i>
        </div>
        <h2 class="font-display text-2xl font-bold">What we built</h2>
      </div>

      <div class="space-y-4 text-sm text-gray-600">
        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-semibold text-gray-900">PDF parsing pipeline</div>
            <div class="text-gray-600">Extracts fields, validates completeness, and flags exceptions.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-semibold text-gray-900">Structured matter creation</div>
            <div class="text-gray-600">Creates a clean record inside the CMS with consistent naming + tags.</div>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="w-1 bg-blue-600 rounded-full"></div>
          <div>
            <div class="font-semibold text-gray-900">Audit trail</div>
            <div class="text-gray-600">Every change logged (source doc, extracted fields, decisions).</div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">n8n</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">Clio</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">OpenAI</span>
        <span class="text-xs font-mono bg-gray-50 border border-gray-200 px-2 py-1 rounded text-gray-500">Webhooks</span>
      </div>
    </div>
  </div>

  <div class="bg-slate-900 text-white rounded-3xl p-10 mb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">20 hrs</div>
        <div class="text-sm text-gray-300">Saved weekly</div>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">fewer</div>
        <div class="text-sm text-gray-300">Data entry errors</div>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div class="text-3xl font-bold">faster</div>
        <div class="text-sm text-gray-300">Matter creation</div>
      </div>
    </div>

    <div class="mt-8">
      <a href="/#contact" class="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition-colors w-full md:w-auto">
        Automate My Intake <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>

</div>
