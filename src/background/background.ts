chrome.runtime.onInstalled.addListener((details) => {
    console.log("Extension has been installed")
});
chrome.bookmarks.onCreated.addListener(() => {
console.log("Bookmark has been added")
});
chrome.runtime.onMessage.addListener((msg,sender,sendResponse) => {
    console.log(msg),
    console.log(sender),
    sendResponse("Front the background script");
})
// Create a function to handle URL changes
function handleUrlChange(tabId, changeInfo, tab) {
    if (changeInfo.url) {
      const newUrl = changeInfo.url;
      console.log('URL changed:', newUrl);
    }
  }
  // Add the event listener
  chrome.tabs.onUpdated.addListener(handleUrlChange);
    
  