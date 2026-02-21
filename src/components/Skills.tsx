import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skillCategories } from '../data/skills'
import type { Skill } from '../types'

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      {/* proficiency dot */}
      {skill.level === 'proficient' ? (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: 'var(--acid)' }}
        />
      ) : (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0 border border-muted"
          style={{ borderStyle: 'dashed' }}
        />
      )}
      <i className={`${skill.icon} colored text-lg`} title={skill.name} />
      <span
        className={'font-mono text-[11px] tracking-wide ' + (skill.level === 'learning' ? 'text-muted' : 'text-text-primary')}
      >
        {skill.name}
      </span>
      {skill.level === 'learning' && (
        <span className="font-mono text-[9px] text-muted uppercase tracking-widest border border-border px-1 py-0.5">
          learning
        </span>
      )}
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="content-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-10">
            — Skills
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2
              className="font-display font-extrabold leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              The stack
              <br />
              <span style={{ color: 'var(--acid)' }}>I work with.</span>
            </h2>
            <div className="flex items-center gap-5 font-mono text-[10px] text-muted uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--acid)' }} />
                Proficient
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full border border-muted" style={{ borderStyle: 'dashed' }} />
                Learning
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: ci * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted mb-3 pb-2 border-b border-border">
                  {cat.label}
                </p>
                <div className="space-y-0.5">
                  {cat.skills.map((skill) => (
                    <SkillChip key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
