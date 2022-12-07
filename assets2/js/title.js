function titleText(){

    const tText = document.querySelectorAll(".tText");
    
    tText.forEach((e, i) => {
        tText[i].innerHTML = `<span class='split${i+1}'>${document.querySelector(`.tText0${i+1}`).innerText.split("").join(`</span><span class=split${i+1}>`)}</span>`;
    })

    const reverseSplit3 = [...document.querySelectorAll(".split3")].reverse();
    console.log(reverseSplit3.innerText);
    
    const titleTl = gsap.timeline();
    gsap.set(".tText01", {y: "30%"})
    gsap.set(".tText03", {y: "-30%"})
    gsap.set("#header", {y: -100})
    gsap.set(".portfolioText", {opacity: 0, y: 40})
    gsap.set(".dateText", {opacity: 0, y: 40})
    
    titleTl.to(".split1", {y: 0, opacity: 1, duration: 0.6, delay: 2, stagger: 0.12, }, "title1")
    .to(".split3", {y: 0, opacity: 1, duration: 0.6, delay: 2, stagger: 0.12, }, "title1")
    .to("#canvas", {display: "block", delay: 1.8}, "title1")
    .to(".tText01", {y: "-5%", duration: 0.6}, "title11")
    .to(".tText03", {y: "5%", duration: 0.6}, "title11")
    .to(".tText01", {x: "-25%", duration: 1.5, ease: "none"}, "title2")
    .to(".tText03", {x: "20%", duration: 1.5, ease: "none"}, "title2")
    .to(".split1", {color: "#14CF93", stagger: 0.1, duration: 0.6}, "title2")
    .to(".split3", {color: "#14CF93", stagger: 0.1, duration: 0.6},"title2")
    .to(".split1", {color: "#383838", stagger: 0.16, duration: 0.6, delay: -1.1}, "title3")
    .to(".split3", {color: "#383838", stagger: 0.16, duration: 0.6, delay: -1.1}, "title3")
    .to(".split2", {opacity: 1, scale: 1, rotate: 0, duration: 0.5, color: "#14CF93", stagger: 0.15, delay: -0.2})
    .to("#header", {y: 0})
    .to(".portfolioText", {opacity: 1, y: 0, duration: 0.8, delay: -0.6}, "tsubText")
    .to(".dateText", {opacity: 1, y: 0, duration: 0.8, delay: -0.3, onComplete: romoveFixed}, "tsubText")


    const titleScroll = gsap.timeline()
    ScrollTrigger.create({
        animation: titleScroll,
        trigger: "#title",
            start: "top top",
            end: "70% top",
            scrub: 2,
            // pin: true,
            // pinSpacing: true,
            // end: () => `+=${document.querySelector(".prevEffect").offsetHeight - 500}`,   //요소 높이값만큼 end를 처리함 가로모드 할때 필요
            // markers: {
            //     startColor: "blue",
            //     endColor: "purple",
            //     fontSize: "30px"
            // },
            // toggleActions: "restart none restart none"
    })
    titleScroll.to(".tText01", {
        xPercent: -25,
    }, "titleMove");
    titleScroll.to(".tText03", {
        xPercent: 25,
    }, "titleMove");
}
titleText();

function romoveFixed(){
    document.querySelector("#title").style.position = "static";
    document.querySelector("body").style.overflow = "overlay";
}