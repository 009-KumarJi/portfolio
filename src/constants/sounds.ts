/**
 * Constants file for Windows XP sounds used throughout the portfolio
 */

// Sound file paths are relative to the public folder
export const SOUNDS = {
  // System sounds
  STARTUP: '/sounds/Windows XP Startup.mp3',
  SHUTDOWN: '/sounds/Windows XP Shutdown.mp3',
  LOGON: '/sounds/Windows XP Logon Sound.mp3',
  
  // Notification sounds
  ERROR: '/sounds/Windows XP Error.mp3',
  NOTIFY: '/sounds/Windows XP Notify.mp3',
  
  // UI interaction sounds
  MENU_COMMAND: '/sounds/Windows XP Menu Command.mp3',
  MINIMIZE: '/sounds/Windows XP Minimize.mp3',
  RESTORE: '/sounds/Windows XP Restore.mp3',
  RECYCLE: '/sounds/Windows XP Recycle.mp3'
};

// Helper function to play sounds
export const playSound = (soundPath: string): void => {
  if (typeof document === 'undefined') return; // Skip during SSR
  
  // For browsers, we need to check if the user has interacted with the page
  if (typeof window !== 'undefined') {
    try {
      // Check if document has been interacted with
      const hasInteracted = document.readyState === 'complete' && document.hasFocus();
      
      // Create the audio element regardless, so we can use it after interaction
      const audio = new Audio(soundPath);
      
      // If the user has interacted, play immediately. Otherwise, queue it to play on next interaction
      if (hasInteracted) {
        audio.play().catch(error => {
          console.error('Error playing sound:', error);
        });
      } else {
        // Queue sound to play on next interaction
        const playOnInteraction = () => {
          audio.play().catch(error => {
            console.error('Error playing sound:', error);
          });
          // Remove the event listener once it's played
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('keydown', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        
        // Add event listeners for common user interactions
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('keydown', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
      }
    } catch (error) {
      console.error('Error creating audio element:', error);
    }
  }
};

// Check if we're in a browser environment to safely use sessionStorage
const isBrowser = typeof window !== 'undefined';

// Specific sound functions for common interactions
export const playSoundEffects = {
  startup: () => {
    // Only play startup sound if it hasn't been played in this session
    if (isBrowser && !sessionStorage.getItem('startupSoundPlayed')) {
      sessionStorage.setItem('startupSoundPlayed', 'true');
      playSound(SOUNDS.STARTUP);
    }
  },
  shutdown: () => playSound(SOUNDS.SHUTDOWN),
  error: () => playSound(SOUNDS.ERROR),
  click: () => playSound(SOUNDS.MENU_COMMAND),
  notify: () => playSound(SOUNDS.NOTIFY),
  maximize: () => playSound(SOUNDS.RESTORE),
  minimize: () => playSound(SOUNDS.MINIMIZE),
  closeWindow: () => playSound(SOUNDS.RECYCLE)
};