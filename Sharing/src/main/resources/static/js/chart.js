var ctx = document.getElementById('myChart');

var config = {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024','2025'],
        datasets: [{
            label: "Veicoli benzina",
            type: "bar",
            backgroundColor: "#E5A0A0",
            borderColor: "#E5A0A0",
            borderWidth: 2,
            fill: false,
            xAxisID: "axis-bar",
            data: [130.91, 75.8, 56.5, 125.61, 278.9, 345.25]
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
            data: [140.78, 220.5, 299.87, 250.78, 311.94, 405.84]
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
            data: [349.78, 299.24, 401.36, 502.23, 644.2, 650.33]
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
            data: [472.65, 324.21, 575.21, 689.39, 756.3, 879.04]
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
            data: [786.22, 793.55, 835.69, 877.44, 927.38, 980.63]
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
            data: [820.22, 860.42, 910.39, 940.78, 980.42, 996.31]
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
//var legend = myChart.generateLegend();
//document.getElementById("legend").innerHTML = legend;