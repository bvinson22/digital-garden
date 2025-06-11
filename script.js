

// Fade in hero image and title
  gsap.from(".box-image", {
    opacity: 0,
    y: 50,
    duration: 1
  });

  gsap.from(".centered-text", {
    opacity: 0,
    y: -30,
    delay: 0.5,
    duration: 1,
    ease: "power2.out"
  }); 

  // Float effect for CTA or image 
  gsap.to(".centered-text", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
  });


