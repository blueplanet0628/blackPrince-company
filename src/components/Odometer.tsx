"use client"

import React, { useEffect, useMemo, useRef } from "react"

type OdometerProps = {
  value: number
  className?: string
  suffix?: string
}

export default function Odometer({ value, className = "", suffix = "" }: OdometerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const digitRefs = useRef<HTMLDivElement[]>([])
  const prevDigitsRef = useRef<number[] | null>(null)
  const prevLenRef = useRef<number>(String(value).length)

  const valueStr = String(Math.max(0, Math.floor(value)))

  const { currentDigits, prevDigits } = useMemo(() => {
    const prev = prevDigitsRef.current ?? valueStr.split("").map((d) => Number(d))
    const curr = valueStr.split("").map((d) => Number(d))
    const maxLen = Math.max(prev.length, curr.length)

    const pad = (arr: number[], len: number) => {
      const res = new Array(len - arr.length).fill(0).concat(arr)
      return res
    }

    return {
      prevDigits: pad(prev, maxLen),
      currentDigits: pad(curr, maxLen),
    }
  }, [valueStr])

  useEffect(() => {
    digitRefs.current = digitRefs.current.slice(0, currentDigits.length)
  }, [currentDigits.length])

  useEffect(() => {
    currentDigits.forEach((nextDigit, i) => {
      const el = digitRefs.current[i]
      if (!el) return

      const prevDigit = prevDigits[i]
      const target = nextDigit < prevDigit ? nextDigit + 10 : nextDigit

      el.style.transition = "transform 500ms ease-out"
      el.style.transform = `translateY(-${target * 10}%)`

      const handle = () => {
        if (target >= 10) {
          el.style.transition = "none"
          el.style.transform = `translateY(-${(target % 10) * 10}%)`
          void el.offsetHeight
          el.style.transition = "transform 500ms ease-out"
        }
        el.removeEventListener("transitionend", handle)
      }

      el.addEventListener("transitionend", handle)
    })

    prevDigitsRef.current = currentDigits
    prevLenRef.current = currentDigits.length
  }, [currentDigits, prevDigits])

  const stack = useMemo(() => Array.from({ length: 20 }, (_, i) => i % 10), [])

  return (
    <div ref={containerRef} className={`inline-flex items-baseline ${className}`}>
      {currentDigits.map((digit, i) => (
        <div key={i} className="relative overflow-hidden" style={{ height: "1em" }}>
          <div
            ref={(el) => {
              if (el) digitRefs.current[i] = el
            }}
            className="flex flex-col leading-none will-change-transform"
            style={{ transform: `translateY(-${(prevDigits[i] <= digit ? digit : digit + 10) * 10}%)` }}
          >
            {stack.map((n, idx) => (
              <span key={idx} className="block" style={{ lineHeight: 1 }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      ))}
      {suffix ? <span className="ml-1">{suffix}</span> : null}
    </div>
  )
}