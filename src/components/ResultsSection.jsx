import ServiceCard from './ServiceCard.jsx'
import EmptyState from './EmptyState.jsx'

export default function ResultsSection({
  services,
  isLoading,
  error,
  searchQuery,
  activeCategory,
  onSearchChange,
}) {
  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-3">
        <div
          className="w-10 h-10 rounded-full border-4 animate-spin"
          style={{
            borderColor:    'rgba(6,182,212,0.18)',
            borderTopColor: '#06b6d4',
          }}
        />
        <p className="text-sm font-medium" style={{ color: '#6b7280' }}>
          Loading services…
        </p>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center pb-20">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: 'rgba(6,182,212,0.1)' }}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#0891b2" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: '#164e63' }}>
          Connection Error
        </h3>
        <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#6b7280' }}>
          {error}
        </p>
      </div>
    )
  }

  const hasFilters = searchQuery || activeCategory !== 'All'
  const count      = services.length

  return (
    <section className="pb-20">
      {/* Result count + active filter chips */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
        <p className="text-sm font-medium" style={{ color: '#6b7280' }}>
          {count === 0
            ? 'No results'
            : `${count} service${count !== 1 ? 's' : ''} found`}
        </p>

        {hasFilters && (
          <div className="flex items-center gap-2 flex-wrap">
            {searchQuery && (
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(6,182,212,0.09)', color: '#06b6d4' }}
              >
                "{searchQuery}"
              </span>
            )}
            {activeCategory !== 'All' && (
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(6,182,212,0.09)', color: '#0891b2' }}
              >
                {activeCategory}
              </span>
            )}
          </div>
        )}
      </div>

      {count === 0 ? (
        <EmptyState searchQuery={searchQuery} onSearchChange={onSearchChange} />
      ) : (
        // key re-mounts the grid whenever filters change, re-triggering the animation
        <div
          key={`${searchQuery}-${activeCategory}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-up"
        >
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  )
}
