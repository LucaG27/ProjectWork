let button = document.getElementById("dynamicSearch").addEventListener("click", search);
let indirizzo = document.getElementById("searchInput");

let inputIndirizzo = document.getElementById("indirizzo");
let coordinate = document.getElementById("coordinate");
let citta = document.getElementById("citta");

async function search(){

    let text = indirizzo.value
    let b = await api(text);
    console.log(b)
    coordinate.value = b.features[0].center;
    inputIndirizzo.value= b.features[0].text+" "+b.features[0].address;
    citta.value =  b.features[0].context[2].text;
}

async function api(text) {

    const token = "pk.eyJ1IjoicmFmZmFlbGVkcCIsImEiOiJjbDE2ZGI4M24wMHV6M2NwOXR2Y2plbWQ5In0.N7Rxyu2_1WhiIiZ9Gl6XMw"
   // let encodedText = encodeURIComponent(text);
    const URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + text + ".json?limit=1&country=IT&language=it&place=Milano&access_token="+ token;

    let res = await fetch(URL).then(response => response.json()).catch(error => console.log(error));
    return res;
}


