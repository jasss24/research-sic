document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.addEventListener("mouseover", () => {
      section.style.boxShadow = "0 10px 16px rgba(65, 64, 63, 0.6)";
    });

    section.addEventListener("mouseout", () => {
      section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    });
  });
});
