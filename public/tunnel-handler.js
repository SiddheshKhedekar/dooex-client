/* global sw */

class TunnelHandler {
  constructor() {
    this.cache = sw.strategies.networkOnly();
  }

  /**
   * @param {Object} props
   * @param {FetchEvent} props.event
   * @param {Object} props.params
   * @param {URL} props.url
   */
  handle(props) {
    props.url.pathname = `/tunnel${props.url.pathname}`;

    const request = new Request(props.url);
    props.event = new FetchEvent('fetch', { request });

    return this.cache.handle(props);
  }
}
