
(()=>{
  holder = document.getElementById('holder'),
  state = document.getElementById('status');
  window.addEventListener("load",loader,false);
})();

    function loader(){
        if (typeof window.FileReader === 'undefined') {
           state.className = 'fail';
        }else{
              state.className = 'success';
              state.innerHTML = 'File API & FileReader available';
          }
      
        holder.ondragover = () => {
              this.className = 'hover';
              return false;
        }
        holder.ondragend = () => {
              this.className = '';
              return false;
        }
        holder.ondrop = (e) => {
              this.className = '';
              e.preventDefault();
        
        const file = e.dataTransfer.files[0],
            reader = new FileReader();
            reader.onload = (event) => {
               console.log(event.target);
               holder.innerText = event.target.result;
            }
        
        console.log(file);
        reader.readAsText(file);
      
        return false;
        }
      
    }