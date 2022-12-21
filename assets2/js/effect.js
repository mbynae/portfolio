// \JS이펙트 함수 실행
function effectRun(){
    //이펙트 효과 진입
    function effectStart(){
        gsap.timeline({
            scrollTrigger: {
                trigger: ".prevEffect",
                start: "-10%, 70%",
                end: "-10%, 70%",
                // markers: true
            }
        })
        .to(".prevEffect span", {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            ease:Back.easeOut.config(2.5),
            stagger: 0.05,
        })
        .to(".prevEffect span", {rotate: 0, stagger: 0.05, duration: 0.3, delay: -0.3})

        if(window.matchMedia("(min-width: 481px) and (max-width: 1024px)").matches){
            document.querySelector(".prevEffect").innerText = "";
        }
    }
    effectStart();


    //이펙트 효과 타이틀
    function horizontal(){
        const el = gsap.timeline({
            scrollTrigger: {
                trigger: "#effect",
                // markers: true,
                start: "top, center",
                end: "top, center" 
            }
        })
        header.style.color = "#fff";
        gsap.set(".effect_title h2",{
            y: 50,
            opacity: 0,
        })
        gsap.set(".effect_title .emphasis", {
            y: 50,
            opacity: 0,
        })
        gsap.set(".effect_titleLine", {
            y: 50,
            opacity: 0,
        })
        el.to(".effect_title h2",{
            y: 0,
            ease: "power2.out",
            opacity: 1,
        })
        .to(".effect_title .emphasis", {
            y: 0,
            ease: "power2.out",
            opacity: 1,
            delay: -0.3
        })
        .to(".effect_titleLine", {
            y: 0,
            ease: "power2.out",
            opacity: 1,
            delay: -0.3,
            onStart: borderLine
        })
    }
    horizontal();

    //이펙트 타이틀 테두리
    function borderLine(){
        document.documentElement.style.setProperty("--border-right-transform", "scaleX(1)")
    }

    //가로모드
    function slider(){

        const effectIn = document.querySelector(".effect_inner");
        const sections = gsap.utils.toArray(".effectCont")  //gsap로 여러개 선택방법

        gsap.to(effectIn, {
            x: "-700vw",
            ease: "none",
            scrollTrigger: {
                trigger: "#effect",
                pin: true,
                scrub: 2,
                start: "top 0",
                end: "+=8000vw",
                // markers: true
            }
        })
    }
    slider();
}

