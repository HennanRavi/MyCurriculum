document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".collapsible-header");

  headers.forEach((header) => {
    const showMoreBtn = header.querySelector(".show-more");
    const headerText = header.querySelector("strong").textContent;
    header.innerHTML = `<strong>${headerText}</strong><span class="show-more">${showMoreBtn.outerHTML}</span>`;

    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
      const showMoreBtn = this.querySelector(".show-more");
      showMoreBtn.textContent =
        content.style.display === "block" ? "Mostrar menos" : "Mostrar mais";
    });
  });

  const menuBtn = document.getElementById("menu-btn");
  const menuContent = document.getElementById("menu-content");

  menuBtn.addEventListener("click", function () {
    menuContent.classList.toggle("active");
  });
});
