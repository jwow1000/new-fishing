import { adjustVolume, playVideo } from "./helpers.js";

// make sure webflow content is loaded to DOM
window.Webflow.push(() => {

  // play videos in view
  const movies = document.querySelectorAll(".video-loop-container");

  // set ramp time in ms
  const rampTime = 500;

  movies.forEach((item) => {
    const vid = item.querySelector(".video-loop");
    const muteImg = item.querySelector(".vol-img");
    const onImg = item.querySelector(".vol-img.on");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let volRamping = false;

          function handleClick(event) {
            if (!volRamping) {
              if (vid.muted) {
                adjustVolume(vid, 1, rampTime, volRamping);
                onImg.style.opacity = 1;
                muteImg.style.opacity = 0;
              } else {
                adjustVolume(vid, 0, rampTime, volRamping);
                onImg.style.opacity = 0;
                muteImg.style.opacity = 1;
              }
            }
          }

          if (entry.isIntersecting) {
            // make sure muted
            vid.muted = true;
            vid.volume = 0;

            // trigger play
            playVideo( vid );

            // add event listener
            if (!vid.hasAttribute("data-click-added")) {
              vid.addEventListener("click", handleClick);
              vid.setAttribute("data-click-added", true);
            }
          } else {
            
            adjustVolume(vid, 0, rampTime, volRamping);
            onImg.style.opacity = 0;
            muteImg.style.opacity = 1;
            
            // pause playback
            setTimeout(() => {
              vid.pause();
              console.log("video paused", volRamping);
              
            }, rampTime);

            // mute the item
            vid.muted = true;

            // // remove event listener
            // if (vid.hasAttribute("data-click-added")) {
            //   vid.removeEventListener("click", handleClick);
            //   vid.removeAttribute("data-click-added");
            // }
          }
        });
      }, { 
        root: document.querySelector('.swiper-container'), // Set Swiper container as the root
        rootMargin: '0px',
        threshold: 1 // Adjust threshold based on your needs
      }
    );

    observer.observe(vid);
  });
});
