// components/ui/Button.tsx
type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "outline" | "danger"
}

export function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300"

  const variants = {
    primary: "bg-brand text-black hover:bg-brand/90",
    outline: "border border-brand text-brand hover:bg-brand/10",
    danger: "bg-red-500 text-white hover:bg-red-400",
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
