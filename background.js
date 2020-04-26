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
        chrome.storage.local.get(['chart_loaded'], function(result){
            console.log('chart_loaded is ' + result.chart_loaded);
            if(!result.chart_loaded) {
                if (request.greeting == "canvas_loaded") {
                    chrome.tabs.executeScript({
                        file: 'sampleChart.js'
                    });
                    chrome.storage.local.set({chart_loaded: true}, function () {
                        console.log('chart_loaded set to ' + true)
                    });
                    sendResponse({farewell: "received"});
                }
            } else{
                    chrome.tabs.executeScript({
                        code: 'var sect = document.getElementById("chartSection");' +
                            'sect.remove();'
                    });
                    chrome.storage.local.set({chart_loaded: false}, function(){
                        console.log('chart_loaded set to ' + false)
                    });
                }
            });
    });


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.greeting == "canvas2_loaded") {
                console.log("canvas2");
                chrome.tabs.executeScript({
                    file: 'fitnessChart.js'
                });
                console.log("executedFitness");
                sendResponse({farewell: "received"});
            }
    });