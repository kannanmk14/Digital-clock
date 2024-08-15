// const temp=document.querySelector("#clock");
// temp.innerHTML="18:20:34";
// const temp1=document.getElementById("clock");
// temp.innerHTML="12:25"

function showTime(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let session="AM";
    if(hours>12){
        hours-=12;
        session="PM";
    }
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    let temp=hours+":"+minutes+":"+seconds+" "+session;
    let k=document.getElementById("clock");
    k.innerText=temp;
    k.style.color="aqua";
    setTimeout(showTime,1000);
    
}
//setInterval(()=>showTime(),1000);
//setInterval(showTime,1000);
showTime();
