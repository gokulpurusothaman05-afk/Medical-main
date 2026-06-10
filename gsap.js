gsap.registerPlugin(ScrollTrigger);

const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    delay: index * 0.1,
  });
});

if (window.innerWidth > 768) {
  serviceItems.forEach((item) => {
    const imgContainer = item.querySelector(".service-img-container");
    const textContainer = item.querySelector(".service-text");
    const textTitle = item.querySelector(".service-name");

    item.addEventListener("mouseenter", () => {
      gsap.to(imgContainer, {
        autoAlpha: 1,
        scale: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      // Slide the entire text container (Name, Dept, and Doctor)
      gsap.to(textContainer, {
        x: 25,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(textTitle, {
        color: "#0252a9",
        duration: 0.4,
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(imgContainer, {
        autoAlpha: 0,
        scale: 0.8,
        x: 20,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(textContainer, {
        x: 0,
        duration: 0.4,
      });
      gsap.to(textTitle, {
        color: "#1f2937",
        duration: 0.4,
      });
    });

    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const xPos = e.clientX - rect.left;
      const yPos = e.clientY - rect.top;

      gsap.to(imgContainer, {
        x: (xPos - rect.width / 2) * 0.15,
        y: (yPos - rect.height / 2) * 0.1 - rect.height / 2,
        duration: 1.2,
        ease: "power3.out",
      });
    });
  });
}

// Speciaal
// Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. TIMELINE FOR CONTENT ENTRANCE
const specialTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".special-care",
    start: "top 75%",
    toggleActions: "play none none none",
  },
});

specialTL
  .from(".special-left .animate-item", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  })
  .from(
    ".special-right",
    {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=1",
  ) // Overlaps with the left content animation
  .from(
    ".doctor-card",
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.5",
  );

// 2. COUNTER UP ANIMATION
// This targets the first list item specifically for the "20+" count
function initCounters() {
  const counterElement = document.querySelector(".features li:first-child");
  // We extract the number from the text content (e.g., "20+ years")
  const targetValue = 20;
  const obj = { value: 0 };

  gsap.to(obj, {
    value: targetValue,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".features",
      start: "top 80%",
    },
    onUpdate: function () {
      // Re-render the text with the current animated value
      counterElement.innerHTML = `<span class="tick-circle"></span> ${Math.floor(obj.value)}+ years of medical excellence`;
    },
  });
}

// Initialize counter
initCounters();

// 3. INTERACTIVE MOUSE FOLLOW (Desktop Only)
if (window.innerWidth > 992) {
  const specialRight = document.querySelector(".special-right");
  const doctorCard = document.querySelector(".doctor-card");
  const mainImg = document.querySelector(".main-img");

  specialRight.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = specialRight.getBoundingClientRect();

    // Calculate normalized coordinates (-0.5 to 0.5)
    const xPos = (e.clientX - left) / width - 0.5;
    const yPos = (e.clientY - top) / height - 0.5;

    // Move the doctor card in opposition to the mouse
    gsap.to(doctorCard, {
      x: xPos * 20,
      y: yPos * 20,
      duration: 0.6,
      ease: "power2.out",
    });

    // Slight 3D tilt for the main image
    gsap.to(mainImg, {
      rotateY: xPos * 8,
      rotateX: -yPos * 8,
      transformPerspective: 1000,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  specialRight.addEventListener("mouseleave", () => {
    // Smoothly reset all elements
    gsap.to([doctorCard, mainImg], {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
    });
  });
  // Check for Resize to enable/disable mouse effects
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 992) {
      // Reset positions if switching to mobile
      gsap.set([".doctor-card", ".main-img"], {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        clearProps: "all",
      });
    }
  });
}

