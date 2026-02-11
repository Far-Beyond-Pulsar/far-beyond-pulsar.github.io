// Fetch GitHub data at build time for static generation
// This runs server-side during `next build`

const GITHUB_API = 'https://api.github.com';
const ORG = 'Far-Beyond-Pulsar';
const REPO = 'Pulsar-Native';

// Helper to make GitHub API requests
async function githubFetch(url, options = {}) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Pulsar-Website',
    ...options.headers,
  };

  // Add token if available (for higher rate limits)
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
    next: { revalidate: 3600 }, // Revalidate every hour in Next.js 13+
  });

  if (!response.ok) {
    const error = await response.text();
    console.error(`GitHub API Error: ${response.status}`, error);
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  return response.json();
}

// Fetch repository statistics
export async function getRepoStats() {
  try {
    const data = await githubFetch(`${GITHUB_API}/repos/${ORG}/${REPO}`);
    
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      watchers: data.watchers_count || 0,
      openIssues: data.open_issues_count || 0,
      topics: data.topics || [],
      description: data.description || '',
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch (error) {
    console.error('Error fetching repo stats:', error);
    return null;
  }
}

// Fetch latest release
export async function getLatestRelease() {
  try {
    const data = await githubFetch(`${GITHUB_API}/repos/${ORG}/${REPO}/releases/latest`);
    
    return {
      version: data.tag_name || 'v0.0.0',
      name: data.name || 'Latest Release',
      publishedAt: data.published_at,
      body: data.body || '',
      htmlUrl: data.html_url,
      author: data.author?.login || 'Unknown',
    };
  } catch (error) {
    console.error('Error fetching latest release:', error);
    // Fallback: get most recent release
    try {
      const releases = await githubFetch(`${GITHUB_API}/repos/${ORG}/${REPO}/releases?per_page=1`);
      if (releases && releases.length > 0) {
        const latest = releases[0];
        return {
          version: latest.tag_name,
          name: latest.name,
          publishedAt: latest.published_at,
          body: latest.body || '',
          htmlUrl: latest.html_url,
          author: latest.author?.login || 'Unknown',
        };
      }
    } catch (fallbackError) {
      console.error('Error fetching releases fallback:', fallbackError);
    }
    return null;
  }
}

// Fetch discussions using GraphQL (requires authentication)
export async function getDiscussions(limit = 4) {
  // GraphQL requires authentication, so we'll return null if no token
  if (!process.env.GITHUB_TOKEN) {
    console.warn('GITHUB_TOKEN not set, cannot fetch discussions');
    return null;
  }

  const query = `
    query {
      organization(login: "${ORG}") {
        discussions(first: ${limit}, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            title
            bodyText
            url
            number
            createdAt
            updatedAt
            author {
              login
              avatarUrl
            }
            comments {
              totalCount
            }
            category {
              name
              emoji
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'Pulsar-Website',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      return null;
    }

    const discussions = result.data?.organization?.discussions?.nodes || [];
    
    return discussions.map(disc => ({
      title: disc.title,
      body: disc.bodyText?.substring(0, 150) || '',
      url: disc.url,
      number: disc.number,
      author: disc.author?.login || 'Unknown',
      authorAvatar: disc.author?.avatarUrl || '',
      replies: disc.comments.totalCount,
      category: disc.category?.name || 'General',
      emoji: disc.category?.emoji || '💬',
      createdAt: disc.createdAt,
      updatedAt: disc.updatedAt,
    }));
  } catch (error) {
    console.error('Error fetching discussions:', error);
    return null;
  }
}

// Fetch announcements (discussions in Announcements category)
export async function getAnnouncements(limit = 3) {
  if (!process.env.GITHUB_TOKEN) {
    console.warn('GITHUB_TOKEN not set, cannot fetch announcements');
    return null;
  }

  const query = `
    query {
      organization(login: "${ORG}") {
        discussions(first: ${limit}, orderBy: {field: CREATED_AT, direction: DESC}, categoryId: "DIC_kwDOCxtqLM4Ck7eO") {
          nodes {
            title
            bodyText
            url
            createdAt
            author {
              login
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'Pulsar-Website',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      return null;
    }

    const announcements = result.data?.organization?.discussions?.nodes || [];
    
    return announcements.map(ann => ({
      title: ann.title,
      body: ann.bodyText?.substring(0, 200) || '',
      url: ann.url,
      createdAt: ann.createdAt,
      author: ann.author?.login || 'Team',
    }));
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return null;
  }
}

// Format date as relative time
export function formatRelativeTime(dateString) {
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

// Format number with k/M suffix
export function formatNumber(num) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
}
