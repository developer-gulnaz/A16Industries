import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black">
      
      {/* subtle grid line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-brand">
              A16Industries
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Advanced drone and anti-drone systems designed to
              secure airspace with precision and intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/drone">Drone</Link></li>
              <li><Link href="/antidrone">Anti-Drone</Link></li>
              <li><Link href="/contactus">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-200">
              Contact
            </h4>
            <p className="text-sm text-gray-400">
              Nagpur, India<br />
              info@a16industries.tech
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row">
          <span>© 2026 A16Industries. All rights reserved.</span>
          <span className="tracking-widest text-brand/600">
            SECURING AIRSPACE
          </span>
        </div>
      </div>
    </footer>
  )
}
