let widthWindows=window.innerWidth;
let heightWindows=window.innerHeight;

function reveal(){
    let revels=document.querySelectorAll(".reveal"); 
    let revels2=document.querySelectorAll(".reveal-2"); 

    revels.forEach((reveal)=>{
        let windowheight= window.innerHeight;
        let elementTop=reveal.getBoundingClientRect().top;
        let elementVisible=100; 
        if(elementTop < windowheight-elementVisible){
             reveal.classList.add("active");
        }else{
             reveal.classList.remove("active");
        }
    });

    revels2.forEach((reveal)=>{
        let windowheight= window.innerHeight;
        let elementTop=reveal.getBoundingClientRect().top;
        let elementVisible=200; 
        if(elementTop < windowheight-elementVisible){
             reveal.classList.add("active");
        }else{
             reveal.classList.remove("active");
        }
    });

}

function cianMenuAnimation(){
    let menu=document.querySelector(".cian-header");
    let docr=document.querySelector(".custom-shape-divider-bottom-1");
    if (docr!=null) {
        let nums=docr.getBoundingClientRect().top; 
        if(nums<-28){
            menu.style="position:relative;opacity:.2"
        }else{
            menu.style="position:sticky;top:0;opacity:1"
        }
    }  
}



window.addEventListener("scroll",function(e){ 
    reveal() ;
    cianMenuAnimation();
});
  
window.addEventListener("resize", function(){ 
   let cianlinks=document.querySelectorAll("a");  
   let width=  window.innerWidth;
    if (widthWindows<600 || width<600) { 
        cianlinks.forEach((cianlink)=>{
            cianlink.classList.remove("cyan-link");
        }) 
    }else{ 
        if (window.innerWidth>1200) {
            location.reload();
            cianlinks.forEach((cianlink)=>{
                cianlink.classList.add("cyan-link");
            })
        }  
       
    }
})
  
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

    document.getElementById("goHome").addEventListener("click",function(e){
         window.location.href="/";
    })

    let links=document.querySelectorAll(".cyan-menu");
     
}
 
var mybutton = document.getElementById("top-link");
window.onscroll = function () {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
};
