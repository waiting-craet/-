/**
 * Cloudflare Worker for React SPA with Workers Sites
 * Workers Sites automatically handles static files
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Workers Sites automatically serves files from the bucket
    // We just need to handle API routes or custom logic
    if (path.startsWith('/api/')) {
      return new Response('API not implemented', { status: 501 });
    }

    // Let Workers Sites handle the request
    // It will serve index.html for non-existent files (SPA routing)
    return env.ASSETS.fetch(request);
  }
};