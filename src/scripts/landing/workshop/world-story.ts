import { buildProgress, buildScrollProgress } from "./geometry";

/** The desktop stage and the phone's scene use native sticky positioning. No scroll interception. */
export function worldStory(element: HTMLElement) {
  const story = element.closest<HTMLElement>("[data-world-story]")!;
  const stage = story.querySelector<HTMLElement>(".workshop-hero__stage")!;
  const track = story.querySelector<HTMLElement>("[data-world-track]")!;
  const exhibit = story.querySelector<HTMLElement>(".workshop-hero__exhibit")!;
  const guide = story.querySelector<HTMLElement>("[data-world-guide]")!;
  const status = story.querySelector<HTMLElement>("[data-world-status]")!;
  const cue = story.querySelector<HTMLElement>(".workshop-world__scroll")!;
  const steps = [...story.querySelectorAll<HTMLElement>("[data-build-step]")];
  const compact = matchMedia("(max-width: 48rem)");
  const still = matchMedia(
    "(prefers-reduced-motion: reduce), (max-height: 540px)",
  );
  const messages = [
    "Start with a little possibility.",
    "Give it somewhere to go.",
    "Build somewhere worth the journey.",
    "Now it feels like a world.",
  ];
  let phase = -1;
  return {
    enable() {
      story.classList.add("is-world-ready");
      guide.hidden = false;
    },
    progress() {
      if (still.matches) return 1;
      const bounds = (compact.matches ? track : story).getBoundingClientRect();
      const scene = (compact.matches ? exhibit : stage).getBoundingClientRect();
      return buildScrollProgress(bounds.top, bounds.height, scene.height);
    },
    replay() {
      if (still.matches || this.progress() < 0.98) return false;
      const start =
        (compact.matches ? track : story).getBoundingClientRect().top + scrollY;
      scrollTo({ top: start, behavior: "smooth" });
      return true;
    },
    update(progress: number, action: number) {
      const p = buildProgress(progress, action, still.matches);
      const next = p < 0.16 ? 0 : p < 0.4 ? 1 : p < 0.78 ? 2 : 3;
      if (next !== phase) {
        phase = next;
        status.textContent = messages[phase];
        steps.forEach((step, index) => {
          step.classList.toggle("is-built", index <= phase);
          step.classList.toggle("is-current", index === phase);
        });
      }
      const button = element.querySelector<HTMLButtonElement>("button")!;
      button.hidden = still.matches;
      cue.textContent = p >= 0.98 ? "Keep exploring ↓" : "Scroll to build ↓";
      const canReplay = progress >= 0.98 && action < 0.001;
      if (canReplay) button.removeAttribute("aria-pressed");
      else button.setAttribute("aria-pressed", String(action > 0.5));
      button.querySelector("[data-action-label]")!.textContent =
        action > 0.5
          ? "Follow the scroll"
          : canReplay
            ? "Build it again"
            : "Finish the world";
    },
    fallback() {
      story.classList.remove("is-world-ready");
      guide.hidden = true;
    },
  };
}
