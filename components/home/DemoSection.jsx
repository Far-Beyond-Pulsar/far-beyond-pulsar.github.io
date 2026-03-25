"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const examples = [
  {
    label: "Game Setup",
    file: "engine_main.rs",
    description: "Initialize Pulsar, register types, load a scene, and run.",
    code: `use pulsar_std::prelude::*;

pub fn main() {
    env_logger::init();

    let mut app = PulsarApp::new();

    // Register your project's types
    app.register_type::<GameState>();
    app.register_type::<Inventory>();
    app.register_type::<PlayerData>();

    // Register game systems
    app.add_system(game_state_system);
    app.add_system(inventory_system);
    app.add_system(player_update_system);

    // Load the default scene and run
    app.load_scene("scenes/default.level");
    app.run();
}`,
  },
  {
    label: "Blueprints",
    file: "nodes.rs",
    description: "Visual scripting nodes from plain Rust functions.",
    code: `use pulsar_macros::{blueprint, exec_output, bp_import};

/// Pure data-flow node — no side effects
#[blueprint(type: pure, category: "Math")]
fn add(a: f32, b: f32) -> f32 {
    a + b
}

/// Side-effect node — one exec in, one exec out
#[blueprint(type: fn_, category: "Debug")]
fn print(message: String) {
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

/// Event entry point — starts execution
#[blueprint(type: event, category: "Game")]
fn begin_play() {
    exec_output!("Body");
}`,
  },
  {
    label: "Plugin",
    file: "plugin.rs",
    description: "Editor plugins are compiled Rust DLLs with full API access.",
    code: `pub trait EditorPlugin: Send + Sync {
    fn metadata(&self) -> PluginMetadata;
    fn file_types(&self) -> Vec<FileTypeDefinition>;
    fn editors(&self) -> Vec<EditorMetadata>;
    fn on_load(&mut self) {}
    fn on_unload(&mut self) {}
}

// Register a custom file type
fn file_types(&self) -> Vec<FileTypeDefinition> {
    vec![standalone_file_type(
        "my-config",
        "cfg",
        "Configuration File",
        ui::IconName::Settings,
        gpui::rgb(0x3B82F6),
        serde_json::json!({
            "version": 1,
            "settings": {}
        }),
    )]
}`,
  },
  {
    label: "Subsystem",
    file: "physics.rs",
    description: "Modular subsystems with dependency-driven init.",
    code: `pub trait Subsystem: Send + Sync {
    fn id(&self) -> SubsystemId;
    fn dependencies(&self) -> Vec<SubsystemId>;
    fn init(&mut self, ctx: &SubsystemContext)
        -> Result<(), SubsystemError>;
    fn shutdown(&mut self) -> Result<(), SubsystemError>;
}

impl Subsystem for PhysicsEngine {
    fn id(&self) -> SubsystemId {
        subsystem_ids::PHYSICS
    }

    fn dependencies(&self) -> Vec<SubsystemId> {
        vec![] // No dependencies
    }

    fn init(&mut self, ctx: &SubsystemContext)
        -> Result<(), SubsystemError>
    {
        let handle = ctx.runtime.spawn(async move {
            loop {
                profiling::profile_scope!("Physics::Step");
                // Rapier simulation step
            }
        });
        self.task_handle = Some(handle);
        Ok(())
    }

    fn shutdown(&mut self) -> Result<(), SubsystemError> {
        if let Some(handle) = self.task_handle.take() {
            handle.abort();
        }
        Ok(())
    }
}`,
  },
  {
    label: "GPUI View",
    file: "editor_ui.rs",
    description: "Build editor UI with GPU-accelerated GPUI views.",
    code: `impl Render for LevelEditorView {
    fn render(&mut self, _window: &mut Window,
        cx: &mut ViewContext<Self>) -> impl IntoElement
    {
        div()
            .size_full()
            .flex()
            .child(
                // 3D viewport via Bevy
                div()
                    .flex_1()
                    .child(self.viewport.clone())
            )
            .child(
                // Properties panel
                div()
                    .w_64()
                    .bg(cx.theme().background)
                    .child("Properties Panel")
            )
    }
}

// Custom events between components
#[derive(Debug, Clone)]
pub enum EditorEvent {
    SelectionChanged { from: usize, to: usize },
    ContentModified,
    FileSaved { path: PathBuf },
}

cx.emit(EditorEvent::ContentModified);`,
  },
  {
    label: "Config",
    file: "Pulsar.toml",
    description: "Project configuration — plain TOML, no magic.",
    code: `[project]
name = "MyGame"
version = "0.1.0"
author = "Your Name"

[window]
title = "My Game - Pulsar Engine"
width = 1920
height = 1080
fullscreen = false
vsync = true
resizable = true

[graphics]
renderer = "Vulkan"
msaa_samples = 4
max_fps = 144
shadow_quality = "High"

[input.key_bindings]
move_forward = "W"
move_backward = "S"
move_left = "A"
move_right = "D"
jump = "Space"

[paths]
assets = "assets/"
shaders = "shaders/"
scripts = "classes/"

[build]
debug = true
hot_reload = true`,
  },
];

// Custom theme based on oneDark, with transparent background to match the container
const codeTheme = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "transparent",
    margin: 0,
    padding: 0,
    fontSize: "0.85rem",
    fontFamily: "var(--font-jetbrains-mono), monospace",
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "transparent",
    fontSize: "0.85rem",
    fontFamily: "var(--font-jetbrains-mono), monospace",
  },
};

// Use 'ini' for TOML — Prism's 'toml' grammar splits bracket tokens across lines
function getLanguage(file) {
  if (file.endsWith(".toml")) return "ini";
  return "rust";
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
          Real Engine Code
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-base">
          Everything here is from the actual Pulsar codebase — not mock-ups.
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
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
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
          </div>

          {/* Copy button */}
          <button
            onClick={copy}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono py-1"
          >
            {copied ? "copied ✓" : "copy"}
          </button>
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
            <SyntaxHighlighter
              language={getLanguage(examples[active].file)}
              style={codeTheme}
              showLineNumbers
              lineNumberStyle={{
                width: "2em",
                paddingRight: "1.5em",
                marginRight: "1em",
                color: "#334155",
                borderRight: "1px solid rgba(51,65,85,0.3)",
                userSelect: "none",
                fontVariantNumeric: "tabular-nums",
                textAlign: "right",
                display: "inline-block",
              }}
            >
              {examples[active].code}
            </SyntaxHighlighter>
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
