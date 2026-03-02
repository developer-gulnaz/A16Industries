type SectionPageProps = {
  eyebrow: string
  title: string
  description: string
  points: string[]
}

export function SectionPage({ eyebrow, title, description, points }: SectionPageProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden px-6 pb-20 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(219,113,7,0.2),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.14),_transparent_40%),linear-gradient(180deg,_#020617_0%,_#000_100%)]" />
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-sm font-semibold tracking-[0.3em] text-brand/85">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-gray-100 md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
          {description}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <article
              key={point}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <p className="text-sm leading-relaxed text-gray-200">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
