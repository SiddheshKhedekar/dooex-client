/* global WorkboxSW */

importScripts('/workbox/workbox-sw.dev.v2.1.0.js');

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
