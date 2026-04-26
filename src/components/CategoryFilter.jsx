export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="py-5">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1.5">
        {categories.map(cat => {
          const active = cat === activeCategory
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="flex-shrink-0 px-4 py-[7px] rounded-full text-sm font-semibold transition-all duration-200"
              style={
                active
                  ? {
                      background: '#06b6d4',
                      color: '#ffffff',
                      border: '1.5px solid transparent',
                      boxShadow: '0 4px 14px rgba(6,182,212,0.38)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.85)',
                      color: '#06b6d4',
                      border: '1.5px solid rgba(6,182,212,0.22)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
                    }
              }
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}
