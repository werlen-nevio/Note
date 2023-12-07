let events = ["contextmenu", "touchstart"];
var timeout;
var lastTap = 0;
let contextMenu = document.getElementById("context-menu");

events.forEach((eventType) => {
  document.addEventListener(
    eventType,
    (e) => {
      if (e.target.closest('.element')) {
        e.preventDefault();
        let mouseX = e.clientX || e.touches[0].clientX;
        let mouseY = e.clientY || e.touches[0].clientY;
        let menuHeight = contextMenu.getBoundingClientRect().height;
        let menuWidth = contextMenu.getBoundingClientRect().width;
        let width = window.innerWidth;
        let height = window.innerHeight;

        if (width - mouseX <= 200) {
          contextMenu.style.borderRadius = "5px 0 5px 5px";
          contextMenu.style.left = width - menuWidth + "px";
          contextMenu.style.top = mouseY + "px";
          //right bottom
          if (height - mouseY <= 200) {
            contextMenu.style.top = mouseY - menuHeight + "px";
            contextMenu.style.borderRadius = "5px 5px 0 5px";
          }
        }
        //left
        else {
          contextMenu.style.borderRadius = "0 5px 5px 5px";
          contextMenu.style.left = mouseX + "px";
          contextMenu.style.top = mouseY + "px";
          //left bottom
          if (height - mouseY <= 200) {
            contextMenu.style.top = mouseY - menuHeight + "px";
            contextMenu.style.borderRadius = "5px 5px 5px 0";
          }
        }

        contextMenu.style.visibility = "visible";
      }
    },
    { passive: false }
  );
});

document.addEventListener("touchend", function (e) {
  var currentTime = new Date().getTime();
  var tapLength = currentTime - lastTap;
  clearTimeout(timeout);

  if (tapLength < 500 && tapLength > 0) {
    contextMenu.style.visibility = "hidden";
    e.preventDefault();
  } else {
    timeout = setTimeout(function () {
      clearTimeout(timeout);
    }, 500);
  }

  lastTap = currentTime;
});

document.addEventListener("click", function (e) {
  if (!contextMenu.contains(e.target) && !e.target.closest('.element')) {
    contextMenu.style.visibility = "hidden";
  }
});
