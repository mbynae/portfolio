// 소개 텍스트 페이드인 효과 
function aboutFadeIn1(){

    const aText = document.querySelectorAll(".aText");
    
    aText.forEach((e, i) => {
        aText[i].innerHTML = `<span class='abSplit${i+1}'>${document.querySelector(`.aText0${i+1}`).innerText.split("").join(`</span><span class=abSplit${i+1}>`)}</span>`;
    })
    const nonempasis = [];
    const emphasis = [...document.querySelectorAll(".abSplit6")].filter((e, i)=>{
        if(i>=8 && i<=13){
            return document.querySelectorAll(".abSplit6")[i];
        } else {
            nonempasis.push(document.querySelectorAll(".abSplit6")[i]);
        }
    });
    

    // GSAP 효과
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_textBox",
            // markers: true,  
            start: "top 60%",
            end: "top 60%",
        }
    })

    tl.to(".abSplit1", {
        duration: 0.4,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.04,
    })
    .to(".abSplit2", {
        duration: 0.4,
        y: 0,
        opacity: 1,
        delay: -0.5,
        ease: "power3.out",
        stagger: 0.04,
    })
    .to(".abSplit3", {
        duration: 1,
        y: "-1.0417vw",
        opacity: 1,
        delay: -0.3,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit4", {
        duration: 1,
        y: "-1.0417vw",
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit5", {
        duration: 1,
        y: "-1.0417vw",
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit6", {
        duration: 1,
        y: "-1.0417vw",
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit7", {
        duration: 1,
        y: "-1.0417vw",
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".about_textBox figure", {
        duration: 0.2,
        yPercent: -20,
        duration: 0.7,
        opacity: 1,
        ease: "power3.out",
        delay: -1,
    })

    const t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_textBox",
            markers: true,  
            start: "75% 60%",
            end: "+=50%",
            pin: true,
            scrub: 1
        }
    })
    t2.to(".bold-1", {y: "22.7vw"}, "abText1")
    .to(".bold-2", {y: "18.95vw", x: "33.5vw", color: "#14CF93"}, "abText1")
    .to(".about_textBox figure", {x: "-18vw"}, "abText1")
    .to(emphasis, {y: "12.68vw", x: "4vw"}, "abText1")
    .to(".abSplit7", {y: "10.55vw", x: "20vw"}, "abText1") 
    .to(".abSplit3", {x: "100vw"}, "abText1")
    .to(".abSplit4", {x: "-50vw"}, "abText1")
    .to(".abSplit5", {x: "80vw"}, "abText1")
    .to(nonempasis, {x: "-70vw"}, "abText1")
    
}
function sampleAb1(){
    gsap.to(".cards", {
            scale: 1.5,
            filter : 'grayscale(0)',
            y: "3.1250vw",  //40
            scrollTrigger: {
            trigger: ".cards",
              start: "top center",
              end: "70% center",
            scrub: true,
            // markers: true,
            // pin: true
        }
    });
    
    gsap.to(".card-1", {
        rotate: -16,
        scale: 0.85,
        x: "-9.3750vw",    //1-180
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: ".cards",
          start: "top center",
          end: "70% center",
          scrub: true
        }
      });
      
      gsap.to(".card-3", {
        rotate: 16,
        scale: 0.85,
        x: "9.3750vw", //180
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: ".cards",
          start: "top center",
          end: "70% center",
          scrub: true
        }
      });
}

function aboutFadeIn2(){

    const aText = document.querySelectorAll(".aText");
    
    aText.forEach((e, i) => {
        aText[i].innerHTML = `<span class='abSplit${i+1}'>${document.querySelector(`.aText0${i+1}`).innerText.split("").join(`</span><span class=abSplit${i+1}>`)}</span>`;
    })
    const nonempasis = [];
    const emphasis = [...document.querySelectorAll(".abSplit6")].filter((e, i)=>{
        if(i>=8 && i<=13){
            return document.querySelectorAll(".abSplit6")[i];
        } else {
            nonempasis.push(document.querySelectorAll(".abSplit6")[i]);
        }
    });
    

    // GSAP 효과
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_textBox",
            // markers: true,  
            start: "top 60%",
            end: "top 60%",
        }
    })

    tl.to(".abSplit1", {
        duration: 0.4,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.04,
    })
    .to(".abSplit2", {
        duration: 0.4,
        y: -20,
        opacity: 1,
        delay: -0.5,
        ease: "power3.out",
        stagger: 0.04,
    })
    .to(".abSplit3", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.3,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit4", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit5", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit6", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit7", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".about_textBox figure", {
        duration: 0.2,
        yPercent: -20,
        duration: 0.7,
        opacity: 1,
        ease: "power3.out",
        delay: -1,
    })

    const t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_textBox",
            markers: true,  
            start: "75% 60%",
            end: "+=50%",
            pin: true,
            scrub: 1
        }
    })
    t2.to(".bold-1", {y: "435px", x: "40px"}, "abText1")
    .to(".bold-2", {y: "364px", x: "595px", color: "#14CF93"}, "abText1")
    .to(".about_textBox figure", {x: "-290px"}, "abText1")
    .to(emphasis, {y: "223px", x: "77px"}, "abText1")
    .to(".abSplit7", {y: "183px", x: "384px"}, "abText1") 
    .to(".abSplit3", {x: "120vw"}, "abText1")
    .to(".abSplit4", {x: "-50vw"}, "abText1")
    .to(".abSplit5", {x: "100vw"}, "abText1")
    .to(nonempasis, {x: "-70vw"}, "abText1")

    
}
function sampleAb2(){
    gsap.to(".cards", {
        scale: 1.5,
        filter : 'grayscale(0)',
        y: "40px",  //40
        scrollTrigger: {
        trigger: ".cards",
        start: "top center",
        end: "70% center",
        scrub: true,
        // markers: true,
        // pin: true
        }
    });

    gsap.to(".card-1", {
        rotate: -16,
        scale: 0.85,
        x: "-140px",    //1-180
        transformOrigin: "bottom center",
        scrollTrigger: {
        trigger: ".cards",
        start: "top center",
        end: "70% center",
        scrub: true
        }
    });
    
    gsap.to(".card-3", {
        rotate: 16,
        scale: 0.85,
        x: "140px", //180
        transformOrigin: "bottom center",
        scrollTrigger: {
        trigger: ".cards",
        start: "top center",
        end: "70% center",
        scrub: true
        }
    });
}

function aboutFadeIn3(){

    const aText = document.querySelectorAll(".aText");
    
    aText.forEach((e, i) => {
        aText[i].innerHTML = `<span class='abSplit${i+1}'>${document.querySelector(`.aText0${i+1}`).innerText.split("").join(`</span><span class=abSplit${i+1}>`)}</span>`;
    })
    const nonempasis = [];
    const emphasis = [...document.querySelectorAll(".abSplit6")].filter((e, i)=>{
        if(i>=8 && i<=13){
            return document.querySelectorAll(".abSplit6")[i];
        } else {
            nonempasis.push(document.querySelectorAll(".abSplit6")[i]);
        }
    });
    

    // GSAP 효과
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_textBox",
            // markers: true,  
            start: "top 60%",
            end: "top 60%",
        }
    })

    tl.to(".abSplit1", {
        duration: 0.4,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.04,
    })
    .to(".abSplit2", {
        duration: 0.4,
        y: -20,
        opacity: 1,
        delay: -0.5,
        ease: "power3.out",
        stagger: 0.04,
    })
    .to(".abSplit3", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.3,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit4", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit5", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit6", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit7", {
        duration: 1,
        y: -40,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".about_textBox figure", {
        duration: 0.2,
        yPercent: -20,
        duration: 0.7,
        opacity: 1,
        ease: "power3.out",
        delay: -1,
    })

    const t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_textBox",
            markers: true,  
            start: "75% 60%",
            end: "+=50%",
            pin: true,
            scrub: 1
        }
    })
    t2.to(".bold-1", {y: "435px", x: "40px"}, "abText1")
    .to(".bold-2", {y: "364px", x: "595px", color: "#14CF93"}, "abText1")
    .to(".about_textBox figure", {x: "-290px"}, "abText1")
    .to(emphasis, {y: "223px", x: "77px"}, "abText1")
    .to(".abSplit7", {y: "183px", x: "384px"}, "abText1") 
    .to(".abSplit3", {x: "120vw"}, "abText1")
    .to(".abSplit4", {x: "-50vw"}, "abText1")
    .to(".abSplit5", {x: "100vw"}, "abText1")
    .to(nonempasis, {x: "-70vw"}, "abText1")

    
}
function sampleAb3(){
    gsap.to(".cards", {
        scale: 1.5,
        filter : 'grayscale(0)',
        y: "40px",  //40
        scrollTrigger: {
        trigger: ".cards",
        start: "top center",
        end: "70% center",
        scrub: true,
        // markers: true,
        // pin: true
        }
    });

    gsap.to(".card-1", {
        rotate: -16,
        scale: 0.85,
        x: "-140px",    //1-180
        transformOrigin: "bottom center",
        scrollTrigger: {
        trigger: ".cards",
        start: "top center",
        end: "70% center",
        scrub: true
        }
    });
    
    gsap.to(".card-3", {
        rotate: 16,
        scale: 0.85,
        x: "140px", //180
        transformOrigin: "bottom center",
        scrollTrigger: {
        trigger: ".cards",
        start: "top center",
        end: "70% center",
        scrub: true
        }
    });
}




let responseAb = gsap.matchMedia();
responseAb.add("(min-width: 1025px)", ()=>{
    aboutFadeIn1();
    sampleAb1();
});
responseAb.add("(min-width: 769px) and (max-width: 1024px)", ()=>{
    aboutFadeIn2();
    sampleAb2();
});
responseAb.add("(max-width: 768px)", ()=>{
    aboutFadeIn3();
    sampleAb3();
});
