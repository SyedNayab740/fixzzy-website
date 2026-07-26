export default function EmergencyTechnician({ className = '' }) {
  return (
    <svg viewBox="0 0 380 520" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fixzzy emergency technician">
      <defs>
        <linearGradient id="polo2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c7a4d" />
          <stop offset="100%" stopColor="#0f402a" />
        </linearGradient>
        <linearGradient id="skin2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c98a5e" />
          <stop offset="100%" stopColor="#b87748" />
        </linearGradient>
      </defs>

      {/* Legs */}
      <rect x="130" y="400" width="46" height="110" rx="14" fill="#20242b" />
      <rect x="196" y="400" width="46" height="110" rx="14" fill="#20242b" />

      {/* Torso */}
      <path d="M110 220 C110 192 138 174 186 174 C234 174 262 192 262 220 L270 410 C270 428 252 438 234 438 L138 438 C120 438 102 428 102 410 Z" fill="url(#polo2)" />

      {/* Reflective sash */}
      <path d="M120 200 L260 400" stroke="#f5a623" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
      <path d="M120 200 L260 400" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 8" opacity="0.9" />

      {/* Logo */}
      <g transform="translate(158,214)">
        <circle r="15" fill="#ffffff" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="800" fill="#15603d" fontFamily="Plus Jakarta Sans, sans-serif">F</text>
      </g>

      {/* Arm crossed with wrench */}
      <path d="M108 240 C76 258 64 296 82 332 C92 350 116 362 142 360 L148 334 C126 332 110 320 104 306 C96 288 104 270 128 258 Z" fill="url(#polo2)" />
      <path d="M264 240 C296 258 308 296 290 332 C280 350 256 362 230 360 L224 334 C246 332 262 320 268 306 C276 288 268 270 244 258 Z" fill="url(#polo2)" />
      <ellipse cx="140" cy="338" rx="20" ry="13" fill="url(#skin2)" />
      <ellipse cx="232" cy="338" rx="20" ry="13" fill="url(#skin2)" />
      <rect x="150" y="326" width="60" height="12" rx="4" fill="#8b93a1" transform="rotate(6 180 332)" />

      {/* Neck */}
      <rect x="168" y="158" width="32" height="30" rx="9" fill="url(#skin2)" />

      {/* Head */}
      <ellipse cx="186" cy="134" rx="42" ry="46" fill="url(#skin2)" />

      {/* Beard */}
      <path d="M146 132 C144 166 162 184 186 186 C210 184 228 166 226 132 C226 150 212 162 186 164 C160 162 146 150 146 132 Z" fill="#241b14" />

      {/* Smile */}
      <path d="M166 154 Q186 168 206 154" stroke="#3a2417" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="170" cy="126" rx="4" ry="5" fill="#20242b" />
      <ellipse cx="202" cy="126" rx="4" ry="5" fill="#20242b" />

      {/* Hard hat */}
      <path d="M138 100 C138 68 160 44 186 44 C212 44 234 68 234 100 L240 108 L132 108 Z" fill="#f5c518" />
      <rect x="128" y="104" width="116" height="14" rx="7" fill="#e0aa0f" />
      <rect x="176" y="50" width="20" height="12" rx="4" fill="#e0aa0f" />
    </svg>
  );
}
