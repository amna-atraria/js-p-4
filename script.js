var main = document.querySelectorAll(".elem")
var elems = document.querySelector("#elem1 img");

main.forEach(function (val) {

    val.addEventListener("mouseenter", function () {
       val.childNodes[3].style.opacity= 1
    });

    
    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity= 0
     });

     
    val.addEventListener("mousemove", function (dets) {
        val.childNodes[3].style.left = dets.x + "px"
        val.childNodes[3].style.top = dets.y + "px"

     });
     
    });

    // console.log("hiiiii")
// })
// main.forEach(function(elements){  
//     console.log("hello")
//     elements.addEventListener("click",function(){
//         console.log("amn")
//     })
// })

// main.addEventListener("mousemove",function(dets){
//        elems.style.left = dets.x + "px"
//        elems.style.top = dets.y + "px"
//          console.log("hello")

// })


// main.addEventListener("mouseenter",function(){
//     elems.style.opacity = 1

// })


// main.addEventListener("mouseleave",function(){
//     elems.style.opacity = 0

// })