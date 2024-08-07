document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor__pointer");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  document.getElementById("custom-cursor").style.display = "none";
}
