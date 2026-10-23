import { objectAnimations } from "./object-animations";

export function setupProjectMotion() {
  const objects = [
    ...document.querySelectorAll<HTMLElement>("[data-project-object]"),
  ];
  if (!objects.length) return;
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  const states = objects.map((element) => ({
    element,
    visible: false,
    animations: [] as ReturnType<typeof objectAnimations>,
  }));
  const events = new AbortController(),
    { signal } = events;
  const update = () => {
    states.forEach((state) => {
      const playing = state.visible && !document.hidden && !media.matches;
      if (state.visible && !state.animations.length && !media.matches)
        state.animations = objectAnimations(state.element);
      state.animations.forEach((animation) => {
        if (media.matches) {
          animation.pause();
          if ("currentTime" in animation) animation.currentTime = 0;
          else animation.reset();
        } else if (playing) animation.play();
        else animation.pause();
      });
    });
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const state = states.find((s) => s.element === entry.target);
        if (state) state.visible = entry.isIntersecting;
      });
      update();
    },
    { threshold: 0.1 },
  );
  objects.forEach((element) => observer.observe(element));
  media.addEventListener("change", update, { signal });
  document.addEventListener("visibilitychange", update, { signal });
  addEventListener("pageshow", update, { signal });
  addEventListener(
    "pagehide",
    (event) => {
      states.forEach((s) => s.animations.forEach((a) => a.pause()));
      if (!event.persisted) {
        observer.disconnect();
        events.abort();
        states.forEach((s) => s.animations.forEach((a) => a.cancel()));
      }
    },
    { signal },
  );
  update();
}
