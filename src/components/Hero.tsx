import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const headlines = [
  'I build for the web.',
  'I ship clean code.',
  'I think in systems.',
  'I make things fast.',
]

const techBadges = ['React', 'JavaScript', 'Node.js', 'TypeScript', 'Express', 'Tailwind', 'MongoDB', 'SQL', 'Python', 'Docker']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const line = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [headlineIdx, setHeadlineIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = headlines[headlineIdx]
    let i = typing ? 0 : target.length
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      if (typing) {
        setDisplayed(target.slice(0, i + 1))
        i++
        if (i <= target.length) {
          timer = setTimeout(tick, 60)
        } else {
          timer = setTimeout(() => setTyping(false), 1800)
        }
      } else {
        setDisplayed(target.slice(0, i - 1))
        i--
        if (i >= 0) {
          timer = setTimeout(tick, 35)
        } else {
          setHeadlineIdx((prev) => (prev + 1) % headlines.length)
          setTyping(true)
        }
      }
    }

    timer = setTimeout(tick, 120)
    return () => clearTimeout(timer)
  }, [headlineIdx, typing])

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen pt-[72px]"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,255,0,0.08) 0%, transparent 70%)',
      }}
    >
      <div className="content-width py-20 md:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={line}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-6"
          >
            Full-Stack Developer — Pune, India
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={line}
            className="font-display font-extrabold leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            <span className="text-text-primary">Mayank</span>
            <br />
            <span className="text-text-primary">Hansraj</span>
          </motion.h1>

          {/* Typing headline */}
          <motion.div
            variants={line}
            className="font-display font-bold mb-8"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: '1.1' }}
          >
<span style={{ color: 'var(--acid)' }}>{displayed}</span>
            <span
              className="animate-cursor-blink inline-block w-[3px] h-[1em] ml-1 align-middle"
              style={{ background: 'var(--acid)', verticalAlign: 'middle' }}
            />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={line}
            className="font-body text-muted mb-10 max-w-xl"
            style={{ fontSize: 15, lineHeight: 1.8 }}
          >
            Building scalable web applications across frontend and backend. Experienced with React, Node.js, real-time systems, and database-driven architectures. Interested in building reliable products, clean user experiences, and practical AI integrations.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={line} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="font-mono text-[11px] uppercase tracking-widest px-6 py-3 transition-all duration-200"
              style={{ background: 'var(--acid)', color: 'var(--void)' }}
            >
              View Work ↓
            </a>

          </motion.div>

          {/* Floating tech badges */}
          <motion.div variants={line} className="flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-border text-muted"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] text-muted uppercase tracking-widest">
          Scroll
        </span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, var(--muted), transparent)' }}
        />
      </div>
    </section>
  )
}
