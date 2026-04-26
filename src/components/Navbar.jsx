export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(6,182,212,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center">
        <div className="flex items-center gap-3">
          {/* Gradient cloud icon */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
          >
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>

          <div>
            <div
              className="text-[17px] font-bold leading-tight tracking-tight"
              style={{ color: '#164e63' }}
            >
              CloudMapper
            </div>
            <div
              className="text-[11px] font-medium leading-tight"
              style={{ color: '#9ca3af' }}
            >
              Find any cloud service instantly
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
