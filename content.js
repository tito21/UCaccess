
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.clicked) {
        // add = "http://ezproxy.puc.cl/login?url="
        add = "https://pucdechile.idm.oclc.org/login?url="
        url = window.location.href
        // console.log(add + url)
        window.location.replace(add + url)
        sendResponse({})
        return true;
    }
});

window.onload = function(){
    // console.log(window.location.href)
    chrome.runtime.sendMessage({loaded: true})
}