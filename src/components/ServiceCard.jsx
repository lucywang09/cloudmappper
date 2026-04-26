// Colour palette per category (badge background, text, dot)
const CATEGORY_BADGE = {
  Compute:    { bg: 'rgba(6,182,212,0.1)',   text: '#0e7490', dot: '#06b6d4' },
  Storage:    { bg: 'rgba(34,197,94,0.1)',   text: '#15803d', dot: '#22c55e' },
  Database:   { bg: 'rgba(249,115,22,0.1)',  text: '#c2410c', dot: '#f97316' },
  Networking: { bg: 'rgba(6,182,212,0.1)',   text: '#0e7490', dot: '#06b6d4' },
  Messaging:  { bg: 'rgba(6,182,212,0.1)',   text: '#0e7490', dot: '#06b6d4' },
  'AI/ML':    { bg: 'rgba(236,72,153,0.1)',  text: '#be185d', dot: '#ec4899' },
  DevOps:     { bg: 'rgba(245,158,11,0.1)',  text: '#b45309', dot: '#f59e0b' },
  Security:   { bg: 'rgba(239,68,68,0.1)',   text: '#b91c1c', dot: '#ef4444' },
}

// Provider row colours
const PROVIDERS = [
  {
    key:        'aws',
    label:      'AWS',
    rowBg:      'rgba(255,153,0,0.07)',
    labelColor: '#d97706',
    textColor:  '#78350f',
  },
  {
    key:        'azure',
    label:      'Azure',
    rowBg:      'rgba(6,182,212,0.08)',
    labelColor: '#0891b2',
    textColor:  '#0e7490',
  },
  {
    key:        'gcp',
    label:      'GCP',
    rowBg:      'rgba(52,168,83,0.08)',
    labelColor: '#16a34a',
    textColor:  '#14532d',
  },
]

export default function ServiceCard({ service }) {
  const badge = CATEGORY_BADGE[service.category] ?? CATEGORY_BADGE.Compute

  function onEnter(e) {
    e.currentTarget.style.transform   = 'translateY(-4px)'
    e.currentTarget.style.boxShadow   = '0 16px 48px rgba(6,182,212,0.14), 0 4px 16px rgba(0,0,0,0.05)'
    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.38)'
  }
  function onLeave(e) {
    e.currentTarget.style.transform   = 'translateY(0)'
    e.currentTarget.style.boxShadow   = '0 4px 20px rgba(0,0,0,0.06)'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.85)'
  }

  return (
    <article
      className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 cursor-default"
      style={{
        background:        'rgba(255,255,255,0.72)',
        backdropFilter:    'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border:            '1px solid rgba(255,255,255,0.85)',
        boxShadow:         '0 4px 20px rgba(0,0,0,0.06)',
        willChange:        'transform',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Category badge */}
      <span
        className="self-start inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-[5px] rounded-full uppercase tracking-wider"
        style={{ background: badge.bg, color: badge.text }}
      >
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: badge.dot }} />
        {service.category}
      </span>

      {/* Concept title + description */}
      <div className="flex-1">
        <h3
          className="text-[16px] font-bold leading-snug mb-2"
          style={{ color: '#164e63' }}
        >
          {service.concept}
        </h3>
        <p
          className="text-[13px] leading-[1.6] line-clamp-2"
          style={{ color: '#6b7280' }}
        >
          {service.description}
        </p>
      </div>

      {/* Provider rows */}
      <div className="flex flex-col gap-1.5">
        {PROVIDERS.map(({ key, label, rowBg, labelColor, textColor }) => (
          <div
            key={key}
            className="flex items-center justify-between px-3 py-2 rounded-lg"
            style={{ background: rowBg }}
          >
            <span
              className="text-[10px] font-black uppercase tracking-widest flex-shrink-0"
              style={{ color: labelColor }}
            >
              {label}
            </span>
            <span
              className="text-[12px] font-semibold text-right ml-3 leading-tight"
              style={{ color: textColor, maxWidth: '70%' }}
            >
              {service[key]}
            </span>
          </div>
        ))}
      </div>
    </article>
  )
}
