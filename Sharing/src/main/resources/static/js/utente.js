"use strict";

const URL = "http://localhost:8080/api/prenotazioni/";
const user = localStorage.getItem('user');
let bottone_logout = document.getElementById("logout").addEventListener("click", logout);
let pannello= document.getElementById("pannello").addEventListener("click", controlloPannello);
let modalTerminaPreno = null;
let render_prenotazioni = null;
let render_prenotazioni2 = null;
let render_anagrafica = null;
let session = JSON.parse(localStorage.getItem('user'));

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

function logout(){

  localStorage.removeItem("user");

  location.href = "/logout";
  
}

function loadPage(){

  let userL = session;

  if(userL == null){
    location.href = "/";
  }
  if(userL.ruolo == "RUOLO_UTENTE"){
    document.getElementById("pannello").setAttribute("style", "display:none");
    document.getElementById("iconaProfilo").setAttribute("style", "display:inline");
  }else{
    document.getElementById("pannello").setAttribute("style", "display:inline");
    document.getElementById("iconaProfilo").setAttribute("style", "display:inline");
  }
}

function controlloPannello(){

  if (user == null){

    modal.show();
  }else{
    location.href="pannello-controllo";
  }

}

function terminaPrenotazione(event){

  let originator = event.currentTarget;
  let prenotazioneId = originator.getAttribute('prenotazione-id');

  

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  fetch(URL+prenotazioneId)
      .then(function(response) {
        modalTerminaPreno.hide();
        return response.json();
      })
      .then(function(prenotazione){        
        //return
         fetch(URL + "savePrenotazione",{
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                
                  body: JSON.stringify({ 
                    id: prenotazioneId,
                    dataInizio: prenotazione.dataInizio,
                    dataFine: today,
                    stato: "scaduta",
                    utenteId: session,
                    veicoloId: {
                    id: prenotazione.veicoloId.id,
                    categoria: prenotazione.veicoloId.categoria,
                    descrizione: prenotazione.veicoloId.descrizione,
                    alimentazione: prenotazione.veicoloId.alimentazione,
                    ruote: prenotazione.veicoloId.ruote,
                    disponibilita: "DISPONIBILE",
                    indirizzo: prenotazione.veicoloId.indirizzo,
                    citta: prenotazione.veicoloId.citta,
                    coordinate: prenotazione.veicoloId.coordinate,
                    prezzo: prenotazione.veicoloId.prezzo,
                  }
                })
      })
      .then(()=>listaPrenotazioni())
      
    })
    .catch(function(err) { 
      console.log('Failed to fetch page: ', err);
  });
    listaPrenotazioni();
}

function listaPrenotazioni(event){

    fetch(URL+ "id/"+session.id)
        .then(function(response) {
		    return response.json();
	    })
        .then(function(json) {
            console.log(json);
            let rows = "";   
            let rows2 = "";       
            rows = render_prenotazioni(json);
            rows2 = render_prenotazioni2(json);
           
            document.getElementById("bodyTabellaClienti").innerHTML = rows;
            document.getElementById("bodyTabellaClienti2").innerHTML = rows2;
       
            agganciaEventi();
      
        })
        .catch(function(err) { 
                alert(err);
                console.log('Failed to fetch page: ', err);
        });	

}

function utenteByEmail(){

    fetch("http://localhost:8080/api/login/utente/" + session.email)
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            console.log(json);
            let rows = "";
            rows = render_anagrafica(json);
            document.getElementById("tabella-anagrafica").innerHTML = rows;
        })
        .catch(function(err) { 
            alert(err);
            console.log('Failed to fetch page: ', err);
    });

}

function agganciaEventi(){
  let buttonTermina = document.getElementsByClassName("terminaPrenotazione");
  for(let li=0; li<buttonTermina.length; li++){
    buttonTermina[li].addEventListener("click", chiamaDelModale);
  }
}


function chiamaDelModale(event){

  let originator = event.currentTarget;
  let prenotazioneId = originator.getAttribute('prenotazione-id');
  confermaTerminaPreno.setAttribute('prenotazione-id', prenotazioneId);
  modalTerminaPreno.show()

}

window.addEventListener(
	'DOMContentLoaded', 
	function(event){

    let buttonTermina = document.getElementsByClassName("terminaPrenotazione");
    for(let li=0; li<buttonTermina.length; li++){
      buttonTermina[li].addEventListener("click", chiamaDelModale);
    }
    
    modalTerminaPreno = new bootstrap.Modal(document.getElementById('terminaPrenoModal'), {});

    let confermaTerminaPreno = document.getElementById("confermaTerminaPreno");
    confermaTerminaPreno.addEventListener("click", terminaPrenotazione)



		render_prenotazioni = Handlebars.compile( document.getElementById("template-prenotazioni").innerHTML );
		render_prenotazioni2 = Handlebars.compile( document.getElementById("template-prenotazioni2").innerHTML );
        render_anagrafica = Handlebars.compile(document.getElementById("template-anagraficaUtente").innerHTML);
        listaPrenotazioni();
        utenteByEmail();
        loadPage();
		
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
