let pannello= document.getElementById("pannello").addEventListener("click", controlloPannello);

const user = localStorage.getItem('user');

function loadPage(){

    let userL = JSON.parse(user);
  
    if(userL == null){
      document.getElementById("pannello").setAttribute("style", "display:none");
      document.getElementById("iconaProfilo").setAttribute("style", "display:none");
      //document.getElementById("pulsanteProfilo").setAttribute("style", "display:none");
      document.getElementById("buttonLogin").setAttribute("style", "display:block");
    }
    if(userL.ruolo == "RUOLO_UTENTE"){
      document.getElementById("pannello").setAttribute("style", "display:none");
      document.getElementById("iconaProfilo").setAttribute("style", "display:block");
      //document.getElementById("pulsanteProfilo").setAttribute("style", "display:inline");
      document.getElementById("buttonLogin").setAttribute("style", "display:none");
    }else{
      document.getElementById("pannello").setAttribute("style", "display:block");
      document.getElementById("iconaProfilo").setAttribute("style", "display:block");
      //document.getElementById("pulsanteProfilo").setAttribute("style", "display:inline");
      document.getElementById("buttonLogin").setAttribute("style", "display:none");
    }
  }

function controlloPannello(){

    if (user == null){
  
      modal.show();
    }else{
      location.href="pannello-controllo";
    }
  
}






window.addEventListener(
    'DOMContentLoaded', 
    function(event){
  

      loadPage();

      
  })