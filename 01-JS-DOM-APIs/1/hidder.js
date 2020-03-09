window.onload = function muestra() {
  var x = document.getElementById("hiddenSection");
  if (window.getComputedStyle(x).visibility === "hidden") {
      x.style.visibility = "visible";
  }
}

muestra();




