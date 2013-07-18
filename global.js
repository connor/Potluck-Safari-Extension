safari.application.addEventListener("command", function(event) {
  if (event.command == "toolbar") {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("embed", null);
  }
}, false);