const C='teslanav-v13';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png','./radares.json'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.origin===location.origin){                 // app: cache primero
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }                                               // mapa/overpass/cdn: red directa (no se intercepta)
});
