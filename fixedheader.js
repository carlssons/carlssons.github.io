function myNavigation(){
    
    var infoSection = document.getElementById("infoSection");
    var backgroundText = document.getElementById("background-text");
    console.log("bt= ", backgroundText);
    var sticky = infoSection.offsetTop;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction(){
        if (window.pageYOffset > sticky){
            backgroundText.style.background="linear-gradient(to top, rgba(16, 47, 37,0),  rgba(16, 47, 37,1))";  
            backgroundText.style.padding="20px 0 20px 0";
            
        }

        else{
            backgroundText.style.background="rgba(19,23,18,0)";
            backgroundText.style.padding="56px 0 20px 0";
        }
    }
}  
window.onload = function() {this.myNavigation ()};
    
    
    
    
    
    
    
    
    
    /*function scrollFunction(){
        document.getElementById("nav-bar").style.position="absolute";

        if (window.pageYOffset > sticky){
            console.log("nav= ", nav);
            document.getElementById("nav-bar").style.position="fixed";
            document.getElementById("nav-bar").style.background="rgba(9,7,8)";
            document.getElementById("background-text").style.background="linear-gradient(to top, rgba(9,7,8,0.8),  rgba(9,7,8,1))";  
            nav.classList.remove("bottom-nav")
            nav.classList.add("top-nav")
        }

        else{
            document.getElementById("nav-bar").style.background="linear-gradient(to top, rgba(9,7,8,1),  rgba(9,7,8,0))";
            document.getElementById("background-text").style.background="rgba(9,7,8,0)";
            nav.classList.remove("top-nav")
            nav.classList.add("bottom-nav")
        }
    }
}

window.onload = function() {this.myNavigation ()};*/
