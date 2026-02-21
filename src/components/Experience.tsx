import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'
import { experienceItems } from '../data/experience'
import type { ExperienceItem } from '../types'

function CertCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-5 group"
    >
      {/* Icon column */}
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 rounded-sm border border-border flex items-center justify-center shrink-0 group-hover:border-acid transition-colors duration-200"
          style={{ background: 'var(--elevated)' }}
        >
          <Award size={15} className="text-muted group-hover:text-acid transition-colors duration-200" />
        </div>
        {index < 11 && (
          <div className="w-px flex-1 mt-2" style={{ background: 'var(--border)', minHeight: 20 }} />
        )}
      </div>

      {/* Content */}
      <div className="pb-7">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-text-primary text-base hover:text-acid transition-colors duration-200 flex items-center gap-1.5"
            >
              {item.title}
              <ExternalLink size={12} className="shrink-0 opacity-60" />
            </a>
          ) : (
            <h3 className="font-display font-bold text-text-primary text-base">
              {item.title}
            </h3>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-muted">{item.subtitle}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="font-mono text-[11px]" style={{ color: 'var(--acid)' }}>
            {item.date}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section-padding border-t border-border">
      <div className="content-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-10">
            — Certifications
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2
              className="font-display font-extrabold leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              What I've
              <br />
              <span style={{ color: 'var(--acid)' }}>earned.</span>
            </h2>
            <p className="font-body text-muted text-sm max-w-xs" style={{ lineHeight: 1.7 }}>
              Click any certificate name to view the credential.
            </p>
          </div>

          <div className="max-w-2xl">
            {experienceItems.map((item, i) => (
              <CertCard key={i} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
