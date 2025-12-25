/**
 * Cloudflare Worker for serving React SPA
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Handle API routes if any
  if (path.startsWith('/api/')) {
    return new Response('API not implemented', { status: 501 });
  }

  // For all other requests, serve the static files
  // The files are uploaded with the worker build
  try {
    // Try to fetch the requested file from the worker's assets
    const assetUrl = new URL(path, request.url);
    const response = await fetch(assetUrl);

    if (response.ok) {
      // Add security headers
      const headers = new Headers(response.headers);
      headers.set('X-XSS-Protection', '1; mode=block');
      headers.set('X-Content-Type-Options', 'nosniff');
      headers.set('X-Frame-Options', 'DENY');
      headers.set('Referrer-Policy', 'unsafe-url');
      
      return new Response(response.body, {
        status: response.status,
        headers: headers
      });
    }

    // If the file doesn't exist and it's not a static asset,
    // serve index.html for SPA routing
    if (!path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
      const indexUrl = new URL('/index.html', request.url);
      const indexResponse = await fetch(indexUrl);
      
      if (indexResponse.ok) {
        const headers = new Headers(indexResponse.headers);
        headers.set('X-XSS-Protection', '1; mode=block');
        headers.set('X-Content-Type-Options', 'nosniff');
        headers.set('X-Frame-Options', 'DENY');
        headers.set('Referrer-Policy', 'unsafe-url');
        
        return new Response(indexResponse.body, {
          status: 200,
          headers: headers
        });
      }
    }

    // Return 404 for missing static assets
    return new Response('Not Found', { status: 404 });

  } catch (error) {
    console.error('Error serving file:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}