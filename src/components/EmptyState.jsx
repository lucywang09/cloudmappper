const SUGGESTIONS = ['lambda', 'storage', 'kubernetes']

export default function EmptyState({ searchQuery, onSearchChange }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">

      {/* Pure-CSS cloud + magnifier illustration */}
      <div className="relative w-40 h-32 mb-8 select-none" aria-hidden="true">
        {/* Cloud base */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 132, height: 58, background: 'rgba(6,182,212,0.07)' }}
        />
        {/* Left bump */}
        <div
          className="absolute rounded-full"
          style={{ width: 72, height: 72, bottom: 26, left: 10, background: 'rgba(6,182,212,0.1)' }}
        />
        {/* Right bump */}
        <div
          className="absolute rounded-full"
          style={{ width: 56, height: 56, bottom: 26, right: 8, background: 'rgba(6,182,212,0.1)' }}
        />
        {/* Centre bump */}
        <div
          className="absolute rounded-full left-1/2 -translate-x-1/2"
          style={{ width: 62, height: 62, bottom: 32, background: 'rgba(6,182,212,0.13)' }}
        />
        {/* Magnifying glass SVG */}
        <svg
          className="absolute top-0 right-1"
          width="46"
          height="46"
          fill="none"
          viewBox="0 0 46 46"
        >
          <circle cx="20" cy="20" r="12" stroke="#67e8f9" strokeWidth="3" />
          <path d="M30 30l12 12" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" />
          {/* Cross inside glass */}
          <path d="M15.5 20h9M20 15.5v9" stroke="#a5f3fc" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: '#164e63' }}>
        No services found
      </h3>

      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: '#6b7280', maxWidth: 280 }}
      >
        {searchQuery ? (
          <>
            No results for{' '}
            <strong style={{ color: '#164e63' }}>"{searchQuery}"</strong>.{' '}
          </>
        ) : null}
        Try searching for:
      </p>

      {/* Clickable suggestions */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {SUGGESTIONS.map(s => (
          <button
            key={s}
            onClick={() => onSearchChange(s)}
            className="px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-opacity duration-150 hover:opacity-75"
            style={{
              background: 'rgba(6,182,212,0.08)',
              color:      '#06b6d4',
              border:     '1px solid rgba(6,182,212,0.18)',
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
