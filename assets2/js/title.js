// 타이틀 및 헤더 실행 함수
function titleRun(){

    // 텍스트 나누기
    const tText = document.querySelectorAll(".tText");
    
    tText.forEach((e, i) => {
        tText[i].innerHTML = `<span class='split${i+1}'>${document.querySelector(`.tText0${i+1}`).innerText.split("").join(`</span><span class=split${i+1}>`)}</span>`;
    })
    
    // 타이틀 효과
    const titleTl = gsap.timeline();
    
    titleTl.to("#canvas", {duration: 0.6, opacity: 0.5, delay: 0.5})
    .to(".split1", {y: 0, opacity: 1, duration: 0.6, delay: 2, ease: Circ.easeOut, stagger: 0.02}, "title1")
    .to(".split3", {y: 0, opacity: 1, duration: 0.6, delay: 2, ease: Circ.easeOut, stagger: 0.02}, "title1")
    .to(".tText01", {y: "-5%", duration: 0.6, ease: Circ.easeOut}, "title11")
    .to(".tText03", {y: "5%", duration: 0.6, ease: Circ.easeOut}, "title11")
    .to(".tText01", {x: "-35%", duration: 0.6, ease: Circ.easeOut}, "title2")
    .to(".tText03", {x: "25%", duration: 0.6, ease: Circ.easeOut}, "title2")
    .to(".split1", {color: "#14CF93", stagger: 0.1, duration: 0.6}, "title2")
    .to(".split3", {color: "#14CF93", stagger: 0.1, duration: 0.6},"title2")
    .to(".split1", {color: "#383838", stagger: 0.16, duration: 0.6, delay: -1.1}, "title3")
    .to(".split3", {color: "#383838", stagger: 0.16, duration: 0.6, delay: -1.1}, "title3")
    .to(".split2", {duration: 0.9, x: 0, y: 0, rotate: 0, scale: 1, stagger: 0.02, opacity: 1, ease: Circ.easeOut, delay: -0.5})
    .to("#header", {top: 0, ease: "power3.out"})

    // 스크롤 시 타이틀 텍스트 좌우 이동
    const titleScroll = gsap.timeline()
    ScrollTrigger.create({
        animation: titleScroll,
        trigger: "#title",
            start: "top top",
            end: "70% top",
            scrub: 2,
    })
    titleScroll.to(".tText01", {
        xPercent: -25,
    }, "titleMove");
    titleScroll.to(".tText03", {
        xPercent: 25,
    }, "titleMove");

    // 헤더 메뉴바 색 변경
    window.addEventListener("scroll", ()=>{
        if(document.querySelector("#effect").getBoundingClientRect().y <= 50 && document.querySelector("#contact").getBoundingClientRect().y >=50){
            document.querySelectorAll("#header nav li a").forEach(e=>{
                e.style.color = "#fff";
            })
        } else {
            document.querySelectorAll("#header nav li a").forEach(e=>{
                e.style.color = "#000";
            })
        }
    });
    
}