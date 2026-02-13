// Server-side function to fetch discussions at build time

const ORG = 'Far-Beyond-Pulsar';

// Decode HTML entities
function decodeHtmlEntities(text) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&#x2F;': '/',
    '&#x27;': "'",
    '&#x60;': '`',
    '&#x3D;': '=',
  };
  
  return text.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity);
}

// Fetch discussion stats from GitHub API
async function fetchDiscussionStats(discussionNumber) {
  try {
    const query = `
      query {
        organization(login: "${ORG}") {
          discussion(number: ${discussionNumber}) {
            upvoteCount
            comments {
              totalCount
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Pulsar-Website',
      },
      body: JSON.stringify({ query }),
    });

    if (response.ok) {
      const result = await response.json();
      const discussion = result.data?.organization?.discussion;
      if (discussion) {
        return {
          upvotes: discussion.upvoteCount || 0,
          comments: discussion.comments?.totalCount || 0,
        };
      }
    }
    return null;
  } catch (error) {
    console.warn('Failed to fetch stats for discussion', discussionNumber, error);
    return null;
  }
}

export async function fetchDiscussionsAtBuildTime(limit = 5) {
  try {
    const response = await fetch(`https://github.com/orgs/${ORG}/discussions.atom`, {
      headers: {
        'User-Agent': 'Pulsar-Website',
      },
      // Remove cache: 'no-store' to allow static generation at build time
    });

    if (!response.ok) {
      console.warn('Failed to fetch discussions RSS:', response.status);
      return [];
    }

    const xmlText = await response.text();
    
    // Parse XML using regex
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const entries = [];
    let match;
    
    while ((match = entryRegex.exec(xmlText)) !== null && entries.length < limit) {
      const entry = match[1];
      
      const getTag = (tag) => {
        const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
        const m = entry.match(regex);
        return m ? decodeHtmlEntities(m[1].trim()) : '';
      };
      
      const getAttr = (tag, attr) => {
        const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"[^>]*>`);
        const m = entry.match(regex);
        return m ? decodeHtmlEntities(m[1]) : '';
      };
      
      const title = getTag('title');
      const link = getAttr('link', 'href');
      const published = getTag('published');
      const updated = getTag('updated');
      const author = getTag('name');
      const rawContent = getTag('content');
      
      // Strip HTML tags and normalize whitespace
      const content = rawContent
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      // GitHub avatar URL format
      const avatarUrl = author ? `https://github.com/${author}.png?size=40` : null;
      
      // Extract discussion number from URL
      const discussionNumber = link.match(/discussions\/(\d+)/)?.[1];
      
      entries.push({
        title,
        url: link,
        author,
        avatarUrl,
        published,
        updated,
        body: content.substring(0, 150) + (content.length > 150 ? '...' : ''),
        discussionNumber,
        // Stats would require GitHub token, so we'll skip for now
        stats: null,
      });
    }

    return entries;
  } catch (error) {
    console.error('Error fetching discussions at build time:', error);
    return [];
  }
}
