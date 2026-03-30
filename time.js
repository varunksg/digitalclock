let hrs=document.getElementById("hrs");
let mins=document.getElementById("mins");
let secs=document.getElementById("secs");
setInterval(() => {
    

let CurrentTime= new Date();
//console.log(CurrentTime.getMinutes);
hrs.innerHTML=CurrentTime.getHours();
mins.innerHTML=CurrentTime.getMinutes();
secs.innerHTML=CurrentTime.getSeconds();
}, 1000);