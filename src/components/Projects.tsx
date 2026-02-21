import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import type { Project } from '../types'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col border border-border overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      {/* Thumbnail zone */}
      <div
        className="h-52 relative overflow-hidden bg-elevated"
      >
        {project.thumbnail ? (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* subtle dark overlay to make category chip readable */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 60%)' }} />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient}`} />
        )}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 border border-border text-muted bg-void/60">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-acid transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-body text-muted text-sm mb-4 flex-1" style={{ lineHeight: 1.7 }}>
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border border-border text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] text-muted hover:text-acid transition-colors uppercase tracking-widest"
          >
            <Github size={13} />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[10px] text-muted hover:text-acid transition-colors uppercase tracking-widest"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="content-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-10">
            — Projects
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2
              className="font-display font-extrabold leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Work I've
              <br />
              <span style={{ color: 'var(--acid)' }}>Shipped.</span>
            </h2>
            <p className="font-body text-muted text-sm max-w-xs" style={{ lineHeight: 1.7 }}>
              End-to-end projects covering the full web stack. All repositories are public on GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
