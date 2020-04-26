const section = document.getElementById('u_0_a'); `pagelet_reminders`
var button = document.createElement("button");
var text = document.createTextNode("Ad Tracker");
button.appendChild(text);
section.appendChild(button);

const add = document.createElement('script');
add.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js';
document.head.appendChild(add);

const theScript = document.createElement('script');
theScript.src = "sampleChart.js";

const canvas = document.createElement("canvas");
canvas.id = "myChart";
canvas.width = "400";
canvas.height = "400";
canvas.addEventListener("load", addScript);

const chartSection = document.createElement('div');
chartSection.appendChild(canvas);
`chartSection.appendChild(theScript);`

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

function addScript(){
  document.body.appendChild(theScript);
}

button.onclick = function(){
  section2.appendChild(chartSection);
  chrome.runtime.sendMessage({greeting: "canvas_loaded"}, function(response) {
    console.log(response.farewell);
  });
  `section2.appendChild(canvas);
  Promise.resolve().then(createScript());`
};
