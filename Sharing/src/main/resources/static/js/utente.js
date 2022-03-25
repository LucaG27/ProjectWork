"use strict";

const URL = "http://localhost:8080/api/veicolo/";
const user = localStorage.getItem('user');
let render_prenotazioni = null;
let render_prenotazioni2 = null;
let session = JSON.parse(localStorage.getItem('user'))

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
            for(let li=0; li<json.length; li++){
            if(json[li].stato == "in corso"){
                document.getElementById("bodyTabellaClienti").innerHTML = rows;
            }else{
                document.getElementById("bodyTabellaClienti2").innerHTML = rows2;
            }
        }
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

        listaPrenotazioni();
		
});