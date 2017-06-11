// React when a browser action's icon is clicked.
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("reorder").addEventListener("click", function() {
        var tabs = chrome.tabs.query({}, function (tabs) {
            var new_orders = _.sortBy(tabs, function (tab) {
                return tab.url
            });

            _.forEach(new_orders, function (tab, index) {
                chrome.tabs.move(tab.id, { index: index })
            });
        });
    });

    document.getElementById("closedup").addEventListener("click", function() {
        var tabs = chrome.tabs.query({}, function (tabs) {
            var tabmap = {};
            _.forEach(tabs, function(tab, index) {
                if (tabmap[tab.url] === undefined) {
                    tabmap[tab.url] = 1;
                }
                else {
                    chrome.tabs.remove(tab.id);
                }
            });
        });
    });
});