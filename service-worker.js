self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Sem cache por enquanto.
  // Isso evita travar versão antiga do app quando fizermos ajustes.
});
