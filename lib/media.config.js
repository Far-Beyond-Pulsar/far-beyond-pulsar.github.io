// Where large media (videos) is served from.
//
// Set MEDIA_BASE_URL to your Cloudflare R2 public domain, e.g.
//   "https://media.example.com"
// It is read at build time, so it ends up compiled into the static export.
//
// Leave it empty to serve from this site's own /video folder (public/video),
// which is what `npm run dev` uses locally. public/video is gitignored, so on
// GitHub Pages an empty value means no video (the poster image shows instead).
//
// The NEXT_PUBLIC_MEDIA_URL environment variable, if set, overrides this value
// (handy for CI or a one-off build).
export const MEDIA_BASE_URL = "https://cdn.pulsarnative.com/videos";

// Bump this when you replace a video in the bucket. The files are cached by
// browsers for a year (immutable), so a new version string is what makes
// visitors fetch the new file. Appended as ?v=<version>.
export const MEDIA_VERSION = "1";

// Absolute URL for a file under /video. Works with or without a trailing slash
// on the base, and keeps the site's root-relative scheme when no base is set.
export function videoUrl(file) {
  const base = (process.env.NEXT_PUBLIC_MEDIA_URL || MEDIA_BASE_URL || "").replace(/\/+$/, "");
  const url = `${base}/${base ? "" : "video/"}${file}`.replace(/([^:])\/{2,}/g, "$1/");
  return MEDIA_VERSION ? `${url}?v=${MEDIA_VERSION}` : url;
}
