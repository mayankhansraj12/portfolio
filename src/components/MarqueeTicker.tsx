const items = [
  'React,js',
  '✦',
  'TypeScript',
  '✦',
  'Node.js',
  '✦',
  'PostgreSQL',
  '✦',
  'Docker',
  '✦',
  'Next.js',
  '✦',
  'Tailwind CSS',
  '✦',
  'REST APIs',
  '✦',
  'MongoDB',
  '✦',
  'Open to Work',
  '✦',
  'Building for the web',
  '✦',
  'Python',
  '✦',
  'JavaScript',
  '✦',
  'DevOps',
  '✦',
  'Full-Stack Dev',
  '✦',
]

export default function MarqueeTicker() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden border-y border-border py-3"
      style={{ background: 'var(--surface)' }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[11px] uppercase tracking-widest mx-4 shrink-0 ${
              item === '✦' ? 'text-acid' : 'text-muted'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
