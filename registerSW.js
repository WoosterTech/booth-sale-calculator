if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/booth-sale-calculator/sw.js', { scope: '/booth-sale-calculator/' })})}