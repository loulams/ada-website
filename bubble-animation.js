// Select the bubble container
const bubbleContainer = document.querySelector('.bubble-container');

// Function to create a single bubble
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Randomize size of the bubble (between 20px and 70px)
    const size = Math.random() * 50 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Randomize the horizontal position
    const left = Math.random() * window.innerWidth;
    bubble.style.left = `${left}px`;

    // Add the bubble to the container
    bubbleContainer.appendChild(bubble);

    // Remove the bubble after animation ends (cleanup)
    setTimeout(() => {
        bubble.remove();
    }, 10000); // 10 seconds (same duration as the animation)
}

// Create a bubble every 1 second
setInterval(createBubble, 1000);
