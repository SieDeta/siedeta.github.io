// ── Follow button dropdown (sidebar mobile) ───────────
const followBtn    = document.getElementById("followBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

followBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!dropdownMenu.contains(e.target) && e.target !== followBtn) {
    dropdownMenu.classList.add("hidden");
  }
});

// ── Burger menu (navbar mobile) ───────────────────────
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const burgerIcon = document.getElementById("burgerIcon");
const closeIcon  = document.getElementById("closeIcon");

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
  burgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
}

burgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = !mobileMenu.classList.contains("hidden");
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove("hidden");
    burgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
});

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (e) => {
  if (
    !mobileMenu.contains(e.target) &&
    e.target !== burgerBtn &&
    !burgerBtn.contains(e.target)
  ) {
    closeMobileMenu();
  }
});
