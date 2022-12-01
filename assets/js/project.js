

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
