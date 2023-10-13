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
      // pattern for matching as wellas filtering subdir   
      const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)?/
      const domain= newUrl.match(regex)
      if (domain) {
        const extractedDomain = domain[1];
        console.log("Domain:", extractedDomain);
        console.log(domain)
      };
      console.log('URL changed:', newUrl);
    }
  }
  // Callback when you create or update the current tab.
  chrome.tabs.onUpdated.addListener(handleUrlChange);