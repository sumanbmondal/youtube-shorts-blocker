chrome.tabs.onUpdated.addListener((tabId, tab, changeInfo) => {
  if (changeInfo.url.includes("youtube.com/shorts")) {
    chrome.tabs.sendMessage(tabId, {
      type: "NEW"
    });
  }
  });
  