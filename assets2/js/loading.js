document.onreadystatechange = function() {
    if(document.readyState === "loading" || document.readyState === "interactive"){
        document.querySelector(".wrap").classList.add("hide");
        console.log("loading");
    
    } else if(document.readyState === "complete"){
        document.querySelector(".wrap").classList.remove("hide");
        document.querySelector("#loading").classList.add("hide");
        console.log("complete");
    }
}   