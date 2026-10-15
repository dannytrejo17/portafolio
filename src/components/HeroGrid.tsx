import { useEffect, useRef } from 'react'

const GAP = 46
const REACH = 180

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let width = 0
    let height = 0
    let pointerX = -9999
    let pointerY = -9999

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const glow = (x: number, y: number) => {
      const dist = Math.hypot(x - pointerX, y - pointerY)
      return Math.max(0, 1 - dist / REACH)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.lineWidth = 1
      for (let y = GAP; y < height; y += GAP) {
        for (let x = 0; x < width; x += GAP) {
          const midX = x + GAP / 2
          const strength = glow(midX, y)
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 + strength * 0.5})`
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(Math.min(x + GAP, width), y)
          ctx.stroke()
        }
      }

      for (let x = GAP; x < width; x += GAP) {
        for (let y = 0; y < height; y += GAP) {
          const midY = y + GAP / 2
          const strength = glow(x, midY)
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 + strength * 0.5})`
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x, Math.min(y + GAP, height))
          ctx.stroke()
        }
      }

      for (let y = GAP; y < height; y += GAP) {
        for (let x = GAP; x < width; x += GAP) {
          const strength = glow(x, y)
          ctx.fillStyle = `rgba(0, 240, 255, ${0.22 + strength * 0.78})`
          ctx.beginPath()
          ctx.arc(x, y, 1.1 + strength * 2.1, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      frame = requestAnimationFrame(draw)
    }

    const onMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      pointerX = event.clientX - rect.left
      pointerY = event.clientY - rect.top
    }

    const onLeave = () => {
      pointerX = -9999
      pointerY = -9999
    }

    resize()
    window.addEventListener('resize', resize)
    if (motionOk) {
      draw()
      parent.addEventListener('mousemove', onMove)
      parent.addEventListener('mouseleave', onLeave)
    } else {
      draw()
      cancelAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
