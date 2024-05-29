document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".collapsible-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
      const showMoreBtn = this.querySelector(".show-more");
      showMoreBtn.textContent =
        content.style.display === "block" ? "Mostrar menos" : "Mostrar mais";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuContent = document.getElementById("menu-content");

  menuBtn.addEventListener("click", function () {
    menuContent.classList.toggle("active");
  });
});
