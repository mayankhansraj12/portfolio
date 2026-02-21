import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const terminalLines = [
  '> name: Mayank Hansraj',
  '> role: Full-Stack Developer',
  '> location: Pune, India',
  '> education: MIT-ADT University (2022–26)',
  '> languages: TypeScript, JavaScript, Python, C++',
  '> interests: [web development, system design, devops]',
  '> status: open for opportunities',
  '> coffee: true',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="content-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-10">
            — About
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-16 items-start">
            {/* Prose */}
            <div>
              <h2
                className="font-display font-extrabold leading-[0.92] tracking-tight mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Just a guy who
                <br />
                <span style={{ color: 'var(--acid)' }}>ships things.</span>
              </h2>

              <div className="font-body text-muted space-y-5" style={{ fontSize: 15, lineHeight: 1.8 }}>
                <p>
                 Final-year Computer Science undergraduate with hands-on experience in full-stack and backend development using the
MERN stack. Comfortable building APIs, authentication systems, and database-driven applications. Actively exploring
DevOps, cloud infrastructure, and AI integrations. Strong problem-solving mindset with the ability to learn quickly and
contribute effectively in team environments.

                </p>
              </div>
            </div>

            {/* Terminal card */}
            <div
              className="rounded-sm border border-border overflow-hidden font-mono text-[12px]"
              style={{ background: 'var(--surface)' }}
            >
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-signal opacity-80" />
                <span className="w-3 h-3 rounded-full" style={{ background: '#F5A623', opacity: 0.8 }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#7ED321', opacity: 0.8 }} />
                <span className="ml-3 text-muted text-[10px] uppercase tracking-widest">
                  about.txt
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 space-y-2">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                    className={
                      line.includes('open for opportunities')
                        ? 'text-acid'
                        : line.includes('>')
                          ? 'text-text-primary'
                          : 'text-muted'
                    }
                  >
                    {line}
                  </motion.div>
                ))}
                <div className="pt-2 flex items-center gap-1">
                  <span className="text-acid">{'>'}</span>
                  <span
                    className="animate-cursor-blink inline-block w-[8px] h-[14px] ml-1"
                    style={{ background: 'var(--acid)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
