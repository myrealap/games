// ==================== QUOTES ====================
const quotes = [
  { text: "Music is the poetry of the air", author: "Richter" },
  { text: "Where words fail, music speaks", author: "Hans Christian Andersen" },
  { text: "The only truth is music", author: "Kerouac" },
  { text: "Life is like a beautiful melody, only the lyrics are messed up", author: "myrealap" },
  { text: "Love & Imagination can change the world!", author: "Myrealap" },
  { text: "Trust your true self", author: "Myrealap" },
  { text: "Live your dream", author: "Myrealap" }
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quoteText').textContent = `" ${quote.text} "`;
  document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
}
showRandomQuote();

// ==================== DEVICE DETECTION ====================
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const isMobile = window.innerWidth <= 768;

// ==================== SPARKLE IMAGES ====================
const sparkleImages = ['images/sparkle_a.png', 'images/sparkle_b.png'];
function getRandomSparkleImage() { return sparkleImages[Math.floor(Math.random() * sparkleImages.length)]; }

// ==================== MOUSE SPARKLES ====================
const MOUSE_SPARKLE_INTERVAL = 15;
const MOUSE_SPARKLE_SIZE_MIN = 8;
const MOUSE_SPARKLE_SIZE_MAX = 25;
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;
let continuousSparkleInterval = null;

function addMouseSparkle(x, y) {
  const container = document.getElementById('mouseTrailContainer');
  const sparkle = document.createElement('div');
  sparkle.className = 'mouse-sparkle';
  sparkle.style.backgroundImage = `url('${getRandomSparkleImage()}')`;
  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;
  sparkle.style.left = (x + offsetX) + 'px';
  sparkle.style.top = (y + offsetY) + 'px';
  sparkle.style.animationDelay = Math.random() * 0.1 + 's';
  const size = Math.random() * (MOUSE_SPARKLE_SIZE_MAX - MOUSE_SPARKLE_SIZE_MIN) + MOUSE_SPARKLE_SIZE_MIN;
  sparkle.style.width = size + 'px'; sparkle.style.height = size + 'px';
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
}

function startMouseTrail() {
  if (isTouchDevice) return;
  let lastTime = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime > MOUSE_SPARKLE_INTERVAL) { lastTime = now; addMouseSparkle(e.clientX, e.clientY); }
    lastMouseX = e.clientX; lastMouseY = e.clientY;
  });
  continuousSparkleInterval = setInterval(() => addMouseSparkle(lastMouseX, lastMouseY), MOUSE_SPARKLE_INTERVAL);
}

function addTouchSparkle(x, y) {
  const container = document.getElementById('touchSparkleContainer');
  const sparkle = document.createElement('div');
  sparkle.className = 'touch-sparkle';
  sparkle.style.backgroundImage = `url('${getRandomSparkleImage()}')`;
  const offsetX = (Math.random() - 0.5) * 30;
  const offsetY = (Math.random() - 0.5) * 30;
  sparkle.style.left = (x + offsetX) + 'px'; sparkle.style.top = (y + offsetY) + 'px';
  const size = Math.random() * 25 + 15;
  sparkle.style.width = size + 'px'; sparkle.style.height = size + 'px';
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 600);
}

function startTouchSparkles() {
  if (!isTouchDevice) return;
  document.addEventListener('touchmove', (e) => { const touch = e.touches[0]; addTouchSparkle(touch.clientX, touch.clientY); });
  document.addEventListener('touchstart', (e) => { const touch = e.touches[0]; for (let i = 0; i < 3; i++) setTimeout(() => addTouchSparkle(touch.clientX, touch.clientY), i * 50); });
}

if (isTouchDevice) { startTouchSparkles(); } else { startMouseTrail(); }

// ==================== CUSTOM CURSOR ====================
let customCursor = null;
function setupCustomCursor() {
  if (isTouchDevice) return;
  customCursor = document.createElement('div');
  customCursor.className = 'custom-cursor';
  document.body.appendChild(customCursor);
  let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
  document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.3; cursorY += (mouseY - cursorY) * 0.3;
    if (customCursor) { customCursor.style.left = cursorX + 'px'; customCursor.style.top = cursorY + 'px'; }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.addEventListener('mouseleave', () => { if (customCursor) customCursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { if (customCursor) customCursor.style.opacity = '1'; });
}
setupCustomCursor();

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
    sparkle.style.width = size + 'px'; sparkle.style.height = size + 'px';
    container.appendChild(sparkle);
    sparklesCreated++;
    if (sparklesCreated >= totalSparkles) {
      setTimeout(() => { container.innerHTML = ''; if (callback) callback(); }, 1500);
    }
  }
  for (let i = 0; i < totalSparkles; i++) setTimeout(createBurstSparkle, i * 25);
}

// ==================== AUDIO SYSTEM ====================
let audioContext = null;
let openingMusic = null;
let openingMusicBuffer = null;
let musicGainNode = null;
const clickSound = new Audio("sounds/click.mp3"); clickSound.volume = 0.5;
const hoverSound = new Audio("sounds/hover.mp3"); hoverSound.volume = 0.3;
const appearSounds = {
  landing: new Audio("sounds/appear.mp3"),
  help: new Audio("sounds/appear1.mp3"),
  game: new Audio("sounds/appear2.mp3")
};
appearSounds.landing.volume = 0.6;
appearSounds.help.volume = 0.9;
appearSounds.game.volume = 0.6;

function playClickSound() { clickSound.currentTime = 0; clickSound.play().catch(() => {}); }
function playHoverSound() { hoverSound.currentTime = 0; hoverSound.play().catch(() => {}); }
function playAppearSound(type) { 
  const sound = appearSounds[type];
  if (sound) { sound.currentTime = 0; sound.play().catch(() => {}); }
}

function initAudioContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume();
}

function loadOpeningMusic() {
  fetch('music/opening.wav')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => { openingMusicBuffer = arrayBuffer; })
    .catch(error => console.log('Error loading music:', error));
}

function playOpeningMusic() {
  if (!audioContext || !openingMusicBuffer) return;
  if (openingMusic) { try { openingMusic.stop(); } catch(e) {} }
  audioContext.decodeAudioData(openingMusicBuffer.slice(0))
    .then(buffer => {
      openingMusic = audioContext.createBufferSource();
      openingMusic.buffer = buffer;
      openingMusic.loop = true;
      musicGainNode = audioContext.createGain();
      musicGainNode.gain.value = 0.8;
      openingMusic.connect(musicGainNode);
      musicGainNode.connect(audioContext.destination);
      openingMusic.start(0);
    }).catch(err => console.log('Decode error:', err));
}

function fadeOutMusic(callback) {
  if (!musicGainNode) {
    if (callback) callback();
    return;
  }
  const startGain = musicGainNode.gain.value;
  const duration = 1500;
  const startTime = audioContext.currentTime;
  
  function fadeStep() {
    const elapsed = (audioContext.currentTime - startTime) * 1000;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentGain = startGain * (1 - easeOut);
    musicGainNode.gain.value = Math.max(currentGain, 0);
    
    if (progress < 1) {
      requestAnimationFrame(fadeStep);
    } else {
      musicGainNode.gain.value = 0;
      if (openingMusic) {
        try { openingMusic.stop(); openingMusic = null; } catch(e) {}
      }
      if (callback) callback();
    }
  }
  fadeStep();
}

function stopOpeningMusic() {
  if (openingMusic) { try { openingMusic.stop(); openingMusic = null; } catch(e) {} }
  if (musicGainNode) { musicGainNode.gain.value = 0; }
}

loadOpeningMusic();

function addHoverSoundToButtons() {
  document.querySelectorAll('button').forEach(btn => btn.addEventListener('mouseenter', () => playHoverSound()));
}

// ==================== FILE LOADING ====================
const filesToLoad = [
  "images/quote-bg.png", "images/sparkle.png", "images/sparkle_a.png", "images/sparkle_b.png",
  "images/Go.png", "images/help.png", "images/landing.png", "images/play_landing.png",
  "images/play_help.png", "images/loading-bg.png", "images/bg.jpg", "images/selector.png",
  "images/free_play.png", "images/game_mode.png", "images/startover.png", "images/help_btn.png",
  "sounds/click.mp3", "sounds/hover.mp3", "sounds/selector_hover.mp3", "sounds/selector_click.mp3",
  "sounds/appear.mp3", "sounds/appear1.mp3", "sounds/appear2.mp3",
  "music/opening.wav", "music/music_game_free.wav", "music/music_game.mp3",
  "sounds/owl.wav", "sounds/sequel.mp3", "sounds/deer.mp3", "sounds/baaver.mp3"
];

// Add note files
for (let i = 1; i <= 8; i++) {
  filesToLoad.push(`sounds/notes/note${i}.wav`);
}

const allFiles = [...filesToLoad];
let loadedCount = 0;
const totalFiles = allFiles.length;
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
      img.onload = () => { loadedCount++; updateLoadingPercent(); resolve(); };
      img.onerror = () => { loadedCount++; updateLoadingPercent(); resolve(); };
      img.src = src;
    } else if (isAudio) {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.oncanplaythrough = () => { loadedCount++; updateLoadingPercent(); resolve(); };
      audio.onerror = () => { loadedCount++; updateLoadingPercent(); resolve(); };
      audio.src = src;
      audio.load();
    } else {
      fetch(src).then(() => { loadedCount++; updateLoadingPercent(); resolve(); })
        .catch(() => { loadedCount++; updateLoadingPercent(); resolve(); });
    }
  });
}

async function preloadAllAssets() {
  updateLoadingPercent();
  const loadPromises = allFiles.map(file => loadFile(file));
  await Promise.all(loadPromises);
  loadedCount = totalFiles;
  updateLoadingPercent();
  addHoverSoundToButtons();
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

function handleGoButtonClick(e) {
  e.preventDefault();
  initAudioContext();
  playClickSound();
  const goButton = document.getElementById('goButton');
  goButton.classList.add('clicked');
  triggerGlobalSparkleBurst(() => {
    whiteFadeTransition(() => {
      setTimeout(() => playOpeningMusic(), 200);
      const loadingScreen = document.getElementById('loadingScreen');
      const loadingActionArea = document.getElementById('loadingActionArea');
      loadingScreen.classList.add('hide');
      loadingActionArea.style.display = 'none';
      setTimeout(() => { showLandingPage(); }, 400);
    });
  });
}

// ==================== SPARKLE BACKGROUNDS ====================
const SPARKLE_COUNT = 80;
const SPARKLE_INTERVAL = 60;
const SPARKLE_SIZE_MIN = 75;
const SPARKLE_SIZE_MAX = 100;

function createBgSparkle(containerId, className) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const sparkle = document.createElement('div');
  sparkle.className = className;
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.animationDelay = Math.random() * 3.5 + 's';
  const size = Math.random() * (SPARKLE_SIZE_MAX - SPARKLE_SIZE_MIN) + SPARKLE_SIZE_MIN;
  sparkle.style.width = size + 'px'; sparkle.style.height = size + 'px';
  
  const img = Math.random() < 0.5 ? 'images/sparkle_a.png' : 'images/sparkle_b.png';
  sparkle.style.backgroundImage = `url('${img}')`;
  
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 3500);
}

function startSparkles(containerId, className, count = SPARKLE_COUNT) {
  for (let i = 0; i < count; i++) setTimeout(() => createBgSparkle(containerId, className), i * 50);
  return setInterval(() => createBgSparkle(containerId, className), SPARKLE_INTERVAL);
}

function stopSparkles(interval, containerId) {
  if (interval) clearInterval(interval);
  const container = document.getElementById(containerId);
  if (container) container.innerHTML = '';
}

let landingSparkleInterval, helpSparkleInterval, gameSparkleInterval;

// ==================== SCREEN TRANSITIONS ====================
function showLandingPage() {
  const mainScreen = document.getElementById('mainScreen');
  mainScreen.classList.add('show');
  
  document.querySelectorAll('.screen-content').forEach(el => el.classList.remove('active'));
  document.getElementById('landingContent').classList.add('active');
  
  landingSparkleInterval = startSparkles('mainSparkleOverlay', 'main-bg-sparkle');
  playAppearSound('landing');
  
  const bg = document.getElementById('mainBg');
  bg.classList.remove('scrolling');
  void bg.offsetWidth;
  bg.classList.add('scrolling');
  
  setTimeout(() => {
    const landingImage = document.querySelector('.landing-image');
    const landingBtn = document.querySelector('.landing-btn');
    if (landingImage) landingImage.classList.add('show');
    if (landingBtn) landingBtn.classList.add('show');
  }, 4000);
}

function hideLandingPage() {
  document.getElementById('landingContent').classList.remove('active');
  const landingImage = document.querySelector('.landing-image');
  const landingBtn = document.querySelector('.landing-btn');
  if (landingImage) landingImage.classList.remove('show');
  if (landingBtn) landingBtn.classList.remove('show');
  setTimeout(() => showHelpScreen(), 100);
}

function handlePlayButtonClick(e) {
  e.preventDefault();
  playClickSound();
  triggerGlobalSparkleBurst(() => { hideLandingPage(); });
}

function showHelpScreen() {
  document.querySelectorAll('.screen-content').forEach(el => el.classList.remove('active'));
  document.getElementById('helpContent').classList.add('active');
  playAppearSound('help');
}

function hideHelpScreen() {
  document.getElementById('helpContent').classList.remove('active');
  setTimeout(() => showSelectorScreen(), 100);
}

function handleHelpPlayClick(e) {
  e.preventDefault();
  playClickSound();
  triggerGlobalSparkleBurst(() => { hideHelpScreen(); });
}

// ==================== SELECTOR SCREEN ====================
function showSelectorScreen() {
  document.querySelectorAll('.screen-content').forEach(el => el.classList.remove('active'));
  document.getElementById('selectorContent').classList.add('active');
}

function hideSelectorScreen() {
  document.getElementById('selectorContent').classList.remove('active');
}

const selectorHoverSound = new Audio("sounds/selector_hover.mp3");
selectorHoverSound.volume = 0.4;
const selectorClickSound = new Audio("sounds/selector_click.mp3");
selectorClickSound.volume = 0.5;

function playSelectorHover() {
  selectorHoverSound.currentTime = 0;
  selectorHoverSound.play().catch(() => {});
}

function playSelectorClick() {
  selectorClickSound.currentTime = 0;
  selectorClickSound.play().catch(() => {});
}

// ==================== FADE TRANSITION TO GAME ====================
function fadeToGame(mode) {
  const mainScreen = document.getElementById('mainScreen');
  const gameScreen = document.getElementById('gameScreen');
  
  mainScreen.classList.remove('show');
  
  setTimeout(() => {
    gameScreen.classList.add('show');
    setTimeout(() => {
      startGame(mode);
    }, 300);
  }, 300);
}

function handleFreePlayClick(e) {
  e.preventDefault();
  playSelectorClick();
  triggerGlobalSparkleBurst(() => {
    fadeOutMusic(() => {
      hideSelectorScreen();
      setTimeout(() => fadeToGame('free'), 100);
    });
  });
}

function handleGameModeClick(e) {
  e.preventDefault();
  playSelectorClick();
  triggerGlobalSparkleBurst(() => {
    fadeOutMusic(() => {
      hideSelectorScreen();
      setTimeout(() => fadeToGame('game'), 100);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.select-btn').forEach(btn => {
    btn.addEventListener('mouseenter', playSelectorHover);
  });
});

// ==================== MUSIC SYSTEM UPDATED ====================
let currentMusic = null;
let currentMusicBuffer = null;
let gameMusicGainNode = null;

function playMusic(filename) {
  if (!audioContext) return;
  if (currentMusic) {
    try { currentMusic.stop(); } catch(e) {}
    currentMusic = null;
  }
  
  fetch(`music/${filename}`)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
      audioContext.decodeAudioData(arrayBuffer)
        .then(buffer => {
          currentMusic = audioContext.createBufferSource();
          currentMusic.buffer = buffer;
          currentMusic.loop = true;
          gameMusicGainNode = audioContext.createGain();
          gameMusicGainNode.gain.value = 0.8;
          currentMusic.connect(gameMusicGainNode);
          gameMusicGainNode.connect(audioContext.destination);
          currentMusic.start(0);
        }).catch(err => console.log('Decode error:', err));
    })
    .catch(error => console.log('Error loading music:', error));
}

// ==================== GAME LOGIC ====================
let gameMode = 'free';
let gameRunning = false;

function startGame(mode) {
  gameMode = mode;
  gameRunning = true;
  
  if (mode === 'free') {
    playMusic('music_game_free.wav');
  } else {
    playMusic('music_game.wav');
  }
  
  const animalsFrame = document.getElementById('animalsViewer');
  if (animalsFrame && animalsFrame.contentWindow) {
    animalsFrame.contentWindow.postMessage({ 
      action: 'setMode', 
      mode: mode,
      bgType: mode === 'free' ? 'free' : 'game'
    }, '*');
  }
  
  gameSparkleInterval = startSparkles('gameSparkleOverlay', 'game-bg-sparkle');
  
  setTimeout(() => {
    document.getElementById('helpBtnGame').classList.add('visible');
  }, 1000);
  
  playAppearSound('game');
}

function endGame() {
  gameRunning = false;
  stopSparkles(gameSparkleInterval, 'gameSparkleOverlay');
  document.getElementById('gameScreen').classList.remove('show');
  document.getElementById('helpBtnGame').classList.remove('visible');
  
  if (currentMusic) {
    try { currentMusic.stop(); currentMusic = null; } catch(e) {}
  }
  if (gameMusicGainNode) {
    gameMusicGainNode.gain.value = 0;
    gameMusicGainNode = null;
  }
  
  const animalsFrame = document.getElementById('animalsViewer');
  if (animalsFrame && animalsFrame.contentWindow) {
    animalsFrame.contentWindow.postMessage({ action: 'resetAnimals' }, '*');
  }
  
  setTimeout(() => {
    playOpeningMusic();
    showLandingPage();
  }, 300);
}

// ==================== IN-GAME HELP ====================
function showGameHelp() {
  if (!gameRunning) return;
  document.getElementById('gameHelpOverlay').classList.add('show');
}

function hideGameHelp() {
  document.getElementById('gameHelpOverlay').classList.remove('show');
}

// ==================== ★ UPDATED: HANDLE IFRAME MESSAGES ★ ====================
window.addEventListener('message', function(event) {
  const data = event.data;
  console.log('Main received:', data);
  
  // ===== playNote (from animals keyboard or pattern) =====
  if (data.action === 'playNote') {
    const note = data.note;
    console.log('Forwarding playNote to flute and me:', note);
    
    // Forward to flute viewer
    const fluteFrame = document.getElementById('fluteViewer');
    if (fluteFrame && fluteFrame.contentWindow) {
      fluteFrame.contentWindow.postMessage({
        action: 'playNote',
        note: note
      }, '*');
    }
    
    // ★ FORWARD TO ME VIEWER ★
    const meFrame = document.getElementById('meViewer');
    if (meFrame && meFrame.contentWindow) {
      meFrame.contentWindow.postMessage({
        action: 'playNote',  // me.html now listens for 'playNote' too
        note: note
      }, '*');
    }
  }
  
  // ===== notePlayed (from flute clicks) =====
  if (data.action === 'notePlayed') {
    const note = data.note;
    console.log('Forwarding notePlayed to animals and me:', note);
    
    // Forward to animals for checking
    const animalsFrame = document.getElementById('animalsViewer');
    if (animalsFrame && animalsFrame.contentWindow) {
      animalsFrame.contentWindow.postMessage({
        action: 'notePlayed',
        note: note
      }, '*');
    }
    
    // Forward to me viewer
    const meFrame = document.getElementById('meViewer');
    if (meFrame && meFrame.contentWindow) {
      meFrame.contentWindow.postMessage({
        action: 'notePlayed',
        note: note
      }, '*');
    }
  }
  
  if (data.action === 'gameComplete') {
    console.log('Game complete!');
  }
  
  if (data.action === 'animalSelected') {
    console.log('Animal selected:', data.animal);
  }
});

// ==================== EVENT LISTENERS ====================
document.getElementById('goButton').addEventListener('click', handleGoButtonClick);
document.getElementById('goButton').addEventListener('touchend', function(e) { e.preventDefault(); handleGoButtonClick(e); });
document.getElementById('playButton').addEventListener('click', handlePlayButtonClick);
document.getElementById('playButton').addEventListener('touchend', function(e) { e.preventDefault(); handlePlayButtonClick(e); });
document.getElementById('helpPlayButton').addEventListener('click', handleHelpPlayClick);
document.getElementById('helpPlayButton').addEventListener('touchend', function(e) { e.preventDefault(); handleHelpPlayClick(e); });
document.getElementById('freePlayBtn').addEventListener('click', handleFreePlayClick);
document.getElementById('gameModeBtn').addEventListener('click', handleGameModeClick);
document.getElementById('helpBtnGame').addEventListener('click', showGameHelp);
document.getElementById('gameHelpCloseBtn').addEventListener('click', hideGameHelp);
document.getElementById('startoverBtn').addEventListener('click', endGame);

window.addEventListener('resize', () => {});
window.addEventListener('DOMContentLoaded', () => { preloadAllAssets(); });