self.addEventListener('install',function(e){e.waitUntil(self.skipWaiting())});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(e.request.method==='GET'&&u.origin===self.location.origin&&u.pathname.indexOf(new URL(self.registration.scope).pathname)===0&&(e.request.mode==='navigate'||u.pathname.endsWith('/version.json'))){e.respondWith(fetch(e.request,{cache:'no-store'}));}});
