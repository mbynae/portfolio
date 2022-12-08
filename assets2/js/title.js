function titleText(){

    const tText = document.querySelectorAll(".tText");
    
    tText.forEach((e, i) => {
        tText[i].innerHTML = `<span class='split${i+1}'>${document.querySelector(`.tText0${i+1}`).innerText.split("").join(`</span><span class=split${i+1}>`)}</span>`;
    })
    
    const titleTl = gsap.timeline();
    
    titleTl.to("#canvas", {duration: 0.6, opacity: 0.5, delay: 2})
    .to(".split1", {y: 0, opacity: 1, duration: 0.6, delay: 2, ease: Circ.easeOut, stagger: 0.02}, "title1")
    .to(".split3", {y: 0, opacity: 1, duration: 0.6, delay: 2, ease: Circ.easeOut, stagger: 0.02}, "title1")

    // .to(".tText01", {y: "-5%", duration: 0.6}, "title11")
    // .to(".tText03", {y: "5%", duration: 0.6}, "title11")
    // .to(".tText01", {x: "-25%", duration: 1.5, ease: "none"}, "title2")
    // .to(".tText03", {x: "20%", duration: 1.5, ease: "none"}, "title2")
    // .to(".split1", {color: "#14CF93", stagger: 0.1, duration: 0.6}, "title2")
    // .to(".split3", {color: "#14CF93", stagger: 0.1, duration: 0.6},"title2")
    // .to(".split1", {color: "#383838", stagger: 0.16, duration: 0.6, delay: -1.1}, "title3")
    // .to(".split3", {color: "#383838", stagger: 0.16, duration: 0.6, delay: -1.1}, "title3")
    // .to(".split2", {opacity: 1, scale: 1, rotate: 0, duration: 0.5, color: "#14CF93", stagger: 0.15, delay: -0.2})
    .to("#header", {top: 0, ease: "power3.out"})


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
}
titleText();

function romoveFixed(){
    document.querySelector("#title").style.position = "static";
    document.querySelector("body").style.overflow = "overlay";
}