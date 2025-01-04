document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.addEventListener("mouseover", () => {
      section.style.boxShadow = "0 8px 16px rgba(255, 140, 0, 0.6)";
    });

    section.addEventListener("mouseout", () => {
      section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    });
  });
});
