import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Oxanium } from "next/font/google"
import "./globals.css"

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oxanium",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={oxanium.variable}>
      <body className="bg-[#020617] text-gray-100 font-oxanium">
        <Navbar />
        <main className="pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}