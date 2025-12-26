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

    // Try to get the asset from Workers Sites
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If asset not found, return index.html for SPA routing
      return await env.ASSETS.fetch(new Request('/index.html', request));
    }
  }
};