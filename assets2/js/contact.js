// 컨텍트미 버튼 함수
function contactBtn(){
    gsap.to(".contact_btn", {
        y: 0,
        ease: "power2.Out",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#contact",
            start: "95% bottom",
            end: "95%",
            // markers: true,
            toggleActions: "restart reverse restart reverse"
        }
    })
}

