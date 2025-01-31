// lib/docs-data.ts
export interface DocMetadata {
    title: string
    excerpt: string
    tags: string[]
    stability: 'stable' | 'in-dev' | 'experimental'
    slug: string
  }
  
  export const docsData: DocMetadata[] = [
    {
      title: "Installation",
      excerpt: "Quick start guide for Pulsar Engine development",
      tags: ["basics", "tutorial"],
      stability: "stable",
      slug: "installation"
    }
  ]