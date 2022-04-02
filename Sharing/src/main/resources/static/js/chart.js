var ctx = document.getElementById('myChart');
var ctxw = document.getElementById('myChartWorld')

var config = {
    type: 'bar',
    data: {
        labels: ['2000', '2015', '2020', '2022', '2025','2030'],
        datasets: [{
            label: "Veicoli benzina",
            type: "bar",
            backgroundColor: "#E5A0A0",
            borderColor: "#E5A0A0",
            borderWidth: 2,
            fill: false,
            xAxisID: "axis-bar",
           //data: [22.91, 75.8, 56.5, 125.61, 278.9, 345.25]
           //data: [130.91, 410.43, 980.49, 1209.02, 1800.82]
           data: [1500, 1300, 1100, 900, 600, 300]
        },
        {
            label: "Veicoli diesel",
            type: "bar",
            backgroundColor: "#E9BCBC",
            borderColor: "#E9BCBC",
            borderWidth: 1,
            fill: true,
            xAxisID: "axis-bar",
            data: [1400, 1100, 900, 300, 150, 70]
            //data: [1950.0, 2380.0, 5550.0, 6190.0, 4950.0]
        },
        {
            label: "Scooter/moto",
            type: "bar",
            backgroundColor: "#E9E2BC",
            borderColor: "#E9E2BC",
            borderWidth: 1,
            fill: true,
            xAxisID: "axis-bar",
            data: [800, 700, 600, 550, 400, 350]
            //data: [1210.0, 6000.0, 25230.0, 36650.0, 34810.0]
        },
        {
            label: "Auto ibride",
            type: "bar",
            backgroundColor: "#A9B1F3",
            borderColor: "#A9B1F3",
            borderWidth: 2,
            fill: true,
            xAxisID: "axis-bar",
            data: [250, 350, 500, 700, 1100, 1250]
           // data: [1950.0, 2380.0, 5550.0, 6190.0, 4950.0]
        },
        {
            label: "Auto elettriche",
            type: "bar",
            backgroundColor: "#7DE1E1",
            borderColor: "#7DE1E1",
            borderWidth: 1,
            fill: true,
            xAxisID: "axis-bar",
            data: [150, 350, 700, 750, 1250, 1450]
            //data: [1210.0, 6000.0, 25230.0, 36650.0, 34810.0]
        },
        {
            label: "Bici/monopattini",
            type: "bar",
            backgroundColor: "#94E59C",
            borderColor: "#94E59C",
            borderWidth: 2,
            fill: true,
            xAxisID: "axis-bar",
            data: [350, 450, 500, 500, 700, 850]
            //data: [1210.0, 6000.0, 25230.0, 36650.0, 34810.0]
        },
        {
            label: "MOVE",
            type: "line",
            borderColor: "#58D064",
            borderWidth: 2,
            fill: true,
            xAxisID: "axis-bar",
            data: [150, 350, 700, 750, 1250, 1450]
            //data: [1210.0, 6000.0, 25230.0, 36650.0, 34810.0]
        }
    ]
    },

};

var myChart = new Chart(ctx, config);
var myChartWorld = new Chart(ctx, config);
//document.getElementById("legend").innerHTML = legend;