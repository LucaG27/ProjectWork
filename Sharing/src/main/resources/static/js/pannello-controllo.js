"use strict";
let template_riga = "";
const URL = "http://localhost:8080/api/veicolo/";
const URL1 = "http://localhost:8080/api/prenotazioni/";
const URL2 = "http://localhost:8080/api/immagine/delete/";
const session = JSON.parse(localStorage.getItem('user'));
let bottone_logout = document.getElementById("logout").addEventListener("click", logout);
let print = document.getElementById("print-button").addEventListener("click", printHTML)
let modal = null;
let modalImmagine = null;
let csvModal = null;
let modalDelete = null;
let modalTerminaPreno = null;
let modalDeleteImmagine = null;
let immagini = null;
let specifiche = null;
let render_tabellaPrenotazioni = null;
let render_tabellaVeicoli = null;
let render_immagini = null;


Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

function logout(){

    localStorage.removeItem("user");
  
    location.href = "/logout";
    
  }

function listaPrenotazioni(event){

    document.getElementById("titolo").innerHTML = "prenotazioni";

    fetch(URL1+ "allPrenotazioni")
        .then(function(response) {
		    return response.json();
	    })
        .then(function(json) {
            console.log(json);
            let rows = "";   
                   
            rows = render_tabellaPrenotazioni(json);
                      
            document.getElementById("table_rows").innerHTML = rows;
            
       
            agganciaEventi();
      
        })
        .catch(function(err) { 
                alert(err);
                console.log('Failed to fetch page: ', err);
        });	

}  

function ordinaPrenotazioni(){

    fetch(URL1+ "ordinati/in corso")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        let rows = "";   
               
        rows = render_tabellaPrenotazioni(json);
                  
        document.getElementById("table_rows").innerHTML = rows;
        
   
        agganciaEventi();
  
    })
    .catch(function(err) { 
            alert(err);
            console.log('Failed to fetch page: ', err);
    });	



}

function cambiaDisponibilita(){
    if(document.getElementById("disponibile").checked){
        document.getElementById("disponibilita").value = "DISPONIBILE";
    }else{
        document.getElementById("disponibilita").value = "NOLEGGIATO";
    }
}

function listaImmagini(){

    let immagineId = document.getElementById("segnaVeicoloId").value;
    
    fetch(URL+"id/"+ immagineId)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {

            console.log(json);

            let rows = "";
        

            rows = render_immagini(json);
        
            document.getElementById("tabellaImmagini").innerHTML = rows;
  
            agganciaEventi();

        })
        .catch(function(err) {
            alert(err);
            console.log('Failed to fetch page: ', err);
        });
}

function listaVeicoli(){

    document.getElementById("titolo").innerHTML = "";
    document.getElementById("titolo").innerHTML = "veicoli";

    fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {

            console.log(json);

            let rows1 = "";
        

            rows1 = render_tabellaVeicoli(json);
        
            document.getElementById("table_rows").innerHTML = rows1;
  
            agganciaEventi();

            $("#maxRows").val(10).change();
        })
        .catch(function(err) {
            alert(err);
            console.log('Failed to fetch page: ', err);
        });
    }

function selezionaImg(event){

    document.getElementById("fotoDaCancellare").innerHTML = "";

    let originator = event.currentTarget;
    let immagineId = originator.getAttribute('immagine-id');
    let immagine = originator.getAttribute('image-id');

    document.getElementById("daCancellare").value = immagineId;

    let img = document.createElement("img");

    img.src = immagine;
    img.setAttribute("width", 150);
    img.setAttribute("height", 110);

    document.getElementById("fotoDaCancellare").appendChild(img);

}

function confermaDelImmagine(){

    let idImmagine = document.getElementById("daCancellare").value;
    
    fetch(URL2 + idImmagine, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }           
    })
    .then(response => response.json())
        modalDeleteImmagine.hide();
        alert("Immagine cancellata con successo")
        listaVeicoli()

    .catch((error) => {

        console.error('Error:', error);
    });        
}

    function deleteVeicolo(event){

        let originator = event.currentTarget;
        let delVeicoloId = originator.getAttribute('veicolo-id');

        fetch(URL +"delete/" +delVeicoloId, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }           
        })
        .then(response => response.json())
            modalDelete.hide();
            alert("Veicolo cancellato con successo")
            listaVeicoli()
            .catch((error) => {
    
            console.error('Error:', error);
        });
        
    }

    function resetEdit(event){

        let originator = event.currentTarget;
        let idVeicolo = originator.getAttribute('veicolo-id');
    
        console.log(idVeicolo);

        modal.show();
    
        fetch(URL +"id/"+ idVeicolo)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
    
                document.getElementById("veicolo_id").value = json.id;
                document.getElementById("categoria").value = json.categoria;
                document.getElementById("descrizione").value = json.descrizione;
                document.getElementById("alimentazione").value = json.alimentazione;
                document.getElementById("ruote").value = json.ruote;
                if(json.disponibilita == "NOLEGGIATO"){
                    document.getElementById("disponibile").checked = false;
                }else{
                    document.getElementById("disponibile").checked = true;
                };
                document.getElementById("indirizzo").value = json.indirizzo;
                document.getElementById("citta").value = json.citta;
                document.getElementById("coordinate").value = json.coordinate;
                document.getElementById("prezzo").value = json.prezzo;

                agganciaEventi();

            })
            .catch(function(err) {
                alert(err);
                console.log('Failed to fetch page: ', err);
            })      
    }

    function editVeicolo(event) {

        
        fetch(URL, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    id: document.getElementById("veicolo_id").value,
                    categoria: document.getElementById("categoria").value,
                    descrizione: document.getElementById("descrizione").value,
                    alimentazione: document.getElementById("alimentazione").value,
                    ruote: document.getElementById("ruote").value,                    
                    disponibilita: document.getElementById("disponibilita").value,
                    indirizzo: document.getElementById("indirizzo").value,
                    citta: document.getElementById("citta").value,
                    coordinate: document.getElementById("coordinate").value,
                    prezzo: document.getElementById("prezzo").value,

                }),
            })
        .then(response => response.json())
            console.log(document.getElementById("veicolo_id").value);
            modal.hide()
            window.location.reload()
    
        .catch((error) => {
    
            console.error('Error:', error);
        });
    
        agganciaEventi();
    }

    function editInsertVeicolo(event) {


        let originator = event.currentTarget;
        let idVeicolo = originator.getAttribute('veicolo-id');
        resetButton.setAttribute('veicolo-id', idVeicolo);
    
        console.log(idVeicolo);

        modal.show();
    
        fetch(URL +"id/"+ idVeicolo)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
    
                document.getElementById("veicolo_id").value = json.id;
                document.getElementById("categoria").value = json.categoria;
                document.getElementById("descrizione").value = json.descrizione;
                document.getElementById("alimentazione").value = json.alimentazione;
                document.getElementById("ruote").value = json.ruote;
                if(json.disponibilita == "NOLEGGIATO"){
                    document.getElementById("disponibile").checked = false;
                }else{
                    document.getElementById("disponibile").checked = true;
                };
                document.getElementById("indirizzo").value = json.indirizzo;
                document.getElementById("citta").value = json.citta;
                document.getElementById("coordinate").value = json.coordinate;
                document.getElementById("prezzo").value = json.prezzo;

            })
            .catch(function(err) {
                alert(err);
                console.log('Failed to fetch page: ', err);
            })
        agganciaEventi();
    }

    function terminaPrenotazione(event){

        
        let prenotazioneId = document.getElementById("prenotazione_id").value;
      
        
      
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
      
        fetch(URL1+prenotazioneId)
            .then(function(response) {
              modalTerminaPreno.hide();
              return response.json();
            })
            .then(function(prenotazione){        
              //return
               fetch(URL1 + "savePrenotazione",{
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
          
      }

    function insertImmagine(event) {

        modalImmagine.show();
        let originator = event.currentTarget;
        let idvImmagine = originator.getAttribute('veicolo-id');
        console.log(idvImmagine);

        document.getElementById("upload_immagini").value = idvImmagine;

        console.log(document.getElementById("upload_immagini").value);
        listaVeicoli();
    }

    function loadCsv(){

        csvModal.show();
    }

    function agganciaEventi() {
        let editButton = document.getElementsByClassName("editButton");
        for (let li = 0; li < editButton.length; li++) {
            editButton[li].addEventListener("click", editInsertVeicolo);
        }

        let imgButton = document.getElementsByClassName("imgButton");
        for (let li = 0; li < imgButton.length; li++) {
            imgButton[li].addEventListener("click", insertImmagine);
        }

        let delButton = document.getElementsByClassName("delButton");
        for (let li = 0; li < delButton.length; li++) {
            delButton[li].addEventListener("click", chiamaDelModale);
        }
      
        let delButtonPr = document.getElementsByClassName("delButtonPrenotaz");
        for (let li = 0; li < delButtonPr.length; li++) {
            delButtonPr[li].addEventListener("click", chiamaDelModalePrenotazione);
        }

        let delImgButton = document.getElementsByClassName("delImg");
        for (let li = 0; li < delImgButton.length; li++) {
            delImgButton[li].addEventListener("click", chiamaDelModaleImg);
        }

    }

    function svuotaModale() {

        document.getElementById("veicolo_id").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("descrizione").value = "";
        document.getElementById("alimentazione").value = "";
        document.getElementById("ruote").value = "";
        document.getElementById("disponibilita").value = "";
        document.getElementById("indirizzo").value = "";
        document.getElementById("citta").value = "";
        document.getElementById("coordinate").value = "";
        document.getElementById("immagine").value = "";
    
    }


    function chiamaDelModale(event){

        let originator = event.currentTarget;
        let veicoloId = originator.getAttribute('veicolo-id');
        confermaDelete.setAttribute('veicolo-id', veicoloId);
        modalDelete.show()

    }

    function chiamaDelModalePrenotazione(event){

        let originator = event.currentTarget;
        let prenotazioneId = originator.getAttribute('prenotazione-id');
        document.getElementById("prenotazione_id").value = prenotazioneId;
        modalTerminaPreno.show()
      
      }

    function chiamaDelModaleImg(event){

        document.getElementById("fotoDaCancellare").innerHTML = "";

        let originator = event.currentTarget;
        let veicoloId = originator.getAttribute('veicolo-id');
        document.getElementById("segnaVeicoloId").value = veicoloId;
        listaImmagini();
        modalDeleteImmagine.show();
    }  

    function printHTML() {
        printJS({
          printable: 'table-id',
          type: 'html',
          ignoreElements: ['thumbnail','immagg','ico1','ico2','azioni','ico3','ico4']
        })
      }
    

    window.addEventListener('DOMContentLoaded', (event) => {

        modal = new bootstrap.Modal(document.getElementById('exampleModal'), {});       
        modalImmagine = new bootstrap.Modal(document.getElementById('immaginiModal'), {});        
        modalDeleteImmagine = new bootstrap.Modal(document.getElementById('deleteModalImmagine'), {});        
        csvModal = new bootstrap.Modal(document.getElementById('csvModal'), {});
        modalDelete = new bootstrap.Modal(document.getElementById('deleteModal'), {});       
        modalTerminaPreno = new bootstrap.Modal(document.getElementById('deleteModalPrenotazione'), {});       
        template_riga = document.getElementById("table_rows").innerHTML;

        render_tabellaPrenotazioni = Handlebars.compile( document.getElementById("template-tabellaPrenotazioni").innerHTML );
        render_tabellaVeicoli = Handlebars.compile( document.getElementById("template-tabellaVeicoli").innerHTML );
        render_immagini = Handlebars.compile( document.getElementById("template-tabellaImmagini").innerHTML );
       
        let confermaDelImg = document.getElementById("confermaDelImg");
        confermaDelImg.addEventListener("click", confermaDelImmagine);

        let resetButton = document.getElementById("resetButton");
        resetButton.addEventListener("click", resetEdit);

        let updateButton = document.getElementById("updateButton");
        updateButton.addEventListener("click", editVeicolo);       

        let confermaDelete = document.getElementById("confermaDelete");
        confermaDelete.addEventListener("click", deleteVeicolo)

        let confermaTerminaPreno = document.getElementById("confermaTerminaPr");
        confermaTerminaPreno.addEventListener("click", terminaPrenotazione)

        let delImgButton = document.getElementsByClassName("delImg");
        for (let li = 0; li < delImgButton.length; li++) {
            delImgButton[li].addEventListener("click", chiamaDelModaleImg);
        }

        let editButton = document.getElementsByClassName("editButton");
        for (let li = 0; li < editButton.length; li++) {
            editButton[li].addEventListener("click", editInsertVeicolo);
        }
       
        let delButton = document.getElementsByClassName("delButton");
        for (let li = 0; li < delButton.length; li++) {
            delButton[li].addEventListener("click", chiamaDelModale);
        }

        let delButtonPr = document.getElementsByClassName("delButtonPrenotaz");
        for (let li = 0; li < delButtonPr.length; li++) {
            delButtonPr[li].addEventListener("click", chiamaDelModalePrenotazione);
        }

        listaVeicoli();
            console.log(JSON.parse(localStorage.getItem('user')));
        });

        