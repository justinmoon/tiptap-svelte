!function(e){var t={};function c(n){if(t[n])return t[n].exports;var d=t[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,c),d.l=!0,d.exports}c.m=e,c.c=t,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)c.d(n,d,function(t){return e[t]}.bind(null,d));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){"use strict";c.r(t);const n=["client/assets/images/90c6e8354fb294c22709535f29618b16.sprite.svg","client/b10edd572cacd2ef6784/basic.3.js","client/b10edd572cacd2ef6784/basic~code$45highlighting~collaboration~drag$45handle~embeds~export_~floating$45menu~focus~hiding$45~c9af0f6d.0.js","client/b10edd572cacd2ef6784/code$45highlighting.4.js","client/b10edd572cacd2ef6784/collaboration.5.js","client/b10edd572cacd2ef6784/drag$45handle.6.js","client/b10edd572cacd2ef6784/drag$45handle_DragItem.7.js","client/b10edd572cacd2ef6784/drag$45handle~embeds.2.js","client/b10edd572cacd2ef6784/embeds.8.js","client/b10edd572cacd2ef6784/embeds_Iframe.9.js","client/b10edd572cacd2ef6784/export_.10.js","client/b10edd572cacd2ef6784/floating$45menu.11.js","client/b10edd572cacd2ef6784/focus.12.js","client/b10edd572cacd2ef6784/hiding$45menu$45bar.13.js","client/b10edd572cacd2ef6784/history.14.js","client/b10edd572cacd2ef6784/images.15.js","client/b10edd572cacd2ef6784/index.16.js","client/b10edd572cacd2ef6784/links.17.js","client/b10edd572cacd2ef6784/main.js","client/b10edd572cacd2ef6784/markdown$45shortcuts.19.js","client/b10edd572cacd2ef6784/menu$45bubble.20.js","client/b10edd572cacd2ef6784/placeholder.21.js","client/b10edd572cacd2ef6784/read$45only.22.js","client/b10edd572cacd2ef6784/search$45and$45replace.23.js","client/b10edd572cacd2ef6784/suggestions.24.js","client/b10edd572cacd2ef6784/tables.25.js","client/b10edd572cacd2ef6784/title.26.js","client/b10edd572cacd2ef6784/todo$45list.27.js","client/b10edd572cacd2ef6784/trailing$45paragraph.28.js","client/b10edd572cacd2ef6784/vendors~basic~code$45highlighting~collaboration~drag$45handle~embeds~export_~floating$45menu~focus~h~bd88d227.1.js","client/b10edd572cacd2ef6784/vendors~collaboration.29.js","client/b10edd572cacd2ef6784/vendors~suggestions.30.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),d=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1580288496518").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1580288496518"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&d.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1580288496518").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}]);