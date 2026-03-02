import Link from "next/link";

type HeroButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function HeroButton({
  href,
  label,
  variant = "primary",
}: HeroButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <>
      <Link href={href}>
        <button
          className={`
            relative
            w-[170px] h-[48px]
            overflow-hidden
            cursor-pointer
            rounded-tl-[18px] rounded-br-[18px]
            transition-transform duration-300 ease-out
            hover:scale-[1.02]
            ${isPrimary ? "bg-[#db7107] text-black" : "bg-[#121212] text-[#db7107]"}
          `}
        >
          {/* animated border */}
          <span
            className={`
              hero-border
              absolute inset-0
              ${isPrimary ? "primary-border" : "secondary-border"}
            `}
          />

          {/* inner surface */}
          <span
            className={`
              absolute inset-[3px]
              rounded-tl-[15px] rounded-br-[15px]
              ${isPrimary ? "bg-[#db7107]" : "bg-[#181818]"}
            `}
          />

          {/* text */}
          <span className="relative z-10 font-bold tracking-wide">
            {label}
          </span>
        </button>
      </Link>

      {/* minimal CSS: speed + hover only */}
      <style jsx>{`
        .hero-border {
          animation: spin 10s linear infinite;
          opacity: 0.6;
          transition: opacity 0.3s ease, animation-duration 0.3s ease;
        }

        button:hover .hero-border {
          animation-duration: 4s;
          opacity: 1;
        }

        .primary-border {
          background: linear-gradient(
            120deg,
            transparent,
            #181818,
            transparent
          );
        }

        .secondary-border {
          background: linear-gradient(
            120deg,
            transparent,
            #db7107,
            transparent
          );
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}