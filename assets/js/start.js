const header = document.getElementById("header");

function init(){
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(".start_main", {
        x: -80,
        delay: 0.6,
        duration: 0.6,
    })
    .to(".start_main_1", {
        x: -100,
        opacity: 1,
        delay: -0.6,
        duration: 0.8,
    })
    .to(".start_main_2", {
        x: -150,
        opacity: 1,
        delay: -0.8,
        duration: 0.8,
    })
    .to(".start_main", {
        y: -120,
        delay: 0.3,
        duration: 0.3,
    })
    .to(".start_main_1", {
        y: -120,
        delay: -0.25,
        duration: 0.3,
    })
    .to(".start_main_2", {
        y: -120,
        delay: -0.25,
        duration: 0.3,
    })
    .to(".start_info", {
        y: -50,
        delay: -0.35,
        duration: 0.3,
    })
    .to(".earlybox", {
        y: '-100vh',
        duration: 1.1,
        ease: Power3.easeOut,
    })
    .to("#title", {
        top: 0,
        duration: 1.2,
        delay: -0.9,
        ease: Power3.easeOut,
    })
    .to("#header", {
        delay: -0.7,
        opacity: 1,
    })
    .to("#start",{
        display: 'none',
        delay: -1
    })
    .to(".earlybox", {
        display: 'none',
        delay: -0.9
    })
    .to("#title", {
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
            trigger: "#about",
            pin: true,
            scrub: 1,
            // snap: 1,
            end: "+=2000",
            // markers: true
        }
    })
}
init();
function sample(){
    gsap.set("#start", {
        display: 'none'
    })
    gsap.set(".earlybox", {
        display: 'none'
    })
    gsap.set("#header", {
        opacity: 1
    })
    gsap.set("#title", {
        position: 'static',
    })
}
// sample();
