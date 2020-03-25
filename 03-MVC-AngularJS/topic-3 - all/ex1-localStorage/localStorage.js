    function addComment(){
        const area = document.getElementById("content").value;
        localStorage.setItem("data",area); 
    }

  
    function eraseComment(){
        localStorage.clear();
    }

    (function(){
        document.getElementById("btn-save").addEventListener("click",addComment);
        document.getElementById("btn-clear").addEventListener("click",eraseComment);
        document
    })();
       