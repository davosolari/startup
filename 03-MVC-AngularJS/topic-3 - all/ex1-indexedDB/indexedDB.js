
window.addEventListener("load",start,false);
let db;

    function start(){
       
        //identify the elements on document.
        let dataZone = document.getElementById("content");
        let btn = document.getElementById("btn-save")   
        
        //i create the database.
        let request = indexedDB.open("myDB")    
        
        //if all it's okay.
        request.onsuccess = obj => {
            db = obj.target.result;
        }
        
        //when db to need upgrade.
        request.onupgradeneeded = obj => {
            db = obj.target.result;
            db.createObjectStore("comments",{keyPath: "content"})
        }
    }

    function addObject(){
        let transaction = db.transaction(["comments"],"readwrite");
        let store = transaction.objectStore("comments");
        let add = store.add({content: content.value});
    }
    
    function eraseComment(){
        let transaction = db.transaction(["comments"], "readwrite");
        var objectStore = transaction.objectStore("comments");
        var objectStoreRequest = objectStore.clear();
    }

    (function(){
        document.getElementById("btn-save").addEventListener("click",addObject);
        document.getElementById("btn-clear").addEventListener("click",eraseComment);    
    })();
   