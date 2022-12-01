function projectAni(){
    gsap.registerPlugin(ScrollTrigger);
    
    const p1 = gsap.timeline({
    scrollTrigger : {
        trigger: ".project_table",
        // markers: true,
        start: "top 10%",
        // end: "top 0%",
        // scrub: 4,
        pin: true,
        pinSpacing: false,
        // markers: {
        //     startColor: "blue",
        //     endColor: "purple",
        //     fontSize: "30px"
        // },
    }
    })
    p1.set(".button1", {
        y: 100,
        opacity: 0,
    })
    .set(".textBox", {
        y: 100,
        opacity: 0
    })
    .set(".project_img", {
        y: 100,
        opacity: 0
    })
    .to(".button1", {
        y:0,
        opacity:1,
        duration: 0.6,
    })
    .to(".textBox", {
        y:0,
        opacity:1,
        duration: 0.6,
        delay: -0.5
    })
    .to(".project_img", {
        y:0,
        opacity:1,
        duration: 0.6,
        delay: -0.5,
        onComplete: projectSticky
    })
        // .to(".square", {y: 500, duration: 2, skewY: 3, rotation: 300, borderRadius: 100})
        // .to(".square", {x: 0, duration: 2, skewX: 2, width: 400, rotation: 200})
        // .to(".square", {y: 0, duration: 2, skewX: 1, skewY: 1, width: 200, rotation: 0})
}
projectAni();

function projectSticky(){
    gsap.registerPlugin(ScrollTrigger);

    // const textBox = gsap.utils.toArray(".textBox")  //gsap로 여러개 선택방법

    // gsap.to(textBox, {
    //     y: -800 * (textBox.length -1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".project_table",
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: 2,
    //         snap: 1 / (textBox.length -1),
    //         end: "+=2000",
    //         // markers: true
    //         // markers: {
    //         //     startColor: "blue",
    //         //     endColor: "purple",
    //         //     fontSize: "30px"
    //         // },
    //     }
    // });
    const p2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".project_table",
            // pin: true,
            // pinSpacing: false,
            scrub: 2,
            snap: 3,
            end: "+=2000",
            // markers: true
            // markers: {
            //     startColor: "blue",
            //     endColor: "purple",
            //     fontSize: "30px"
            // },
        }
    })
    p2.to(".img2", {
        y: -800,
        ease: "none",
    })
    .to(".tb2", {
        y: -801,
        ease: "none",
        delay: -0.3
    })
}
