"use client";

import { useEffect, useRef, useState } from "react";
import DroneOrbitVisual from "./ui/DroneOrbitVisual";

// simple intersection observer hook
function useInView<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  return inView;
}

export default function UniqueSections() {
  const sec1 = useRef<HTMLDivElement>(null);
  const sec2 = useRef<HTMLDivElement>(null);
  const sec3 = useRef<HTMLDivElement>(null);

  const inView1 = useInView<HTMLDivElement>(sec1, { threshold: 0.3 });
  const inView2 = useInView<HTMLDivElement>(sec2, { threshold: 0.3 });
  const inView3 = useInView<HTMLDivElement>(sec3, { threshold: 0.3 });

  return (
    <>
      {/* full‑screen motion graphic */}
      <section ref={sec1} className="relative h-screen w-full overflow-hidden">
        <DroneOrbitVisual />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-1000 ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-white drop-shadow-xl">
            Guardians in Motion
          </h2>
        </div>
      </section>

      {/* scrolling text animation */}
      <section
        ref={sec2}
        className="py-32 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-semibold text-gray-200">
            See the unseen
          </h3>
          <p
            className={`text-xl text-gray-300 transition-all duration-700 ease-out sliding-text ${
              inView2 ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Words glide in with scroll.
          </p>
          <p
            className={`text-xl text-gray-300 transition-all duration-700 ease-out delay-150 sliding-text ${
              inView2 ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            Every phrase moves with purpose.
          </p>
        </div>
      </section>

      {/* tilt‑on‑hover feature cards */}
      <section ref={sec3} className="py-24 bg-gray-900/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Adaptive AI",
              desc: "Learns to counter new swarm tactics.",
            },
            {
              title: "Stealth Detection",
              desc: "Finds what tries not to be found.",
            },
            {
              title: "Rapid Response",
              desc: "Deploys solutions in under 60 seconds.",
            },
          ].map((f, i) => (
            <div key={i} className="group perspective-1000 relative">
              <div className="relative transform transition-transform duration-500 group-hover:-rotate-y-12 group-hover:scale-105">
                <div className="backface-hidden bg-gray-800/70 p-8 rounded-2xl shadow-lg border border-gray-700/50 group-hover:border-transparent transition-colors duration-300 relative overflow-hidden">
                  {/* animated border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-border-glow" />
                  <h4 className="text-2xl font-bold text-white relative z-10">{f.title}</h4>
                  <p className="mt-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .sliding-text {
          position: relative;
          display: inline-block;
        }
        .sliding-text::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #db7107 0%, transparent 100%);
          opacity: 0;
          animation: slideUnderline 0.8s ease-out forwards;
        }

        @keyframes slideUnderline {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.7;
          }
        }

        @keyframes borderGlow {
          0% {
            box-shadow: inset 0 0 0 2px rgba(219, 113, 7, 0);
          }
          50% {
            box-shadow: inset 0 0 10px 2px rgba(219, 113, 7, 0.4);
          }
          100% {
            box-shadow: inset 0 0 0 2px rgba(219, 113, 7, 0.3);
          }
        }

        .animate-border-glow {
          animation: borderGlow 1.2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
