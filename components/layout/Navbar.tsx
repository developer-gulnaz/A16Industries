"use client"

import { ScrambleText } from "@/components/ui/ScrambleText"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/aboutus" },
  { name: "DRONE", href: "/drone" },
  { name: "ANTI-DRONE", href: "/antidrone" },
  { name: "CONTACT US", href: "/contactus" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [sweepAngle, setSweepAngle] = useState(0)

  const pathname = usePathname()
  const router = useRouter()
  const isTouch =
    typeof window !== "undefined" && "ontouchstart" in window

  /* 🔊 Sonar ping */
  function playPing() {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.frequency.value = 720
    gain.gain.value = 0.05

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start()
    osc.stop(ctx.currentTime + 0.18)
  }

  function openMenu() {
    playPing()
    setIsOpen(true)
    navigator.vibrate?.(20)
  }

  /* ⌨️ Desktop keyboard nav */
  useEffect(() => {
    if (!isOpen || isTouch) return

    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown")
        setActiveIndex((i) => (i + 1) % navItems.length)

      if (e.key === "ArrowUp")
        setActiveIndex((i) => (i - 1 + navItems.length) % navItems.length)

      if (e.key === "Enter") {
        router.push(navItems[activeIndex].href)
        setIsOpen(false)
      }

      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, activeIndex, isTouch, router])

  /* 📱 Mobile swipe + radar follow */
  useEffect(() => {
    if (!isOpen || !isTouch) return

    let startY = 0

    function onTouchStart(e: TouchEvent) {
      startY = e.touches[0].clientY
    }

    function onTouchMove(e: TouchEvent) {
      const y = e.touches[0].clientY
      if (y - startY > 90) setIsOpen(false)
      setSweepAngle((y / window.innerHeight) * 360)
    }

    window.addEventListener("touchstart", onTouchStart)
    window.addEventListener("touchmove", onTouchMove)

    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [isOpen, isTouch])

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO (unchanged) */}
            <Link
              href="/"
              className="text-xl font-semibold tracking-wider text-brand"
            >
              A16Industries
            </Link>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-brand">
                    <ScrambleText text={item.name} />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Radar button */}
            <button
              onClick={openMenu}
              className="md:hidden relative h-12 w-12 text-brand"
              aria-label="Open HUD menu"
            >
              <span
                className="absolute inset-0 radar-container"
                style={{ "--angle": `${sweepAngle}deg` } as any}
              >
                <span className="radar-sweep" />
                <span className="radar-glow" />
              </span>

              <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 m-auto h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HUD GRID */}
      <div
        className={`fixed inset-0 z-40 hud-grid transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* LEFT-ALIGNED HUD MENU */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-transform duration-500 ${isOpen ? "translate-y-0 hud-glitch" : "-translate-y-full"
          }`}
      >
        {/* Logo inside mobile HUD */}
        <div className="pt-6 pl-6 border-b border-white/10">
          <span className="block text-xl font-semibold tracking-wider text-brand">
            A16Industries
          </span>
        </div>

        {/* Navigation list */}
        <div className="pt-6 pl-10 sm:pl-16 flex flex-col gap-6">
          {navItems.map((item, i) => {
            const active = i === activeIndex
            return (
              <div
                key={item.name}
                onClick={() => {
                  setActiveIndex(i)
                  navigator.vibrate?.(30)
                  router.push(item.href)
                  setIsOpen(false)
                }}
                className={`relative w-fit px-4 py-2 text-xl tracking-widest cursor-pointer select-none transition-all
            ${active ? "text-brand scale-110" : "text-gray-400 active:text-brand"}
          `}
              >
                {active && (
                  <span className="absolute -left-6 text-brand">▶</span>
                )}
                <ScrambleText text={item.name} />
              </div>
            )
          })}
        </div>
      </div>

      {/* EFFECT STYLES */}
      <style jsx>{`
        .radar-container {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          overflow: hidden;
          mask-image: radial-gradient(circle, #000 65%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle, #000 65%, transparent 70%);
        }

        .radar-sweep {
          position: absolute;
          inset: -50%;
          background: conic-gradient(
            from var(--angle),
            rgba(0,255,170,0.45),
            rgba(0,255,170,0.12),
            transparent 55%
          );
          animation: radar-spin 4s linear infinite;
          filter: blur(6px);
        }

        .radar-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow:
            inset 0 0 18px rgba(0,255,170,0.25),
            0 0 20px rgba(0,255,170,0.25);
        }

        @keyframes radar-spin {
          to { transform: rotate(360deg); }
        }

        .hud-grid {
          background:
            linear-gradient(rgba(0,255,170,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,170,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .hud-glitch {
          animation: glitch 0.35s ease-out;
        }

        @keyframes glitch {
          0% { opacity: 0; transform: translateY(-100%) skewX(6deg); }
          60% { opacity: 1; transform: translateY(0) skewX(-3deg); }
          100% { transform: translateY(0) skewX(0); }
        }
      `}</style>
    </>
  )
}