
const tl = gsap.timeline();
tl.to(".start_main", {
    x: -80,
    delay: 1,
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
    delay: 0.5,
    duration: 0.4,
})
.to(".start_main_1", {
    y: -120,
    delay: -0.35,
    duration: 0.4,
})
.to(".start_main_2", {
    y: -120,
    delay: -0.35,
    duration: 0.4,
})
.to(".start_info", {
    y: -50,
    delay: -0.35,
    duration: 0.4,
})
.to(".earlybox", {
    y: -970,
    duration: 1.1,
    ease: Power3.easeOut,
})
.to(".bgbox", {
    y: -970,
    duration: 1.2,
    delay: -0.9,
    ease: Power3.easeOut,
})
.to("#header", {
    delay: -0.7,
    opacity: 1,
    onComplete: titleOn()
})
    


function titleOn(){
    const header = getElementById("header");
    
    if(header.style.opacity == 1){
        document.getElementById("start").style.display = "none";
        document.querySelector(".earlybox").style.display = "none";
        document.querySelector(".bgbox").style.display = "none";
    }
}