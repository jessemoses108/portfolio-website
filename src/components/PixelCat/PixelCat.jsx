// components/PixelCat/PixelCat.jsx
export default function PixelCat() {
  return (
    <svg
      viewBox="0 0 270 195"
      width="228"
      height="153"
      role="img"
      aria-label="Illustrated pixel-art cat"
    >
      {/* Soft glow behind the cat */}
      <ellipse
        cx="137.5"
        cy="102.5"
        rx="110"
        ry="70"
        fill="var(--color-accent-blue)"
        opacity="0.15"
      />

      {/* Ears (behind body so the body's top edge overlaps them) */}
      <polygon
        points="87.5,73.5 123.5,73.5 105.5,37.5"
        fill="var(--color-accent-blue)"
      />
      <polygon
        points="161.5,73.5 197.5,73.5 179.5,37.5"
        fill="var(--color-accent-blue)"
      />

      {/* Tail — a rotated rounded square */}
      <rect
        x="8"
        y="53.5"
        width="38.6"
        height="38.6"
        rx="10"
        fill="var(--color-accent-blue)"
        transform="rotate(45 27.3 72.8)"
      />

      {/* Body */}
      <rect
        x="77.5"
        y="62.5"
        width="130"
        height="90"
        rx="24"
        fill="var(--color-accent-blue)"
      />

      {/* Decorative sparkles */}
      <path
        d="M32 22 L35 32 L45 34.5 L35 37 L32 47 L29 37 L19 34.5 L29 32 Z"
        fill="var(--color-accent-blue)"
      />
      <path
        d="M237.5 132.5 L240 140 L247.5 142.5 L240 145 L237.5 152.5 L235 145 L227.5 142.5 L235 140 Z"
        fill="var(--color-accent-blue)"
      />

      {/* Plus accent */}
      <path
        d="M215.5 20 v16 M207.5 28 h16"
        stroke="var(--color-text-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
