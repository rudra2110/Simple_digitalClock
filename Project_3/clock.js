const clock=document.querySelector('.clock');

setInterval(function(){
    const date=new Date();
    const time=date.toLocaleTimeString();
    clock.innerHTML=`${time}`;
} , 1000);