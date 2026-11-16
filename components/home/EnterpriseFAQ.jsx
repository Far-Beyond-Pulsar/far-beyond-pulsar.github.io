import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    question: "Can we ship a commercial game on Pulsar without open-sourcing our game code?",
    answer: (
      <p>
        <strong className="text-white">Yes.</strong> Under MPL-2.0, copyleft obligations only apply to existing MPL-licensed source files that you modify and distribute. All of your game logic, gameplay systems, assets, shaders, and standalone modules written in your own files remain 100% proprietary. You can statically link your proprietary code with Pulsar Engine binaries and sell the resulting game under your own commercial EULA.
      </p>
    ),
  },
  {
    question: "How do we keep proprietary rendering features or custom editor tools closed-source?",
    answer: (
      <>
        <p>Every editor panel, render pass, and data provider component in Pulsar is designed as an isolated plugin.</p>
        <ul>
          <li><strong className="text-white">Custom Editor Tooling:</strong> Because the entire editor is composed of modular extensions, any internal level editors, asset pipelines, or debugging tools you build as standalone plugins live in your own source files and remain completely private.</li>
          <li><strong className="text-white">Custom Render Passes &amp; Pipelines:</strong> Visual render graphs compile down to native rendering pipelines. You can reorder passes, inject custom effects, or replace entire stages of the pipeline with your own proprietary render pass plugins without modifying a single MPL-licensed file.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What happens if we want to tweak one of Pulsar’s default render passes (e.g., the Sky Pass)?",
    answer: (
      <>
        <p>Your obligations depend on whether you modify our existing files or write your own replacement:</p>
        <ul>
          <li><strong className="text-white">Modifying a default pass:</strong> If you edit an existing MPL-licensed file (for example, tweaking a few lines in our default Sky Pass) and ship that modified build, MPL-2.0 requires you to make the source code for that modified file available under the MPL. You can submit a pull request upstream or host a public fork of those modified files.</li>
          <li><strong className="text-white">Building a “secret sauce” pass:</strong> If you want a proprietary atmospheric system, volumetric cloud solver, or bespoke lighting model that remains closed-source, simply implement it from scratch as a new plugin in your own files. You keep your pass 100% proprietary while still using the rest of Pulsar’s default render pipeline untouched.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Does MPL-2.0 conflict with console SDKs and NDAs (PlayStation, Xbox, Nintendo)?",
    answer: <p><strong className="text-white">No—provided platform-specific code is kept in separate files.</strong> Because MPL-2.0 operates strictly at the file boundary, console platform backends, proprietary graphics API implementations, and NDA-covered certification code can live inside separate, private crates or plugins. As long as NDA-protected code is not written directly into an existing MPL-licensed file, you will never face a conflict between open-source disclosure rules and platform NDAs.</p>,
  },
  {
    question: "What if we only use modified engine tools internally and never distribute them?",
    answer: <p>MPL-2.0’s source-sharing obligations are only triggered upon distribution outside your organization. If your studio modifies core MPL-licensed editor files strictly for internal production use by your own employees and contractors, you are under no obligation to publish those internal changes. <em>(Note: Any modified MPL files compiled into the shipped game client distributed to players must still have their source made available.)</em></p>,
  },
  {
    question: "How does our legal team maintain clean compliance across a large engineering team?",
    answer: (
      <>
        <p>Because Pulsar separates core engine crates from user plugins at the workspace and architecture level, compliance is straightforward to enforce in CI:</p>
        <ul>
          <li><strong className="text-white">Keep the core clean:</strong> Treat the core Pulsar repository as an upstream dependency or submodule.</li>
          <li><strong className="text-white">Isolate proprietary work:</strong> Place all game code, custom render passes, console backends, and internal tools in your studio’s separate plugin crates.</li>
          <li><strong className="text-white">Audit modified upstream files:</strong> Any pull request in your studio’s repository that touches an existing file carrying an <code>SPDX-License-Identifier: MPL-2.0</code> header is flagged automatically—letting leads decide whether to upstream the fix or move the feature into a standalone proprietary plugin.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Does MPL-2.0 include patent protections?",
    answer: <p><strong className="text-white">Yes.</strong> MPL-2.0 includes an explicit patent grant from all contributors covering their contributions to the codebase, alongside defensive termination clauses if a party initiates patent litigation over the covered software.</p>,
  },
];

export default function EnterpriseFAQ() {
  return (
    <section id="enterprise-licensing" className="scroll-mt-20 border-t border-white/[0.08] px-5 py-24 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            <span className="h-px w-8 bg-[#38bdf8]/70" />
            Enterprise &amp; AAA Licensing
          </p>
          <h2 className="mb-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">Licensing FAQ</h2>
          <p className="max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">
            Pulsar Engine is licensed under the <strong className="text-white/75">Mozilla Public License 2.0 (MPL-2.0)</strong>. Unlike strong copyleft licenses (such as the GPL) that affect entire linked applications, MPL-2.0 enforces <strong className="text-white/75">file-level copyleft</strong>. Combined with Pulsar’s plugin-driven architecture, this gives commercial studios full ownership over their proprietary game code, custom tools, and bespoke rendering tech—with zero royalties or seat fees.
          </p>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {QUESTIONS.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-white/85 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-[#38bdf8]/70 transition-transform group-open:rotate-180" />
              </summary>
              <div className="faq-answer max-w-3xl pb-6 pr-8 text-sm leading-7 text-white/55 sm:text-[15px]">{answer}</div>
            </details>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-white/35">
          Disclaimer: This FAQ is provided for informational purposes to explain how Pulsar Engine’s architecture aligns with the Mozilla Public License 2.0 and does not constitute formal legal advice. Studio legal teams should review the full text of the <a className="text-[#38bdf8]/80 underline decoration-white/20 underline-offset-4 hover:text-[#7dd3fc]" href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank" rel="noopener noreferrer">MPL-2.0 License</a> with their counsel.
        </p>
      </div>
    </section>
  );
}
