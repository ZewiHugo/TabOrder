// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
    var tabs = chrome.tabs.query({}, function(tabs) {
        var new_orders = _.sortBy(tabs, function(tab) {
            return tab.url
        })

        _.forEach(new_orders, function(tab, index) {
            chrome.tabs.move(tab.id, {index: index})
        })
    });
});