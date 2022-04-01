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
            data: [22.91, 75.8, 56.5, 125.61, 278.9, 345.25]
           //data: [130.91, 410.43, 980.49, 1209.02, 1800.82]
        },
        {
            label: "Veicoli diesel",
            type: "bar",
            backgroundColor: "#E9BCBC",
            borderColor: "#E9BCBC",
            borderWidth: 1,
            fill: true,
            xAxisID: "axis-bar",
            data: [27.66, 120.5, 199.87, 250.78, 311.94, 355.84]
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
            data: [109.78, 199.24, 201.36, 302.23, 444.2, 550.33]
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
            data: [272.65, 324.21, 511.21, 589.39, 566.3, 879.04]
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
            data: [188.22, 293.55, 435.69, 577.44, 619.38, 780.63]
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
            data: [420.22, 560.42, 610.39, 840.78, 890.42, 1096.31]
            //data: [1210.0, 6000.0, 25230.0, 36650.0, 34810.0]
        },
        {
            label: "MOVE",
            type: "line",
            borderColor: "#58D064",
            borderWidth: 2,
            fill: true,
            xAxisID: "axis-bar",
            data: [100, 200, 400, 600, 800, 1200]
            //data: [1210.0, 6000.0, 25230.0, 36650.0, 34810.0]
        }
    ]
    },

};

var myChart = new Chart(ctx, config);
var myChartWorld = new Chart(ctx, config);
//document.getElementById("legend").innerHTML = legend;