chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({chart_loaded: false});
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'https://www.facebook.com/'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "canvas_loaded") {
            chrome.storage.local.get(['chart_loaded'], function (result) {
                console.log('chart_loaded is ' + result.chart_loaded);
                if (!result.chart_loaded) {
                    chrome.tabs.executeScript({
                        file: 'sampleChart.js'
                    });
                    chrome.storage.local.set({chart_loaded: true}, function () {
                        console.log('chart_loaded set to ' + true)
                    });
                    sendResponse({farewell: "received"});

                } else {
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                        chrome.tabs.sendMessage(tabs[0].id, {greeting: "destroy chart"}, function(response){
                            console.log(response.farewell);
                        });
                    });
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                        chrome.tabs.sendMessage(tabs[0].id, {greeting: "destroy specific chart"}, function(response){
                            console.log(response.farewell);
                        });
                    });
                    chrome.tabs.executeScript({
                        code: 'var sect = document.getElementById("chartSection");' +
                            'sect.remove();'
                    });
                    chrome.storage.local.set({chart_loaded: false}, function () {
                        console.log('chart_loaded set to ' + false)
                    });
                }
            });
        }
    });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "back button pressed") {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "destroy specific chart"}, function(response){
                    console.log(response.farewell);
                });
            });
            chrome.tabs.executeScript({
                file: 'sampleChart.js'
            });
            sendResponse({farewell: "received"});
        }
    }
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.greeting == "canvas2_loaded") {
                console.log("canvas2");
                console.log(request.index);
                chrome.tabs.executeScript({
                    code: 'var button = document.getElementById("backButton");' +
                        'button.style.display = "block";'
                });

                if (request.index == 0){
                    chrome.storage.local.set({chart_name: "photographyChart.js"}, function () {
                        console.log("photographyChart.js")
                    });
                }
                else if(request.index == 1){
                    chrome.storage.local.set({chart_name: "fitnessChart.js"}, function () {
                        console.log("fitnessChart.js")
                    });
                }
                else if(request.index == 2){
                    chrome.storage.local.set({chart_name: "insuranceChart.js"}, function () {
                        console.log("insuranceChart.js")
                    });
                }
                else if(request.index == 3){
                    chrome.storage.local.set({chart_name: "beautyFashionChart.js"}, function () {
                        console.log("beautyFashionChart.js")
                    });
                }
                else if(request.index == 4){
                    chrome.storage.local.set({chart_name: "vacationsChart.js"}, function () {
                        console.log("vacationsChart.js")
                    });
                }
                chrome.storage.local.get(['chart_name'], function (result) {
                    console.log("executedChart");
                    chrome.tabs.executeScript({
                        file: result.chart_name
                    });
                });
                sendResponse({farewell: "received"});
            }
    });