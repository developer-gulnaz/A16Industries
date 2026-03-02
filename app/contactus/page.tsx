import { SectionPage } from "@/components/layout/SectionPage"

export default function ContactUsPage() {
  return (
    <SectionPage
      eyebrow="CONTACT US"
      title="Let us discuss mission requirements and deployment goals."
      description="For partnerships, technical consultations, or procurement discussions, connect with our team. We keep communication direct, confidential, and aligned with your operational constraints."
      points={[
        "Email: info@a16industries.tech",
        "Office: Nagpur, India",
        "Response window: 1-2 business days for qualified inquiries.",
        "Engagements include discovery calls, system demos, and integration planning.",
      ]}
    />
  )
}
