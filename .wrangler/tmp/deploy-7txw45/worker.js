// worker.js
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path.startsWith("/api/")) {
      return new Response("API not implemented", { status: 501 });
    }
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return await env.ASSETS.fetch(new Request("/index.html", request));
    }
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
