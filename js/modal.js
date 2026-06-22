// ── Project description modal ─────────────────────────
// Called by loader.js after section HTML is injected.
function initModal() {
  const projectModal = document.getElementById("projectModal");
  const modalTitle   = document.getElementById("modalTitle");
  const modalCC      = document.getElementById("modalCC");
  const modalLinks   = document.getElementById("modalLinks");
  const modalDesc    = document.getElementById("modalDesc");

  // Exposed globally so inline onclick handlers in section HTML can call it.
  window.openProjectModal = function (card) {
    modalTitle.textContent = card.dataset.title;
    modalCC.innerHTML      = card.dataset.cc    || "";
    modalLinks.innerHTML   = card.dataset.links || "";
    modalDesc.textContent  = card.dataset.desc  || "";
    projectModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  function closeProjectModal() {
    projectModal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.getElementById("modalCloseBtn").addEventListener("click", closeProjectModal);

  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}
