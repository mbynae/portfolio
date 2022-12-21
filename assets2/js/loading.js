// 로딩 감지 함수
document.onreadystatechange = function() {
    // 로딩 중 실행
    if(document.readyState === "loading" || document.readyState === "interactive"){
        document.querySelector(".wrap").classList.add("hide");
        loading();
        console.log("loading");
    
    // 로딩 후 실행
    } else if(document.readyState === "complete"){
        console.log("complete");
        const timer = setInterval(()=>{
            if(document.querySelector(".loading-page .counter h1").innerText == "100%"){
                clearInterval(timer);
                setTimeout(complete, 800);
            }
        }, 100)
    }
} 

// 로딩 중 함수
function loading(){
    $(document).ready(function() {
        var counter = 0;
        var c = 0;
        var i = setInterval(function(){
            $(".loading-page .counter h1").html(c + "%");
            $(".loading-page .counter .loading_bar").css("width", c + "%");
            counter++;
            c++;
            
            if(counter == 101) {
                clearInterval(i);
            }
        }, 20);
    });
}

// 로딩 후 함수
function complete(){
    const Tl = gsap.timeline();
    Tl.to(".loadingM", {top: 0, duration: 0.8, delay: 0, ease: Circ.easeOut})
    .to(".loadingE", {top: 0, duration: 0.8, delay: -0.6, ease: Circ.easeOut, onComplete: contentsOn})
}

// 로딩 후 컨텐츠 실행
function contentsOn(){
    document.querySelector(".loading-page").classList.add("hide");
    document.querySelector("#pageOn").classList.add("hide");
    document.querySelector(".wrap").classList.remove("hide");
    init();
}

// 시작 함수
function init(){
    titleRun();
    aboutRun();
    mySkillRun();
    projectRun();
    effectRun();
    summaryRun();
    contactBtn();
}
