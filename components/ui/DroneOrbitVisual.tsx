"use client"

import { useEffect } from "react"

export default function DroneOrbitVisual() {
  // Load Font Awesome safely in Next.js
  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    document.head.appendChild(link)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_center,#0b132b,#000)]">
      <div className="relative h-full w-full">
        {/* CENTER */}
        <div className="absolute left-1/2 top-1/2 z-10 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand font-semibold text-white shadow-[0_0_30px_rgba(0,229,255,0.8)]">
          DRONE
        </div>

    
        {/* RING 1 */}
        <ul className="ring ring-1">
          <li>
            <div className="orbit-icon">
              <i className="fa-solid fa-plane" />
            </div>
          </li>
          <li>
            <div className="orbit-icon">
              <i className="fa-solid fa-location-arrow" />
            </div>
          </li>
          <li>
            <div className="orbit-icon">
              <i className="fa-solid fa-video" />
            </div>
          </li>
        </ul>

        {/* RING 2 */}
        <ul className="ring ring-2">
          <li>
            <div className="orbit-icon">
              <i className="fa-solid fa-wifi" />
            </div>
          </li>
          <li>
            <div className="orbit-icon">
              <i className="fa-solid fa-satellite" />
            </div>
          </li>
          <li>
            <div className="orbit-icon">
              <i className="fa-solid fa-crosshairs" />
            </div>
          </li>
          <li>
            <div className="orbit-icon">
              <i className="fa-solid fa-compass" />
            </div>
          </li>
        </ul>

        {/* RING 3 */}
        <ul className="ring ring-3">
          {[
            "fa-shield-halved",
            "fa-ban",
            "fa-bolt",
            "fa-tower-broadcast",
          ].map((icon) => (
            <li key={icon} className="threat">
              <div className="orbit-icon">
                <i className={`fa-solid ${icon}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ONLY WHAT TAILWIND CANNOT DO */}
      <style jsx>{`
        .ring {
          position: absolute;
          top: 50%;
          left: 50%;
          list-style: none;
          padding: 0;
          margin: 0;
          border-radius: 50%;
          border: 1px solid rgba(0, 255, 255, 0.35);
          transform: translate(-50%, -50%);
        }

        .ring li {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 36px;
          height: 36px;
          margin: -18px;
        }

        .orbit-icon {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 16px;
          color: #00e5ff;
          background: rgba(0, 229, 255, 0.12);
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.6);
        }

        .threat .orbit-icon {
          color: #ff5252;
          background: rgba(255, 82, 82, 0.15);
          box-shadow: 0 0 12px rgba(255, 82, 82, 0.9);
        }

        .threat::after {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(255, 82, 82, 0.7);
          animation: threatPulse 2.5s ease-out infinite;
        }

        /* SIZES & ROTATION */
        .ring-1 {
          width: 160px;
          height: 160px;
          animation: spinCW 18s linear infinite;
        }
        .ring-2 {
          width: 260px;
          height: 260px;
          animation: spinCCW 28s linear infinite;
        }
        .ring-3 {
          width: 380px;
          height: 380px;
          animation: spinCW 40s linear infinite;
        }

        /* POSITIONS */
        .ring-1 li:nth-child(1) {
          transform: rotate(0deg) translate(80px);
        }
        .ring-1 li:nth-child(2) {
          transform: rotate(120deg) translate(80px);
        }
        .ring-1 li:nth-child(3) {
          transform: rotate(240deg) translate(80px);
        }

        .ring-2 li:nth-child(1) {
          transform: rotate(0deg) translate(130px);
        }
        .ring-2 li:nth-child(2) {
          transform: rotate(90deg) translate(130px);
        }
        .ring-2 li:nth-child(3) {
          transform: rotate(180deg) translate(130px);
        }
        .ring-2 li:nth-child(4) {
          transform: rotate(270deg) translate(130px);
        }

        .ring-3 li:nth-child(1) {
          transform: rotate(45deg) translate(190px);
        }
        .ring-3 li:nth-child(2) {
          transform: rotate(135deg) translate(190px);
        }
        .ring-3 li:nth-child(3) {
          transform: rotate(225deg) translate(190px);
        }
        .ring-3 li:nth-child(4) {
          transform: rotate(315deg) translate(190px);
        }

        /* RADAR */
       .radar {
  background: conic-gradient(
    rgba(248, 205, 52, 0.35),
    rgba(156, 130, 14, 0.15),
    transparent 60%
  );
  animation: radarSpin 6s linear infinite;
}

@keyframes radarSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

        @keyframes spinCW {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes spinCCW {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes radarSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes threatPulse {
          from {
            transform: scale(0.6);
            opacity: 1;
          }
          to {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}