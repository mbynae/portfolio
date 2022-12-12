//프로필 사진 패럴랙스 효과
function profilePicture(){
    gsap.to(".pofile1", {
        rotate: -9,
        x: -30,
        y: -20,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".profile_picture",
            // markers: true,
            start: "top 60%",
            end: "bottom, -=200",
            scrub: 1
        }
    })
    gsap.to(".pofile2", {
        left: "8.96vw",
        top: "6.84vw",
        rotate: 6,
        y: -20,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".profile_picture",
            // markers: true,
            start: "top 60%",
            end: "bottom, -=200px",
            scrub: 1
        }
    })
    gsap.to(".pofile3", {
        left: "16.8vw",
        top: "17.1vw",
        rotate: 25,
        y: -20,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".profile_picture",
            // markers: true,
            start: "top 60%",
            end: "bottom, -=200px",
            scrub: 1
        }
    });


}
// profilePicture();


// 소개 텍스트 페이드인 효과 
function aboutFadeIn(){

    //내용 선택자
    // const aboutDescBold = document.querySelector(".about_textBox p .bold");
    // const aboutDescNormal = document.querySelector(".about_textBox p .normal");
    // const descBold = aboutDescBold.innerText.split("");
    // const descNormal = aboutDescNormal.innerText.split("");
    // aboutDescBold.innerHTML = "";
    // aboutDescNormal.innerHTML = "";
    // descBold.forEach((e) => {
    //     aboutDescBold.innerHTML += `<span class='aboutDescBold'>${e}</span>`;
    // });
    // descNormal.forEach((e, i) => {
    //     if(i==11 || i==28 || i==49 || i==68){
    //         aboutDescNormal.innerHTML += `<br>`
    //     } else {
    //         aboutDescNormal.innerHTML += `<span class='aboutDescNormal'>${e}</span>`;
    //     }
    // });
    // const selection2 = gsap.utils.toArray(".aboutDescBold");
    // const selection3 = gsap.utils.toArray(".aboutDescNormal");

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
    console.log(nonempasis);
    

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
        y: -20,
        opacity: 1,
        delay: -0.3,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit4", {
        duration: 1,
        y: -20,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit5", {
        duration: 1,
        y: -20,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit6", {
        duration: 1,
        y: -20,
        opacity: 1,
        delay: -0.9,
        ease: "power3.out",
        stagger: 0.001,
    })
    .to(".abSplit7", {
        duration: 1,
        y: -20,
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
            start: "center 60%",
            end: "+=50%",
            pin: true,
            scrub: 1
        }
    })
    t2.to(".bold-1", {y: "45vh"}, "abText1")
    .to(".bold-2", {y: "37.6vh", x: "33.5vw", color: "#14CF93"}, "abText1")
    .to(".about_textBox figure", {x: "-100%"}, "abText1")
    .to(emphasis, {y: "25.1vh", x: "4vw"}, "abText1")
    .to(".abSplit7", {y: "21vh", x: "20vw"}, "abText1") 
    .to(".abSplit3", {x: "100vw"}, "abText1")
    .to(".abSplit4", {x: "-50vw"}, "abText1")
    .to(".abSplit5", {x: "80vw"}, "abText1")
    .to(nonempasis, {x: "-70vw"}, "abText1")
    
}

aboutFadeIn();


function sampleAb(){
    gsap.to(".cards", {
            scale: 1.5,
            filter : 'grayscale(0)',
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
        x: -180,
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
        x: 180,
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: ".cards",
          start: "top center",
          end: "70% center",
          scrub: true
        }
      });
}
sampleAb();

