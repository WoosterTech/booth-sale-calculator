if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),f={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1WLj1p4u.css",revision:null},{url:"assets/index-BmBtkg1q.js",revision:null},{url:"index.html",revision:"7daffc2a04014237658c95ea7edd16f0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"web-app-manifest-192x192.png",revision:"55b6cf153a190745a89ab1f07f420731"},{url:"web-app-manifest-512x512.png",revision:"09663c771e57278cacc2228b8f0a80c1"},{url:"manifest.webmanifest",revision:"95276d9773452d01a35ce333f2f8d43a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
