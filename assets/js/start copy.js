function init(){

    //스크롤 초기화
    window.onload = function(){
        setTimeout(()=>{
            scrollTo(0,0);
        }, 100)
    }

    //시작시 GSAP 효과
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
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
        delay: -0.25,
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
        ease: Power3.easeOut,
    })
    .to("#title", {
        top: 0,
        duration: 1.2,
        delay: -0.9,
        ease: Power3.easeOut,
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
    .to(".profile_picture", {
        scaleY: 1,
        duration: 0.6,
        delay: -0.8,
        onComplete: effectStart, slider
    })
}
init();

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
}
// sample();



//////////////////////////////////////////


// project

function projectAni(){
    gsap.registerPlugin(ScrollTrigger);
    
    const p1 = gsap.timeline({
        scrollTrigger : {
            trigger: ".project_table",
            // markers: true,
            start: "top 10%",
            // end: "+=5000",
            // scrub: 1,
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
    .set(".projectText", {
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
    .to(".projectText", {
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
}


function projectSticky(){
    // gsap.registerPlugin(ScrollTrigger);

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
            trigger: ".projectText",
            // pin: true,
            // pinSpacing: false,
            scrub: 2,
            snap: 3,
            start: "top 0%",
            // end: "+=2000",
            markers: true,
            markers: {
                startColor: "blue",
                endColor: "purple",
                fontSize: "30px"
            },
        }
    })
    p2.to(".img2", {
        y: -800,
        ease: "none",
    })
    .to(".tb2", {
        y: -800,
        ease: "none",
        delay: -0.3
    })
}



///////////////////////////////////////////////////


//이펙트 효과 진입
function effectStart(){
    window.addEventListener("scroll", ()=>{
        if(window.scrollY < document.querySelector(".prevEffect").offsetTop - document.querySelector(".prevEffect").offsetHeight){
            header.style.color = "#000"; 
            document.documentElement.style.setProperty("--border-right-transform", "scaleX(0)")
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".prevEffect", {
        // onComplete: middleEffect,
        // onComplete: horizontal,
        scrollTrigger: {
            trigger: ".prevEffect",
            start: "top 50%",
            end: "top 50%",
            pin: true,
            pinSpacing: true,
            // end: () => `+=${document.querySelector(".prevEffect").offsetHeight - 500}`,   //요소 높이값만큼 end를 처리함 가로모드 할때 필요
            // markers: {
            //     startColor: "blue",
            //     endColor: "purple",
            //     fontSize: "30px"
            // },
            toggleActions: "restart none restart none"
        },
    });

    console.log(document.querySelector(".prevEffect").offsetTop - document.querySelector(".prevEffect").offsetHeight)
}


function middleEffect(){
    const tl = gsap.timeline()
    tl.to(".middleBox", {
        top: 0,
        duration: 1.2,
        ease: Power3.easeOut,
    })
    .to(".middleBox2", {
        top: 0,
        duration: 1.4,
        delay: -1,
        ease: Power3.easeOut
    })
    .to("#effect", {
        display: 'block'
    })
    .to(".middleBox", {
        display: 'none'
    })
    .to(".middleBox2", {
        display: 'none'
    })
}


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
