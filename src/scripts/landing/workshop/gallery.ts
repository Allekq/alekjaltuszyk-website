import { galleryAvailability } from "./geometry";

export const setupWorkshopGallery = () => {
  const gallery = document.querySelector<HTMLElement>(
    "[data-workshop-gallery]",
  );
  const previous = document.querySelector<HTMLButtonElement>(
    "[data-gallery-previous]",
  );
  const next = document.querySelector<HTMLButtonElement>("[data-gallery-next]");
  const controls = document.querySelector<HTMLElement>(
    "[data-gallery-controls]",
  );
  if (!gallery || !previous || !next || !controls) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const projects = [
    ...gallery.querySelectorAll<HTMLElement>(".workshop-project"),
  ];
  let frame = 0;
  const update = () => {
    frame = 0;
    const state = galleryAvailability(
      gallery.scrollLeft,
      gallery.clientWidth,
      gallery.scrollWidth,
    );
    previous.disabled = !state.previous;
    next.disabled = !state.next;
    const bounds = gallery.getBoundingClientRect();
    for (const project of projects) {
      const rect = project.getBoundingClientRect();
      const offset = Math.max(
        -1,
        Math.min(
          1,
          (rect.left + rect.width / 2 - bounds.width / 2) / bounds.width,
        ),
      );
      project.style.setProperty(
        "--project-angle",
        `${motion.matches ? 0 : offset * -8}deg`,
      );
    }
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  const step = (direction: number) => {
    const gap = parseFloat(getComputedStyle(gallery).columnGap) || 24;
    const width = projects[0]?.offsetWidth ?? gallery.clientWidth;
    gallery.scrollBy({
      left: direction * (width + gap),
      behavior: motion.matches ? "instant" : "smooth",
    });
  };
  previous.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));
  gallery.addEventListener("scroll", schedule, { passive: true });
  gallery.addEventListener("keydown", (event) => {
    if (
      event.target !== gallery ||
      !["ArrowLeft", "ArrowRight"].includes(event.key)
    )
      return;
    event.preventDefault();
    step(event.key === "ArrowLeft" ? -1 : 1);
  });
  new ResizeObserver(schedule).observe(gallery);
  motion.addEventListener("change", schedule);
  controls.hidden = false;
  update();
};
