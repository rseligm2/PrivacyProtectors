chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
});

// chrome.tabs.onUpdated.addListener(function(id, info, tab){
//     if (tab.url.toLowerCase().indexOf("https://meganeg27.wixsite.com/") > -1){
//         chrome.pageAction.show(tab.id);
//     }
// });

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'https://www.facebook.com/'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});
