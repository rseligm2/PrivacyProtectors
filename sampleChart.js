var ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [20, 35, 15, 10, 20]
                }],
        
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Photography',
                    'Fitness',
                    'Insurance',
                    'Beauty & Fashion',
                    'Vacations'
                ],
                backgroundColor: [
                    'rgb(0,255,255)',
                    'rgb(25,25,112)',
                    'rgb(44,186,222)',
                    'rgb(0,128,255)',
                    'rgb(0, 153,153)'
                ]
            },
            options:{}
        });