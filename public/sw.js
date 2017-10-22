/* global WorkboxSW, SavedHandler, TunnelHandler */

importScripts('/workbox/workbox-sw.dev.v2.1.0.js');

importScripts('/saved-handler.js');
importScripts('/tunnel-handler.js');

const sw = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true,
});

sw.router.registerRoute(
  /doodles/,
  sw.strategies.cacheFirst({
    cacheName: 'doodles',
  }),
);

sw.router.registerRoute(/static/, sw.strategies.cacheFirst());

sw.router.registerRoute(/logos/, new TunnelHandler());
sw.router.registerRoute(/doodles\/api/, new TunnelHandler());

sw.router.registerRoute(/saved/, new SavedHandler());

['/', '/favicon.ico'].forEach((url) => {
  sw.router.registerRoute(url, sw.strategies.cacheFirst());
});
