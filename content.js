const section = document.getElementById('u_0_a'); `pagelet_reminders`
var button = document.createElement("button");
var text = document.createTextNode("Ad Tracker");

var footer = document.createTextNode('To control the information that is used to deliver personalized ads, visit ');
footer.id = "footer";
var linkName = document.createTextNode("Your Ad Preferences");
var linkText = document.createElement('a');
linkText.appendChild(linkName);
linkText.href = "https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen";
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

var link = document.createElement('link');
link.rel = "stylesheet";
link.href = 'content.css';

const chartSection = document.createElement('div');
chartSection.id = "chartSection";
chartSection.appendChild(link);
chartSection.appendChild(canvas);
chartSection.appendChild(footer);
chartSection.appendChild(linkText);

const section2 = document.getElementById('pagelet_bluebar');

function addScript(){
  document.body.appendChild(theScript);
}

button.onclick = function(){
  section2.appendChild(chartSection);
  chrome.runtime.sendMessage({greeting: "canvas_loaded"}, function(response) {
    console.log(response.farewell);
  });
};
