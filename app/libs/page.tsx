"use client"

import { useState, useMemo } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Search, X, ExternalLink, Github, Globe } from 'lucide-react'

type LibraryType = 'core' | 'graphics' | 'runtime' | 'physics' | 'ui' | 'platform'

interface Library {
  name: string
  logo: string
  details: string
  type: LibraryType
  cratesUrl?: string
  githubUrl?: string
  website?: string
  version?: string
}

const libraries: Library[] = [
  // New Dependencies
  {
    name: "Serde",
    logo: "/logos/rust.png",
    details: "A framework for serializing and deserializing Rust data structures",
    type: "core",
    cratesUrl: "https://crates.io/crates/serde",
    version: "1.0",
    githubUrl: "https://github.com/serde-rs/serde"
  },
  {
    name: "Tokio",
    logo: "/logos/rust.png",
    details: "An asynchronous runtime for Rust",
    type: "runtime",
    cratesUrl: "https://crates.io/crates/tokio",
    version: "1.43.0",
    githubUrl: "https://github.com/tokio-rs/tokio"
  },
  {
    name: "WalkDir",
    logo: "/logos/rust.png",
    details: "Recursively walk a directory",
    type: "core",
    cratesUrl: "https://crates.io/crates/walkdir",
    version: "2.5.0"
  },
  {
    name: "Base64",
    logo: "/logos/rust.png",
    details: "Encode and decode base64 format",
    type: "core",
    cratesUrl: "https://crates.io/crates/base64",
    version: "0.22.1"
  },
  {
    name: "Tron",
    logo: "/logos/rust.png",
    details: "A Rust library for building terminal user interfaces",
    type: "ui",
    cratesUrl: "https://crates.io/crates/tron",
    version: "1.0.0"
  },
  {
    name: "Parking Lot",
    logo: "/logos/rust.png",
    details: "Parking lot based synchronization primitives",
    type: "core",
    cratesUrl: "https://crates.io/crates/parking_lot",
    version: "0.12.3"
  },
  {
    name: "Log",
    logo: "/logos/rust.png",
    details: "A lightweight logging facade for Rust",
    type: "core",
    cratesUrl: "https://crates.io/crates/log",
    version: "0.4.25"
  },
  {
    name: "Env Logger",
    logo: "/logos/rust.png",
    details: "A logging implementation for the log crate",
    type: "core",
    cratesUrl: "https://crates.io/crates/env_logger",
    version: "0.10.2"
  },
  {
    name: "Anyhow",
    logo: "/logos/rust.png",
    details: "Flexible concrete Error type built on std::error::Error",
    type: "core",
    cratesUrl: "https://crates.io/crates/anyhow",
    version: "1.0.95"
  },
  {
    name: "Thiserror",
    logo: "/logos/rust.png",
    details: "Derive macro for the standard library's std::error::Error trait",
    type: "core",
    cratesUrl: "https://crates.io/crates/thiserror",
    version: "2.0.11"
  },
  {
    name: "Crossbeam Channel",
    logo: "/logos/rust.png",
    details: "Multi-producer multi-consumer channels for message passing",
    type: "core",
    cratesUrl: "https://crates.io/crates/crossbeam-channel",
    version: "0.5.6"
  },
  {
    name: "Raw Window Handle",
    logo: "/logos/rust.png",
    details: "Interoperability library for Rust window creation libraries",
    type: "platform",
    cratesUrl: "https://crates.io/crates/raw-window-handle",
    version: "0.6.2"
  },
  {
    name: "Tao",
    logo: "/logos/rust.png",
    details: "Cross-platform window creation and manipulation",
    type: "ui",
    cratesUrl: "https://crates.io/crates/tao",
    version: "0.16.10"
  },
  {
    name: "GPU Allocator",
    logo: "/logos/rust.png",
    details: "Memory allocator for GPU memory",
    type: "graphics",
    cratesUrl: "https://crates.io/crates/gpu-allocator",
    version: "0.22"
  },
  {
    name: "Windows",
    logo: "/logos/windows.png",
    details: "Windows API bindings for Rust",
    type: "platform",
    cratesUrl: "https://crates.io/crates/windows",
    version: "0.59.0"
  },
  {
    name: "Dynasty RS",
    logo: "/logos/rust.png",
    details: "Rust bindings for Dynasty game engine features",
    type: "core",
    cratesUrl: "https://crates.io/crates/dynasty-rs",
    version: "0.1.0"
  },
  {
    name: "Pulsar Engine",
    logo: "/logos/pulsar.png",
    details: "Core game engine package",
    type: "core",
    cratesUrl: "https://crates.io/crates/pulsar_engine",
    version: "0.1.0",
    githubUrl: "https://github.com/Far-Beyond-Pulsar/Pulsar-Engine"
  },
  {
    name: "Once Cell",
    logo: "/logos/rust.png",
    details: "Single-assignment cells and lazy statics for Rust",
    type: "core",
    cratesUrl: "https://crates.io/crates/once_cell",
    version: "1.20.3"
  },
  {
    name: "RFD",
    logo: "/logos/rust.png",
    details: "Rusty File Dialogs - Native file dialogs for Rust",
    type: "ui",
    cratesUrl: "https://crates.io/crates/rfd",
    version: "0.15.2"
  },
  {
    name: "Vulkan",
    logo: "/logos/vulkan.png",
    details: "Low-level graphics API providing direct GPU control for maximum performance and advanced rendering features",
    type: "graphics",
    website: "https://www.vulkan.org/"
  },
  {
    name: "WGPU",
    logo: "/logos/wgpu.png",
    details: "Cross-platform, safe graphics API abstracting Vulkan, Metal, D3D12, and WebGPU",
    type: "graphics",
    cratesUrl: "https://crates.io/crates/wgpu",
    githubUrl: "https://github.com/gfx-rs/wgpu"
  },
  {
    name: "WebGPU",
    logo: "/logos/webgpu.svg",
    details: "Next-generation web graphics API providing modern GPU features and enhanced performance",
    type: "graphics",
    website: "https://www.w3.org/TR/webgpu/"
  },
  {
    name: "WebGL2",
    logo: "/logos/webgl.png",
    details: "High-performance browser graphics API with broad support across modern browsers",
    type: "graphics",
    website: "https://www.khronos.org/webgl/"
  },
  {
    name: "DirectX 12",
    logo: "/logos/dx.png",
    details: "Microsoft's latest graphics API for Windows platforms with enhanced performance and lower CPU overhead",
    type: "graphics",
    website: "https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics"
  },
  {
    name: "Metal",
    logo: "/logos/metal.png",
    details: "Apple's modern graphics API optimized for iOS and macOS platforms",
    type: "graphics",
    website: "https://developer.apple.com/metal/"
  },
  {
    name: "WebAssembly",
    logo: "/logos/wasm.png",
    details: "Enables near-native performance in web browsers with direct compilation from Rust",
    type: "runtime",
    website: "https://webassembly.org/"
  },
  {
    name: "Rust",
    logo: "/logos/rust.png",
    details: "Systems programming language ensuring memory safety and thread safety without garbage collection",
    type: "core",
    website: "https://www.rust-lang.org/"
  },
  {
    name: "Rapier",
    logo: "/logos/rapier.png",
    details: "High-performance 2D and 3D physics engine written in Rust",
    type: "physics",
    cratesUrl: "https://crates.io/crates/rapier3d",
    githubUrl: "https://github.com/dimforge/rapier"
  },
  {
    name: "Zed GPUI",
    logo: "/logos/zed.jpg",
    details: "GPU-accelerated UI framework for building high-performance developer tools",
    type: "ui",
    githubUrl: "https://github.com/tristanpoland/zed"
  },
  {
    name: "OpenXR",
    logo: "/logos/openxr.png",
    details: "Standard API for virtual and augmented reality development across multiple platforms",
    type: "platform",
    website: "https://www.khronos.org/openxr/"
  },
  {
    name: "Horizon",
    logo: "/logos/horizon.png",
    details: "First of its kind publicly available fully distributed game server built for extreme scale and performance",
    type: "platform",
    githubUrl: "https://github.com/Far-Beyond-Pulsar/Horizon"
  }
]

export default function LibrariesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLibraries = useMemo(() => {
    return libraries.filter(lib => 
      lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const typeColors: Record<LibraryType, string> = {
    core: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    graphics: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    runtime: "bg-green-500/10 text-green-500 border-green-500/20",
    physics: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    ui: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    platform: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <div className="fixed inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            Libraries & Dependencies
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore the core technologies and libraries that power Pulsar Engine behind the scenes. Many of these are maintained by communities of developers just like you! Thanks to all the library developers for making projects like Pulsar possible.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search libraries..."
            className="block w-full pl-10 pr-10 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors
              text-neutral-100 placeholder-neutral-500 hover:border-neutral-700"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-neutral-500 hover:text-neutral-300" />
            </button>
          )}
        </div>

        {/* Libraries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLibraries.map((lib) => (
            <Card key={lib.name} className="bg-neutral-900/50 border-neutral-800 transition-colors
              hover:border-blue-500/30">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={lib.logo}
                      alt={`${lib.name} logo`}
                      className="w-8 h-8 object-contain rounded"
                    />
                    <CardTitle className="text-xl text-neutral-100">
                      {lib.name}
                    </CardTitle>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-md border ${typeColors[lib.type]}`}>
                    {lib.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-400">{lib.details}</p>
                {lib.version && (
                  <div className="text-sm text-neutral-500">
                    Version: {lib.version}
                  </div>
                )}
                <div className="flex flex-wrap gap-3">
                  {lib.cratesUrl && (
                    <a
                      href={lib.cratesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      crates.io
                    </a>
                  )}
                  {lib.githubUrl && (
                    <a
                      href={lib.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {lib.website && (
                    <a
                      href={lib.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Website
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results state */}
        {filteredLibraries.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-neutral-300 mb-2">
              No matching libraries found
            </h3>
            <p className="text-neutral-400 mb-4">
              Try adjusting your search terms
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700
                hover:border-blue-500/30 rounded-lg text-neutral-100 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}