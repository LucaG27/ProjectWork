"use strict";

const URL = "http://localhost:8080/api/veicolo/";
const user = localStorage.getItem('user');
let render_prenotazioni = null;
let render_prenotazioni2 = null;
let render_anagrafica = null;
let session = JSON.parse(localStorage.getItem('user'))

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

function listaPrenotazioni(event){

    fetch(URL+"prenotazioni/"+ session.id)
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

window.addEventListener(
	'DOMContentLoaded', 
	function(event){

		render_prenotazioni = Handlebars.compile( document.getElementById("template-prenotazioni").innerHTML );
		render_prenotazioni2 = Handlebars.compile( document.getElementById("template-prenotazioni2").innerHTML );
        render_anagrafica = Handlebars.compile(document.getElementById("template-anagraficaUtente").innerHTML);
        listaPrenotazioni();
        utenteByEmail();
		
});