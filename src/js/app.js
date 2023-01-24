function reveal(){
    var revels=document.querySelectorAll(".reveal");  
    revels.forEach((reveal)=>{
        var windowheight= window.innerHeight;
        var elementTop=reveal.getBoundingClientRect().top;
        var elementVisible=100; 
        if(elementTop < windowheight-elementVisible){
             reveal.classList.add("active");
        }else{
             reveal.classList.remove("active");
        }
    });
}
window.addEventListener("scroll",function(e){ 
    reveal()
});
  
window.onload=function(){  
    let content=document.getElementById("cianSlider");
    if(content!=null){
        document.getElementById("cianSlider").addEventListener("click",function(e){
            let widtCianmenu=document.querySelector(".cian-menu").getBoundingClientRect().height; 
            if(widtCianmenu>0 && widtCianmenu<=330)   {
                document.getElementById("IconMenu").click();
            }    
        });
    }       
     
    document.getElementById("IconMenu").addEventListener("click",function(e){ 
        document.getElementById("IconI").classList.toggle("fa-window-close");
    });

     
}

