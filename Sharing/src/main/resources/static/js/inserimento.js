"use strict";

let bottone_auto=document.getElementById("button-auto").addEventListener("click", sceltaVeicolo);
let bottone_moto=document.getElementById("button-moto").addEventListener("click", sceltaVeicolo);
let bottone_bici=document.getElementById("button-bici").addEventListener("click", sceltaVeicolo);
let bottone_mono=document.getElementById("button-mono").addEventListener("click", sceltaVeicolo);
let bottone_aggiungi = null;
const URL="http://localhost:8080/api/veicolo";
let render_veicolo = null;
let veicoloModal = null;
let categoriaF = null;


  Handlebars.registerHelper('ifEquals', function(arg1, arg2, arg3, options) {
    return (arg1 == arg2 || arg1 == arg3) ? options.fn(this) : options.inverse(this);
});

function sceltaVeicolo(event){

    event.preventDefault();

    let originator = event.currentTarget;
    categoriaF = originator.getAttribute("veicolo-cate");
    let categoriaH = {
        categoria: originator.getAttribute("veicolo-cate")
    }
    let rows = render_veicolo(categoriaH);

    document.getElementById("specifiche").innerHTML = rows;

    veicoloModal.hide();
}

function createVeicolo(){

    if(categoriaF == "AUTO" || categoriaF == "MOTO"){
    fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },

        body: JSON.stringify({
            categoria: categoriaF, 
            descrizione: document.getElementById("descrizione").value, 
            alimentazione: document.getElementById("alimentazione").value, 
            ruote: document.getElementById("ruote").value, 
            disponibilita: "DISPONIBILE", 
            indirizzo: document.getElementById("indirizzo").value,  
            citta: document.getElementById("citta").value, 
            coordinate: document.getElementById("coordinate").value,
            immagine: [{
            }],
            specifiche:{
                velocita: document.getElementById("velocita").value, 
                potenza: document.getElementById("potenzaMotore").value, 
                //alimentazione: document.getElementById().value, 
                //tempoDiRicarica: document.getElementById().value, 
                tipoDiRuota: null, 
                limitatoreVelocita: null, 
                autonomia: null, 
                emissioniCo2: document.getElementById("emissioni").value, 
                cambio: document.getElementById("cambio").value, 
                cavalli: document.getElementById("cavalli").value, 
                cilindrata: document.getElementById("cilindrata").value, 
                consumoMedio: document.getElementById("consumoMedio").value 
            } 
        })  

    })}
    else{
        fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
    
            body: JSON.stringify({
                categoria: categoriaF, 
                descrizione: document.getElementById("descrizione").value, 
                alimentazione: document.getElementById("alimentazione").value, 
                ruote: document.getElementById("ruote").value, 
                disponibilita: "DISPONIBILE", 
                indirizzo: document.getElementById("indirizzo").value,  
                citta: document.getElementById("citta").value, 
                coordinate: document.getElementById("coordinate").value,
                immagine: [{
                }],
                specifiche:{
                    velocita: document.getElementById("velocita").value, 
                    potenza: document.getElementById("potenzaMotore").value, 
                    //alimentazione: document.getElementById().value, 
                    //tempoDiRicarica: document.getElementById().value, 
                    tipoDiRuota: document.getElementById("tipoRuota").value, 
                    limitatoreVelocita: document.getElementById("limitatore").value, 
                    autonomia: document.getElementById("autonomia").value, 
                    emissioniCo2: document.getElementById("emissioni").value, 
                    cambio: null, 
                    cavalli: null, 
                    cilindrata: document.getElementById("cilindrata").value, 
                    consumoMedio: null 
                } 
            })  
    
        })    
    }
    alert("Veicolo aggiunto con successo");
    location.href = "/pannello-controllo";
}

window.addEventListener(
    'DOMContentLoaded', 
    function(event){
        render_veicolo= Handlebars.compile(document.getElementById("template-specs").innerHTML);

        veicoloModal = new bootstrap.Modal(document.getElementById('veicoloModal'), {});

        bottone_aggiungi = document.getElementById("createButton").addEventListener("click", createVeicolo);
        veicoloModal.show();

      
  });