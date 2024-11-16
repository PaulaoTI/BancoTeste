self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-cache').then((cache) => {
            return cache.addAll([
                './index.html',
                './imagens/logo.jpg',
                './imagens/deposito.png',
                './imagens/sacar.png',
                './style.css'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});