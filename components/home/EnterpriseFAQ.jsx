import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    question: "Can we ship a commercial game on Pulsar without open-sourcing our game code?",
    answer: (
      <p>
        <strong className="text-white">Yes.</strong> Your independently authored game code, assets, shaders, and modules can remain proprietary, and MPL-2.0 permits combining covered code with a larger proprietary work. If you distribute a game containing Pulsar code, you must make the corresponding MPL-covered source available to recipients and tell them how to obtain it. This includes unmodified covered files as well as covered modifications; preserve the applicable license notices and recipients’ MPL rights. The source does not have to be published for everyone, but your commercial EULA cannot restrict recipients’ rights in the covered source. See Mozilla’s <a className="text-[#38bdf8]/80 underline decoration-white/20 underline-offset-4 hover:text-[#7dd3fc]" href="https://www.mozilla.org/en-US/MPL/2.0/FAQ/" target="_blank" rel="noopener noreferrer">MPL-2.0 FAQ</a> for details.
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
          <li><strong className="text-white">Custom Render Passes &amp; Pipelines:</strong> Visual render graphs compile down to native rendering pipelines. You can reorder passes, inject custom effects, or replace entire stages of the pipeline with your own proprietary render pass plugins. Independently authored plugins and modules that do not incorporate MPL-covered source code may remain proprietary, even when linked into the same executable.</li>
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
          <li><strong className="text-white">Modifying a default pass:</strong> If you edit an existing MPL-licensed file (for example, tweaking our default Sky Pass) and distribute an executable containing it, MPL-2.0 requires you to make that covered source available to the recipients under the MPL and tell them how to obtain it. The license does not itself require publishing those changes to the general public; a public fork or upstream pull request is optional.</li>
          <li><strong className="text-white">Building a “secret sauce” pass:</strong> A pass independently authored in a new file that does not contain MPL-covered code may remain proprietary, even when linked into the same executable. Simply moving or copying MPL-covered code into a new file does not make it proprietary; that file is also a Modification under MPL-2.0.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Does MPL-2.0 conflict with console SDKs and NDAs (PlayStation, Xbox, Nintendo)?",
    answer: <p>Pulsar’s file-level copyleft and plugin architecture are designed to accommodate proprietary console SDK integrations. Platform-specific implementations can be maintained in separate proprietary modules without automatically subjecting them to MPL-2.0. Studios should verify compliance with their applicable platform agreements and SDK confidentiality requirements, including how the covered source and binaries are distributed.</p>,
  },
  {
    question: "What if we only use modified engine tools internally and never distribute them?",
    answer: <p>MPL-2.0’s distribution obligations are not triggered by use or distribution within your organization. If your studio modifies core MPL-licensed editor files strictly for internal production use, it does not have to provide those internal changes to the public. If you later distribute an executable containing covered code outside your organization, you must make the corresponding covered source available to its recipients, whether the files are modified or unmodified.</p>,
  },
  {
    question: "How does our legal team maintain clean compliance across a large engineering team?",
    answer: (
      <>
        <p>Pulsar separates core engine crates from user plugins at the workspace and architecture level, which can help teams track compliance in CI:</p>
        <ul>
          <li><strong className="text-white">Keep the core clean:</strong> Treat the core Pulsar repository as an upstream dependency or submodule.</li>
          <li><strong className="text-white">Isolate proprietary work:</strong> Place all game code, custom render passes, console backends, and internal tools in your studio’s separate plugin crates.</li>
          <li><strong className="text-white">Track covered source and notices:</strong> When distributing an executable with MPL-covered code, provide recipients a reasonable way to obtain the corresponding covered source (including unmodified files) and preserve applicable license notices.</li>
          <li><strong className="text-white">Audit files containing covered code:</strong> Flag changes to files carrying an <code>SPDX-License-Identifier: MPL-2.0</code> header, as well as new files that contain MPL-covered code. Decide whether to upstream changes or provide the covered source to recipients as required.</li>
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
