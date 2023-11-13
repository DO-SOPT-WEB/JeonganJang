const imageDescriptions = document.querySelectorAll(".image-description");

imageDescriptions.forEach((description) => {
  description.parentElement.addEventListener("mouseenter", function () {
    // 마우스가 요소 위로 올라오면 설명을 표시
    description.style.opacity = "1";
  });

  description.parentElement.addEventListener("mouseleave", function () {
    description.style.opacity = "0";
  });
});
