chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("PRINTED BY ContentScript", { message, sender, sendResponse });
});
