document.querySelector(".fishing-time-wrapper");const c=document.querySelectorAll(".scroll-slide");console.log("are we working?");c.forEach((t,l)=>{t.addEventListener("scroll",()=>{const n=t.querySelector(".ghost-scroll").getBoundingClientRect(),o=n.top,e=n.bottom;console.log(`look at bottom, top: ${l}`,e,o,window.innerHeight),e>=window.innerHeight&&o<0?console.log("readched bttom"):o<=0&&e>=window.innerHeight&&console.log("readched top")})});
