chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, { file: "asanaFormat.js" });
});

chrome.tabs.onUpdated.addListener(function() {
  chrome.webNavigation.onCompleted.addListener(function () {
    const board = document.querySelector('.Board');
    board.classList.toggle('vl-asana-overrides');
  }, { url: [{ urlMatches: 'https://app.asana.com/*'}]});
});