export default function Van({ className = '' }) {
  return (
    <svg viewBox="0 0 460 260" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fixzzy emergency van">
      <defs>
        <linearGradient id="vanBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e7ebe8" />
        </linearGradient>
      </defs>
      <ellipse cx="230" cy="235" rx="210" ry="16" fill="#0f402a" opacity="0.08" />

      {/* Body */}
      <path d="M20 180 L20 110 C20 96 30 86 44 86 L120 86 L150 50 C156 42 166 38 176 38 L360 38 C388 38 408 58 408 86 L408 180 Z" fill="url(#vanBody)" stroke="#c7cec9" strokeWidth="2" />

      {/* Green stripe */}
      <path d="M20 150 L408 150 L408 180 L20 180 Z" fill="#15603d" />
      <path d="M20 150 L408 150 L408 158 L20 158 Z" fill="#f5a623" />

      {/* Windshield & windows */}
      <path d="M158 54 L180 86 L120 86 L145 56 C148 54 154 52 158 54 Z" fill="#bcd6e8" />
      <rect x="188" y="52" width="200" height="34" rx="6" fill="#bcd6e8" />

      {/* Logo panel */}
      <g transform="translate(56,158)">
        <circle r="16" cx="16" cy="14" fill="#ffffff" />
        <text x="16" y="19" textAnchor="middle" fontSize="16" fontWeight="800" fill="#15603d" fontFamily="Plus Jakarta Sans, sans-serif">F</text>
        <text x="42" y="20" fontSize="18" fontWeight="800" fill="#ffffff" fontFamily="Plus Jakarta Sans, sans-serif">Fizzzy</text>
      </g>

      {/* Emergency light bar */}
      <rect x="330" y="30" width="60" height="12" rx="4" fill="#e6483a" />

      {/* Wheels */}
      <circle cx="110" cy="188" r="26" fill="#20242b" />
      <circle cx="110" cy="188" r="11" fill="#8b93a1" />
      <circle cx="340" cy="188" r="26" fill="#20242b" />
      <circle cx="340" cy="188" r="11" fill="#8b93a1" />

      {/* Headlight */}
      <rect x="392" y="96" width="14" height="18" rx="4" fill="#f5a623" />
    </svg>
  );
}
