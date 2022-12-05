function currentDay(){
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const week = new Date().getDay();
    const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dateText = document.querySelector(".dateText");
    
    
    
    
    let day = `Today's For ${year}. ${month >= 10 ? month : '0' + month}. ${date >= 10 ? date : '0' + date}<br>${weekArray[week]}`;
    
    dateText.innerHTML = day;
}
currentDay();

