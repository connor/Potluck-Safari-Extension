if (window.top === window) {
  safari.self.addEventListener("message", function(event) {
    if (event.name == "embed") {
      var e = document.createElement('script');
      e.setAttribute('type','text/javascript');
      e.setAttribute('charset','UTF-8');
      e.setAttribute('src','//www.potluck.it/assets/bookmarklet.m.js');
      document.body.appendChild(e);
    }
  }, false);
}