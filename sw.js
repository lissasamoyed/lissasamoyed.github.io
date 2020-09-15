"use strict";

const CACHE_NAME = 'lissasmoyedhomes.com-1599849933876';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/breed-information-1","/shipping","/faq","/available-puppies","/contact","/about"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/4524c1974583bbdd/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/cb565ef0d1827a63/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/19f1f620b9b4c885/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/65e84005ea231428/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CObject.is%2CIntersectionObserver%2CIntl.~locale.en-GB","//img1.wsimg.com/blobby/go/gpub/79fb68164481d54f/script.js","//img1.wsimg.com/blobby/go/gpub/8828666089615103/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/b2a49e65002ae522/script.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.67.8.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/9ef888aacb9e51d/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/8dc6dee173a78a35/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/d18a3e7c1638101d/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/ea768fb953e37b6a/script.js","//img1.wsimg.com/blobby/go/gpub/39db1d9197da01ae/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/3f688f794724199e/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/e88398806edc134c/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/b93835d516c2333d/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/9abdd7c8f53826c8/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/97725229fcab057c/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/351b10530825261e/script.js","//img1.wsimg.com/blobby/go/gpub/fb5b28d4a084ab4e/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/9ed8c76011955281/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/5408a5586b2efe94/script.js","//img1.wsimg.com/blobby/go/gpub/2af1daf392daf53/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/2e9f7536d6d281ea/script.js","//img1.wsimg.com/blobby/go/gpub/67b286479caa4f4d/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/922d431045596d5d/script.js","//img1.wsimg.com/blobby/go/gpub/39e0483a226a278a/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/39efe55637e096db/script.js","//img1.wsimg.com/blobby/go/gpub/46e1d7900bc2a322/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/78a97b3568a7fe02/script.js","//img1.wsimg.com/blobby/go/gpub/de106938e4a3fbae/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/5cbb09be566e863e/script.js","//fonts.googleapis.com/css?family=Abril+Fatface:400&display=swap","//fonts.googleapis.com/css?family=Droid+Sans:300,400,700,800&display=swap","//fonts.googleapis.com/css?family=Vollkorn:700,900&display=swap","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/c5f72b0f42d00f4/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/3debedae4efc51ea/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/87788b44b9f74a76/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/cd8bcfb7ec8d1603/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/1ba1a92a271b8c61/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/6ea4acb3494c0121/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/718042fa555bb9d0/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/b4e94d67b7903bee/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/3288249b2741cdb8/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/7d451e4f08242898/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/a3d2d86dfea5b65c/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/5b5ffa85960a4d6c/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/1c57fd8365579fc0/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/f531fc54e1c72564/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/f3a25a71e4b7c391/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/b7dbd7380c53eec3/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/cf7c796dce59549e/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/859d3ed33d1b8659/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/8fc4cc8eb6a0d65b/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/6766791504f1144d/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/d832d211ed9bd7c6/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/715e7dc0a0e7b466/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/8c6d37bf856835ed/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/3b79edc05b895476/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/3ff0cd79f8efedfd/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/273b798d642a8f2b/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/d0ee942c41771182/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/3e45fc65089af4a/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/e1e1de0c20a1b868/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/7fbdc9205e3cf67d/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/f60991647ef7d7ad/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/eed1d835736b8a6e/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/4e8be25d841e2cce/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/740dbbf2908955c5/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/425a926780a5523c/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/cf1170d83ff0d2f8/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/bd2069e5afea7608/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/870aa360cdca9cf0/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/906a57980c9bcdf3/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/eb724081a854b771/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/24d7609f0d5dae57/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/9b9c36b4b0f0528e/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/f1e4fb4731cb9912/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/4f5bc2febb3fca8a/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/141996e0c11a65a8/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/fc4b58d0f310acbc/styles.css","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/79ddf86c132f7e84/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/a891ad0fc8be8d2e/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/8571d30f28ad9140/script.js","//img1.wsimg.com/blobby/go/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/gpub/148c3276f0122b6b/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect","https://calendar.apps.dev-secureserver.net","https://calendar.apps.test-secureserver.net","https://calendar.apps.secureserver.net"]');
const networkOnlyUrlsRegex = JSON.parse('["lissasmoyedhomes.com/m/api/.*","lissasmoyedhomes.com(?:/.*)?/ola/services/.*","lissasmoyedhomes.com/ola/meetings/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/feed/post/","https://blog.apps.secureserver.net/v1/website/bdbdb6dc-c6a8-4307-bdf3-6bdaafc8da7e/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["lissasmoyedhomes.com(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
self.addEventListener('unhandledrejection', function (event) {
  // eslint-disable-next-line no-console
  console.warn('sw unhandledrejection error: ', event.reason);
});

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources());
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true;
  }

  if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    if (!networkResponse.ok) {
      return networkResponse;
    }

    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        networkResponse.ok && cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);