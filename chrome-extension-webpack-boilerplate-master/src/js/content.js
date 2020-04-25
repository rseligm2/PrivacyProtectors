var canvas = document.createElement("canvas");
canvas.id = "myChart";
canvas.width = "400";
canvas.height = "400";
const section = document.getElementById('u_0_a'); `pagelet_reminders`
var button = document.createElement("button");
var text = document.createTextNode("Ad Tracker");
var add = document.createElement('script');
document.body.appendChild(add);
var theScript = document.createElement('script');
theScript.src = "sampleChart.js";
button.onclick = function(){
    document.body.appendChild(canvas);
    document.body.appendChild(theScript);
};
button.appendChild(text);
section.appendChild(button);