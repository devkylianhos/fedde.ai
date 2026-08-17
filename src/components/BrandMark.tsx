/* Tibbe-merkteken: drie b-lettervormen om één as (0/120/240 graden).
   Nooit vervormen, kantelen, van schaduw/glans voorzien of hertekenen.
   Kleur via `color`-prop: kobalt op licht, kobalt-licht op donker. */
export function BrandMark({
  size = 28,
  color = "#2B5FD9",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <g id="tibbe-b">
          <rect x="43" y="4" width="9" height="36" />
          <path
            fillRule="evenodd"
            d="M52 16h8a12 12 0 0 1 0 24h-8zM52 23h8a5 5 0 0 1 0 10h-8z"
          />
        </g>
        <use href="#tibbe-b" transform="rotate(120 48 48)" />
        <use href="#tibbe-b" transform="rotate(240 48 48)" />
      </g>
    </svg>
  );
}
