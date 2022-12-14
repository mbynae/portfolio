function contactBtn(){
    gsap.to(".contact_btn", {
        y: 0,
        ease: "power2.Out",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#contact",
            start: "923%, bottom",
            end: "923%",
            // markers: true,
            toggleActions: "restart reverse restart reverse"
        }
    })
}
contactBtn();

