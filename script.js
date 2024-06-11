 const monthNameE1= document.querySelector("#month-name");
 const dayNameE1= document.querySelector("#day-name");
 const dayNumE1=document.querySelector("#day-number");
 const yearE1=document.querySelector("#year");


 const date= new Date();
 const month= date.getMonth();
 monthNameE1.innerText= date.toLocaleString("en", {month:"long"});
 dayNameE1.innerText= date.toLocaleString("en", {
    weekday:"long"
 });
 dayNumE1.innerText=date.getDate();
 yearE1.innerText=date.getFullYear()