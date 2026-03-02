"use client"

import { useEffect, useState } from "react"

type TypingTextProps = {
  text: string
  speed?: number
  start?: boolean
  onComplete?: () => void
}

export function TypingText({
  text,
  speed = 80,
  start = true,
  onComplete,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!start) return
    if (index >= text.length) {
      onComplete?.()
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index])
      setIndex((prev) => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [index, start, text, speed, onComplete])

  return <span>{displayedText}</span>
}