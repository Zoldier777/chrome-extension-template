chrome.runtime.onMessage.addListener((msg,sender,sendResponse) => {
    console.log(msg),
    console.log(sender),
    sendResponse("Front the background script");
})
function handleUrlChange(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    const newUrl = changeInfo.url;
    const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)?/;
    const domain = newUrl.match(regex);

    if (domain) {
      const extractedDomain = domain[1];
      console.log("Domain:", extractedDomain);
      chrome.storage.sync.get({ blacklist: [] }, function (result) {
        const blacklist = result.blacklist;
        if (blacklist.includes(extractedDomain)) {
          console.log('URL found in blacklist:', extractedDomain);
          chrome.tabs.update(tabId, { url: 'chrome://newtab' });
        }
      });
    }
 
  }
}

chrome.tabs.onUpdated.addListener(handleUrlChange);
