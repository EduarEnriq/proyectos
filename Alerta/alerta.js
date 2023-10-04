let contador = document.querySelector("h2");
let no = 10;
let alert = document.querySelector("h1")
            setInterval(function(){
                no--;
                if(no<=-1){
                    alert.innerHTML = "STOP"; 
                    return }
            contador.innerHTML = no},1000);