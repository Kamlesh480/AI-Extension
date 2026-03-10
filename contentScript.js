console.log('Content script --start--');

document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey ) && event.key === "k" ) {
        event.preventDefault();

        const selectedText = window.getSelection().toString();
        if (!selectedText) return;

        chrome.runtime.sendMessage(
            { action: "processText", text: selectedText },
            (response) => {
                showOverlay(response.result);
            }
        )
    }
})

function showOverlay(text) {
    console.log("*****inside showOverlay fucntion");
    console.log(text);

    const overlay = document.createElement("div");
    overlay.style.background = "black";
    overlay.style.color = "white";
    overlay.style.zIndex = "999";
    overlay.style.padding = "16px";
    overlay.style.position = "fixed";
    overlay.style.top = "150px";
    overlay.style.right = "20px";
    overlay.innerText = text;
    document.body.appendChild(overlay);

    console.log("*****inside showOverlay fucntion");
}

console.log('Content script --end--');
