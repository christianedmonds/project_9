
// Chart Variables
var allTraffic = document.getElementById("trafficChart");
var dailyChart = document.getElementById('dailyChart');
var mobileChart = document.getElementById('mobileChart');

//Alert box
var closeAlert = document.querySelector('.close_alert');
var alertSpan = document.querySelector('.alert');

// Traffic line Chart
var allTrafficChart = new Chart (allTraffic, {
  type: 'line',
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: ['750', '1250', '1000', '1500', '2000', '1500', '1750', '1250', '1750', '2250', '1750'],
      fill: true,
      lineTension: 0,
      borderColor: 'rgba(173, 175, 230, 1)',
      backgroundColor: 'rgba(226, 227, 245, 0.5)',
      }]
    },

  options: {
      legend: {
        display: false
      },
      scales: {
          yAxes: [{
              ticks: {
                max: 2500,
                min: 500,
                stepSize: 500
              }
          }]
      }
    }
});

// Daily bar Chart

var dailyChart = new Chart(dailyChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Votes',
            data: [75, 100, 175, 125, 225, 200, 100],
            lineTension: 20,
            backgroundColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)'
            ],
            borderColor: [
              'rgba(115, 119, 191, 1)',
              'rgba(115, 119, 191, 1)',
              'rgba(115, 119, 191, 1)',
              'rgba(115, 119, 191, 1)',
              'rgba(115, 119, 191, 1)',
              'rgba(115, 119, 191, 1)',
              'rgba(115, 119, 191, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
          yAxes: [{
              ticks: {
                max: 250,
                min: 50,
                stepSize: 50
              }
          }]
      }
    }
});

//Mobile Chart

var mobileChart = new Chart(mobileChart, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [
        {
            data: [15, 15, 70],
            backgroundColor: [
                "#74B1BF",
                "#81C98F",
                "#7377BF"
            ],
            hoverBackgroundColor: [
                "#74B1BF",
                "#81C98F",
                "#7377BF"
            ]
        }]
}
});

// Functionality for closing alert box

closeAlert.addEventListener ('click', closeBox);

 function closeBox() {
  alertSpan.style.display = "none";
}
