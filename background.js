chrome.tabs.onUpdated.addListener((tabId, tab, changeInfo) => {
  if (changeInfo.url.includes("youtube.com/shorts")) {
    chrome.tabs.update(changeInfo.id, {url: changeInfo.url.replace("shorts", "watch")});
  }
});
  
