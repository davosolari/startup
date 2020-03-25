
window.addEventListener("load",start,false);
let db;

    function start(){
       
        //identify the elements on document.
        const dataZone = document.getElementById("content");
        const btn = document.getElementById("btn-save")   
        
        //i create the database.
        const request = indexedDB.open("myDB")    
        
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
        const transaction = db.transaction(["comments"],"readwrite");
        const store = transaction.objectStore("comments");
        const add = store.add({content: content.value});
    }
    
    function eraseComment(){
        const transaction = db.transaction(["comments"], "readwrite");
        const objectStore = transaction.objectStore("comments");
        const objectStoreRequest = objectStore.clear();
    }

    (function(){
        document.getElementById("btn-save").addEventListener("click",addObject);
        document.getElementById("btn-clear").addEventListener("click",eraseComment);    
    })();
   