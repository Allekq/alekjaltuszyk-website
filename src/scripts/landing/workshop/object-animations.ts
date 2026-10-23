import { createStoryTree } from "./story-tree";
/** Compositor animations for decorative app studies; no app simulation or visitor data. */
export function objectAnimations(object: HTMLElement) {
  const animations: (Animation | ReturnType<typeof createStoryTree>)[] = [];
  const animate = (
    selector: string,
    frames: Keyframe[],
    seconds: number,
    delay = 0,
  ) => {
    object
      .querySelectorAll<HTMLElement | SVGElement>(selector)
      .forEach((element) => {
        const animation = element.animate(frames, {
          duration: seconds * 1000,
          iterations: Infinity,
          easing: "ease-in-out",
          delay: delay * 1000,
          fill: "both",
        });
        animation.pause();
        animations.push(animation);
      });
  };
  const id = object.dataset.projectObject;
  if (id === "plankept") {
    animate(
      ".plan-progress i",
      [
        { transform: "scaleX(.12)" },
        { transform: "scaleX(.12)", offset: 0.12 },
        { transform: "scaleX(1)", offset: 0.48 },
        { transform: "scaleX(1)", offset: 0.85 },
        { transform: "scaleX(.12)" },
      ],
      14,
    );
    animate(
      ".plan-check",
      [
        { opacity: 0.18, transform: "scale(.92)" },
        { opacity: 0.18, transform: "scale(.92)", offset: 0.4 },
        { opacity: 1, transform: "scale(1.12)", offset: 0.5 },
        { opacity: 1, transform: "scale(1)", offset: 0.57 },
        { opacity: 1, transform: "scale(1)", offset: 0.85 },
        { opacity: 0.18, transform: "scale(.92)" },
      ],
      14,
    );
    animate(
      ".plan-sheet--middle",
      [
        { transform: "translate3d(13px,-13px,-25px)" },
        { transform: "translate3d(13px,-13px,-25px)", offset: 0.55 },
        { transform: "translate3d(20px,-28px,-25px)", offset: 0.68 },
        { transform: "translate3d(13px,-13px,-25px)", offset: 0.85 },
        { transform: "translate3d(13px,-13px,-25px)" },
      ],
      14,
    );
    animate(
      ".plan-sheet--back",
      [
        { transform: "translate3d(26px,-26px,-50px)" },
        { transform: "translate3d(26px,-26px,-50px)", offset: 0.58 },
        { transform: "translate3d(35px,-43px,-50px)", offset: 0.72 },
        { transform: "translate3d(26px,-26px,-50px)", offset: 0.9 },
        { transform: "translate3d(26px,-26px,-50px)" },
      ],
      14,
    );
  }
  if (id === "voice-of-self") {
    animate(
      ".voice-object__speech",
      [
        { opacity: 0, transform: "translate3d(0,8px,40px) scale(.8)" },
        {
          opacity: 0,
          transform: "translate3d(0,8px,40px) scale(.8)",
          offset: 0.25,
        },
        {
          opacity: 1,
          transform: "translate3d(0,0,40px) scale(1)",
          offset: 0.31,
        },
        {
          opacity: 1,
          transform: "translate3d(0,-3px,40px) scale(1)",
          offset: 0.56,
        },
        {
          opacity: 0,
          transform: "translate3d(0,-8px,40px) scale(.95)",
          offset: 0.64,
        },
        { opacity: 0 },
      ],
      18,
    );
    object
      .querySelectorAll<HTMLElement>(".voice-object__bars i")
      .forEach((bar, i) => {
        const animation = bar.animate(
          [
            { scale: "1 1" },
            { scale: `1 ${0.7 + (i % 3) * 0.15}` },
            { scale: "1 1" },
          ],
          {
            duration: 3600 + i * 170,
            iterations: Infinity,
            easing: "ease-in-out",
          },
        );
        animation.pause();
        animations.push(animation);
      });
  }
  if (id === "take-me-somewhere") {
    object
      .querySelectorAll<SVGElement>(".map-object__place")
      .forEach((map, i) => {
        const animation = map.animate(
          [
            { opacity: 1, offset: 0 },
            { opacity: 1, offset: 0.28 },
            { opacity: 0, offset: 0.33 },
            { opacity: 0, offset: 0.95 },
            { opacity: 1, offset: 1 },
          ],
          { duration: 27000, delay: -i * 9000, iterations: Infinity },
        );
        animation.pause();
        animations.push(animation);
      });
    animate(
      ".map-route",
      [{ strokeDashoffset: "0" }, { strokeDashoffset: "-54" }],
      9,
    );
    animate(
      ".map-object__pin",
      [
        { translate: "0 0" },
        { translate: "0 0", offset: 0.78 },
        { translate: "0 -9px", offset: 0.89 },
        { translate: "0 0" },
      ],
      9,
    );
  }
  if (id === "audio-book-choices") animations.push(createStoryTree(object));
  if (id === "overlit") {
    // The actual core loop: cells light up, then a tap clears that active cell.
    // A long, shuffled demonstration, not clickable pretend gameplay.
    const order = [
      2, 9, 5, 14, 0, 11, 6, 15, 3, 8, 13, 1, 10, 4, 12, 7, 5, 11, 1, 8, 14, 3,
      10, 6, 0, 13, 7, 2, 15, 4, 9, 12,
    ];
    object.querySelectorAll<HTMLElement>(".arcade-key").forEach((key, cell) => {
      key.classList.remove("arcade-key--lit");
      const dark = {
        background: "#2a3c30",
        borderColor: "#526953",
        transform: "translateZ(6px)",
        boxShadow: "0 5px 0 #111c15",
      };
      const lit = {
        background: "#b5d778",
        borderColor: "#d6eea2",
        transform: "translateZ(6px)",
        boxShadow: "0 5px 0 #63853f,0 0 18px #c1e47530",
      };
      const frames: Keyframe[] = [{ ...dark, offset: 0 }];
      order.forEach((index, step) => {
        if (index !== cell) return;
        const at = 1 + step * 2.6;
        frames.push(
          { ...dark, offset: at / 88 },
          { ...lit, offset: (at + 0.3) / 88 },
          { ...lit, offset: (at + 1.5) / 88 },
          { ...lit, transform: "translateZ(0px)", offset: (at + 1.68) / 88 },
          { ...dark, transform: "translateZ(1px)", offset: (at + 1.85) / 88 },
          { ...dark, offset: (at + 2.1) / 88 },
        );
      });
      frames.push({ ...dark, offset: 1 });
      const animation = key.animate(frames, {
        duration: 88000,
        iterations: Infinity,
        easing: "linear",
        fill: "both",
      });
      animation.pause();
      animations.push(animation);
    });
  }
  return animations;
}
