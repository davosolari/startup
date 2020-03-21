window.addEventListener("load",start,false);

function start(){
    var elementoLienzo = document.getElementById("lienzo");
    
    lienzo = elementoLienzo.getContext("2d");
    lienzo.fillRect(100,70,200,200);
    
    
    //lienzo.fillRect= "#FF475D";
    
    //lienzo.fillStyle="#EE120E";

    

    //lienzo.clearRect(130,130,40,50);

   
 
}