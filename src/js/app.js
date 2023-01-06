  function reveal(){
    var revels=document.querySelectorAll(".reveal");  
    revels.forEach((reveal)=>{
        var windowheight= window.innerHeight;
        var elementTop=reveal.getBoundingClientRect().top;
        var elementVisible=100;
        console.log(windowheight)
        console.log(elementTop)
        if(elementTop < windowheight-elementVisible){
            reveal.classList.add("active");
        }else{
            reveal.classList.remove("active");
        }
    });
}
window.addEventListener("scroll",function(){
    reveal();
});
 