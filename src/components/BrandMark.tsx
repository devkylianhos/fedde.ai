export function BrandMark({ size = 26 }: { size?: number }) {
  // Abstract blue "agent" spark — same visual weight as the inspiration's mark,
  // built as pure SVG so it needs no generated image.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fedde-g" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0088FF" />
          <stop offset="1" stopColor="#006DCC" />
        </linearGradient>
      </defs>
      <path
        d="M16 3c1.6 4.7 4.3 7.4 9 9-4.7 1.6-7.4 4.3-9 9-1.6-4.7-4.3-7.4-9-9 4.7-1.6 7.4-4.3 9-9Z"
        fill="url(#fedde-g)"
      />
      <circle cx="24.5" cy="24.5" r="3.5" fill="#0088FF" />
    </svg>
  );
}
