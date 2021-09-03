//some styles
$(".container").addClass("shift")
$("button").css("fontSize","2rem")
$(".btn").addClass("shift2")
$("h1").css("fontSize","5rem")
$("#value").css("fontSize","5rem")
$("h1").css("fontFamily","sans-serif")

let count = 0
let button = document.querySelectorAll(".btn")
let value = document.querySelector("#value")

//functionality with for loop:
// for(let i=0;i<button.length;i++){
//    button[i].addEventListener("click",function(){
//       if(button[i]===document.querySelector(".one")){
//       value.textContent=count++;
//       $(value).css("color","green");
//       }
//       else if(
//       button[i]===document.querySelector(".three")){
//         value.innerHTML=count--
//          value.style.color="red"
//    }  else{
//       value.textContent = 0
//       value.style.color="black"
//    }     
// }
// )}

// functionality using 'for each' iteration
button.forEach(function(btn){//dont forget button variable is set to contain the ".btn" class
   btn.addEventListener("click",function(e){
      let classContent = e.currentTarget.classList;//event handler has been attached onto the classes. In this example, the class list of current target that the event is listening on after the click is being returned
      if (classContent.contains("one")){ //if this class list contains "one",etc etc
         count++;
         $("#value").css("color","green")
      }
      else if(
         classContent.contains("three")){
            count--;
            value.style.color="red"
        }
         else{
            count=0;
            value.style.color="black"
         }
      value.textContent=count
      
   })
})