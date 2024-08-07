const contextMenu = document.getElementById("context-menu");

window.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  contextMenu.style.left = event.pageX + "px";
  contextMenu.style.top = event.pageY + "px";
  contextMenu.style.display = "block";

  window.addEventListener(
    "click",
    function () {
      contextMenu.style.display = "none";
    },
    { once: true }
  );
});

// document.getElementById("menu-item-1").addEventListener("click", function() {
//     alert("Custom Action 1 clicked!");
//     contextMenu.style.display = "none";
// });
//
// document.getElementById("menu-item-2").addEventListener("click", function() {
//     alert("Custom Action 2 clicked!");
//     contextMenu.style.display = "none";
// });
