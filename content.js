const section = document.getElementById('u_0_a'); `pagelet_reminders`
var button = document.createElement("button");
button.id = "adTrackerButton";
var text = document.createTextNode("Ad Tracker");
button.appendChild(text);
section.appendChild(button);

var backButton = document.createElement("button");
var backButtonText = document.createTextNode("Back");
backButton.appendChild(backButtonText);
backButton.id = "backButton";

var buttonContainer = document.createElement('div');
buttonContainer.id = "buttonContainer";

var todayButton = document.createElement("button");
var todayButtonText = document.createTextNode("Past 24 Hours");
todayButton.appendChild(todayButtonText);
todayButton.id = "todayButton";

var weekButton = document.createElement("button");
var weekButtonText = document.createTextNode("Past 7 Days");
weekButton.appendChild(weekButtonText);
weekButton.id = "weekButton";

var monthButton = document.createElement("button");
var monthButtonText = document.createTextNode("Past 30 Days");
monthButton.appendChild(monthButtonText);
monthButton.id = "monthButton";

buttonContainer.appendChild(todayButton);
buttonContainer.appendChild(weekButton);
buttonContainer.appendChild(monthButton);

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
chartSection.appendChild(backButton);
chartSection.appendChild(buttonContainer);
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

backButton.onclick = function(){ 
  chrome.runtime.sendMessage({greeting: "back button pressed", }, function(response) {
    console.log(response.farewell);
  });
}

todayButton.onclick = function(){ 
  chrome.runtime.sendMessage({greeting: "today button pressed", }, function(response) {
    console.log(response.farewell);
  });
}
weekButton.onclick = function(){ 
  chrome.runtime.sendMessage({greeting: "week button pressed", }, function(response) {
    console.log(response.farewell);
  });
}

monthButton.onclick = function(){ 
  chrome.runtime.sendMessage({greeting: "month button pressed", }, function(response) {
    console.log(response.farewell);
  });
}