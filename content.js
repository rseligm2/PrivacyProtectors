const section = document.getElementById('u_0_a'); `pagelet_reminders`
var button = document.createElement("button");
var text = document.createTextNode("Ad Tracker");
button.appendChild(text);
section.appendChild(button);

var chartContainer = document.createElement('div');
chartContainer.id = 'chartContainer';

var title = document.createElement('h1');
title.id = 'title';
var titleText = document.createTextNode("Control What You See In Your Feed.");
title.appendChild(titleText);

var subtitle1 = document.createElement('h1');
subtitle1.class = "subtitles";
var subtitleText1 = document.createTextNode("Facebook's ad platform curates a personalized feed of the products and services you may enjoy using third-party data.");
subtitle1.appendChild(subtitleText1);

var subtitle2 = document.createElement('h1');
subtitle2.class = "subtitles";
var subtitleText2 = document.createTextNode("Learn what influences the ads you see and take control over your ad experience.");
subtitle2.appendChild(subtitleText2);

var footer = document.createElement('h1');
footer.id = "footer";
var footerText = document.createTextNode('To control the information that is used to deliver personalized ads, visit ');
var linkName = document.createTextNode("Your Ad Preferences");
var period = document.createTextNode(".");
var linkText = document.createElement('a');
linkText.appendChild(linkName);
linkText.href = "https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen";
footer.appendChild(footerText);
footer.appendChild(linkText)
footer.appendChild(period);

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
chartContainer.appendChild(canvas);

var link = document.createElement('link');
link.rel = "stylesheet";
link.href = 'content.css';

const chartSection = document.createElement('div');
chartSection.id = "chartSection";

chartSection.appendChild(title);
chartSection.appendChild(subtitle1);
chartSection.appendChild(subtitle2);
chartSection.appendChild(link);
chartSection.appendChild(chartContainer);
chartSection.appendChild(footer);

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
