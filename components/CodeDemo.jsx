"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CodeTab = ({ isActive, onClick, children }) => (
  <div 
    onClick={onClick}
    className={`
      flex items-center cursor-pointer px-3 h-8
      ${isActive ? 'bg-[#1e1e1e]' : 'bg-[#181818] hover:bg-[#1e1e1e]'}
    `}
  >
    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-600'}`} />
    <span className={`text-[13px] ml-1 ${isActive ? 'text-white' : 'text-neutral-500'}`}>
      {children}
    </span>
  </div>
);

const CodeDemo = () => {
  const [activeTab, setActiveTab] = useState('rust');
  
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
    shader: `// Modern PBR shader #version 450 layout(location = 0) in vec3 v_WorldPos; layout(location = 1) in vec3 v_Normal;
layout(location = 2) in vec2 v_UV; layout(set = 0, binding = 0) uniform MaterialData { vec4 base_color; float metallic;
float roughness; } material; void main() { vec3 N = normalize(v_Normal); vec3 V = normalize(camera_pos - v_WorldPos); // ... PBR calculation }`
  };

  return (
    <div className="bg-[#1e1e1e] rounded overflow-hidden">
      {/* Tab bar */}
      <div className="flex bg-[#181818]">
        <CodeTab 
          isActive={activeTab === 'rust'} 
          onClick={() => setActiveTab('rust')}
        >
          main.rs
        </CodeTab>
        <CodeTab 
          isActive={activeTab === 'shader'} 
          onClick={() => setActiveTab('shader')}
        >
          shader.glsl
        </CodeTab>
      </div>

      {/* Code content */}
      <div className="p-4 font-mono text-[13px] leading-5">
        {activeTab === 'rust' ? (
          <>
            <span className="text-neutral-500">{'// Entity '}</span>
            <span className="text-green-400">Component</span>
            <span className="text-neutral-500">{' System example'}</span><br />
            {'#[derive('}<span className="text-green-400">Component</span>{')]'}<br />
            <span className="text-purple-400">struct</span>
            <span className="text-yellow-400">{' Position'}</span>{'(Vec3);'}<br />
            <br />
            {'#[derive('}<span className="text-green-400">Component</span>{')]'}<br />
            <span className="text-purple-400">struct</span>
            <span className="text-yellow-400">{' Velocity'}</span>{'(Vec3);'}<br />
            <br />
            <span className="text-purple-400">fn</span>{' update_positions('}
            <span className="text-purple-400">mut</span>{' query: '}
            <span className="text-yellow-400">Query</span>{'<(&'}
            <span className="text-purple-400">mut</span>
            <span className="text-yellow-400">{' Position'}</span>{', &'}
            <span className="text-yellow-400">Velocity</span>{')>) {'}<br />
            {'    '}<span className="text-purple-400">for</span>{' ('}
            <span className="text-purple-400">mut</span>{' pos, vel) in query.iter_mut() {'}<br />
            {'        pos.'}<span className="text-orange-300">0</span>{' += vel.'}
            <span className="text-orange-300">0</span>{' * '}
            <span className="text-blue-400">time</span>
            {'.'}
            <span className="text-blue-300">delta_seconds</span>{'();'}<br />
            {'    }'}<br />
            {'}'}<br />
          </>
        ) : (
          <>
            <span className="text-neutral-500">{'// Modern PBR shader '}</span>
            <span className="text-purple-400">{'#version 450 '}</span>
            <span className="text-blue-400">{'layout(location = '}</span>
            <span className="text-orange-300">{'0'}</span>
            <span className="text-blue-400">{')'}</span>
            <span className="text-purple-400">{' in '}</span>
            <span className="text-purple-400">{'vec3 '}</span>
            <span className="text-yellow-400">{'v_WorldPos'}</span>
            {'; '}
            <span className="text-blue-400">{'layout(location = '}</span>
            <span className="text-orange-300">{'1'}</span>
            <span className="text-blue-400">{')'}</span>
            <span className="text-purple-400">{' in '}</span>
            <span className="text-purple-400">{'vec3 '}</span>
            <span className="text-yellow-400">{'v_Normal'}</span>
            {'; '}<br />
            <span className="text-blue-400">{'layout(location = '}</span>
            <span className="text-orange-300">{'2'}</span>
            <span className="text-blue-400">{')'}</span>
            <span className="text-purple-400">{' in '}</span>
            <span className="text-purple-400">{'vec2 '}</span>
            <span className="text-yellow-400">{'v_UV'}</span>
            {'; '}
            <span className="text-blue-400">{'layout(set = '}</span>
            <span className="text-orange-300">{'0'}</span>
            <span className="text-blue-400">{', binding = '}</span>
            <span className="text-orange-300">{'0'}</span>
            <span className="text-blue-400">{')'}</span>
            <span className="text-purple-400">{' uniform '}</span>
            <span className="text-yellow-400">{'MaterialData'}</span>
            {' { '}
            <span className="text-purple-400">{'vec4 '}</span>
            <span className="text-yellow-400">{'base_color'}</span>
            {'; '}
            <span className="text-purple-400">{'float '}</span>
            <span className="text-yellow-400">{'metallic'}</span>
            {'; '}<br />
            <span className="text-purple-400">{'float '}</span>
            <span className="text-yellow-400">{'roughness'}</span>
            {'; } '}
            <span className="text-yellow-400">{'material'}</span>
            {'; '}
            <span className="text-purple-400">{'void '}</span>
            <span className="text-yellow-400">{'main'}</span>
            {'() { '}
            <span className="text-purple-400">{'vec3 '}</span>
            <span className="text-yellow-400">{'N'}</span>
            {' = '}
            <span className="text-yellow-400">{'normalize'}</span>
            {'('}
            <span className="text-yellow-400">{'v_Normal'}</span>
            {'); '}
            <span className="text-purple-400">{'vec3 '}</span>
            <span className="text-yellow-400">{'V'}</span>
            {' = '}
            <span className="text-yellow-400">{'normalize'}</span>
            {'('}
            <span className="text-yellow-400">{'camera_pos'}</span>
            {' - '}
            <span className="text-yellow-400">{'v_WorldPos'}</span>
            {'); '}
            <span className="text-neutral-500">{'// ... PBR calculation '}</span>
            {'}'}</>
          
        )}
      </div>

      {/* Status bar */}
      <div className="flex items-center px-2 py-1 text-xs bg-[#181818] text-neutral-500">
        <ChevronRight className="w-3 h-3" />
        <span className="ml-1">Rust</span>
        <span className="mx-2">|</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
};

export default CodeDemo;