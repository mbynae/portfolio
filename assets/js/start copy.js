
// 페이지 시작
function init(){

    //스크롤 초기화
    window.onload = function(){
        setTimeout(()=>{
            scrollTo(0,0);
        }, 100)
    }

    //시작시 GSAP 효과
    const tl = gsap.timeline();
    gsap.set(".tText01", {
        y: 80,
        scaleY: 0,
    })
    gsap.set(".tText03", {
        y: 80,
        scaleY: 0,
    })
    gsap.set(".portfolioText", {
        y: 20,
        opacity: 0,
    })
    gsap.set(".dateText", {
        y: 20,
        opacity: 0,
    })
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
        delay: -0.26,
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
        ease: "Power3.easeOut",
    })
    .to("#title", {
        top: 0,
        duration: 1.2,
        delay: -0.9,
        ease: "Power3.easeOut",
    })
    .to("#header", {
        delay: -0.7,
        opacity: 1,
    })
    .to("#start",{
        display: 'none',
        delay: -0.6
    })
    .to(".earlybox", {
        display: 'none',
        delay: -0.6
    })
    .to("#title", {
        position: 'static',
        delay: -0.1
    })
    .to("body", {
        overflow: 'overlay',
        delay: -0.5
    })
    .to(".tText01", {
        y: 0,
        scaleY: 1,
        duration: 1,
        delay: -1.4,
        ease: "power2.out",
        onUpdate: titleUp
    })
    .to(".tText03", {
        y: 0,
        scaleY: 1,
        duration: 0.6,
        delay: -1.1,
        ease: "power2.out",
        onUpdate: titledown
    })
    .to(".portfolioText", {
        y: 0,
        opacity: 1,
        delay: -0.7,
        ease: "power2.out"
    })
    .to(".dateText", {
        y: 0,
        opacity: 1,
        delay: -0.5,
        ease: "power2.out"
    })
    .to(".profile_picture", {
        scaleY: 1,
        duration: 0.6,
        delay: -0.6,
        ease: "power2.out"
    })
    .to("html", {
        onComplete: effectStart, slider, profilePicture
    })
}
init();
// sample();




// css변수 컨트롤
function titleUp(){
    document.documentElement.style.setProperty('--title-top', '0');
}
function titledown(){
    document.documentElement.style.setProperty('--title-down', '0');
}


// 제작용 임시
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
    gsap.set("body", {
        overflow: 'overlay',
    })
    gsap.set(".profile_picture", {
        scaleY: 1,
    })
    // projectAni();
    effectStart();
    slider();
    profilePicture();
}

