const PROVIDER_BADGES = [
  {
    label: 'AWS',
    dot:    '#ff9900',
    bg:     'rgba(255,153,0,0.1)',
    border: 'rgba(255,153,0,0.35)',
    color:  '#92400e',
  },
  {
    label: 'Azure',
    dot:    '#06b6d4',
    bg:     'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.3)',
    color:  '#0e7490',
  },
  {
    label: 'GCP',
    dot:    '#34a853',
    bg:     'rgba(52,168,83,0.1)',
    border: 'rgba(52,168,83,0.3)',
    color:  '#14532d',
  },
]

export default function Hero({ searchQuery, onSearchChange }) {
  function handleFocus(e) {
    e.target.style.borderColor = '#06b6d4'
    e.target.style.boxShadow =
      '0 0 0 3px rgba(6,182,212,0.15), 0 8px 32px rgba(6,182,212,0.1)'
  }
  function handleBlur(e) {
    e.target.style.borderColor = 'rgba(6,182,212,0.18)'
    e.target.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'
  }

  return (
    <section
      className="py-20 sm:py-28 px-4"
      style={{
        background:
          'linear-gradient(160deg, #f0fdff 0%, #ecfeff 48%, #f0fdff 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
          <span className="text-gradient-indigo">Map Any Cloud Service</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg font-medium mb-10 leading-relaxed"
          style={{ color: '#6b7280' }}
        >
          Search across{' '}
          <span style={{ color: '#164e63', fontWeight: 700 }}>AWS</span>,{' '}
          <span style={{ color: '#164e63', fontWeight: 700 }}>Azure</span>, and{' '}
          <span style={{ color: '#164e63', fontWeight: 700 }}>GCP</span>
          {' '}— find equivalent services instantly
        </p>

        {/* Search bar */}
        <div className="relative mb-8">
          {/* Search icon */}
          <span className="absolute inset-y-0 left-5 flex items-center pointer-events-none z-10">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9ca3af"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>

          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Search — lambda, S3, cosmos, kubernetes, IAM…"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full pl-14 pr-12 py-4 text-[15px] rounded-2xl outline-none transition-all duration-200 placeholder:text-gray-400"
            style={{
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(6,182,212,0.18)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              color: '#164e63',
            }}
          />

          {/* Clear button */}
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-4 flex items-center"
              aria-label="Clear search"
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(6,182,212,0.1)' }}
              >
                <svg
                  width="9"
                  height="9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#06b6d4"
                  strokeWidth="2.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          )}
        </div>

        {/* Provider badges */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {PROVIDER_BADGES.map(({ label, dot, bg, border, color }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: bg, border: `1.5px solid ${border}`, color }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: dot }}
              />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
