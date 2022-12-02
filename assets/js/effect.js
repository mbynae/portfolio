// gsap.registerPlugin(ScrollTrigger);
// const el = gsap.timeline({
//     ScrollTrigger: {
//         trigger: "#effect",
//         // markers: true,
//         start: "top 10%",
//         // end: "+=5000",
//         // scrub: 1,
//         pin: true,
//         pinSpacing: false,
//         markers: {
//             startColor: "blue",
//             endColor: "purple",
//             fontSize: "30px"
//         }
//     }
// })

// el.to("#effect", {

// })


window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 11000){
        horizontal();
    } else {
        header.style.color = "#000"; 
        document.documentElement.style.setProperty("--border-right-transform", "scaleX(0)")
    }
});

// gsap.registerPlugin(ScrollTrigger);
// gsap.to("#effect", {
//     // x: 1000,
//     // duration: 3,
//     onComplete: horizontal,
//     scrollTrigger: {
//         trigger: ".prLast",
//         start: "top 4%",
//         // end: "bottom 0%",
//         end: "top 4%",
//         // end: () => `+=${document.querySelector(".prLast").offsetHeight}`,   //요소 높이값만큼 end를 처리함 가로모드 할때 필요
//         markers: {
//             startColor: "blue",
//             endColor: "purple",
//             fontSize: "30px"
//         },
//         toggleActions: "play none restart none"
//     },
// })

function horizontal(){
    const el = gsap.timeline()
    header.style.color = "#fff";
    el.set(".effect_title h2",{
        y: 50,
        opacity: 0,
    })
    .set(".effect_title .emphasis", {
        y: 50,
        opacity: 0,
    })
    .set(".effect_titleLine", {
        y: 50,
        opacity: 0,
    })

    el.to(".middleBox", {
        top: 0,
        duration: 1.2,
        ease: Power3.easeOut,
    })
    .to("#effect", {
        top: 0,
        duration: 1.4,
        delay: -1,
        ease: Power3.easeOut
    })
    .to(".effect_title h2",{
        y: 0,
        opacity: 1,
        delay: -0.5,
    })
    .to(".effect_title .emphasis", {
        y: 0,
        opacity: 1,
        delay: -0.4,
    })
    .to(".effect_titleLine", {
        y: 0,
        opacity: 1,
        delay: -0.3,
        onStart: borderLine, effectReset,
        // onComplete: slider
    })
}

function borderLine(){
    document.documentElement.style.setProperty("--border-right-transform", "scaleX(1)")
}

function effectReset(){
    window.addEventListener("wheel", (e)=>{
        
        if(e.deltaY < 0 || window.scrollY < 11000){
            gsap.to(".middleBox", {
                top: '100vh',
                delay: -2,
                ease: Power3.easeOut,
            })
            gsap.to("#effect", {
                top: "100vh",
                delay: -2,
                ease: Power3.easeOut,
            })
        } 
    })
}

function slider(){
    gsap.registerPlugin(ScrollTrigger);

    const effectIn = document.querySelector(".effect_inner");
    gsap.to(effectIn, {
        x: "-100vw",
        ease: "none",
        scrollTrigger: {
            trigger: "#effect",
            pin: true,
            scrub: 1,
            // snap: 1,
            // start: "top 0",
            end: () => `+=${effectIn.offsetHeight}`,
            // markers: true
        }
    });
}
// slider();