function mySkillEffect(){
    const skillText = document.querySelectorAll(".skillText");

    skillText.forEach((e, i) => {
        skillText[i].innerHTML = `<span class='skSplit${i+1}'>${document.querySelector(`.skText0${i+1}`).innerText.split("").join(`</span><span class=skSplit${i+1}>`)}</span>`;
    })
    document.querySelectorAll(".skSplit2")[38].insertAdjacentElement("afterend", document.createElement("br"));
    const skillIcon = gsap.utils.toArray(".skill_iconBox .icon .view");

    const skillTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#myskill",
            start: "top, 70%",
            end: "top, 70%",
            markers: true
        }
    })
    skillTl.to(".skSplit1", {y: 0, opacity: 1, duration: 0.4, stagger: 0.05})
    .to(".skSplit2", {y:0, opacity: 1, duration: 0.4, delay: -0.2, stagger: 0.01})
    .to(skillIcon, {onUpdate:addFront, duration: 0.2, stagger: 0.1})
    

    function addFront(){
        
    }
}