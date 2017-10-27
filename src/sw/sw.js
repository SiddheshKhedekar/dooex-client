/* global WorkboxSW */

import SavedHandler from './saved-handler';
import TunnelHandler from './tunnel-handler';

importScripts('/workbox-sw.prod.v2.1.0.js');

const VERSION = '{{VERSION}}';

const sw = new WorkboxSW({
  cacheId: 'dooex',
  clientsClaim: true,
  skipWaiting: true,
});

sw.router.registerRoute(
  /doodles/,
  sw.strategies.cacheFirst({
    cacheName: 'doodles',
  }),
);

sw.router.registerRoute(/static/, sw.strategies.cacheFirst());
sw.router.registerRoute(/bundle\.js/, sw.strategies.networkOnly());

sw.router.registerRoute(/logos/, new TunnelHandler(sw));
sw.router.registerRoute(/doodles\/api/, new TunnelHandler(sw));

sw.router.registerRoute(/saved/, new SavedHandler(sw));

['/', '/favicon.ico'].forEach((url) => {
  sw.router.registerRoute(url, sw.strategies.cacheFirst());
});

sw.precache(['/doodles/meta', '/doodles/all']);

sw.precache([]);
