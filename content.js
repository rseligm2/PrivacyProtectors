let chart = `
    <div>
        <script src="node_modules/chart.js/dist/Chart.js"></script>
        <canvas id="piechart" width="400" height="400"></canvas>
        <script>
        var ctx = document.getElementById(piechart);
        const piechart = new Chart(ctx, {
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
            options: options
        });
        </script>
    </div>`
;

`let test = document.createElement('h2');
const section = document.getElementById('mp-tfa-h2');
var clean = DOMPurify.sanitize(test);
section.append(test);`

const section = document.getElementById('u_0_a'); `pagelet_reminders`
var button = document.createElement("button");
var text = document.createTextNode("Ad Tracker");
button.appendChild(text);
section.appendChild(button);
