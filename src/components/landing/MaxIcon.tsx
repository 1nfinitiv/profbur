/**
 * Иконка мессенджера MAX: скруглённый квадрат с фирменным градиентом
 * (синий → фиолетовый) и белым контуром диалогового облачка с хвостиком —
 * узнаваемый стиль иконки MAX, без использования чужого файла логотипа.
 */
export function MaxIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="max-icon-gradient" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0" stopColor="#471AFF" />
          <stop offset="1" stopColor="#9500FF" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#max-icon-gradient)" />
      <rect
        x="6.2"
        y="6.5"
        width="11.6"
        height="8.6"
        rx="4.3"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <path d="M8.6 14.6 L7.1 17.6 L9.9 15.2 Z" fill="#fff" />
    </svg>
  );
}
