// Define the loader element
const loader = document.getElementById("loader-wrapper");

// Function to start the loader animation
function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      // Hide the loader and counter when the counter reaches 100
      loader.style.display = 'none';
      counterElement.style.display = 'none';

       // Set their z-index to a lower value
    loader.style.zIndex = '0';
    counterElement.style.zIndex = '0';
      return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) {
      currentValue = 100;
    }
    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

// Start the loader animation
startLoader();

// GSAP animations
gsap.to(".counter", {
  delay: 1, // increased delay
  duration: 5, // corrected duration
  opacity: 0,
  ease: "sine.inOut",
});

gsap.to(".bar", {
  delay: 5, // increased delay
  duration: 5, // corrected duration
  height: '10%', // corrected height
  width: '50%',
  backgroundColor: '#fdfdfd',
  stagger: {
    amount: 0.5, // corrected stagger amount
  },
  ease: "sine.inOut",
});

gsap.from("h1", {
  delay: 7, // increased delay
  duration: 1, // corrected duration
  y: 700,
  stagger: {
    amount: 1, // increased stagger amount
  },
  ease: "sine.inOut", 
});

gsap.from(".hero", {
  delay: 7.5, // increased delay
  duration: 10, // corrected duration
  y: 500,
  stagger: {
    amount: 1, // increased stagger amount
  },
  ease: "sine.inOut",
});