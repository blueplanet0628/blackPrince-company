"use client"

import { useEffect, useRef } from "react"

interface TrailPoint {
  x: number
  y: number
  age: number
  vx: number
  vy: number
}

interface Bubble {
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  life: number
}

export default function WaterWaveEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<TrailPoint[]>([])
  const bubblesRef = useRef<Bubble[]>([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const prevMouseRef = useRef({ x: -100, y: -100 })
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      prevMouseRef.current = { ...mouseRef.current }
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Calculate velocity
      const vx = mouseRef.current.x - prevMouseRef.current.x
      const vy = mouseRef.current.y - prevMouseRef.current.y
      const speed = Math.sqrt(vx * vx + vy * vy)

      // Add trail point when moving
      if (speed > 1) {
        trailRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          age: 0,
          vx: vx * 0.1,
          vy: vy * 0.1
        })

        // Create bubbles
        if (Math.random() > 0.7) {
          const angle = Math.atan2(vy, vx) + Math.PI + (Math.random() - 0.5) * 1.5
          bubblesRef.current.push({
            x: mouseRef.current.x + (Math.random() - 0.5) * 20,
            y: mouseRef.current.y + (Math.random() - 0.5) * 20,
            size: 2 + Math.random() * 6,
            opacity: 0.6 + Math.random() * 0.4,
            vx: Math.cos(angle) * (1 + Math.random() * 2),
            vy: Math.sin(angle) * (1 + Math.random() * 2) - 0.5,
            life: 60 + Math.random() * 40
          })
        }
      }

      // Limit trail length
      if (trailRef.current.length > 80) {
        trailRef.current.shift()
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      timeRef.current += 0.016

      // Draw water wake/trail
      if (trailRef.current.length > 2) {
        // Draw ripple waves along the trail
        for (let i = 0; i < trailRef.current.length; i += 5) {
          const point = trailRef.current[i]
          const progress = i / trailRef.current.length
          const waveOffset = Math.sin(timeRef.current * 3 + i * 0.3) * 8
          
          // Calculate perpendicular direction
          let perpX = 0, perpY = 1
          if (i < trailRef.current.length - 1) {
            const nextPoint = trailRef.current[i + 1]
            const dx = nextPoint.x - point.x
            const dy = nextPoint.y - point.y
            const len = Math.sqrt(dx * dx + dy * dy) || 1
            perpX = -dy / len
            perpY = dx / len
          }

          // Draw wave ripple
          const rippleSize = (1 - progress) * 25 + 5
          const opacity = progress * 0.5

          ctx.beginPath()
          ctx.arc(
            point.x + perpX * waveOffset,
            point.y + perpY * waveOffset,
            rippleSize,
            0,
            Math.PI * 2
          )
          ctx.strokeStyle = `rgba(0, 199, 241, ${opacity})`
          ctx.lineWidth = 1.5
          ctx.stroke()

          // Opposite side ripple
          ctx.beginPath()
          ctx.arc(
            point.x - perpX * waveOffset,
            point.y - perpY * waveOffset,
            rippleSize * 0.8,
            0,
            Math.PI * 2
          )
          ctx.strokeStyle = `rgba(19, 74, 139, ${opacity * 0.7})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Update and draw bubbles
      bubblesRef.current = bubblesRef.current.filter(bubble => {
        bubble.x += bubble.vx
        bubble.y += bubble.vy
        bubble.vy -= 0.02 // Float upward
        bubble.life--
        bubble.opacity = (bubble.life / 100) * 0.8

        if (bubble.life <= 0 || bubble.opacity <= 0) return false

        // Draw bubble
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 0.8})`)
        gradient.addColorStop(0.5, `rgba(0, 199, 241, ${bubble.opacity * 0.4})`)
        gradient.addColorStop(1, `rgba(0, 199, 241, 0)`)

        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Bubble highlight
        ctx.beginPath()
        ctx.arc(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          bubble.size * 0.3,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.6})`
        ctx.fill()

        return true
      })

      // Draw cursor glow (fish head)
      const glowGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        40
      )
      glowGradient.addColorStop(0, "rgba(0, 199, 241, 0.5)")
      glowGradient.addColorStop(0.4, "rgba(0, 199, 241, 0.2)")
      glowGradient.addColorStop(1, "rgba(0, 199, 241, 0)")

      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 40, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      // Inner bright core
      const coreGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        15
      )
      coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.6)")
      coreGradient.addColorStop(0.5, "rgba(0, 199, 241, 0.3)")
      coreGradient.addColorStop(1, "rgba(0, 199, 241, 0)")

      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 15, 0, Math.PI * 2)
      ctx.fillStyle = coreGradient
      ctx.fill()

      // Age trail points and remove old ones
      trailRef.current = trailRef.current.filter(point => {
        point.age++
        point.x += point.vx
        point.y += point.vy
        point.vx *= 0.98
        point.vy *= 0.98
        return point.age < 60
      })

      // Limit bubbles
      if (bubblesRef.current.length > 50) {
        bubblesRef.current = bubblesRef.current.slice(-50)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  )
}
