var ctx = document.getElementById('myChart').getContext('2d');
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
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Control What You See In Your Feed',
        fontStyle: "bold",
        fontSize: 24,
        fontColor: "#000",
        padding: 20
      },
      legend: {
        fontColor: "#666"
      }
    }
});
