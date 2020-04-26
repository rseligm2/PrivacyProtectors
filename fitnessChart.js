var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Chicago Marathon',
                    'Planet Fitness',
                    'BeachBody',
                    "Runner's World"],
        datasets: [{
            label: 'Percentage of Ads',
            data: ['10%', '20%', '30%', '40%'],
            backgroundColor: [
                'rgba(31, 58, 147, 1)',
                'rgba(58, 83, 155, 1)',
                'rgba(68, 108, 179, 1)',
                'rgba(52, 152, 219, 1)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        fontColor: "#666",
      },
      onClick:function(e){
        var activePoints = myChart.getElementsAtEvent(e);
        var selectedIndex = activePoints[0]._index;
        });
      }
    }
});
