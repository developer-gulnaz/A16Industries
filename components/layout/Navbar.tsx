import { ScrambleText } from "@/components/ui/ScrambleText"
import Link from "next/link"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/aboutus" },
  { name: "DRONE", href: "/drone" },
  { name: "ANTI-DRONE", href: "/antidrone" },
  { name: "CONTACT US", href: "/contactus" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-wider text-brand"
        >
          A16Industries
        </Link>

        {/* Menu */}
        <ul className="flex gap-8 font-semibold text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group relative transition-colors hover:text-brand"
              >
                <ScrambleText text={item.name} />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
