export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{
        background:  '#f0fdff',
        borderTop:   '1px solid rgba(6,182,212,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-1.5">
        {/* Logo row */}
        <div className="flex items-center gap-2.5 mb-1">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
          >
            <svg width="15" height="15" fill="white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>
          <span className="text-[15px] font-bold" style={{ color: '#164e63' }}>
            CloudMapper
          </span>
        </div>

        <p className="text-sm" style={{ color: '#6b7280' }}>
          Find any cloud service instantly
        </p>

        <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>
          Built for cloud learners everywhere
        </p>
      </div>
    </footer>
  )
}
