chrome.runtime.onMessage.addListener(((o,n,e)=>{console.log(o),console.log(n),e("Front the background script")})),chrome.tabs.onUpdated.addListener((function(o,n,e){if(n.url){const e=/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)?/,t=n.url.match(e);if(t){const n=t[1];console.log("Domain:",n),chrome.storage.sync.get({blacklist:[]},(function(e){e.blacklist.includes(n)&&(console.log("URL found in blacklist:",n),chrome.tabs.update(o,{url:"chrome://newtab"}))}))}}}));
//# sourceMappingURL=background.js.map