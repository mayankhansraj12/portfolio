import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const onMouseEnterLink = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.8)'
      ring.style.borderColor = 'var(--acid)'
      dot.style.background = 'var(--acid)'
    }

    const onMouseLeaveLink = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
      ring.style.borderColor = 'var(--text)'
      dot.style.background = 'var(--acid)'
    }

    let animId: number
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMouseMove)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'var(--acid)',
          transition: 'background 0.2s',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998]"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid var(--text)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.3s ease, border-color 0.2s',
        }}
      />
    </>
  )
}
