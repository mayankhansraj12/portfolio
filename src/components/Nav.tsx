import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/80 backdrop-blur-md border-b border-border' : ''
      }`}
      style={{ height: 72 }}
    >
      <div className="content-width flex items-center justify-between h-full">
        {/* Logo */}
        <a
          href="#"
          aria-label="Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 8,
            border: '1.5px solid #C8FF00',
            boxShadow: '0 0 10px rgba(200,255,0,0.25)',
            background: 'rgba(200,255,0,0.06)',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 10,
            letterSpacing: '0.08em',
            color: '#C8FF00',
            lineHeight: 1,
            textDecoration: 'none',
          }}
        >
          MH
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="animate-glow-pulse w-2 h-2 rounded-full bg-signal" />
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
              Open to Hire
            </span>
          </div>
          <a
            href="/MayankHansraj_Resume.pdf"
            download="MayankHansraj_Resume.pdf"
            className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-border text-muted hover:border-acid hover:text-acid transition-all duration-200"
          >
            Download Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${menuOpen ? 'translate-y-[5px] rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-text-primary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${menuOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[12px] uppercase tracking-widest text-muted hover:text-acid transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <span className="w-2 h-2 rounded-full bg-signal animate-glow-pulse" />
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
              Open to Hire
            </span>
          </div>
        </div>
      )}
    </header>
  )
}
