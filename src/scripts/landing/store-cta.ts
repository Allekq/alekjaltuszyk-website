/**
 * Retargets the sticky header's single store pill for a two-store app.
 *
 * The header bar has exactly one CTA slot, so unlike the hero and the closing
 * panel it cannot show both stores at once. It ships with the App Store href in
 * the static HTML and this swaps it to Play on Android.
 *
 * That makes it the one store link on the page whose destination depends on
 * script — which is why it is only ever a duplicate. Every section that
 * actually sells the download renders both stores in static markup through
 * `StoreActions.astro`, so a no-JS visitor and a crawler still reach Play from
 * the same screen. Do not make this the page's only store link.
 *
 * `data-platform` comes from the inline head script in `SiteLayout.astro`.
 */
export const setupStoreCtas = () => {
  if (document.documentElement.dataset.platform !== "android") {
    return;
  }

  const ctas = document.querySelectorAll<HTMLAnchorElement>("a[data-store-cta]");

  for (const cta of ctas) {
    const playHref = cta.dataset.playHref;

    if (playHref) {
      cta.href = playHref;
    }
  }
};
