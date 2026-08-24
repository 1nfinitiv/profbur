/**
 * Счётчики Яндекс.Метрики и Google Analytics.
 * ID задаются переменными окружения VITE_YM_ID и VITE_GA_ID.
 * Инициализация — один раз на клиенте.
 */
const YM_ID = import.meta.env.VITE_YM_ID as string | undefined;
const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    ym?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  if (YM_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/tag.js";
    document.head.appendChild(s);
    window.ym =
      window.ym ||
      function (...args: unknown[]) {
        (window.ym as unknown as { a: unknown[][] }).a =
          (window.ym as unknown as { a?: unknown[][] }).a || [];
        (window.ym as unknown as { a: unknown[][] }).a.push(args);
      };
    window.ym(Number(YM_ID), "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }

  if (GA_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: unknown[]) => window.dataLayer!.push(args);
    gtag("js", new Date());
    gtag("config", GA_ID);
  }
}

/** Цель: клик по телефону / мессенджеру */
export function trackContact(kind: "phone" | "max", place: string) {
  if (typeof window === "undefined") return;
  const goal = `contact_${kind}`;
  if (YM_ID && window.ym) window.ym(Number(YM_ID), "reachGoal", goal, { place });
  if (GA_ID && window.dataLayer) window.dataLayer.push(["event", goal, { place }]);
}
