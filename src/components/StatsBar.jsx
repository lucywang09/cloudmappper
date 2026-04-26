export default function StatsBar({ stats }) {
  const items = [
    { value: stats.total,      label: 'Services' },
    { value: stats.providers,  label: 'Cloud Providers' },
    { value: stats.categories, label: 'Categories' },
  ]

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 -mt-7 relative z-10 mb-6">
      <div className="grid grid-cols-3 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl px-3 py-4 text-center"
            style={{
              background: 'rgba(255,255,255,0.82)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.92)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
            }}
          >
            <div
              className="text-2xl sm:text-3xl font-extrabold leading-none mb-1 tabular-nums"
              style={{ color: '#06b6d4' }}
            >
              {item.value}
            </div>
            <div
              className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: '#6b7280' }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
