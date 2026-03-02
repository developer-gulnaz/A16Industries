import { SectionPage } from "@/components/layout/SectionPage"

export default function AboutUsPage() {
  return (
    <SectionPage
      eyebrow="ABOUT US"
      title="Engineering disciplined airspace security for modern operations."
      description="A16Industries develops focused drone and anti-drone systems with an emphasis on reliability, precision, and operational clarity. Our teams combine aerospace thinking with practical field deployment."
      points={[
        "Mission-led product strategy for defense, homeland security, and critical infrastructure.",
        "Rapid prototyping and validation pipelines that reduce integration risk.",
        "Cross-functional development spanning airframes, sensing, autonomy, and command systems.",
        "Long-term support model focused on lifecycle readiness and operational uptime.",
      ]}
    />
  )
}
