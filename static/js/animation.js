document.addEventListener("DOMContentLoaded", function () {
  const fadeElems = document.querySelectorAll(".fade-in-from-left");

  function checkPosition() {
    for (let i = 0; i < fadeElems.length; i++) {
      const elem = fadeElems[i];
      const windowHeight = window.innerHeight;
      const elemPosition = elem.getBoundingClientRect().top;

      if (elemPosition < windowHeight) {
        elem.classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", function () {
    checkPosition();
  });

  checkPosition();
});
