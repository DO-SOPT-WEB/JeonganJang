document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  function scrollFunction() {
    let scrollTotal =
      document.body.scrollTop || document.documentElement.scrollTop;

    const threshold = 20;
    const maxScrollValue = 3000;

    if (scrollTotal > threshold) {
      scrollTopBtn.style.display = "block";
      let opacity = Math.min(scrollTotal / maxScrollValue, 1);
      scrollTopBtn.style.opacity = opacity;
    } else {
      scrollTopBtn.style.display = "none";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scroll({ top: 0 });
  });
});
