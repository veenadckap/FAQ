"use strict"


var buttons = document.querySelectorAll(".icon");
var content = document.querySelectorAll(".sub");

for(let i = 0; i < buttons.length; i++) 
{
  buttons[i].addEventListener("click", function () {
  

    
    if (buttons[i].innerText === "+") 
    {
      buttons[i].innerText = "-";
    
      for (let j = 0; j < content.length; j++) 
      {
        if (j === i) 
        {
          content[j].classList.remove("dis_none");
        } 
        else 
        {
          content[j].classList.add("dis_none");
          buttons[j].innerText = "+"; 
        }
      }
    } 
    else 
    {
      buttons[i].innerText = "+";
      content[i].classList.add("dis_none");
    }
  });
}



