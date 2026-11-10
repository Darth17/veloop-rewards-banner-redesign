/** Faceted gem, centred on (0,0), about 68 x 62 units. Muted purples (no neon). */
export function GemShape() {
  return (
    <g strokeLinejoin="round" stroke="#2a1a70" strokeWidth="0.6" strokeOpacity="0.6">
      <polygon points="-20,-26 -34,-6 -10,-6" fill="#cdbdff" />
      <polygon points="-20,-26 20,-26 10,-6 -10,-6" fill="#e9e1ff" />
      <polygon points="20,-26 34,-6 10,-6" fill="#a98bff" />
      <polygon points="-34,-6 -10,-6 0,36" fill="#8663f0" />
      <polygon points="-10,-6 10,-6 0,36" fill="#a07df7" />
      <polygon points="10,-6 34,-6 0,36" fill="#5f3fc9" />
    </g>
  );
}

/** Standalone small gem for HTML contexts (flow chips). */
export function GemIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="-40 -32 80 76" aria-hidden="true" focusable="false">
      <GemShape />
    </svg>
  );
}
