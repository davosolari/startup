const alertYou =()=> alert("I've alerted you!");
window.onload =()=>{
    document.getElementById("alert-me").addEventListener("click", alertYou);
};