const sendMessageToContentScript = (tabId, message) => {
  chrome.tabs.sendMessage(tabId, { ...message });
};

chrome.runtime.onMessageExternal.addListener(function (
  message,
  sender,
  sendResponse
) {
  switch (message.type) {
    case "from-website":
      //todo:call contentscript.
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        sendMessageToContentScript(tabs[0].id, {
          ...message,
        });

        sendResponse(message);
      });
      break;
  }
  return true; //this has to be here and "true" if you keep using sendResponse.
});
