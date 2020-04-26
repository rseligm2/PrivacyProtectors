var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Sephora',
                    'Forever 21',
                    'Ulta',
                    'Old Navy'],
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
      },
      title: {
        display: true,
        text: "Beauty & Fashion",
        fontSize: 30,
        fontStyle: "normal",
        fontColor: "black",
      }
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