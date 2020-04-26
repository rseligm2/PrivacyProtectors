var ctx = document.getElementById('myChart').getContext('2d');

var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
var newLegendClickHandler = function (e, legendItem) {
    var index = legendItem.datasetIndex;
    var ci = this.chart;
    var meta = ci.getDatasetMeta(index);

    // See controller.isDatasetVisible comment
    //meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

    // We hid a dataset ... rerender the chart
    //ci.update();
};

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
      onClick:function(e){
        var activePoints = myChart.getElementsAtEvent(e);
        var selectedIndex = activePoints[0]._index;
        myChart.destroy();
        chrome.runtime.sendMessage({greeting: "canvas2_loaded"}, function(response) {
          console.log(response.farewell);
        });
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        fontColor: "#666",
        onClick: newLegendClickHandler
      }
    }
});
