import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border" style={{ background: 'var(--surface)' }}>
      <div className="content-width py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="font-display font-extrabold text-sm"
            style={{ color: 'var(--acid)' }}
          >
            MH
          </span>
          <span className="font-mono text-[10px] text-muted">
            © {year} Mayank Hansraj. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mayankhansraj12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-acid transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href="https://linkedin.com/in/mayankhansraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-acid transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:mayankhansraj12@gmail.com"
            className="text-muted hover:text-acid transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>

        <span className="font-mono text-[10px] text-muted">
          Built with React + Vite + Tailwind
        </span>
      </div>
    </footer>
  )
}
