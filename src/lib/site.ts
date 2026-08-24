export const PHONE_DISPLAY = "+7 912 217-26-05";
export const PHONE_RAW = "+79122172605";
export const PHONE_HREF = `tel:${PHONE_RAW}`;

/**
 * Ссылка на чат в мессенджере MAX.
 * У MAX нет публичной ссылки вида "написать по номеру телефона" (как wa.me
 * у WhatsApp) — только личная пригласительная ссылка вида https://max.ru/u/<хеш>,
 * которую нужно один раз получить в приложении (Профиль → QR-код → «Поделиться»)
 * и подставить сюда через переменную окружения VITE_MAX_URL. Пока она не задана,
 * кнопка ведёт на страницу MAX, где клиент может найти вас по номеру телефона.
 */
export const MAX_HREF = (import.meta.env.VITE_MAX_URL as string | undefined) || "https://max.ru/";
export const COMPANY = "ПрофБур";
export const WORK_HOURS = "Пн–Сб, 08:00 — 22:00";
export const SERVICE_AREA = "Нижний Тагил и Свердловская область";
export const RADIUS = "Работаем в радиусе 300 км";
export const ADDRESS = "Нижний Тагил, ул. Пархоменко, Ленинский район";
export const MIN_ORDER = "от 70 000 ₽";
export const EXPERIENCE = "Опыт более 10 лет";
export const SLOGAN_MAIN = "Профессиональное бурение скважин любой сложности";
export const SLOGAN_SECOND =
  "Монтаж автономных систем водоснабжения и отопления";
export const SLOGAN_BADGE = "Бурение малогабаритной буровой установкой";

/**
 * Домен сайта — профбур-нт.рф.
 * Это кириллический IDN-домен, а в HTML/XML (canonical, og:url, sitemap.xml,
 * JSON-LD) такие домены принято записывать в punycode (ASCII-совместимой
 * форме, начинается с "xn--") — это официальный стандарт для интернационали-
 * зированных доменов, его понимают все браузеры и поисковики. При этом в
 * адресной строке браузера и в поисковой выдаче адрес всё равно показывается
 * пользователю в привычном читаемом виде "профбур-нт.рф", а не как "xn--...".
 */
export const SITE_DOMAIN_DISPLAY = "профбур-нт.рф";
const SITE_DOMAIN_PUNYCODE = "xn----9sb1bbegcsfi.xn--p1ai";

/**
 * Абсолютный адрес сайта для canonical/OG/sitemap.
 * По умолчанию используется профбур-нт.рф (в punycode-записи для корректной
 * работы в HTML/XML). Переопределить можно переменной окружения VITE_SITE_URL,
 * если понадобится указать другой домен.
 */
export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) ??
  `https://${SITE_DOMAIN_PUNYCODE}`
).replace(/\/+$/, "");
