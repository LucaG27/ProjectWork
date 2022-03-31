var ctx = document.getElementById('myChart');

var config = {
    type: 'bar',
    data: {
        labels: ['1900', '1950', '2000', '2018', '2020'],
        datasets: [{
            label: "Emissioni CO2 Italia",
            type: "bar",
            backgroundColor: "#A7CA9F",
            borderColor: "#3EA824",
            borderWidth: 1,
            fill: false,
            xAxisID: "axis-bar",
            data: [130.91, 410.43, 980.49, 1209.02, 1800.82]
        },
        {
            label: "Emissioni CO2 in Europa",
            type: "bar",
            backgroundColor: "#E9BCBC",
            borderColor: "#E9BCBC",
            borderWidth: 1,
            fill: true,
            xAxisID: "axis-bar",
            data: [1950.0, 2380.0, 5550.0, 6190.0, 4950.0]
        },
       /* {
            label: "Emissioni CO2 nel Mondo",
            type: "bar",
            backgroundColor: "#E9E2BC",
            borderColor: "#E9E2BC",
            borderWidth: 1,
            fill: true,
            xAxisID: "axis-bar",
            data: [1210.0, 6000.0, 25230.0, 36650.0, 34810.0]
        }*/]
    },

};

var myChart = new Chart(ctx, config);
//var legend = myChart.generateLegend();
//document.getElementById("legend").innerHTML = legend;