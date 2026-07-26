export default function Technician({ className = '' }) {
  return (
    <svg
      viewBox="0 0 420 560"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fixzzy technician"
    >
      <defs>
        <linearGradient id="polo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c7a4d" />
          <stop offset="100%" stopColor="#0f402a" />
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c98a5e" />
          <stop offset="100%" stopColor="#b87748" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#eefaf3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#eefaf3" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="210" cy="300" rx="200" ry="230" fill="url(#glow)" />

      {/* Legs */}
      <rect x="150" y="430" width="50" height="120" rx="16" fill="#20242b" />
      <rect x="222" y="430" width="50" height="120" rx="16" fill="#20242b" />

      {/* Torso / Polo */}
      <path
        d="M130 240 C130 210 160 190 210 190 C260 190 290 210 290 240 L300 440 C300 460 280 470 260 470 L160 470 C140 470 120 460 120 440 Z"
        fill="url(#polo)"
      />

      {/* Placket */}
      <path d="M210 200 L204 260 L216 260 Z" fill="#0b2f1f" />
      <circle cx="210" cy="222" r="3" fill="#eefaf3" />
      <circle cx="210" cy="238" r="3" fill="#eefaf3" />

      {/* F logo on chest */}
      <g transform="translate(178,228)">
        <circle r="16" fill="#ffffff" />
        <text x="0" y="6" textAnchor="middle" fontSize="18" fontWeight="800" fill="#15603d" fontFamily="Plus Jakarta Sans, sans-serif">F</text>
      </g>

      {/* Tool belt */}
      <rect x="128" y="410" width="172" height="26" rx="8" fill="#5b3a22" />
      <rect x="196" y="410" width="28" height="26" fill="#3d2716" />
      <g fill="#f5a623">
        <rect x="140" y="432" width="8" height="46" rx="3" />
        <rect x="160" y="432" width="10" height="52" rx="3" transform="rotate(8 165 432)" />
      </g>
      <g fill="#3b82c4">
        <rect x="252" y="432" width="9" height="48" rx="3" transform="rotate(-6 256 432)" />
      </g>

      {/* Crossed arms */}
      <path d="M126 260 C90 280 78 320 96 360 C104 378 128 392 156 392 L166 366 C144 362 128 350 122 336 C114 316 122 296 150 282 Z" fill="url(#polo)" />
      <path d="M294 260 C330 280 342 320 324 360 C316 378 292 392 264 392 L254 366 C276 362 292 350 298 336 C306 316 298 296 270 282 Z" fill="url(#polo)" />
      <path d="M150 282 C132 292 124 312 132 330 L172 320 L166 366 L156 392 C136 392 118 380 108 362" fill="none" />
      <ellipse cx="168" cy="368" rx="22" ry="14" fill="url(#skin)" />
      <ellipse cx="252" cy="368" rx="22" ry="14" fill="url(#skin)" />

      {/* Neck */}
      <rect x="192" y="176" width="36" height="34" rx="10" fill="url(#skin)" />

      {/* Head */}
      <ellipse cx="210" cy="150" rx="46" ry="50" fill="url(#skin)" />

      {/* Ears */}
      <ellipse cx="163" cy="152" rx="7" ry="10" fill="url(#skin)" />
      <ellipse cx="257" cy="152" rx="7" ry="10" fill="url(#skin)" />

      {/* Beard */}
      <path d="M166 148 C164 186 182 206 210 208 C238 206 256 186 254 148 C254 168 238 182 210 184 C182 182 166 168 166 148 Z" fill="#241b14" />

      {/* Smile */}
      <path d="M188 172 Q210 188 232 172" stroke="#3a2417" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="192" cy="142" rx="4.5" ry="5.5" fill="#20242b" />
      <ellipse cx="228" cy="142" rx="4.5" ry="5.5" fill="#20242b" />

      {/* Brows */}
      <path d="M182 128 Q192 122 202 128" stroke="#241b14" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M218 128 Q228 122 238 128" stroke="#241b14" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Cap */}
      <path d="M158 118 C158 84 182 62 210 62 C238 62 262 84 262 118 L258 122 C244 108 228 100 210 100 C192 100 176 108 162 122 Z" fill="#15603d" />
      <path d="M158 120 C176 104 192 96 210 96 C228 96 244 104 258 120 L268 116 C252 96 232 84 210 84 C188 84 168 96 152 116 Z" fill="#0f402a" />
      <circle cx="210" cy="78" r="6" fill="#f5a623" />
    </svg>
  );
}
