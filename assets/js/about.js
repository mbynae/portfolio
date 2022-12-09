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

    aboutFadeIn();
}


// 소개 텍스트 페이드인 효과 
function aboutFadeIn(){

    //내용 선택자
    const aboutDescBold = document.querySelector(".about_textBox p .bold");
    const aboutDescNormal = document.querySelector(".about_textBox p .normal");
    const descBold = aboutDescBold.innerText.split("");
    const descNormal = aboutDescNormal.innerText.split("");
    aboutDescBold.innerHTML = "";
    aboutDescNormal.innerHTML = "";
    descBold.forEach((e) => {
        aboutDescBold.innerHTML += `<span class='aboutDescBold'>${e}</span>`;
    });
    descNormal.forEach((e, i) => {
        if(i==11 || i==28 || i==49 || i==68){
            aboutDescNormal.innerHTML += `<br>`
        } else {
            aboutDescNormal.innerHTML += `<span class='aboutDescNormal'>${e}</span>`;
        }
    });
    const selection2 = gsap.utils.toArray(".aboutDescBold");
    const selection3 = gsap.utils.toArray(".aboutDescNormal");


    // GSAP 효과
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".profile_picture",
            // markers: true,  
            start: "top 60%",
            end: "top 60%",
        }
    })

    gsap.set(selection2, {
        y: 20
    })
    tl.to(selection2, {
        duration: 0.4,
        y: 0,
        opacity: 1,
        stagger: 0.04,
    })
    .to(selection3, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: -0.2,
        stagger: .006,
    })
}

