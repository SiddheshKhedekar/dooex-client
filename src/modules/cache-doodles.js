// @flow

import type { Doodle } from 'modules/types';

import { savedDoodlesCacheName as cacheName } from 'modules/names';

const linkTypes = ['url', 'hires_url', 'standalone_html'];

/**
 * Filter out null links in doodle.
 */
function getValidLinks(doodle: Doodle) {
  return linkTypes.map(linkType => doodle[linkType]).filter(link => link !== null);
}

/**
 * Add doodle assets to cache.
 */
async function cacheDoodle(doodle: Doodle) {
  const cache = await caches.open(cacheName);

  const cachePromises = getValidLinks(doodle).map(async (link) => {
    const resp = await fetch(link, { mode: 'no-cors' });

    return cache.put(link, resp);
  });

  return Promise.all(cachePromises);
}

/**
 * Remove doodle assets from cache.
 */
async function uncacheDoodle(doodle: Doodle) {
  const cache = await caches.open(cacheName);

  const cachePromises = getValidLinks(doodle).map(async link => cache.delete(link));

  return Promise.all(cachePromises);
}

export { cacheDoodle, uncacheDoodle };
