// service-worker.js

import { precacheAndRoute, createHandlerBoundToURL, setCacheNameDetails } from 'workbox-precaching';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';

// Устанавливаем имя кэша
setCacheNameDetails({
  prefix: 'my-app',
  suffix: 'v1',
});

// Предварительно кэшируем файлы, указанные в manifest.json
precacheAndRoute(self.__WB_MANIFEST);

// Стратегия Cache First для изображений
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      // Плагин для максимального размера кэша
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50, // Максимальное количество изображений в кэше
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
      }),
    ],
  })
);

// Стратегия Network First для API-запросов
registerRoute(
  ({ request }) => request.destination === 'fetch' && request.url.includes('/api/'),
  new NetworkFirst({
    cacheName: 'api-data',
    networkTimeoutSeconds: 10, // Период ожидания для сети
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20, // Максимальное количество API-запросов в кэше
        maxAgeSeconds: 5 * 60, // 5 минут
      }),
    ],
  })
);

// Стратегия Stale While Revalidate для JS и CSS файлов
registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50, // Максимальное количество ресурсов в кэше
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 дней
      }),
    ],
  })
);

// Очищаем старые кэши
self.addEventListener('activate', (event) => {
  const currentCaches = [ 'images', 'api-data', 'static-resources' ];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
