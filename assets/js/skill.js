function mySkillEffect(){
    const skillText = document.querySelectorAll(".skillText");

    skillText.forEach((e, i) => {
        skillText[i].innerHTML = `<span class='skSplit${i+1}'>${document.querySelector(`.skText0${i+1}`).innerText.split("").join(`</span><span class=skSplit${i+1}>`)}</span>`;
    })
    document.querySelectorAll(".skSplit2")[38].insertAdjacentElement("afterend", document.createElement("br"));
    const skillIcon = gsap.utils.toArray(".skill_iconBox .icon .view");
    const skillName = gsap.utils.toArray(".skill_iconBox .icon span");

    const skillTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#myskill",
            start: "top, 70%",
            end: "top, 70%",
            markers: true
        }
    })
    
    skillTl.to(".skSplit1", {y: 0, opacity: 1, duration: 0.4, stagger: 0.05})
    .to(".skSplit2", {y:0, opacity: 1, duration: 0.5, delay: -0.2, stagger: 0.003})
    .to(skillIcon, {y: 0, opacity: 1, duration: 0.05, delay: -0.3, ease: "power3.out", stagger: 0.1}, "icon")
    .to(skillName, {x: "50%", opacity: 1, duration: 0.5, delay: -0.3, ease: "power1.out", stagger: 0.1}, "icon")
    .to(skillIcon, {rotateY: 0, duration: 0.1, delay: -0.1, stagger: 0.1, onUpdate: addFront})
    

    function addFront(){
        skillIcon.forEach((e)=>{
            e.addEventListener("mouseenter",()=>{
                e.style.transform = "rotateY(180deg)";
            });
            e.addEventListener("mouseleave",()=>{
                e.style.transform = "rotateY(0deg)";
            })
        })
    }
}