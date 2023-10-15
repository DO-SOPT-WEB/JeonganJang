const scrollTopBtn = document.getElementById("scrollTopBtn");

function scrollFunction() {
  let scrollTotal =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTotal > 20) {
    scrollTopBtn.style.display = "block";

    let opacity = Math.min(scrollTotal / 3000, 1);
    scrollTopBtn.style.opacity = opacity;
  } else {
    scrollTopBtn.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

scrollTopBtn.addEventListener("click", function () {
  window.scroll({ top: 0 });
});
