var ctx = document.getElementById('myChart').getContext('2d');

var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
var newLegendClickHandler = function (e, legendItem) {};

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Photography',
                    'Fitness',
                    'Insurance',
                    'Beauty & Fashion',
                    'Vacations'],
        datasets: [{
            label: '# of Votes',
            data: [20, 35, 15, 10, 20],
            backgroundColor: [
                'rgba(31, 58, 147, 1)',
                'rgba(58, 83, 155, 1)',
                'rgba(68, 108, 179, 1)',
                'rgba(52, 152, 219, 1)',
                'rgba(137, 196, 244, 1)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      onClick:function(e){ 
        var activePoints = myChart.getElementsAtEvent(e); 
        var selectedIndex = activePoints[0]._index;
        chrome.runtime.sendMessage({greeting: "canvas2_loaded", index: selectedIndex}, function(response) {
          console.log(response.farewell);
        });
        myChart.destroy();
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        fontColor: "#666",
        onClick: newLegendClickHandler
      }
    }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.greeting == "destroy chart"){
      myChart.destroy();
    }
  });