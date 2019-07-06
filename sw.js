const VERSION = "0.0.1";
const CACHE_APP_NAME = 'hongwise-app';
const CACHE_APP = [
	'/assets/css/main.css',
	'/assets/js/main.js',
	'/',
	'/index.html',
	'/docs/index.html',
	'/blog/index.html',
	'/profile/index.html',
];

console.log(`installing sw.js`);

self.addEventListener('install',function(e){
    e.waitUntil(
        Promise.all([
            caches.open(CACHE_APP_NAME),
            self.skipWaiting()
          ]).then(function(storage){
            var app_cache = storage[0];
            return Promise.all([
              app_cache.addAll(CACHE_APP)]);
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (cacheName !== CACHE_APP_NAME) {
                            console.log('deleting',cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

this.addEventListener('fetch', function(event) {
  var response;
  event.respondWith(caches.match(event.request)
    .then(function (match) {
      return match || fetch(event.request);
    }).catch(function() {
      return fetch(event.request);
    })
    .then(function(r) {
      response = r;
      caches.open(CACHE_APP_NAME).then(function(cache) {
        cache.put(event.request, response);
      });
      return response.clone();
    })
  );
});