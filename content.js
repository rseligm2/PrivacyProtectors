const section = document.getElementById('u_0_a'); `pagelet_reminders`
var button = document.createElement("button");
var text = document.createTextNode("Ad Tracker");
button.appendChild(text);
section.appendChild(button);

var add = document.createElement('script');
add.src = 'node_modules/chart.js/dist/Chart.js';
document.body.appendChild(add);

var theScript = document.createElement('script');
theScript.src = "sampleChart.js";

const section2 = document.getElementById('pagelet_bluebar');

`function waitForElement(selector) {    
  return new Promise(function(resolve, reject) {         
    var element = document.querySelector(selector);         
    if(element) {             
      resolve(element);         
    }     
  }); 
}
function createScript(){
  var theScript = document.createElement('script');
  theScript.src = "sampleChart.js";
  document.body.appendChild(theScript);
}`

button.onclick = function(){
  var canvas = document.createElement("canvas");
  canvas.id = "myChart";
  canvas.width = "200";
  canvas.height = "200";
  section2.appendChild(canvas);
  `section2.appendChild(canvas);
  Promise.resolve().then(createScript());`
  document.body.appendChild(theScript);
};