"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const examples = [
  {
    label: "Hello World",
    file: "main.rs",
    description: "A Pulsar project is just a Rust program.",
    code: `use pulsar_std::prelude::*;

fn main() {
    println!("Hello from Pulsar!");
}`,
  },
  {
    label: "Blueprints",
    file: "math_nodes.rs",
    description: "Define visual scripting nodes with a simple attribute macro.",
    code: `use pulsar_macros::blueprint;

/// Adds two numbers
#[blueprint(type: pure, category: "Math")]
fn add(a: f32, b: f32) -> f32 {
    a + b
}

/// Prints a message to the console
#[blueprint(type: fn_, category: "Debug")]
fn print(message: String) {
    println!("{}", message);
}

/// Branch based on a condition
#[blueprint(type: control_flow, category: "Flow")]
fn branch(condition: bool) {
    if condition {
        exec_output!("True");
    } else {
        exec_output!("False");
    }
}`,
  },
  {
    label: "Plugin",
    file: "my_plugin.rs",
    description: "Extend the editor with compiled Rust DLLs — full API access.",
    code: `use pulsar_plugin::prelude::*;

pub struct MyPlugin;

impl EditorPlugin for MyPlugin {
    fn name(&self) -> &str {
        "My Custom Plugin"
    }

    fn file_types(&self) -> Vec<FileTypeDefinition> {
        vec![FileTypeDefinition {
            extension: "custom",
            icon: "puzzle",
            editor: "custom_editor",
        }]
    }

    fn on_load(&mut self) {
        println!("Plugin loaded!");
    }
}`,
  },
];

// Very basic syntax highlighting by tokenizing Rust-ish code
function highlight(code) {
  const keywords = ["use", "fn", "let", "mut", "struct", "impl", "pub", "for", "in", "if"];
  const types = ["EditorPlugin", "FileTypeDefinition", "String", "Vec", "Vec3", "RigidBody", "Collider", "Mass", "Velocity"];

  return code.split("\n").map((line, li) => {
    const tokens = [];
    let rest = line;
    let i = 0;

    // Simple pass: color comments, strings, keywords, types
    if (rest.trimStart().startsWith("//")) {
      tokens.push(<span key={i++} className="text-slate-500">{rest}</span>);
    } else {
      // Split by word boundaries and color
      const parts = rest.split(/(\b\w+\b|[^a-zA-Z0-9_]+)/g).filter(Boolean);
      parts.forEach((part, pi) => {
        if (keywords.includes(part)) {
          tokens.push(<span key={pi} className="text-[#0ea5e9]">{part}</span>);
        } else if (types.includes(part)) {
          tokens.push(<span key={pi} className="text-[#38bdf8]">{part}</span>);
        } else if (/^[0-9]+(\.[0-9]+)?$/.test(part)) {
          tokens.push(<span key={pi} className="text-amber-400">{part}</span>);
        } else if (part.startsWith('"') && part.endsWith('"')) {
          tokens.push(<span key={pi} className="text-emerald-400">{part}</span>);
        } else if (/^[A-Z][a-zA-Z0-9]*$/.test(part)) {
          tokens.push(<span key={pi} className="text-violet-400">{part}</span>);
        } else if (/^#\[/.test(part) || part === "#") {
          tokens.push(<span key={pi} className="text-amber-300">{part}</span>);
        } else {
          tokens.push(<span key={pi} className="text-slate-300">{part}</span>);
        }
      });
    }

    return (
      <div key={li} className="flex">
        <span className="select-none w-8 shrink-0 text-right pr-4 text-slate-600 text-xs leading-6">
          {li + 1}
        </span>
        <span className="leading-6">{tokens}</span>
      </div>
    );
  });
}

export default function DemoSection() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(examples[active].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative max-w-5xl mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-[#0ea5e9] font-semibold mb-4">
          Code First
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Elegant by Default
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-base">
          Pulsar's API is designed to read like documentation. Expressive, minimal, and type-safe.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#080808] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl"
      >
        {/* Tab bar */}
        <div className="flex items-center justify-between border-b border-slate-800 px-4">
          <div className="flex">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  active === i
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {ex.label}
                {active === i && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Window dots + copy */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <button
              onClick={copy}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono py-1"
            >
              {copied ? "copied ✓" : "copy"}
            </button>
          </div>
        </div>

        {/* File path */}
        <div className="flex items-center gap-2 px-5 py-2 border-b border-slate-800/50 bg-slate-900/20">
          <span className="text-slate-600 text-xs">~/my-game/src/</span>
          <span className="text-slate-400 text-xs font-mono">{examples[active].file}</span>
        </div>

        {/* Code */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="p-5 overflow-x-auto"
          >
            <pre className="text-xs sm:text-sm font-mono">
              {highlight(examples[active].code)}
            </pre>
          </motion.div>
        </AnimatePresence>

        {/* Footer description */}
        <div className="px-5 py-3 border-t border-slate-800/50 bg-slate-900/20">
          <p className="text-xs text-slate-500">{examples[active].description}</p>
        </div>
      </motion.div>
    </section>
  );
}
