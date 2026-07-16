// sw.js - Service Worker for Myrealap Dress-up Game

const CACHE_NAME = 'myrealap-dressup-v1';
const ASSETS_TO_CACHE = [
  // Main HTML
  '/',
  '/index.html',
  
  // Fonts
  'fonts/ALGER.ttf',
  
  // CSS & JS (if any external)
  
  // Images - Landing & Help
  'images/quote-bg.png',
  'images/sparkle.png',
  'images/sparkle_a.png',
  'images/sparkle_b.png',
  'images/Go.png',
  'images/loading-bg.png',
  'images/landing.png',
  'images/play_landing.png',
  'images/play_help.png',
  'images/help.png',
  'images/bg_design_studio.jpg',
  'images/landing-sparkle.png',
  'images/bg_design_studio_help.jpg',
  'images/help_btn.png',
  'images/music.png',
  'images/prev.png',
  'images/next.png',
  'images/melody.png',
  'images/menu_mermaid.png',
  'images/menu_fairy.png',
  'images/menu_boy.png',
  'images/itemsbg.png',
  'images/up.png',
  'images/down.png',
  'images/print.png',
  'images/startover.png',
  'images/bg_btn.png',
  'images/fairy_icon.png',
  'images/mermaid_icon.png',
  'images/human_icon.png',
  
  // Help images
  'images/help/fashion_horse.png',
  'images/help/cock.png',
  'images/help/model_help.png',
  
  // Models
  'images/model/model_mermaid.png',
  'images/model/model_fairy.png',
  'images/model/model_boy.png',
  'images/mermaid_transfer.png',
  
  // Sounds
  'sounds/click.mp3',
  'sounds/hover.mp3',
  'sounds/appear.mp3',
  'sounds/appear1.mp3',
  'sounds/appear2.mp3',
  'sounds/appear3.mp3',
  'sounds/appear4.mp3',
  'sounds/appear5.mp3',
  
  // Music
  'music/music_game.mp3',
  'music/track1.mp3',
  'music/track2.mp3',
  'music/track3.mp3',
  
  // Model Viewer
  'model-viewer.html'
];

// Dynamically add landing images
for (let i = 1; i <= 9; i++) {
  ASSETS_TO_CACHE.push(`images/landing/${i}.png`);
}

// Dynamically add BG images
for (let i = 1; i <= 3; i++) {
  ASSETS_TO_CACHE.push(`images/bg/${i}.jpg`);
}

// Dynamically add all item images (thumbs and full)
const itemCategories = [
  // Mermaid
  ...['purple_pattern', 'yellow_fish2', 'blue', 'green_pattern', 'red_design', 
      'white_fish', 'pink_fish2', 'gray_fish', 'blue_pattern', 'yellow_design',
      'green_fish', 'purple_fish2', 'blue_fish2', 'white_pattern', 'red_fish2',
      'pink_pattern', 'yellow_pattern', 'color_fish2', 'green_fish2', 'white_fish2',
      'purple_fish', 'blue_fish'].map(name => 
        [`images/assets/thumb/mermaid/mermaid_${name}.png`, 
         `images/assets/full/mermaid/mermaid_${name}.png`]).flat(),
  // Shirts
  ...['1', '2', '3', '4'].map(i => 
    [`images/assets/thumb/mermaid/shirt${i}.png`, 
     `images/assets/full/mermaid/shirt${i}.png`]).flat(),
  // Accessories
  ...['1', '2', '3', '4', '5'].map(i => 
    [`images/assets/thumb/mermaid/acc${i}.png`, 
     `images/assets/full/mermaid/acc${i}.png`]).flat(),
  // Fairy
  ...['1', '2', '3'].map(i => 
    [`images/assets/thumb/fairy/wing${i}.png`, 
     `images/assets/full/fairy/wing${i}.png`,
     `images/assets/thumb/fairy/dress${i}.png`, 
     `images/assets/full/fairy/dress${i}.png`]).flat(),
  ...['1', '2'].map(i => 
    [`images/assets/thumb/fairy/shirt${i}.png`, 
     `images/assets/full/fairy/shirt${i}.png`,
     `images/assets/thumb/fairy/sock${i}.png`, 
     `images/assets/full/fairy/sock${i}.png`,
     `images/assets/thumb/fairy/shoe${i}.png`, 
     `images/assets/full/fairy/shoe${i}.png`,
     `images/assets/thumb/fairy/acc${i}.png`, 
     `images/assets/full/fairy/acc${i}.png`]).flat(),
  // Boy/Human
  ...['1', '2'].map(i => 
    [`images/assets/thumb/human/shirt${i}.png`, 
     `images/assets/full/human/shirt${i}.png`,
     `images/assets/thumb/human/pant${i}.png`, 
     `images/assets/full/human/pant${i}.png`,
     `images/assets/thumb/human/shoe${i}.png`, 
     `images/assets/full/human/shoe${i}.png`,
     `images/assets/thumb/human/acc${i}.png`, 
     `images/assets/full/human/acc${i}.png`]).flat()
];

// Add all item images to cache
itemCategories.forEach(url => {
  if (!ASSETS_TO_CACHE.includes(url)) {
    ASSETS_TO_CACHE.push(url);
  }
});

// Add menu buttons
const btnTypes = ['tails', 'shirts', 'accessories', 'wings', 'dress', 'socks', 'shoes', 'pants'];
const btnSuffixes = ['_mer', '_fairy', '_boy'];
btnTypes.forEach(type => {
  btnSuffixes.forEach(suffix => {
    const url = `images/btn_${type}${suffix}.png`;
    if (!ASSETS_TO_CACHE.includes(url)) {
      ASSETS_TO_CACHE.push(url);
    }
  });
});

console.log(`Total assets to cache: ${ASSETS_TO_CACHE.length}`);

// Install event - cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching assets...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('All assets cached!');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Cache install error:', error);
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated!');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request because it's a one-time use
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it's a one-time use
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});