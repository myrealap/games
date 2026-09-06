// ==================== QUOTES ====================
const quotes = [
  { text: "groom & zoom", author: "myrealap" },
  { text: "every pet deserves to shine", author: "myrealap" },
  { text: "style & care", author: "myrealap" },
  { text: "love your pet", author: "myrealap" }
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quoteText').textContent = `" ${quote.text} "`;
  document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
}
showRandomQuote();

// ==================== SPARKLE IMAGES ====================
const sparkleImages = ['images/sparkle_a.png', 'images/sparkle_b.png'];
function getRandomSparkleImage() { 
  return sparkleImages[Math.floor(Math.random() * sparkleImages.length)]; 
}

// ==================== GLOBAL SPARKLE BURST ====================
function triggerGlobalSparkleBurst(callback) {
  const container = document.getElementById('globalSparkleContainer');
  const totalSparkles = 40;
  let sparklesCreated = 0;

  function createBurstSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'global-sparkle';
    sparkle.style.backgroundImage = `url('${getRandomSparkleImage()}')`;
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.animationDelay = Math.random() * 0.3 + 's';
    const size = Math.random() * 40 + 20;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    container.appendChild(sparkle);
    sparklesCreated++;
    if (sparklesCreated >= totalSparkles) {
      setTimeout(() => { 
        container.innerHTML = ''; 
        if (callback) callback(); 
      }, 1500);
    }
  }

  for (let i = 0; i < totalSparkles; i++) {
    setTimeout(createBurstSparkle, i * 25);
  }
}

// ==================== WHITE FADE TRANSITION ====================
function whiteFadeTransition(callback) {
  const whiteFade = document.getElementById('whiteFade');
  whiteFade.classList.add('active');
  setTimeout(() => {
    if (callback) callback();
    setTimeout(() => {
      whiteFade.classList.remove('active');
    }, 300);
  }, 400);
}

// ==================== AUDIO ====================
const clickSound = new Audio("sounds/click.mp3");
clickSound.volume = 0.5;

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
}

const landingMusic = new Audio("music/music_game.wav");
landingMusic.loop = true;
landingMusic.volume = 0.6;

function playLandingMusic() {
  landingMusic.currentTime = 0;
  landingMusic.play().catch(() => {});
}

function stopLandingMusic() {
  landingMusic.pause();
  landingMusic.currentTime = 0;
}

// ==================== LANDING ANIMATION CONTROL ====================
// The animation itself (its assets/atlases) is already preloaded during
// the loading screen, but it must not start ticking/playing until the
// Go fade-out finishes. We tell the iframe to start via postMessage,
// with buffering on the iframe's side in case it isn't quite ready yet.
function startLandingAnimation() {
  const landingIframe = document.getElementById('landingAnimation');
  if (landingIframe && landingIframe.contentWindow) {
    landingIframe.contentWindow.postMessage({ type: 'startLandingAnimation' }, '*');
  }
}

function stopLandingAnimation() {
  const landingIframe = document.getElementById('landingAnimation');
  if (landingIframe && landingIframe.contentWindow) {
    landingIframe.contentWindow.postMessage({ type: 'stopLandingAnimation' }, '*');
  }
}

function startSelectorAnimation() {
  const iframe = document.getElementById('selectorAnimation');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'startSelectorAnimation' }, '*');
  }
}

function stopSelectorAnimation() {
  const iframe = document.getElementById('selectorAnimation');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'stopSelectorAnimation' }, '*');
  }
}

// ==================== FILE LOADING ====================
const filesToLoad = [
  "images/quote-bg.png",
  "images/sparkle.png",
  "images/sparkle_a.png",
  "images/sparkle_b.png",
  "images/Go.png",
  "images/loading-bg.png",
  "images/bg.png",
  "images/bg_selector.png",
  "images/play_landing.png",
  "sounds/click.mp3",
  "sounds/hover.mp3",
  "music/music_game.wav",
  // Landing animation (Adobe Animate) atlas images.
  // Preloading these here means the iframe's own CreateJS loader
  // hits the browser cache instead of racing the network, so the
  // animation never flashes a black square on its first frames.
  "animations/images/landing_animation_atlas_1.png",
  "animations/images/landing_animation_atlas_2.png",
  "animations/images/landing_animation_atlas_3.png",
  "animations/images/landing_animation_atlas_4.png",
  "animations/images/landing_animation_atlas_5.png",
  "animations/images/landing_animation_atlas_6.png",
  "animations/images/landing_animation_atlas_7.png",
  "animations/images/landing_animation_atlas_8.png",
  "animations/images/landing_animation_atlas_9.png",
  "animations/images/landing_animation_atlas_10.png",
  "animations/images/landing_animation_atlas_11.png",
  "animations/images/landing_animation_atlas_12.png",
  "animations/images/landing_animation_atlas_13.png",
  "animations/images/landing_animation_atlas_14.png",
  "animations/images/landing_animation_atlas_15.png",
  "animations/images/landing_animation_atlas_16.png",
  "animations/images/landing_animation_atlas_17.png",
  "animations/images/landing_animation_atlas_18.png",
  "animations/images/landing_animation_atlas_19.png",
  "animations/images/landing_animation_atlas_20.png",
  "animations/images/landing_animation_atlas_21.png",
  "animations/images/landing_animation_atlas_22.png",
  "animations/images/landing_animation_atlas_23.png",
  "animations/images/landing_animation_atlas_24.png",
  "animations/images/landing_animation_atlas_25.png",
  "animations/images/landing_animation_atlas_26.png",
  // selector_animation.html atlas images — same reasoning as above,
  // avoids a flash of missing art when the pan reveals it.
  "animations/images/selector_animation_atlas_1.png",
  "animations/images/selector_animation_atlas_2.png"
  // TODO: once the real horse/cat/dog_game_anim.html and
  // brush_horse/cat/dog.html exports exist, add their atlas images
  // here too, plus the game-screen art (images/horse_game.png,
  // images/dog_collar.png, images/tool_sparkle.png, etc. — see
  // ANIMAL_CONFIG below for the full list of expected paths).
];

let loadedCount = 0;
const totalFiles = filesToLoad.length;
const loadingPercentElement = document.getElementById('loadingPercent');

function updateLoadingPercent() {
  const percent = Math.floor((loadedCount / totalFiles) * 100);
  loadingPercentElement.textContent = percent + '%';
}

function loadFile(src) {
  return new Promise((resolve) => {
    const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(src);
    const isAudio = /\.(mp3|wav|ogg|m4a)$/i.test(src);

    if (isImage) {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        updateLoadingPercent();
        resolve();
      };
      img.onerror = () => {
        loadedCount++;
        updateLoadingPercent();
        resolve();
      };
      img.src = src;
    } else if (isAudio) {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.oncanplaythrough = () => {
        loadedCount++;
        updateLoadingPercent();
        resolve();
      };
      audio.onerror = () => {
        loadedCount++;
        updateLoadingPercent();
        resolve();
      };
      audio.src = src;
      audio.load();
    } else {
      fetch(src)
        .then(() => {
          loadedCount++;
          updateLoadingPercent();
          resolve();
        })
        .catch(() => {
          loadedCount++;
          updateLoadingPercent();
          resolve();
        });
    }
  });
}

async function preloadAllAssets() {
  updateLoadingPercent();
  const loadPromises = filesToLoad.map(file => loadFile(file));
  await Promise.all(loadPromises);
  loadedCount = totalFiles;
  updateLoadingPercent();
  setTimeout(() => replacePercentWithGoButton(), 300);
}

function replacePercentWithGoButton() {
  const percentEl = document.getElementById('loadingPercent');
  const goBtn = document.getElementById('goButton');
  const loadingBg = document.getElementById('loadingBg');
  percentEl.classList.add('fade-out');
  setTimeout(() => {
    percentEl.style.display = 'none';
    loadingBg.classList.add('show');
    goBtn.classList.add('show');
  }, 600);
}

// ==================== GO BUTTON ====================
function handleGoButtonClick(e) {
  e.preventDefault();
  playClickSound();
  const goButton = document.getElementById('goButton');
  goButton.classList.add('clicked');
  triggerGlobalSparkleBurst(() => {
    whiteFadeTransition(() => {
      const loadingScreen = document.getElementById('loadingScreen');
      const loadingActionArea = document.getElementById('loadingActionArea');
      loadingScreen.classList.add('hide');
      loadingActionArea.style.display = 'none';
      
      // Show landing scene (scene-viewport fades in; landingPage is now
      // just the left panel inside the scene-track)
      setTimeout(() => {
        const sceneViewport = document.getElementById('sceneViewport');
        sceneViewport.classList.add('show');
        playLandingMusic();
        startLandingAnimation();
        
        // Show play button after 7 seconds
        setTimeout(() => {
          const playBtnContainer = document.getElementById('playBtnContainer');
          playBtnContainer.classList.add('show');
        }, 12000);
        
      }, 400);
    });
  });
}

// ==================== PLAY BUTTON ====================
// Track this to the CSS transition duration on .scene-track (see style.css)
const SCENE_PAN_DURATION_MS = 3400;
// How long after Play is clicked before the selector animation actually
// starts ticking. Adjust this single number to change the delay.
const SELECTOR_ANIMATION_START_DELAY_MS = 300;

function handlePlayButtonClick(e) {
  e.preventDefault();
  playClickSound();
  triggerGlobalSparkleBurst(() => {
    // Music keeps playing through the game — don't stop it here.
    document.getElementById('playBtnContainer').classList.remove('show');

    // The pan itself IS the transition — no white-fade needed here,
    // the background art carries the scene across.
    const sceneTrack = document.getElementById('sceneTrack');
    sceneTrack.dataset.scene = 'selector';

    // selector_animation.html is already preloaded and sitting on its
    // first frame (never a black/blank canvas) — this is what actually
    // starts it ticking. Delayed per SELECTOR_ANIMATION_START_DELAY_MS
    // above.
    setTimeout(startSelectorAnimation, SELECTOR_ANIMATION_START_DELAY_MS);

    // Keep the landing animation visible/playing for the whole scroll —
    // only clear it once it's fully off-screen, so it never disappears
    // mid-pan.
    setTimeout(() => {
      stopLandingAnimation();
      console.log('Arrived at the help + selector screen.');
    }, SCENE_PAN_DURATION_MS);
  });
}

// ==================== ANIMAL SELECTOR ====================
const ANIMALS = ['horse', 'cat', 'dog'];

function playAnimalPreview(animal) {
  const card = document.querySelector('.animal-card[data-animal="' + animal + '"]');
  const iframe = document.getElementById('animPreview_' + animal);
  if (!card || !iframe) return;
  card.classList.add('active');
  iframe.classList.add('show');
  if (iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'playAnimation' }, '*');
  }
}

function stopAnimalPreview(animal) {
  const card = document.querySelector('.animal-card[data-animal="' + animal + '"]');
  const iframe = document.getElementById('animPreview_' + animal);
  if (!card || !iframe) return;
  card.classList.remove('active');
  iframe.classList.remove('show');
  if (iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'stopAnimation' }, '*');
  }
}

function confirmAnimalSelection(animal) {
  goToGameScreen(animal);
}

// ==================== GAME SCREEN ====================
// One place to tune everything per-animal: which accessory it has and
// exactly where it sits, where the sparkle lands, the hair-color art,
// and which Animate files it uses. Adjust the offsets here — nothing
// else needs to change.
const ANIMAL_CONFIG = {
  horse: {
    mainImage: 'images/horse_game.png',
    accessoryType: 'saddle',
    accessoryImage: 'images/horse_saddle.png',
    accessoryIcon: 'images/tool_saddle.png',
    // Percentages relative to the game panel. Tune these until the
    // saddle sits exactly on the horse's back.
    accessoryOffset: { top: '55%', left: '52%', width: '35%' },
    sparkleOffset: { top: '38%', left: '55%' },
    hairColors: [
      'images/horse_game_color1.png',
      'images/horse_game_color2.png',
      'images/horse_game_color3.png'
    ],
    gameAnim: 'animations/horse_game_anim.html',
    brushAnim: 'animations/brush_horse.html'
  },
  cat: {
    mainImage: 'images/cat_game.png',
    accessoryType: 'collar',
    accessoryImage: 'images/cat_collar.png',
    accessoryIcon: 'images/tool_collar.png',
    accessoryOffset: { top: '58%', left: '50%', width: '18%' },
    sparkleOffset: { top: '35%', left: '50%' },
    hairColors: [
      'images/cat_game_color1.png',
      'images/cat_game_color2.png',
      'images/cat_game_color3.png'
    ],
    gameAnim: 'animations/cat_game_anim.html',
    brushAnim: 'animations/brush_cat.html'
  },
  dog: {
    mainImage: 'images/dog_game.png',
    accessoryType: 'collar',
    accessoryImage: 'images/dog_collar.png',
    accessoryIcon: 'images/tool_collar.png',
    accessoryOffset: { top: '58%', left: '50%', width: '20%' },
    sparkleOffset: { top: '35%', left: '50%' },
    hairColors: [
      'images/dog_game_color1.png',
      'images/dog_game_color2.png',
      'images/dog_game_color3.png'
    ],
    gameAnim: 'animations/dog_game_anim.html',
    brushAnim: 'animations/brush_dog.html'
  }
};

// How long after arriving at the game screen before its animation
// starts ticking. Adjust this single number to change the delay.
const GAME_ANIMATION_START_DELAY_MS = 300;

let currentAnimal = null;

// Crossfades an <img> to a new src instead of hard-cutting — matters
// most for cat/dog hair colors, since those swap the WHOLE image, not
// just a tint.
function crossfadeImage(imgEl, newSrc) {
  imgEl.classList.add('fading');
  setTimeout(() => {
    imgEl.src = newSrc;
    imgEl.classList.remove('fading');
  }, 250); // matches the .game-character-img transition duration in CSS
}

function setupGameScreen(animal) {
  const config = ANIMAL_CONFIG[animal];
  if (!config) return;
  currentAnimal = animal;

  const mainImg = document.getElementById('gameMainImage');
  mainImg.src = config.mainImage;

  const accessoryImg = document.getElementById('gameAccessory');
  accessoryImg.src = config.accessoryImage;
  accessoryImg.classList.remove('show');
  accessoryImg.style.top = config.accessoryOffset.top;
  accessoryImg.style.left = config.accessoryOffset.left;
  accessoryImg.style.width = config.accessoryOffset.width;

  const accessoryButton = document.getElementById('accessoryButton');
  accessoryButton.style.backgroundImage = `url('${config.accessoryIcon}')`;

  const sparkleSpot = document.getElementById('gameSparkleSpot');
  sparkleSpot.style.top = config.sparkleOffset.top;
  sparkleSpot.style.left = config.sparkleOffset.left;

  // Fresh src each time — this is a fresh page load in the iframe, so
  // its own script re-runs and waits for "startGameAnimation" again.
  document.getElementById('gameAnimation').src = config.gameAnim;
}

function goToGameScreen(animal) {
  setupGameScreen(animal);

  document.getElementById('sceneTrack').dataset.scene = 'game';

  setTimeout(() => {
    const gameIframe = document.getElementById('gameAnimation');
    if (gameIframe.contentWindow) {
      gameIframe.contentWindow.postMessage({ type: 'startGameAnimation' }, '*');
    }
  }, GAME_ANIMATION_START_DELAY_MS);
}

function toggleAccessory() {
  document.getElementById('gameAccessory').classList.toggle('show');
}

function setHairColor(colorIndex) {
  if (!currentAnimal) return;
  const config = ANIMAL_CONFIG[currentAnimal];
  const newSrc = config.hairColors[colorIndex];
  if (!newSrc) return;
  crossfadeImage(document.getElementById('gameMainImage'), newSrc);
}

// Reuses the same sparkle art as the landing-screen burst, but anchored
// to one spot (from ANIMAL_CONFIG) instead of scattered across the
// whole screen.
function triggerSparkleOnAnimal() {
  const spot = document.getElementById('gameSparkleSpot');
  const container = document.getElementById('globalSparkleContainer');
  const rect = spot.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const sparkle = document.createElement('div');
      sparkle.className = 'global-sparkle';
      sparkle.style.backgroundImage = `url('${getRandomSparkleImage()}')`;
      sparkle.style.left = (rect.left + (Math.random() * 60 - 30)) + 'px';
      sparkle.style.top = (rect.top + (Math.random() * 60 - 30)) + 'px';
      const size = Math.random() * 30 + 15;
      sparkle.style.width = size + 'px';
      sparkle.style.height = size + 'px';
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1200);
    }, i * 40);
  }
}

function playBrushAnimation() {
  if (!currentAnimal) return;
  // TODO: once brush_<animal>.html exports exist, load + trigger them
  // the same way as the game animation (fresh iframe src + postMessage
  // "startBrushAnimation" / "stopBrushAnimation").
  console.log('Brush animation for', currentAnimal, ANIMAL_CONFIG[currentAnimal].brushAnim);
}

document.getElementById('accessoryButton').addEventListener('click', () => {
  playClickSound();
  toggleAccessory();
});
document.getElementById('sparkleButton').addEventListener('click', () => {
  playClickSound();
  triggerSparkleOnAnimal();
});
document.getElementById('brushButton').addEventListener('click', () => {
  playClickSound();
  playBrushAnimation();
});
document.querySelectorAll('.game-color-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    playClickSound();
    setHairColor(parseInt(btn.dataset.colorIndex, 10));
  });
});

ANIMALS.forEach((animal) => {
  const card = document.querySelector('.animal-card[data-animal="' + animal + '"]');
  if (!card) return;

  // Desktop: hovering previews the animation; moving away stops it.
  card.addEventListener('mouseenter', () => playAnimalPreview(animal));
  card.addEventListener('mouseleave', () => stopAnimalPreview(animal));

  // Desktop click / mobile tap: play the animation AND confirm the pick.
  card.addEventListener('click', () => {
    playClickSound();
    playAnimalPreview(animal);
    confirmAnimalSelection(animal);
  });
  card.addEventListener('touchend', function (e) {
    e.preventDefault();
    playClickSound();
    playAnimalPreview(animal);
    confirmAnimalSelection(animal);
  });
});

// ==================== EVENT LISTENERS ====================
document.getElementById('goButton').addEventListener('click', handleGoButtonClick);
document.getElementById('goButton').addEventListener('touchend', function(e) {
  e.preventDefault();
  handleGoButtonClick(e);
});

document.getElementById('playButton').addEventListener('click', handlePlayButtonClick);
document.getElementById('playButton').addEventListener('touchend', function(e) {
  e.preventDefault();
  handlePlayButtonClick(e);
});

// ==================== START LOADING ====================
window.addEventListener('DOMContentLoaded', () => {
  preloadAllAssets();
});
