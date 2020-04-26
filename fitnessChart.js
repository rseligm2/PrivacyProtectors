var ctx = document.getElementById('myChart').getContext('2d');

var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
var newLegendClickHandler = function (e, legendItem) {};

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Chicago Marathon',
                    'Planet Fitness',
                    'BeachBody',
                    'Runners World'],
        datasets: [{
            label: 'Percentage of Ads',
            data: [10, 20, 30, 40],
            backgroundColor: [
              'rgba(31, 58, 147, 1)',
              'rgba(58, 83, 155, 1)',
              'rgba(68, 108, 179, 1)',
              'rgba(52, 152, 219, 1)',
            ],
            borderColor: [
              'rgba(31, 58, 147, 1)',
              'rgba(58, 83, 155, 1)',
              'rgba(68, 108, 179, 1)',
              'rgba(52, 152, 219, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        fontColor: "black",
        onClick: newLegendClickHandler
      },
      title: {
        display: true,
        text: "Fitness",
        fontSize: 20,
        fontColor: "black",
      },
    }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.greeting == "destroy specific chart"){
      myChart.destroy();
      console.log("specific chart destroyed");
      sendResponse({farewell: "received"});
    }
  });