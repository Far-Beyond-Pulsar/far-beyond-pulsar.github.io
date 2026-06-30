"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { useState, useEffect } from "react";

const PULSAR_PREVIEW = "https://pulsarnative.com/blog/blog-preview.json";
const PULSAR_BLOG = "https://pulsarnative.com/blog";

function BlogCard({ post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[#0c0c0c] border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/[0.14] transition-all duration-200"
    >
      {post.thumbnail && (
        <div className="relative w-full h-40 overflow-hidden bg-[#050505]">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 text-[11px] text-white/30">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime} min
            </span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/45 transition-colors flex-shrink-0" />
        </div>
        <h3 className="text-sm font-semibold text-white/80 group-hover:text-white mb-2 transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs text-white/35 leading-relaxed line-clamp-2 mb-3">
          {post.description}
        </p>
        {post.author && (
          <div className="flex items-center gap-1.5 text-[11px] text-white/25">
            <User className="w-3 h-3" />
            {post.author}
          </div>
        )}
      </div>
    </a>
  );
}

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(PULSAR_PREVIEW)
      .then((r) => r.ok ? r.json() : [])
      .then((data) => {
        if (Array.isArray(data)) setPosts(data.slice(0, 3));
      })
      .catch(() => {});
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="py-28 px-5 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0ea5e9] mb-4">
            Latest Posts
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight max-w-md">
              From the Pulsar blog.
            </h2>
            <a
              href={PULSAR_BLOG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors flex-shrink-0"
            >
              View all posts
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
