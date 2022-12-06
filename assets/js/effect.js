//이펙트 효과 타이틀
function horizontal(){
    if(window.scrollY >= document.querySelector(".prevEffect").offsetTop - document.querySelector(".prevEffect").offsetHeight){
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
}

//이펙트 타이틀 테두리
function borderLine(){
    document.documentElement.style.setProperty("--border-right-transform", "scaleX(1)")
}

//이펙트 효과 아웃
function effectReset(){
    window.addEventListener("scroll", ()=>{
    //     alert("실행")
        if(window.scrollY < document.querySelector(".prevEffect").offsetTop - document.querySelector(".prevEffect").offsetHeight){
            gsap.timeline();
            gsap.to(".middleBox", {
                // display: "block",
                top: '100vh',
                delay: -2,
                ease: Power3.easeOut,
            })
            .to(".middleBox", {
                // position: "fixed",
                top: '100vh',
                delay: -2,
                ease: Power3.easeOut,
            })
        } 
    })
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
        }
    })
}