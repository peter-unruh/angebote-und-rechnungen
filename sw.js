/* Service Worker für „Angebote & Rechnungen“: macht das Programm offline nutzbar.
   Er speichert nur die Programmdateien. Deine Daten liegen im Browser-Speicher und werden hier nicht angefasst.
   Bei einer neuen Version den Namen in CACHE anpassen, z. B. 'angebote-rechnungen-3.3'. */
const CACHE = 'angebote-rechnungen-3.2';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './impressum.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(FILES.map((f) => c.add(f).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Erst im Netz nachsehen, damit Updates sofort ankommen. Offline oder nach 4 Sekunden ohne Antwort kommt die gespeicherte Fassung. */
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(new Promise((resolve) => {
    let done = false;
    const finish = (r) => { if (!done && r) { done = true; resolve(r); } };
    const fromCache = () => caches.match(req, { ignoreSearch: true })
      .then((r) => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined));
    const timer = setTimeout(() => fromCache().then(finish), 4000);
    fetch(req).then((res) => {
      clearTimeout(timer);
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      finish(res);
    }).catch(() => {
      clearTimeout(timer);
      fromCache().then((r) => { finish(r || Response.error()); });
    });
  }));
});
