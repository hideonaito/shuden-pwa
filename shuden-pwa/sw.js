self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("shuden-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./main.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});