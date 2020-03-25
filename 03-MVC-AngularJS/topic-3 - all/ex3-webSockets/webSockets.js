(function(){
  ws = new WebSocket('ws://demos.kaazing.com/echo');
  window.addEventListener("load",start,false);
})();

function start(){
    ws.onopen = () => {
      ws.send("Connected");
    }
    
    
    ws.onerror = (error) => {
      console.log('Error: ' + error);
    }
    
    
    ws.onmessage = (e) => {
      const box = document.getElementById('msgView');
      const msgNode = document.createTextNode(e.data);
      const paragraph = document.createElement('p');
      paragraph.appendChild(msgNode);
      box.appendChild(paragraph);
    }
    
    function sendMsg(){
      const msg = document.getElementById('msgBox').value;
      ws.send(msg);
    }
}    