// app/components/ui/Logo.tsx
export default function Logo({ className = "w-full" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="25 10 495 175"
        className="w-full h-auto drop-shadow-md block"
      >
        {/* Main Indigo/Navy Background Block */}
        <rect x="40" y="10" width="480" height="175" fill="#1D265C" />

        {/* 3D Red Binding Tabs (Left Edge) */}
        {/* Tab 1 */}
        <rect x="25" y="35" width="15" height="18" fill="#A81B1E" />
        <rect x="40" y="35" width="15" height="18" fill="#DD2429" />
        {/* Tab 2 */}
        <rect x="25" y="65" width="15" height="18" fill="#A81B1E" />
        <rect x="40" y="65" width="15" height="18" fill="#DD2429" />
        {/* Tab 3 */}
        <rect x="25" y="95" width="15" height="18" fill="#A81B1E" />
        <rect x="40" y="95" width="15" height="18" fill="#DD2429" />
        {/* Tab 4 */}
        <rect x="25" y="125" width="15" height="18" fill="#A81B1E" />
        <rect x="40" y="125" width="15" height="18" fill="#DD2429" />

        {/* Center Red Square */}
        <rect x="240" y="25" width="80" height="75" fill="#D42227" />

        {/* The Exact Slab-Serif 'W' Vector Path */}
        <path
          d="M 245 35 h 15 l 7 35 l 5 -35 h 16 l 5 35 l 7 -35 h 15 l -13 50 h -16 l -6 -30 l -6 30 h -16 z"
          fill="#1D265C"
          stroke="#F1EED9"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* WIN-TOJU Main Text */}
        <text
          x="280"
          y="145"
          fontFamily="'Rockwell', 'Alfa Slab One', 'Courier New', serif"
          fontWeight="900"
          fontSize="56"
          fill="#F1EED9"
          textAnchor="middle"
          letterSpacing="2.5"
        >
          WIN-TOJU
        </text>

        {/* Bottom Decorative Line */}
        <line
          x1="110"
          y1="165"
          x2="250"
          y2="165"
          stroke="#F1EED9"
          strokeWidth="2.5"
        />

        {/* SYSTEM ENTERPRISE LTD. Subtext */}
        <text
          x="500"
          y="170"
          fontFamily="'Inter', 'Helvetica Neue', sans-serif"
          fontWeight="700"
          fontSize="15"
          fill="#F1EED9"
          textAnchor="end"
          letterSpacing="0.5"
        >
          SYSTEM ENTERPRISE LTD.
        </text>
      </svg>
    </div>
  );
}