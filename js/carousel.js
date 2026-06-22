// ── Image / video carousel ────────────────────────────
// Called by loader.js after section HTML is injected.
function initCarousels() {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const track  = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);   // supports img, video, or any element
    const total  = slides.length;
    let current  = 0;

    if (total <= 1) return;

    // Prev button
    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn carousel-prev";
    prevBtn.setAttribute("aria-label", "Previous");
    prevBtn.innerHTML = "&#8249;";

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn carousel-next";
    nextBtn.setAttribute("aria-label", "Next");
    nextBtn.innerHTML = "&#8250;";

    // Dot indicators
    const dotsWrap = document.createElement("div");
    dotsWrap.className = "carousel-dots";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dotsWrap.appendChild(dot);
    });

    carousel.append(prevBtn, nextBtn, dotsWrap);
    const dots = Array.from(dotsWrap.children);

    function pauseVideoIn(index) {
      const el = slides[index];
      const vid = el.tagName === "VIDEO" ? el : el.querySelector("video");
      if (vid) vid.pause();
    }

    function goTo(index) {
      pauseVideoIn(current);
      current = ((index % total) + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === current));
    }

    prevBtn.addEventListener("click", (e) => { e.stopPropagation(); goTo(current - 1); });
    nextBtn.addEventListener("click", (e) => { e.stopPropagation(); goTo(current + 1); });
    dots.forEach((dot, i) =>
      dot.addEventListener("click", (e) => { e.stopPropagation(); goTo(i); })
    );
  });
}
