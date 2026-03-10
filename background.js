console.log("Background script ----start----");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action == "processText") {

        setTimeout(() => {
            const result = request.text;
            // return sendResponse({result});
            sendResponse({result});
        }, 1000);
        
        return true;
    }
});

console.log("Background script ----end----");
