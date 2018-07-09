function sendMsg(tabs) {
    msg = {
        "clicked": true
    }
    chrome.tabs.sendMessage(tabs[0].id, msg)
}

let queryParms = {
    active: true,
    currentWindow: true
}

chrome.tabs.query(queryParms, sendMsg)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.loaded) {
        window.close()
    }
})
