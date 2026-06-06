"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Minimal dark theme — hand-tuned to match the site palette
const pulsarTheme = {
  'code[class*="language-"]': { color: "#c9d1d9", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "1.7" },
  'pre[class*="language-"]': { background: "transparent", margin: 0, padding: 0, overflow: "auto" },
  comment: { color: "#4a5568" },
  punctuation: { color: "#6b7280" },
  property: { color: "#79c0ff" },
  keyword: { color: "#ff7b72" },
  string: { color: "#a5d6ff" },
  number: { color: "#f0883e" },
  "class-name": { color: "#ffa657" },
  function: { color: "#d2a8ff" },
  operator: { color: "#89ddff" },
  "attr-name": { color: "#79c0ff" },
  variable: { color: "#c9d1d9" },
  "builtin": { color: "#ffa657" },
  "macro": { color: "#ff7b72", fontStyle: "italic" },
};

const TABS = [
  {
    label: "Game Setup",
    file: "main.rs",
    description: "Initialize the engine, register types, and run your game.",
    code: `use pulsar_std::prelude::*;

pub fn main() {
    env_logger::init();

    let mut app = PulsarApp::new();

    // Register your project types
    app.register_type::<GameState>();
    app.register_type::<Inventory>();
    app.register_type::<PlayerData>();

    // Attach game systems
    app.add_system(game_state_system);
    app.add_system(inventory_system);
    app.add_system(player_update_system);

    // Load scene and run
    app.load_scene("scenes/default.level");
    app.run();
}`,
  },
  {
    label: "Blueprints",
    file: "nodes.rs",
    description: "Annotate Rust functions to expose them as visual scripting nodes.",
    code: `use pulsar_macros::{blueprint, exec_output};

/// Pure data-flow node — no execution pin
#[blueprint(type: pure, category: "Math")]
fn add(a: f32, b: f32) -> f32 {
    a + b
}

/// Side-effecting node with exec flow
#[blueprint(type: fn_, category: "Debug")]
fn print_message(message: String) {
    println!("{}", message);
}

/// Control flow — multiple execution outputs
#[blueprint(type: control_flow, category: "Flow")]
fn branch(condition: bool) {
    if condition {
        exec_output!("True");
    } else {
        exec_output!("False");
    }
}

/// Event entry point — begins execution graph
#[blueprint(type: event, category: "Game")]
fn begin_play() {
    exec_output!("Body");
}`,
  },
  {
    label: "Editor Plugin",
    file: "plugin.rs",
    description: "Extend the editor with compiled Rust DLLs — full API access.",
    code: `use pulsar_plugin_api::prelude::*;

pub struct MyEditorPlugin;

impl EditorPlugin for MyEditorPlugin {
    fn metadata(&self) -> PluginMetadata {
        PluginMetadata {
            name: "My Plugin",
            version: env!("CARGO_PKG_VERSION"),
            author: "You",
        }
    }

    fn file_types(&self) -> Vec<FileTypeDefinition> {
        vec![
            FileTypeDefinition {
                extension: "mydata",
                label: "My Data File",
                icon: Icon::Custom("my_icon"),
            }
        ]
    }

    fn on_load(&mut self) {
        println!("Plugin loaded!");
    }
}

export_plugin!(MyEditorPlugin);`,
  },
];

export default function DemoSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 px-5 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0ea5e9] mb-4">
            Developer Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            Rust you already know.
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            No custom scripting language to learn. Your game code is plain Rust,
            with proc-macros bridging it into the editor's visual systems.
          </p>
        </motion.div>

        {/* Code panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.09] overflow-hidden bg-[#0c0c0c]"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-0 border-b border-white/[0.07] bg-[#0a0a0a] overflow-x-auto">
            {/* Window dots */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-r border-white/[0.07] shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>

            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  active === i
                    ? "text-white"
                    : "text-white/35 hover:text-white/60"
                }`}
              >
                {tab.label}
                {active === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0ea5e9]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Filename pill — right */}
            <div className="ml-auto px-4 py-3 shrink-0">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[11px] text-white/25 font-mono"
                >
                  {TABS[active].file}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Code body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-6 overflow-x-auto"
            >
              <p className="text-xs text-white/30 mb-4">{TABS[active].description}</p>
              <SyntaxHighlighter
                language="rust"
                style={pulsarTheme}
                customStyle={{ background: "transparent", padding: 0, margin: 0 }}
                wrapLines={false}
                useInlineStyles
              >
                {TABS[active].code}
              </SyntaxHighlighter>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
