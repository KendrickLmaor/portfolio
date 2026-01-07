document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav button");
  const sections = document.querySelectorAll(".section");

  function showSection(id) {
    sections.forEach(sec => {
      sec.classList.toggle("is-active", sec.id === `section-${id}`);
    });
    buttons.forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.section === id);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      showSection(btn.dataset.section);
    });
  });

  showSection("about");
});

