let div=document.querySelector(".bunner")

let button=document.querySelector(".button")

button.addEventListener('click',function (e) {
    console.log(e.target);
   div.style.backgroundColor = 'orange';
   });

   let button2=document.querySelector(".button2")
   let inputTask=document.querySelector("inputTask")

   button2.addEventListener('click',function () {
       if (inputTask.ariaValueMax.trim()!==" ") {
           
       }

      });
   