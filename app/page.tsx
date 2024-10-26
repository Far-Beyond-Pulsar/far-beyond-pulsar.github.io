"use client"
import CoverDemo from "@/components/example/cover-demo";
import TabsDemo from "@/components/example/tabs-demo";
import BentoGridThirdDemo from "@/components/blocks/features-section-demo-3";
import ConstructionOverlay from "./construction";

export default function Home() {
  return (
    <div className="dark min-h-screen flex flex-col">
      <ConstructionOverlay show={false} />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm bg-black/50 border-b border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-neutral-100">Pulsar</span>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-neutral-300 hover:text-neutral-100 transition-colors">
                Features
              </a>
              <a href="#docs" className="text-neutral-300 hover:text-neutral-100 transition-colors">
                Documentation
              </a>
              <a href="#community" className="text-neutral-300 hover:text-neutral-100 transition-colors">
                Community
              </a>
              <a href="#blog" className="text-neutral-300 hover:text-neutral-100 transition-colors">
                Blog
              </a>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/pulsar-engine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-300 hover:text-neutral-100 transition-colors"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  stroke="currentColor" 
                  fill="none" 
                  className="inline-block"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <button className="hidden sm:block px-4 py-2 text-sm text-neutral-300 hover:text-neutral-100 transition-colors">
                Sign in
              </button>
              <button className="px-4 py-2 text-sm bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-neutral-300 hover:text-neutral-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center gap-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <CoverDemo />
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            Pulsar Engine
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
              A high-performance, component-based game engine written in Rust, designed with a focus on 
              multiplayer experiences and real-time physics simulation.
            </p>
            
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Named after the rapidly spinning neutron stars, Pulsar Engine emphasizes speed, precision, 
              and reliability. By leveraging Rust&apos;s safety guarantees and zero-cost abstractions, 
              Pulsar delivers exceptional performance without sacrificing developer productivity.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 justify-center pt-6">
            <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-100 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-neutral-700 hover:border-neutral-600 rounded-lg text-neutral-100 transition-all">
              Documentation
            </button>
          </div>
        </div>

        {/* Features Tabs Section */}
        <div className="w-full max-w-6xl mx-auto" id="features">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-neutral-200">
            Core Features
          </h2>
        </div>

        {/* Detailed Features Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-neutral-200">
            Why Choose Pulsar
          </h2>
          <BentoGridThirdDemo />
        </div>
      </main>

    {/* Footer */}
    <footer className="border-t border-neutral-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-neutral-100">Pulsar</span>
            </div>
            <p className="text-sm text-neutral-400 pr-4">
              A next-generation game engine built with Rust, 
              designed for high performance and developer productivity.
            </p>
            <div className="flex gap-4 pt-2">
            {/* GitHub */}
            <a href="https://github.com/pulsar-engine" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-neutral-400 hover:text-neutral-100 transition-colors"
               aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              {/* Discord */}
              <a href="https://discord.gg/pulsar-engine" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-neutral-400 hover:text-neutral-100 transition-colors"
                 aria-label="Discord">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a href="https://x.com/PulsarEngine" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-neutral-400 hover:text-neutral-100 transition-colors"
                 aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="https://youtube.com/@PulsarEngine" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-neutral-400 hover:text-neutral-100 transition-colors"
                 aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              {/* Twitch */}
              <a href="https://twitch.tv/PulsarEngine" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-neutral-400 hover:text-neutral-100 transition-colors"
                 aria-label="Twitch">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
                </svg>
              </a>
              
              {/* Bluesky */}
              <a href="https://bsky.app/profile/pulsar.engine" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-neutral-400 hover:text-neutral-100 transition-colors"
                 aria-label="Bluesky">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 7.02914L9.72404 9.30511L7.02914 12L9.72404 14.6949L12 16.9709L14.276 14.6949L16.9709 12L14.276 9.30511L12 7.02914ZM12 0L8.48528 3.51472L4.24264 7.75736L0 12L4.24264 16.2426L8.48528 20.4853L12 24L15.5147 20.4853L19.7574 16.2426L24 12L19.7574 7.75736L15.5147 3.51472L12 0Z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/pulsar-engine" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-neutral-400 hover:text-neutral-100 transition-colors"
                 aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Reddit */}
              <a href="https://reddit.com/r/PulsarEngine" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-neutral-400 hover:text-neutral-100 transition-colors"
                 aria-label="Reddit">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
            </div>
          </div>
      
          {/* Resources Section */}
          <div>
            <h3 className="text-neutral-100 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/docs" className="text-neutral-400 hover:text-neutral-100 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="/learn" className="text-neutral-400 hover:text-neutral-100 transition-colors">Learn</a>
              </li>
              <li>
                <a href="/examples" className="text-neutral-400 hover:text-neutral-100 transition-colors">Examples</a>
              </li>
              <li>
                <a href="/showcase" className="text-neutral-400 hover:text-neutral-100 transition-colors">Showcase</a>
              </li>
              <li>
                <a href="/blog" className="text-neutral-400 hover:text-neutral-100 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
      
          {/* Community Section */}
          <div>
            <h3 className="text-neutral-100 font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="/discord" className="text-neutral-400 hover:text-neutral-100 transition-colors">Discord Server</a>
              </li>
              <li>
                <a href="/github" className="text-neutral-400 hover:text-neutral-100 transition-colors">GitHub Discussions</a>
              </li>
              <li>
                <a href="/contribute" className="text-neutral-400 hover:text-neutral-100 transition-colors">Contribute</a>
              </li>
              <li>
                <a href="/roadmap" className="text-neutral-400 hover:text-neutral-100 transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="/releases" className="text-neutral-400 hover:text-neutral-100 transition-colors">Release Notes</a>
              </li>
            </ul>
          </div>
      
          {/* Company Section */}
          <div>
            <h3 className="text-neutral-100 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-neutral-400 hover:text-neutral-100 transition-colors">About</a>
              </li>
              <li>
                <a href="/careers" className="text-neutral-400 hover:text-neutral-100 transition-colors">Careers</a>
              </li>
              <li>
                <a href="/privacy" className="text-neutral-400 hover:text-neutral-100 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-neutral-400 hover:text-neutral-100 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-400 hover:text-neutral-100 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              © 2024 Pulsar Engine. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/status" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                Status
              </a>
              <span className="text-neutral-700">•</span>
              <a href="/support" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                Support
              </a>
              <span className="text-neutral-700">•</span>
              <a href="/security" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}