let bottone_logout = document.getElementById("logout").addEventListener("click", logout);
let bottone_login = document.getElementById("btn").addEventListener("click", loadPage);
let pannello= document.getElementById("pannello").addEventListener("click", controlloPannello);
const user = localStorage.getItem('user');

function logout(){

  localStorage.removeItem("user");

  location.href = "/logout";
  
}

function controlloPannello(){

  if (user == null){

    modal.show();
  }else{
    location.href="pannello-controllo";
  }

}


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
    document.getElementById("iconaProfilo").setAttribute("style", "display:inline");
    //document.getElementById("pulsanteProfilo").setAttribute("style", "display:inline");
    document.getElementById("buttonLogin").setAttribute("style", "display:none");
  }else{
    document.getElementById("pannello").setAttribute("style", "display:inline");
    document.getElementById("iconaProfilo").setAttribute("style", "display:inline");
    //document.getElementById("pulsanteProfilo").setAttribute("style", "display:inline");
    document.getElementById("buttonLogin").setAttribute("style", "display:none");
  }
}

window.addEventListener(
  'DOMContentLoaded', 
  function(event){

    modal = new bootstrap.Modal(document.getElementById('exampleModal'), {});

    loadPage();
    
})
