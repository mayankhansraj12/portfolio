import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react'

const EMAIL = 'mayankhansraj12@gmail.com'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/mayankhansraj12',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mayankhansraj',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)
  // Replace 'YOUR_FORM_ID' with actual Formspree form ID before deploying
  const [state, handleSubmit] = useForm('YOUR_FORM_ID')

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="content-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-10">
            — Contact
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — CTA */}
            <div>
              <h2
                className="font-display font-extrabold leading-[0.92] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Let's build
                <br />
                <span style={{ color: 'var(--acid)' }}>something.</span>
              </h2>
              <p className="font-body text-muted mb-8 max-w-sm" style={{ fontSize: 15, lineHeight: 1.8 }}>
                Open to full-time roles, internships, and interesting projects.
                Drop me a line and I'll reply within 24 hours.
              </p>

              {/* Email chip */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 border border-border px-5 py-3 mb-8 hover:border-acid transition-all duration-200 group w-full max-w-sm"
                style={{ background: 'var(--surface)' }}
              >
                <span className="font-mono text-[12px] text-text-primary flex-1 text-left">
                  {EMAIL}
                </span>
                {copied ? (
                  <Check size={14} className="text-acid shrink-0" />
                ) : (
                  <Copy size={14} className="text-muted group-hover:text-acid shrink-0 transition-colors" />
                )}
              </button>
              {copied && (
                <p className="font-mono text-[10px] text-acid uppercase tracking-widest -mt-4 mb-4">
                  Copied to clipboard ✓
                </p>
              )}

              {/* Socials */}
              <div className="flex items-center gap-5">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[10px] text-muted hover:text-acid transition-colors uppercase tracking-widest"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {state.succeeded ? (
                <div
                  className="border border-border p-8 font-mono text-[12px]"
                  style={{ background: 'var(--surface)' }}
                >
                  <p className="text-acid mb-1">Message sent ✓</p>
                  <p className="text-muted">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full bg-surface border border-border px-4 py-3 font-mono text-[13px] text-text-primary placeholder-muted focus:outline-none focus:border-acid transition-colors"
                      placeholder="Your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="font-mono text-[10px] text-signal mt-1" />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full bg-surface border border-border px-4 py-3 font-mono text-[13px] text-text-primary placeholder-muted focus:outline-none focus:border-acid transition-colors"
                      placeholder="your@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="font-mono text-[10px] text-signal mt-1" />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-surface border border-border px-4 py-3 font-mono text-[13px] text-text-primary placeholder-muted focus:outline-none focus:border-acid transition-colors resize-none"
                      placeholder="What are you building?"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="font-mono text-[10px] text-signal mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full font-mono text-[11px] uppercase tracking-widest py-3 transition-all duration-200 disabled:opacity-50"
                    style={{ background: 'var(--acid)', color: 'var(--void)' }}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
