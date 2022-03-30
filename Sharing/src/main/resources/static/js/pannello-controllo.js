"use strict";
let template_riga = "";
const URL = "http://localhost:8080/api/veicolo/";
let modal = null;
let modalImmagine = null;
let csvModal = null;
let modalDelete = null;
let immagini = null;
let specifiche = null;


function cambiaDisponibilita(){
    if(document.getElementById("disponibile").checked){
        document.getElementById("disponibilita").value = "DISPONIBILE";
    }else{
        document.getElementById("disponibilita").value = "NOLEGGIATO";
    }
}

function listaVeicoli(){
    fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {

            console.log(json);

            let rows = "";

            for (let li = 0; li < json.length; li++) {
                let row = template_riga;
                rows += row.replaceAll("{{veicolo_id}}", json[li].id)
                    .replaceAll("{{categoria}}", json[li].categoria)
                    .replaceAll("{{descrizione}}", json[li].descrizione)
                    .replaceAll("{{alimentazione}}", json[li].alimentazione)
                    .replaceAll("{{ruote}}", json[li].ruote)
                    .replaceAll("{{disponibilita}}", json[li].disponibilita)
                    .replaceAll("{{indirizzo}}", json[li].indirizzo)
                    .replaceAll("{{citta}}", json[li].citta)
                    .replaceAll("{{coordinate}}", json[li].coordinate)
                    .replaceAll("{{immagine}}", json[li].immagine)
            }

            document.getElementById("table_rows").innerHTML = rows;
            agganciaEventi();
        })
        .catch(function(err) {
            alert(err);
            console.log('Failed to fetch page: ', err);
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

    function insertImmagine(event) {

        modalImmagine.show();
        let originator = event.currentTarget;
        let idvImmagine = originator.getAttribute('veicolo-id');
        console.log(idvImmagine);
        /*
        let rows ="";
        let row = template_riga;
        rows+= row.replaceAll("{{veicolo}}", idvImmagine);
        */


        document.getElementById("upload_immagini").value = idvImmagine;
        /*document.getElementById("upload_immagini").innerHtml = idvImmagine;*/

        console.log(document.getElementById("upload_immagini").value);
        
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
    

    window.addEventListener('DOMContentLoaded', (event) => {

        modal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
        
        modalImmagine = new bootstrap.Modal(document.getElementById('immaginiModal'), {});
        
        csvModal = new bootstrap.Modal(document.getElementById('csvModal'), {});

        modalDelete = new bootstrap.Modal(document.getElementById('deleteModal'), {});
        
        template_riga = document.getElementById("table_rows").innerHTML;
       

        let updateButton = document.getElementById("updateButton");
        updateButton.addEventListener("click", editVeicolo);       

        let confermaDelete = document.getElementById("confermaDelete");
        confermaDelete.addEventListener("click", deleteVeicolo)

        let editButton = document.getElementsByClassName("editButton");
        for (let li = 0; li < editButton.length; li++) {
            editButton[li].addEventListener("click", editInsertVeicolo);
        }
       
        let delButton = document.getElementsByClassName("delButton");
        for (let li = 0; li < delButton.length; li++) {
            delButton[li].addEventListener("click", chiamaDelModale);
        }

        listaVeicoli();
            console.log(JSON.parse(localStorage.getItem('user')));
        });

        