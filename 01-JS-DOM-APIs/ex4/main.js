let fetchRepo=()=>{
    let searchTerm = document.getElementById("search-repo-text").value;
    if(searchTerm=="") return false;
    fetch("https://api.github.com/search/repositories?q=" + searchTerm)
        .then(
            (response)=>{
                if( response.status!=200){
                    showError("something happened on the server" + response.status);
                    return false;
                }
                response.json()
                    .then(
                        (data)=>{
                            document.getElementById("repos").innerHTML = "";
                            let items = data.items;
                            for(let i=0; i<data.items.length; i++){
                                let listItem = document.createElement("li");
                                var listItemText = document.createTextNode(items[i].name);
                                listItem.appendChild(listItemText);
                                document.getElementById("repos").appendChild(listItem);
                            }
                            return true;
                        }
                    );
            }
        )
        .catch(
            (err)=>{
                showError("something happened on the server" + response.status);
                return false;
            }
        );
}

let showError=(msg)=>{
    const sectionJoker = document.getElementById("sectionJoker");
    let textNode = document.createTextNode(msg);
    sectionJoker.innerHTML = "";
    sectionJoker.appendChild(textNode);
    sectionJoker.style.color = "red";
}

(function () {
    document.getElementById("search-repo").addEventListener("click", function(){
        fetchRepo();
    });
})();