// GitHub API utilities - client-side fetching with unauthenticated API

const GITHUB_API = 'https://api.github.com';
const ORG = 'Far-Beyond-Pulsar';
const REPO = 'Pulsar-Native';

export async function fetchRepoStats() {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${ORG}/${REPO}`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
      cache: 'no-store' // Always fetch fresh data
    });
    
    if (!response.ok) {
      console.warn('GitHub API returned:', response.status);
      return null;
    }
    
    const data = await response.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      watchers: data.watchers_count || 0,
      openIssues: data.open_issues_count || 0,
    };
  } catch (error) {
    console.error('Error fetching repo stats:', error);
    return null;
  }
}

export async function fetchLatestRelease() {
  try {
    // Try latest release endpoint first
    let response = await fetch(`${GITHUB_API}/repos/${ORG}/${REPO}/releases/latest`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
      cache: 'no-store'
    });
    
    // If no latest release, get first from list
    if (!response.ok) {
      response = await fetch(`${GITHUB_API}/repos/${ORG}/${REPO}/releases?per_page=1`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
        cache: 'no-store'
      });
      
      if (!response.ok) return null;
      
      const releases = await response.json();
      if (!releases || releases.length === 0) return null;
      
      const data = releases[0];
      return {
        version: data.tag_name || 'v0.0.0',
        name: data.name || 'Latest Release',
        publishedAt: data.published_at,
        body: data.body || '',
        htmlUrl: data.html_url,
      };
    }
    
    const data = await response.json();
    return {
      version: data.tag_name || 'v0.0.0',
      name: data.name || 'Latest Release',
      publishedAt: data.published_at,
      body: data.body || '',
      htmlUrl: data.html_url,
    };
  } catch (error) {
    console.error('Error fetching latest release:', error);
    return null;
  }
}

// Parse GitHub Atom feeds (public, no authentication required!)
export async function fetchDiscussionsFromRSS(limit = 4) {
  // Must run in browser (needs DOMParser)
  if (typeof window === 'undefined') return null;
  
  try {
    const response = await fetch(`https://github.com/orgs/${ORG}/discussions.atom`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.warn('Failed to fetch discussions RSS:', response.status);
      return null;
    }
    
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parse errors
    const parseError = xml.querySelector('parsererror');
    if (parseError) {
      console.error('XML parse error:', parseError.textContent);
      return null;
    }
    
    const entries = Array.from(xml.querySelectorAll('entry')).slice(0, limit);
    
    console.log(`Found ${entries.length} discussion entries in RSS feed`);
    
    return entries.map(entry => {
      const title = entry.querySelector('title')?.textContent || '';
      const link = entry.querySelector('link[rel="alternate"]')?.getAttribute('href') || '';
      const published = entry.querySelector('published')?.textContent || '';
      const updated = entry.querySelector('updated')?.textContent || '';
      const author = entry.querySelector('author name')?.textContent || 'Unknown';
      const content = entry.querySelector('content')?.textContent || '';
      
      // Better category detection
      let category = 'General';
      let emoji = '💬';
      let tagColor = 'f472b6';
      
      // Check URL path for category indicators
      const urlLower = link.toLowerCase();
      const contentLower = content.toLowerCase();
      const titleLower = title.toLowerCase();
      
      if (urlLower.includes('/announcements/') || titleLower.includes('announce') || titleLower.includes('release')) {
        category = 'Announcements';
        emoji = '📢';
        tagColor = '0ea5e9';
      } else if (titleLower.includes('?') || contentLower.includes('question') || contentLower.includes('how to')) {
        category = 'Q&A';
        emoji = '💬';
        tagColor = '6366f1';
      } else if (contentLower.includes('built') || contentLower.includes('working on') || contentLower.includes('showcase')) {
        category = 'Show & Tell';
        emoji = '🚀';
        tagColor = 'f472b6';
      } else if (titleLower.includes('idea') || titleLower.includes('feature request') || titleLower.includes('suggestion')) {
        category = 'Ideas';
        emoji = '💡';
        tagColor = '0ea5e9';
      } else if (contentLower.includes('gpui') || contentLower.includes('development') || contentLower.includes('working')) {
        category = 'Development';
        emoji = '🚀';
        tagColor = '6366f1';
      }
      
      // Clean up content - remove HTML tags and extra whitespace
      const cleanContent = content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim()
        .substring(0, 150);
      
      return {
        title: title.trim(),
        url: link,
        author: author,
        published: published,
        updated: updated,
        body: cleanContent + (cleanContent.length >= 150 ? '...' : ''),
        category: category,
        emoji: emoji,
        tagColor: tagColor,
        // Extract discussion number from URL
        number: link.match(/discussions\/(\d+)/)?.[1] || ''
      };
    });
  } catch (error) {
    console.error('Error fetching discussions from RSS:', error);
    return null;
  }
}

export async function fetchAnnouncementsFromRSS(limit = 3) {
  // Must run in browser (needs DOMParser)
  if (typeof window === 'undefined') return null;
  
  try {
    const response = await fetch(`https://github.com/orgs/${ORG}/discussions/categories/announcements.atom`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.warn('Failed to fetch announcements RSS:', response.status);
      return null;
    }
    
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parse errors
    const parseError = xml.querySelector('parsererror');
    if (parseError) {
      console.error('XML parse error:', parseError.textContent);
      return null;
    }
    
    const entries = Array.from(xml.querySelectorAll('entry')).slice(0, limit);
    
    console.log(`Found ${entries.length} announcement entries in RSS feed`);
    
    return entries.map(entry => {
      const title = entry.querySelector('title')?.textContent || '';
      const link = entry.querySelector('link[rel="alternate"]')?.getAttribute('href') || '';
      const published = entry.querySelector('published')?.textContent || '';
      const updated = entry.querySelector('updated')?.textContent || '';
      const author = entry.querySelector('author name')?.textContent || 'Unknown';
      const content = entry.querySelector('content')?.textContent || '';
      
      // Clean up content - remove HTML tags and extra whitespace
      const cleanContent = content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim()
        .substring(0, 200);
      
      return {
        title: title.trim(),
        url: link,
        author: author,
        published: published,
        updated: updated,
        body: cleanContent + (cleanContent.length >= 200 ? '...' : ''),
        number: link.match(/discussions\/(\d+)/)?.[1] || ''
      };
    });
  } catch (error) {
    console.error('Error fetching announcements from RSS:', error);
    return null;
  }
}

export async function fetchReleasesFromRSS(limit = 3) {
  // Must run in browser (needs DOMParser)
  if (typeof window === 'undefined') return null;
  
  try {
    const response = await fetch(`https://github.com/${ORG}/${REPO}/releases.atom`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.warn('Failed to fetch releases RSS:', response.status);
      return null;
    }
    
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parse errors
    const parseError = xml.querySelector('parsererror');
    if (parseError) {
      console.error('XML parse error:', parseError.textContent);
      return null;
    }
    
    const entries = Array.from(xml.querySelectorAll('entry')).slice(0, limit);
    
    return entries.map(entry => {
      const title = entry.querySelector('title')?.textContent || '';
      const link = entry.querySelector('link[rel="alternate"]')?.getAttribute('href') || '';
      const updated = entry.querySelector('updated')?.textContent || '';
      const author = entry.querySelector('author name')?.textContent || 'Unknown';
      const content = entry.querySelector('content')?.textContent || '';
      
      return {
        title: title.trim(),
        url: link,
        author: author,
        published: updated,
        body: content || 'No release notes available',
        // Extract version from URL
        version: link.match(/tag\/(v[\d.]+)/)?.[1] || title
      };
    });
  } catch (error) {
    console.error('Error fetching releases from RSS:', error);
    return null;
  }
}

export async function fetchContributors() {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${ORG}/${REPO}/contributors?per_page=100`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
      cache: 'no-store'
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    return data.length;
  } catch (error) {
    console.error('Error fetching contributors:', error);
    return null;
  }
}

export async function fetchIssues() {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${ORG}/${REPO}/issues?state=all&per_page=1`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' },
      cache: 'no-store'
    });
    
    if (!response.ok) return null;
    
    // Get the total count from Link header
    const linkHeader = response.headers.get('Link');
    if (linkHeader) {
      const match = linkHeader.match(/page=(\d+)>; rel="last"/);
      if (match) return parseInt(match[1]);
    }
    
    const data = await response.json();
    return data.length;
  } catch (error) {
    console.error('Error fetching issues:', error);
    return null;
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatNumber(num) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
}
