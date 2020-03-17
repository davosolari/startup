let showError=(msg)=>{
    const sectionJoker = document.getElementById("sectionJoker");
    let textNode = document.createTextNode(msg);
    sectionJoker.innerHTML = "";
    sectionJoker.appendChild(textNode);
    sectionJoker.style.color = "red";
}

let createElement=(type, value, color)=>{
    let element = document.createElement(type);
    element.appendChild(document.createTextNode(value));
    element.style.color = color;
    return element;
}

let processResponse=(response)=>{
    let joke=createElement("textarea", response.value.joke, "black");
    deco.innerHTML = data.value.joke;
    const sectionJoke = document.getElementById("sectionJoker");
    sectionJoke.replaceChild(joke, sectionJoke.children[0]);
}

let fetchApi=()=>{

    fetch("http://api.icndb.com/jokes/random")
    .then(
     function(response){
        if(response.status != 200){
           showError("something happened on the server" + response.status);
           return false;
        }
        response.json()
        .then((data)=>processResponse(data))
        .catch((err)=>showError(err.message));
    })
    .catch((err)=>showError(err.message));
}

(function(){
    document.getElementById("fetching").addEventListener("click",fetchApi);
})();