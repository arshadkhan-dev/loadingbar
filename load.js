const counter = document.querySelector(".counter");
const loadE = document.querySelector(".loading-bar-front");

let index = 0;

updateNum();

function updateNum(){
  
       counter.innerText = index + "%";
       loadE.style.width = index + "%";
       index++;

       if(index < 101){
              setTimeout(updateNum,15);
       }  
}