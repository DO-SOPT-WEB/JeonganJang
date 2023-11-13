document.addEventListener("DOMContentLoaded", () => {
  let descriptions = document.querySelectorAll(".image-description p");

  descriptions.forEach((p) => {
    let fullText = p.textContent;
    let readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "더보기";
    readMoreBtn.className = "read-more";

    if (fullText.length > 150) {
      let shortText = fullText.substring(0, 150) + "...";
      p.textContent = shortText;

      readMoreBtn.addEventListener("click", () => {
        if (readMoreBtn.textContent === "더보기") {
          p.textContent = fullText;
          readMoreBtn.textContent = "줄이기";
        } else {
          p.textContent = shortText;
          readMoreBtn.textContent = "더보기";
        }
      });
      p.parentNode.appendChild(readMoreBtn);
    }
  });
});
