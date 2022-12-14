function summaryActive(){
    const sTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#summary",
            // markers: true,
            start: "450% center",
            end: "450% center",
            // markers: {
            //     startColor: "white",
            //     endColor: "beige",
            //     fontSize: "20px"
            // }
        }
    })
    
    sTl.to(".summary_inner h3", {opacity: 1, duration: 0.8, x: 0, y: 0, ease: "power4.out"})
    .to(".sBox", {y: 0, x: 0, opacity: 1, ease: Circ.easeOut, delay: -0.4, stagger: 0.2})
    .to(".sBox", {transition: "all 0.2s"})
    
    
    
    const sBoxArray = gsap.utils.toArray(".sBox");
    sBoxArray.forEach((e,i)=>{
        sBoxArray[i].addEventListener("mouseenter", ()=>{
            gsap.to(`.b0${i+1} .sBox_cont .contents ul li`, {x: 0, opacity: 1, duration: 0.2, stagger: 0.06})
        })
        sBoxArray[i].addEventListener("mouseleave", ()=>{
            gsap.timeline()
            .to(`.b0${i+1} .sBox_cont .contents ul li`, {opacity: 0, duration: 0.2}, "lll")
            .to(`.b0${i+1} .sBox_cont .contents ul li`, {x: -50, opacity: 0, duration: 0, delay: 0.3}, "lll")
        })
    })
}
summaryActive();


