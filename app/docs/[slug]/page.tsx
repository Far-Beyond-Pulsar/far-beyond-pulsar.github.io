// app/docs/[slug]/page.tsx
"use client"

import { useState, useEffect } from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import { notFound } from 'next/navigation'

interface DocMetadata {
  title: string
  image?: string
  tags: string[]
  stability: 'stable' | 'in-dev' | 'experimental'
  excerpt: string
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)
  const [metadata, setMetadata] = useState<DocMetadata | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadDoc() {
      try {
        const response = await fetch(`/docs/${params.slug}.md`)
        if (!response.ok) {
          throw new Error('Doc not found')
        }
        
        const text = await response.text()
        // Parse the frontmatter
        const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
        
        if (!match) {
          throw new Error('Invalid doc format')
        }

        const [_, frontmatter, content] = match
        const metadata = parseYAML(frontmatter)
        
        // Serialize the markdown content
        const mdxSource = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
          }
        })
        
        setMetadata(metadata)
        setMdxSource(mdxSource)
      } catch (error) {
        console.error('Failed to load doc:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    loadDoc()
  }, [params.slug])

  if (isLoading) {
    return <DocSkeleton />
  }

  if (!metadata || !mdxSource) {
    return notFound()
  }

  const components = {
    pre: ({ className, ...props }: any) => (
      <pre className={`${className} p-4 rounded-lg bg-neutral-900 m-5 overflow-x-auto`} {...props} />
    ),
    code: ({ className, ...props }: any) => (
      <code className={`${className} px-1 py-0.5 rounded-md text-[#008800] bg-neutral-900`} {...props} />
    ),
    h1: ({ className, ...props }: any) => (
      <h1 className={`${className} text-3xl font-bold mt-8 mb-4`} {...props} />
    ),
    h2: ({ className, ...props }: any) => (
      <h2 className={`${className} text-2xl font-semibold mt-6 mb-3`} {...props} />
    ),
    h3: ({ className, ...props }: any) => (
      <h3 className={`${className} text-xl font-semibold mt-4 mb-2`} {...props} />
    ),
    p: ({ className, ...props }: any) => (
      <p className={`${className} my-4 leading-7`} {...props} />
    ),
    ul: ({ className, ...props }: any) => (
      <ul className={`${className} list-disc list-inside my-4 space-y-2`} {...props} />
    ),
    ol: ({ className, ...props }: any) => (
      <ol className={`${className} list-decimal list-inside my-4 space-y-2`} {...props} />
    ),
    li: ({ className, ...props }: any) => (
      <li className={`${className} ml-4`} {...props} />
    ),
    a: ({ className, ...props }: any) => (
      <a className={`${className} text-blue-400 hover:text-blue-300 underline`} {...props} />
    ),
    blockquote: ({ className, ...props }: any) => (
      <blockquote className={`${className} border-l-4 border-neutral-700 pl-4 my-4 italic`} {...props} />
    ),
    table: ({ className, ...props }: any) => (
      <div className="overflow-x-auto my-4">
        <table className={`${className} min-w-full border-collapse`} {...props} />
      </div>
    ),
    th: ({ className, ...props }: any) => (
      <th className={`${className} border border-neutral-800 px-4 py-2 bg-neutral-900`} {...props} />
    ),
    td: ({ className, ...props }: any) => (
      <td className={`${className} border border-neutral-800 px-4 py-2`} {...props} />
    ),
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start gap-4 mb-4">
            <h1 className="text-4xl font-bold text-neutral-100">
              {metadata.title}
            </h1>
            <StabilityBadge stability={metadata.stability} />
          </div>
          
          <div className="flex gap-2 flex-wrap mb-4">
            {metadata.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-lg text-neutral-400">
            {metadata.excerpt}
          </p>
        </div>

        {/* Documentation Content */}
        <div className="prose prose-invert prose-neutral max-w-none">
          <article className="min-w-full p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <MDXRemote {...mdxSource} components={components} />
          </article>
        </div>
      </div>
    </div>
  )
}

function StabilityBadge({ stability }: { stability: string }) {
  const colors = {
    stable: "bg-green-500/10 text-green-500 border-green-500/20",
    "in-dev": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    experimental: "bg-red-500/10 text-red-500 border-red-500/20"
  } as const
  
  return (
    <span className={`px-2 py-1 text-xs rounded-md border ${colors[stability] || colors.experimental}`}>
      {stability}
    </span>
  )
}

function DocSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-10 w-2/3 bg-neutral-800 rounded mb-4" />
          <div className="h-6 w-24 bg-neutral-800 rounded mb-4" />
          <div className="h-4 w-1/2 bg-neutral-800 rounded mb-8" />
          <div className="space-y-4">
            <div className="h-4 bg-neutral-800 rounded w-full" />
            <div className="h-4 bg-neutral-800 rounded w-5/6" />
            <div className="h-4 bg-neutral-800 rounded w-4/6" />
          </div>
        </div>
      </div>
    </div>
  )
}

function parseYAML(yaml: string): DocMetadata {
  const lines = yaml.trim().split('\n')
  const result: Record<string, any> = {}

  for (const line of lines) {
    const [key, ...values] = line.split(':')
    if (key && values.length) {
      const value = values.join(':').trim()
      // Handle arrays in YAML (e.g., tags: [item1, item2])
      if (value.startsWith('[') && value.endsWith(']')) {
        result[key.trim()] = value
          .slice(1, -1)
          .split(',')
          .map(item => item.trim())
      } else {
        result[key.trim()] = value
      }
    }
  }

  return {
    title: result.title || '',
    image: result.image,
    tags: result.tags || [],
    stability: result.stability || 'experimental',
    excerpt: result.excerpt || ''
  }
}