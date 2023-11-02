function clockTime(){
    //to get system time
    let date=new Date()
    let hours=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
  
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;
   

  
    setTimeout(() => { 
        clockTime()},1000)
}
//function call
clockTime()