"use strict";
let template_riga = "";
const url = "http://localhost:8080/api/veicolo/";
const UTENTE = localStorage.getItem('user');
let modal = null;


function listaVeicoli(){
    fetch(url)
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
    function createVeicolo(event) {

        fetch(url, {
            method: 'POST',
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
                immagine: document.getElementById("immagine").value,
            }),
    
        })
    
        .then(function(response) {
    
                modal.hide();
                listaVeicoli();
                return response.json();
            })
            .catch((error) => {
    
                console.error('Error:', error);
            });
    
        agganciaEventi();
    }

    function editVeicolo(event) {

        console.log(document.getElementById("veicolo_id").value);
        fetch(url, {
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
                    immagine: document.getElementById("immagine").value,
                }),
            })
            .then(response => response.json())
        listaVeicoli()
        modal.hide()
    
        .catch((error) => {
    
            console.error('Error:', error);
        });
    
        agganciaEventi();
    }

    function editInsertVeicolo(event) {


        let originator = event.currentTarget;
        let idVeicolo = originator.getAttribute('veicolo-id');
    
        console.log(idVeicolo);
    
        fetch(url +"id/"+ idVeicolo)
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
                document.getElementById("disponibilita").value = json.disponibilita;
                document.getElementById("indirizzo").value = json.indirizzo;
                document.getElementById("citta").value = json.citta;
                document.getElementById("coordinate").value = json.coordinate;
                document.getElementById("immagine").value = json.immagine;
            })
            .catch(function(err) {
                alert(err);
                console.log('Failed to fetch page: ', err);
            })
        agganciaEventi();
    }

    function agganciaEventi() {
        let editButton = document.getElementsByClassName("editButton");
        for (let li = 0; li < editButton.length; li++) {
            editButton[li].addEventListener("click", editInsertVeicolo);
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

    function chiamaModale(event) {

        svuotaModale();
        modal.show();
    }
    

    window.addEventListener('DOMContentLoaded', (event) => {

        modal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
        
        template_riga = document.getElementById("table_rows").innerHTML;
        listaVeicoli();

        let updateButton = document.getElementById("updateButton");
        updateButton.addEventListener("click", editVeicolo);
        
        let call_modale = document.getElementById("call_modale");
        call_modale.addEventListener("click", chiamaModale);

        let createButton = document.getElementById("createButton");
        createButton.addEventListener("click", createVeicolo);

        let editButton = document.getElementsByClassName("editButton");
        for (let li = 0; li < editButton.length; li++) {
            editButton[li].addEventListener("click", editInsertVeicolo);
        }
            console.log(JSON.stringify(UTENTE))
        });