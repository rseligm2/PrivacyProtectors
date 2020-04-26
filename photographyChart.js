var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Canon',
                    'Adobe',
                    'VSCO',
                    'Sony'],
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
        fontColor: "#666",
      }
    },
    animation: {
        onComplete: function(e){
          console.log(this.chart.height);
          var xCenter = this.chart.width/2;
          var yCenter = this.chart.height/2;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          var title = "Photography: 20%"
          ctx.font = '16px sans-serif'
          ctx.fillStyle = 'black';
          ctx.fillText(title,xCenter,yCenter);
        }
      }
});