"use client"

export default function DroneOrbitVisual() {
  return (
    <div className="relative flex w-full items-center justify-center py-28">
      <div className="orbit relative h-[32rem] w-[32rem] group">
        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-black shadow-md">
          <DroneIcon className="h-6 w-6" />
        </div>

        {/* Rings */}
        <OrbitRing size={30} duration={120} count={4} direction="normal" />
        <OrbitRing size={25} duration={105} count={3} direction="reverse" />
        <OrbitRing size={20} duration={90} count={4} direction="normal" />
        <OrbitRing size={15} duration={75} count={3} direction="reverse" />
        <OrbitRing size={10} duration={60} count={3} direction="normal" />
      </div>

      {/* minimal required css */}
      <style>{`
        .orbit-ring {
          position: absolute;
          inset: 0;
          margin: auto;
          border-radius: 50%;
          border: 1px solid rgba(219,113,7,0.35);
          animation-name: spin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* Hover pause + highlight */
        .group:hover .orbit-ring {
          animation-play-state: paused;
          border-color: rgba(219,113,7,0.7);
        }

        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* drone pulse */
        @keyframes pulse {
          0%,100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

/* ---------------- helpers ---------------- */

function OrbitRing({
  size,
  duration,
  count,
  direction,
}: {
  size: number
  duration: number
  count: number
  direction: "normal" | "reverse"
}) {
  const radius = size / 2

  return (
    <div
      className="orbit-ring"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        animationDuration: `${duration}s`,
        animationDirection: direction,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const angle = (360 / count) * i

        return (
          <div
            key={i}
            className="orbit-item"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}rem)`,
            }}
          >
            <div
              className="flex h-8 w-8 -translate-x-1/2 -translate-y-1/2
              items-center justify-center rounded-full
              bg-black/60 backdrop-blur
              border border-brand/40 text-brand shadow-sm"
              style={{
                animation: "pulse 4s ease-in-out infinite",
              }}
            >
              <DroneIcon className="h-4 w-4" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function DroneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm8-2h-3.2a7.98 7.98 0 00-9.6 0H4v2h2.2a7.9 7.9 0 000 4H4v2h3.2a7.98 7.98 0 009.6 0H20v-2h-2.2a7.9 7.9 0 000-4H20V6z" />
    </svg>
  )
}