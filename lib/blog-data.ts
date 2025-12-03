// lib/blog-data.ts
export interface BlogMetadata {
  title: string
  excerpt: string
  date: string
  slug: string
}

export const blogData: BlogMetadata[] = [
  {
    title: "Introducing Pulsar: The Next-Gen Rust Game Engine",
    excerpt: "Discover why Pulsar is the most exciting new engine for Rust developers and how it challenges UE5.",
    date: "2025-09-15",
    slug: "introducing-pulsar"
  },
  {
    title: "Pulsar 0.2 Released: Vulkan, Physics, and More!",
    excerpt: "A deep dive into the new features and improvements in Pulsar's latest release.",
    date: "2025-10-01",
    slug: "pulsar-0-2-release"
  }
];
