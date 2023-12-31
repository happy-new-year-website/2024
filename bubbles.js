const SPAWN_INTERVAL = 200;
const BUBBLE_SPEED = 1.5;
const BUBBLE_VELOCITY = 1.002;
const BUBBLE_GROW = 0.1;
const BUBBLE_SIZE = 0.5;
const BUBBLE_Y_START = 1;
const BUBBLE_TIMEOUT = 0.75;

function createBubble(onLeft) {
  const bubblesWrapper = document.querySelector(".bubbles");

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubblesWrapper.appendChild(bubble);

  let currentY = BUBBLE_Y_START;
  let size = BUBBLE_SIZE;

  const distanceFromSide = Math.floor(Math.random() * 11) + 5;
  if (onLeft) {
    bubble.style.left = `${distanceFromSide}%`;
  } else {
    bubble.style.right = `${distanceFromSide}%`;
  }

  const moveBubble = () => {
    currentY += BUBBLE_SPEED;
    currentY = currentY * BUBBLE_VELOCITY;
    bubble.style.bottom = `${currentY}px`;

    size += BUBBLE_GROW;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    if (currentY > window.innerHeight * BUBBLE_TIMEOUT) {
      bubble.style.opacity = 0;
    }

    if (currentY > window.innerHeight) {
      bubble.remove();
      return;
    }

    requestAnimationFrame(moveBubble);
  };

  moveBubble();
}

setInterval(() => createBubble(true), SPAWN_INTERVAL);
setInterval(() => createBubble(false), SPAWN_INTERVAL);
