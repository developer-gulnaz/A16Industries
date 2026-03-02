import DroneOrbitVisual from "@/components/ui/DroneOrbitVisual"
import Image from "next/image"

export default function DronePage() {
  return (
    <>
      {/* HERO — PRODUCT FIRST */}
      <section className="relative overflow-hidden bg-black px-6 pb-28 pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(219,113,7,0.18),_transparent_45%)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-brand/80">
              DRONE PLATFORMS
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-100 md:text-5xl">
              Purpose-built unmanned platforms for mission-critical environments
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              A16Industries drone systems are engineered for operational
              stability, payload adaptability, and dependable performance
              across surveillance, logistics, and tactical missions.
            </p>
          </div>

          {/* Product image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/drone-hero.jpg"
              alt="A16 drone platform"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="bg-[#020617] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/images/drone-detail.jpg"
              alt="Drone payload and frame"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-100">
              Engineered for modular deployment
            </h2>

            <p className="mt-4 text-gray-400">
              Each platform supports interchangeable payloads and configurable
              mission profiles — enabling rapid adaptation without redesign or
              extended downtime.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Multi-role payload architecture",
                "Redundant flight and power systems",
                "Secure, low-latency communications",
                "Field-serviceable components",
              ].map((item) => (
                <li
                  key={item}
                  className="border-l border-brand/40 pl-4 text-sm text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OPERATIONAL ECOSYSTEM — ORBIT VISUAL */}
      <section className="relative bg-black px-6 py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          {/* Orbit visual */}
          <DroneOrbitVisual />

          {/* Explanation */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-brand/80">
              OPERATIONAL ECOSYSTEM
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-gray-100">
              Coordinated aerial operations at scale
            </h3>

            <p className="mt-6 text-gray-400">
              Drone platforms operate as part of a coordinated aerial ecosystem
              — supporting fleet deployment, cooperative sensing, and seamless
              command integration.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Fleet-level mission coordination",
                "Shared situational awareness",
                "Ground-station and C2 integration",
              ].map((item) => (
                <li
                  key={item}
                  className="border-l border-white/20 pl-4 text-sm text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="bg-[#020617] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-100">
            Platform capabilities
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Surveillance & reconnaissance",
              "Logistics and payload delivery",
              "Tactical overwatch support",
              "Autonomous waypoint navigation",
              "Encrypted command & telemetry",
              "Rapid deployment readiness",
            ].map((cap) => (
              <div
                key={cap}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <p className="text-sm text-gray-200">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}