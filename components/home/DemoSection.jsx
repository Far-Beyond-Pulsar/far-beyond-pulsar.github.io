"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const screenshots = [
  { src: "/sample_pics/level_editor.png", title: "Level Editor", desc: "Visual level editing with real-time preview" },
  { src: "/sample_pics/profiler.png", title: "Engine Profiler", desc: "Insights into multithreaded function call timings and cross thread waiting and locking" },
  { src: "/sample_pics/level_editor(file_drawer).png", title: "Asset Browser", desc: "Intuitive file management and asset organization" },
  { src: "/sample_pics/engine_bps.png", title: "Engine Runtime", desc: "High-performance game engine in action" },
  { src: "/sample_pics/db_editor.png", title: "Database Editor", desc: "Visual editing of game databases and data structures" },
  { src: "/sample_pics/docs.png", title: "Documentation", desc: "Comprehensive documentation built into the editor" },
  { src: "/sample_pics/panels1.png", title: "Multi-Panel Layout", desc: "Customizable workspace with multiple views" },
  { src: "/sample_pics/panels2.png", title: "Advanced Panels", desc: "Complex layouts for advanced workflows" },
  { src: "/sample_pics/terminal.png", title: "Integrated Terminal", desc: "Built-in terminal for running commands and scripts" }
];

const codeExamples = [
  {
    title: "Hello World",
    language: "rust",
    code: `use pulsar::prelude::*;

fn main() {
    App::new()
        .add_systems(Startup, setup)
        .add_systems(Update, hello_world)
        .run();
}

fn setup(mut commands: Commands) {
    commands.spawn(Camera3d::default());
}

fn hello_world() {
    println!("Hello, Pulsar!");
}`,
    description: "Create a basic Pulsar application with just a few lines of code"
  },
  {
    title: "Entity System",
    language: "rust",
    code: `#[derive(Component)]
struct Player {
    speed: f32,
    health: i32,
}

fn spawn_player(mut commands: Commands) {
    commands.spawn((
        Player { 
            speed: 10.0, 
            health: 100 
        },
        Transform::default(),
        Mesh3d::from(shape::Cube { size: 1.0 }),
    ));
}

fn move_player(
    time: Res<Time>,
    mut query: Query<(&Player, &mut Transform)>
) {
    for (player, mut transform) in query.iter_mut() {
        transform.translation.x += player.speed * time.delta();
    }
}`,
    description: "Leverage the powerful Entity Component System architecture"
  },
  {
    title: "Physics",
    language: "rust",
    code: `use pulsar::physics::prelude::*;

fn setup_physics(mut commands: Commands) {
    // Spawn a dynamic rigid body
    commands.spawn((
        RigidBody::Dynamic,
        Collider::ball(0.5),
        Transform::from_xyz(0.0, 10.0, 0.0),
        Velocity::linear(Vec3::new(1.0, 0.0, 0.0)),
        Mass::new(1.0),
    ));
    
    // Create a static ground plane
    commands.spawn((
        RigidBody::Fixed,
        Collider::cuboid(50.0, 0.1, 50.0),
        Transform::default(),
    ));
}`,
    description: "Built-in physics powered by Rapier for realistic simulations"
  }
];

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative max-w-7xl mx-auto py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          See It in Action
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Screenshots from the Pulsar engine and editor
        </p>
      </motion.div>

      {/* Screenshot Slideshow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16 relative"
      >
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black aspect-video">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image 
                src={screenshots[currentSlide].src}
                alt={screenshots[currentSlide].title}
                fill
                className="object-contain"
                priority
              />
              
              {/* Image overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {screenshots[currentSlide].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-300"
                >
                  {screenshots[currentSlide].desc}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-slate-700 hover:bg-black/80 hover:border-[#0ea5e9] transition-all flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-slate-400 group-hover:text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-slate-700 hover:bg-black/80 hover:border-[#0ea5e9] transition-all flex items-center justify-center group"
          >
            <svg className="w-6 h-6 text-slate-400 group-hover:text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-[#0ea5e9] w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Code tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-6 justify-center"
      >
        {codeExamples.map((example, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === index
                ? 'bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white shadow-lg'
                : 'bg-black text-slate-400 hover:text-slate-200 border border-slate-700'
            }`}
          >
            {example.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Code display */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-black border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-slate-400 font-mono">main.rs</span>
          </div>
          <motion.button
            onClick={copyCode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </motion.button>
        </div>

        {/* Code content */}
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm md:text-base">
            <code className="text-slate-300 font-mono leading-relaxed">
              {codeExamples[activeTab].code}
            </code>
          </pre>
        </div>

        {/* Description */}
        <div className="px-6 py-4 bg-black border-t border-slate-800">
          <p className="text-slate-400">
            {codeExamples[activeTab].description}
          </p>
        </div>

        {/* Gradient accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0ea5e9]/10 via-[#06b6d4]/5 to-transparent blur-3xl pointer-events-none" />
      </motion.div>

      {/* Feature highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-3 gap-6"
      >
        {[
          { icon: "⚡", title: "Zero Boilerplate", desc: "Get started instantly without configuration hell" },
          { icon: "🎯", title: "Type Safe", desc: "Catch errors at compile time with Rust's type system" },
          { icon: "🔄", title: "Hot Reload", desc: "See changes instantly without recompiling" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-6 bg-black rounded-xl border border-slate-800"
          >
            <span className="text-3xl">{item.icon}</span>
            <div>
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
