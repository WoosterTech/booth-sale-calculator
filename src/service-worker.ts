/// <reference lib="webworker" />
import { precacheAndRoute } from 'workbox-precaching';
declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: never};

precacheAndRoute(self.__WB_MANIFEST);
