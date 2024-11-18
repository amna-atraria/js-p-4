
var m1 = document.querySelectorAll(".m1")

m1.forEach(function (val)  {
    console.log(val.childNodes[3]); // Log each .m1 element to the console

    val.addEventListener("mouseenter", function(dets){
        val.childNodes[3].style.opacity = 1
        val.style.backgroundColor = "gray"
        val.style.transition = "0.8s"
        val.style.transition = "2s"

        val.style.color = "black"
                  

                   
    });

    val.addEventListener("mouseleave", function(dets){
        val.childNodes[3].style.opacity = 0
        val.style.backgroundColor = "black"
        val.style.color = "white"
        val.style.transition = "2s"
        


        
});
val.addEventListener("mousemove",function (dets){
    val.childNodes[3].style.left = dets.x + "px" 
    val.childNodes[3].style.top = dets.y + "px" 

})
});

