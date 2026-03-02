"use client";

export default function LayeredVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Perspective wrapper */}
      <div className="relative h-[280px] w-[280px] [transform-style:preserve-3d] [transform:perspective(500px)_rotateX(60deg)]">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full border-[5px] border-[rgba(250,169,88,0.9)] shadow-[0_5px_0_rgba(250,169,88,0.7)] animate-layer"
            style={{
              inset: `${i * 10}px`,
              animationDelay: `${(14 - i) * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* minimal scoped css */}
      <style jsx>{`
        @keyframes layer {
          0%,
          100% {
            transform: translateZ(-100px);
          }
          50% {
            transform: translateZ(100px);
          }
        }

        .animate-layer {
          animation: layer 3.5s ease-in-out infinite;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
