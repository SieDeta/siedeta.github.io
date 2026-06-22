// ── Section loader ────────────────────────────────────
// Fetches each section's HTML file and injects it into
// the matching [data-section="..."] placeholder, then
// initialises interactive components once all sections
// are in the DOM.

const SECTIONS = [
  "about",
  "news",
  "publications",
  "experience",
  "teaching",
  "projects",
  "awards",
];

Promise.all(
  SECTIONS.map((name) =>
    fetch(`sections/${name}.html`)
      .then((res) => {
        if (!res.ok) throw new Error(`Could not load sections/${name}.html`);
        return res.text();
      })
      .then((html) => {
        const slot = document.querySelector(`[data-section="${name}"]`);
        if (slot) slot.innerHTML = html;
      })
      .catch((err) => console.error(err))
  )
).then(() => {
  initCarousels();
  initModal();
});
