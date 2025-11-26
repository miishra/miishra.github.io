// Cloudflare Worker for incrementing visitor counter
// Deploy this to Cloudflare Workers (free tier available)
// Set TOKEN_VISITOR as an environment variable in Cloudflare

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Only POST requests are allowed', { status: 405 });
    }

    try {
      const token = env.TOKEN_VISITOR;
      const owner = 'miishra';
      const repo = 'miishra.github.io';
      const path = '_data/visitor_count.json';

      // Fetch current file
      const getResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${token}`,
            'User-Agent': 'Cloudflare-Worker'
          }
        }
      );

      if (!getResponse.ok) {
        return new Response('Failed to fetch file', { status: 500 });
      }

      const fileData = await getResponse.json();
      const content = atob(fileData.content);
      const json = JSON.parse(content);

      // Increment count
      json.count = (json.count || 0) + 1;
      json.last_updated = new Date().toISOString();

      const newContent = JSON.stringify(json, null, 2);
      const encodedContent = btoa(newContent);

      // Update file
      const updateResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'Cloudflare-Worker'
          },
          body: JSON.stringify({
            message: `chore: increment visitor count to ${json.count}`,
            content: encodedContent,
            sha: fileData.sha
          })
        }
      );

      if (updateResponse.ok) {
        return new Response(JSON.stringify({ count: json.count }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        return new Response('Failed to update file', { status: 500 });
      }
    } catch (error) {
      console.error('Error:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
};
