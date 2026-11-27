import type { MetadataRoute } from "next";

// Generated at build time. The daily scheduled deploy picks up blog posts and
// docs pages that were published or removed in their own repositories.
export const dynamic = "force-static";

const SITE = "https://pulsarnative.com";
const BLOG_FEED = `${SITE}/blog/rss.xml`;
const DOCS_TREE = "https://api.github.com/repos/Far-Beyond-Pulsar/docs/git/trees/main?recursive=1";

// Pages of this repo plus the other project sites served under this domain.
// Add new pages here by hand. Trailing slashes match the URL that returns 200.
const PAGES = [
  "/",
  "/download",
  "/studio",
  "/blog/",
  "/docs/",
  "/UI/",
  "/UI/api",
  "/UI/components",
  "/UI/docs",
  "/UI/examples",
  "/db/",
  "/db/architecture",
  "/db/docs",
  "/db/replication",
  "/Research/",
  "/Research/drafts/",
  "/Research/published/",
];

// A failed or empty source fails the build, so the previous deploy stays live
// instead of publishing a sitemap with pages missing.
async function load(url: string, headers?: Record<string, string>) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`sitemap: ${url} returned ${response.status}`);
  return response;
}

async function blogPosts() {
  const feed = await (await load(BLOG_FEED)).text();
  const urls = [...feed.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map((match) => match[1].trim());
  if (!urls.length) throw new Error("sitemap: no posts found in the blog feed");
  return urls;
}

async function docsPages() {
  const token = process.env.GITHUB_TOKEN;
  const response = await load(DOCS_TREE, token ? { Authorization: `Bearer ${token}` } : undefined);
  const { tree, truncated }: { tree: { path: string }[]; truncated: boolean } = await response.json();
  const urls = tree
    .map(({ path }) => path.match(/^public(\/docs\/.+)\.mdx?$/)?.[1])
    .filter((path): path is string => Boolean(path))
    .map((path) => new URL(path.replace(/\/index$/, ""), SITE).href);
  if (truncated || !urls.length) throw new Error("sitemap: incomplete docs file list");
  return urls;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, docs] = await Promise.all([blogPosts(), docsPages()]);
  const urls = new Set([...PAGES.map((path) => `${SITE}${path}`), ...posts, ...docs.sort()]);
  return [...urls].map((url) => ({ url }));
}
