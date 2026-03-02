// "use client"

// import { useEffect, useRef } from "react"

// const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// type Props = {
//   text: string
// }

// export function ScrambleText({ text }: Props) {
//   const ref = useRef<HTMLSpanElement>(null)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     let interval: NodeJS.Timeout | null = null

//     const handleMouseEnter = () => {
//       let iteration = 0

//       clearInterval(interval!)

//       interval = setInterval(() => {
//         el.innerText = text
//           .split("")
//           .map((char, index) => {
//             if (index < iteration) return char
//             return LETTERS[Math.floor(Math.random() * LETTERS.length)]
//           })
//           .join("")

//         iteration += 1 / 3

//         if (iteration >= text.length) {
//           clearInterval(interval!)
//           el.innerText = text
//         }
//       }, 20)
//     }

//     el.addEventListener("mouseenter", handleMouseEnter)
//     return () => el.removeEventListener("mouseenter", handleMouseEnter)
//   }, [text])

//   return (
//     <span
//       ref={ref}
//       className="relative inline-block tracking-wide"
//     >
//       {text}
//     </span>
//   )
// }



"use client"

import { useState } from "react"

type Props = {
  text: string
}

export function ScrambleText({ text }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        relative inline-block cursor-pointer overflow-hidden
        px-3 py-1 transition-colors duration-300 absolute inset-[3px]
        rounded-tl-[15px] rounded-br-[15px]
      "
    >
      {/* Scan sweep */}
      <span
        className={`
          pointer-events-none absolute inset-0
          bg-gradient-to-r
          from-transparent via-[#db7107]/60 to-transparent
          -skew-x-12
          transition-transform duration-700 ease-out
          ${hovered ? "translate-x-full" : "-translate-x-full"}
        `}
      />

      {/* Text */}
      <span
        className={`
          relative z-10 tracking-wide
          transition-all duration-300
          ${hovered
            ? "text-[#db7107] drop-shadow-[0_0_6px_rgba(219,113,7,0.75)]"
            : "text-slate-200"
          }
        `}
      >
        {text}
      </span>
    </span>
  )
}