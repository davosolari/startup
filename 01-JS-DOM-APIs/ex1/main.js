function fadeIn(){
    let element = document.getElementById("greeting");
    let opacity = 0.1;
    element.style.display = "block";
    let timer = setInterval( function () {
        if( opacity >= 1 ){
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += opacity * 0.1;
    } , 50);
    document.getElementById("alert-me").addEventListener("click", alertYou)
}
window.onload = fadeIn;