document.addEventListener("DOMContentLoaded", () => {
  let scrollContainer = document.querySelector(".group");
  let scrollLeftBtn = document.getElementById("scrollLeftBtn");
  let scrollRightBtn = document.getElementById("scrollRightBtn");

  scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 2000;
  });

  scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 2000;
  });
});
