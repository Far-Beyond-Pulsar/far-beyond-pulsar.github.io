"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Terminal, Coffee, Copy, Check } from 'lucide-react';

const CodeTab = ({ isActive, onClick, children, icon: Icon }) => (
  <div 
    onClick={onClick}
    className={`
      flex items-center cursor-pointer px-4 h-9 border-b-2 transition-all duration-200
      ${isActive 
        ? 'bg-[#1e1e1e] border-blue-500 text-white' 
        : 'bg-[#181818] border-transparent text-neutral-500 hover:bg-[#1e1e1e] hover:text-neutral-400'
      }
    `}
  >
    <Icon className="w-4 h-4 mr-2" />
    <span className="text-[13px]">{children}</span>
  </div>
);

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 p-2 rounded hover:bg-[#ffffff10] transition-colors"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-neutral-500" />
      )}
    </button>
  );
};

const CodeDemo = () => {
  const [activeTab, setActiveTab] = useState('rust');
  const [hljs, setHljs] = useState(null);
  
  useEffect(() => {
    // Load highlight.js
    const loadHighlight = async () => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js';
      script.async = true;
      document.body.appendChild(script);

      const rustLang = document.createElement('script');
      rustLang.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/languages/rust.min.js';
      rustLang.async = true;
      document.body.appendChild(rustLang);

      const glslLang = document.createElement('script');
      glslLang.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/languages/glsl.min.js';
      glslLang.async = true;
      document.body.appendChild(glslLang);

      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css';
      document.head.appendChild(css);

      script.onload = () => {
        setHljs(window.hljs);
      };
    };

    loadHighlight();
  }, []);

  const codeExamples = {
    rust: `// Entity Component System example
#[derive(Component)]
struct Position(Vec3);

#[derive(Component)]
struct Velocity(Vec3);

fn update_positions(mut query: Query<(&mut Position, &Velocity)>) {
    for (mut pos, vel) in query.iter_mut() {
        pos.0 += vel.0 * time.delta_seconds();
    }
}`,
    shader: `// Modern PBR shader
#version 450

layout(location = 0) in vec3 v_WorldPos;
layout(location = 1) in vec3 v_Normal;
layout(location = 2) in vec2 v_UV;

layout(set = 0, binding = 0) uniform MaterialData {
    vec4 base_color;
    float metallic;
    float roughness;
} material;

void main() {
    vec3 N = normalize(v_Normal);
    vec3 V = normalize(camera_pos - v_WorldPos);
    // ... PBR calculation
}`
  };

  useEffect(() => {
    if (hljs) {
      hljs.highlightAll();
    }
  }, [activeTab, hljs]);

  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-[#ffffff10]">
      {/* Title bar */}
      <div className="bg-[#181818] px-4 py-2 flex items-center justify-between border-b border-[#ffffff10]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-neutral-500 text-sm">Game Engine Code Examples</span>
      </div>

      {/* Tab bar */}
      <div className="flex bg-[#181818] border-b border-[#ffffff10]">
        <CodeTab 
          isActive={activeTab === 'rust'} 
          onClick={() => setActiveTab('rust')}
          icon={Terminal}
        >
          main.rs
        </CodeTab>
        <CodeTab 
          isActive={activeTab === 'shader'} 
          onClick={() => setActiveTab('shader')}
          icon={Coffee}
        >
          shader.glsl
        </CodeTab>
      </div>

      {/* Code content */}
      <div className="p-4 font-mono text-[13px] leading-6 relative min-h-[200px]">
        <CopyButton code={codeExamples[activeTab]} />
        <pre className="!bg-transparent !m-0">
          <code className={activeTab === 'rust' ? 'language-rust' : 'language-glsl'}>
            {codeExamples[activeTab]}
          </code>
        </pre>
      </div>

      {/* Status bar */}
      <div className="flex items-center px-4 py-2 bg-[#181818] text-neutral-500 text-xs border-t border-[#ffffff10]">
        <div className="flex items-center">
          <ChevronRight className="w-3 h-3" />
          <span className="ml-1">{activeTab === 'rust' ? 'Rust' : 'GLSL'}</span>
        </div>
        <div className="flex items-center ml-4">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
          <span>Ready</span>
        </div>
        <span className="mx-4">|</span>
        <span>UTF-8</span>
        <span className="flex-1" />
        <span className="text-blue-400">master</span>
      </div>
    </div>
  );
};

export default CodeDemo;