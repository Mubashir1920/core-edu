// lib/gtag.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const pageview = (url) => {
  if (!GA_MEASUREMENT_ID) return;
  // For GA4 we send page_view as an event
  window.gtag?.("event", "page_view", { page_path: url });
};

/**
 * Generic event helper.
 * Example: event({ action: 'signup', category: 'engagement', label: 'header_cta', value: 1 })
 */
export const event = ({ action, category, label, value }) => {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
