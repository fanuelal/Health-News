function topScroll(){
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    var headeMenu = document.getElementById("HeaderMenu");
    var brand = document.getElementById("brand");
    var nav = document.getElementById("main-nav");
    var icon = document.getElementById("top");
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        brand.style.display= "none";
        brand.style.transition = "all 0.3s";
        headeMenu.style.position = 'sticky';
        headeMenu.style.top = 0; 
        headeMenu.style.height = 0;
    }
    else{
        brand.style.display = "block"; 
        headeMenu.style.position = 'relative';
        headeMenu.style.height = "40px";
    }   
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        icon.style.visibility = "visible";
    }
    else{
        icon.style.visibility = "hidden";
    }

}
