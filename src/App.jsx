import { useState, useEffect, useMemo } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import ResultsSection from './components/ResultsSection.jsx'
import Footer from './components/Footer.jsx'

// Replace with your deployed Azure Function URL.
const API_URL = 'https://cloud-comparison-api-ccgwdtdndmeacac8.centralus-01.azurewebsites.net/api/GetServices'

const CATEGORY_ORDER = [
  'Compute', 'Storage', 'Database', 'Networking',
  'Messaging', 'AI/ML', 'DevOps', 'Security',
]

export default function App() {
  const [services, setServices]             = useState([])
  const [searchQuery, setSearchQuery]       = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [isLoading, setIsLoading]           = useState(true)
  const [error, setError]                   = useState(null)

  // Fetch from API — no local data fallback
  useEffect(() => {
    async function loadServices() {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setServices(Array.isArray(data) ? data : [])
      } catch {
        setError(
          'Could not connect to the API. Please check your Azure Function URL is configured correctly.'
        )
      } finally {
        setIsLoading(false)
      }
    }
    loadServices()
  }, [])

  // Build ordered category list from live data
  const categories = useMemo(() => {
    const fromData = new Set(services.map(s => s.category))
    const ordered  = CATEGORY_ORDER.filter(c => fromData.has(c))
    const extras   = [...fromData].filter(c => !CATEGORY_ORDER.includes(c))
    return ['All', ...ordered, ...extras]
  }, [services])

  // Filter by search query AND active category
  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return services.filter(service => {
      const matchesSearch =
        !q ||
        [service.concept, service.aws, service.azure, service.gcp, service.description]
          .some(field => field.toLowerCase().includes(q))
      const matchesCategory =
        activeCategory === 'All' || service.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [services, searchQuery, activeCategory])

  const stats = useMemo(() => ({
    total:      services.length,
    providers:  3,
    categories: categories.length - 1, // subtract 'All'
  }), [services, categories])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0fdff' }}>
      <Navbar />
      <main className="pt-[72px]">
        <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <StatsBar stats={stats} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <ResultsSection
            services={filteredServices}
            isLoading={isLoading}
            error={error}
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            onSearchChange={setSearchQuery}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
