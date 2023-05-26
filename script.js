



 
document.addEventListener("DOMContentLoaded", function() {
    const boton1 = document.getElementById("1stbutton");
    const boton2 = document.getElementById("2ndbutton");
  
    function handleClick() {
      alert('Thanks for clicking on me!');
    }
  
    boton1.addEventListener("click", handleClick);
    boton2.addEventListener("click", handleClick);
  });

  document.querySelector("button.button-menu-toggle")
  .addEventListener("click",function(){

    document.querySelector(".nav-links").

    classList.toggle("nav-links-responsive")
  })
    


/* 


let userInput = document.getElementById("userInput");


if (userInput >= 18) { 
    alert (" He's allowed to buy beer ");
    elseif (   userInput > 18 && userInput < 25 ) 
    alert("He's a young adult ");
    }   
else { 
    alert (" He's a minor ")
 }
 */