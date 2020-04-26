chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
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
            chrome.tabs.executeScript({
                file: 'sampleChart.js'
            });
            sendResponse({farewell: "received"});
        }
    });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.greeting == "canvas2_loaded") {
                console.log("canvas2");
                sendResponse({farewell: "received"});
            }
    });