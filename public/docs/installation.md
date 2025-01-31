---
title: Installing Pulsar Engine
image: /docs/installation-hero.png
tags: [installation, setup]
stability: stable
excerpt: Comprehensive guide to compiling and installing Pulsar Engine from source
---

# Installing Pulsar Engine

## Prerequisites

### System Requirements
- **Rust**: 1.70.0 or newer
- **Node.js**: v18+
- **Git**: 2.x

### Platform-Specific Dependencies

#### Windows
1. Install Visual Studio Build Tools
```powershell
# Install using winget
winget install Microsoft.VisualStudio.2022.BuildTools

# Required components:
# - "Desktop development with C++"
# - "C++ build tools"
```

2. Install Rust Dependencies
```powershell
rustup target add x86_64-pc-windows-msvc
```

#### macOS
1. Install Xcode Command Line Tools
```bash
xcode-select --install
```

2. Install dependencies via Homebrew
```bash
brew install cmake
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install -y \
    build-essential \
    libssl-dev \
    libgtk-3-dev \
    libwebkit2gtk-4.0-dev \
    libappindicator3-dev \
    librsvg2-dev \
    curl \
    wget
```

#### Linux (Fedora)
```bash
sudo dnf groupinstall "Development Tools"
sudo dnf install \
    openssl-devel \
    gtk3-devel \
    webkit2gtk4.0-devel \
    libappindicator-gtk3-devel \
    librsvg2-devel \
    curl \
    wget
```

## Compilation from Source

### Clone the Repository
```bash
git clone https://github.com/Far-Beyond-Pulsar/Pulsar-Engine.git
cd Pulsar-Engine
```

### Install Rust (if not already installed)
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### Install Node.js Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Build the Engine

#### Development Build
```bash
# For development
cargo tauri dev
```

#### Production Build
```bash
# For release
cargo tauri build
```

## Build Outputs

### Windows
- Installer: `src-tauri/target/release/bundle/msi/Pulsar-Engine_x.x.x_x64_en-US.msi`
- Executable: `src-tauri/target/release/Pulsar-Engine.exe`

### macOS
- DMG: `src-tauri/target/release/bundle/dmg/Pulsar-Engine_x.x.x_x64.dmg`
- App Bundle: `src-tauri/target/release/bundle/macos/Pulsar-Engine.app`

### Linux
- AppImage: `src-tauri/target/release/bundle/appimage/pulsar-engine_x.x.x_amd64.AppImage`
- Debian Package: `src-tauri/target/release/bundle/deb/pulsar-engine_x.x.x_amd64.deb`

## Troubleshooting

### Common Installation Issues

1. **Rust Installation Fails**
   ```bash
   # Verify Rust installation
   rustc --version
   cargo --version
   ```

2. **Dependency Conflicts**
   - Ensure all system dependencies are up to date
   - Check Rust and Node.js versions
   
3. **Build Errors**
   ```bash
   # Clean previous builds
   cargo clean
   
   # Update dependencies
   rustup update
   cargo update
   ```

## Contributing

- [Contribution Guidelines](/CONTRIBUTING.md)
- [Report Installation Issues](https://github.com/Far-Beyond-Pulsar/Pulsar-Engine/issues)

---