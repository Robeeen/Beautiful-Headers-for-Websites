function toggle() {
                var x = document.getElementById("responsive");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
              
            }

// Trying to close menu when click outside of the Menu

//   const x = document.querySelector("responsive");         
//   window.onclick = function(event){
//                     if(event.target === x)
//                     x.style.display = "none";
//                 }

// document.addEventListener("click", (e)=>{
//     const isClose = e.target.closest(x);
//     if(!isClose && x.classList.contains("block")){
//         x.classList.remove("block");
//     }
// });