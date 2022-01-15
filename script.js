// create a context Menu
chrome.contextMenus.create({
    title: "to QR: %s",
    contexts: ["selection"],
    onclick: getword
})

// Get the selected word
function getword(info, tab) {
    console.log("Word" + info.selectionText);
    // open a new tab with the qr code
    chrome.tabs.create({
        url: "https://api.qrserver.com/v1/create-qr-code/?data=" + info.selectionText + "&amp;size=100x100"
    });
}