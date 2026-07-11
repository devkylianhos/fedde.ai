export function BrandMark({ size = 28 }: { size?: number }) {
  // Ronde, vriendelijke F-badge in het nieuwe warme blauw.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="30" height="30" rx="10" fill="#2d5bff" />
      <path
        d="M11 23V9h11v3.4h-7.1v2.9h6v3.3h-6V23H11Z"
        fill="#fff"
      />
      <circle cx="25" cy="7" r="4" fill="#e89b3c" stroke="#faf6f0" strokeWidth="1.5" />
    </svg>
  );
}
