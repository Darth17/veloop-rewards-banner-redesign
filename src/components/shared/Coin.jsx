/** Gold gradients. Render inside <defs>; `id` must be unique per SVG. */
export function GoldDefs({ id }) {
  return (
    <>
      <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fbe8a6" />
        <stop offset="0.5" stopColor="#e2b455" />
        <stop offset="1" stopColor="#a8741f" />
      </linearGradient>
      <linearGradient id={`${id}-rim`} x1="1" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#8a5c14" />
        <stop offset="0.5" stopColor="#f3d27a" />
        <stop offset="1" stopColor="#b9852c" />
      </linearGradient>
    </>
  );
}

/** Gold VE coin centred on (0,0). Wrap in <g transform="translate(x y)"> to place it. */
export function Coin({ id, r = 24, label = 'VE' }) {
  return (
    <g>
      <circle r={r} fill={`url(#${id}-rim)`} />
      <circle r={r * 0.84} fill={`url(#${id}-gold)`} stroke="#fff3c4" strokeOpacity="0.55" strokeWidth={r * 0.04} />
      <circle r={r * 0.68} fill="none" stroke="#9a6b1c" strokeOpacity="0.45" strokeWidth={r * 0.04} />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        y={r * 0.04}
        fontSize={r * 0.8}
        fontWeight="800"
        fontStyle="italic"
        fill="#6b4410"
      >
        {label}
      </text>
    </g>
  );
}
