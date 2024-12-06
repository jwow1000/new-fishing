	// select all ghost scrolls
  // add event listener that detects when bottom aligns with viewport, and when top does too
  // select the wrapper
  const wrapper = document.querySelector('.fishing-time-wrapper');
  // Select all elements with the target class
	const slides = document.querySelectorAll('.scroll-slide');
  console.log("are we working?")

	slides.forEach((slide, idx) => {
    
    slide.addEventListener("scroll", () => {
      const ghost = slide.querySelector(".ghost-scroll");
    	const rect = ghost.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      console.log(`look at bottom, top: ${idx}`, bottom, top, window.innerHeight);
      if(bottom >= window.innerHeight && top < 0) {
      	console.log("readched bttom");
        //wrapper.style.transform = 'translateY(-100vh)';
      } else if (top <= 0 && bottom >= window.innerHeight) {
      	console.log("readched top");
        //wrapper.style.transform = 'translateY(100vh)';
      }
    });
  });


