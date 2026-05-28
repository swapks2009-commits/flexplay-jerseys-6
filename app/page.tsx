'use client'
import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { JERSEYS } from '@/constants/jerseys'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import JerseyCard from '@/components/JerseyCard'
import Footer from '@/components/Footer'
import Ticker from '@/components/Ticker'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Scroll to jersey grid on page load
    const gridElement = document.getElementById('jerseyGrid')
    if (gridElement) {
      setTimeout(() => {
        const elementPosition = gridElement.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - 20 // Small top padding
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }, 100)
    }
  }, [])

  const categoryPriority = ['All', 'World Cup', 'Clubs', 'FullSleeve', 'Jackets', 'F1', 'Shorts', 'IPL', 'Crop Top', 'Other']

  // Sub-category priority for Clubs
  const clubsPriority = ['Barcelona', 'Manchester', 'Alnassr', 'Chelsea', 'Acmilan', 'Arsanel', 'Liverpool', 'Real', 'Psg', 'Juventus', 'Intermilan', 'Intermiami', 'Monaco']

  // Get unique main categories and sort them by the requested priority sequence.
  const mainCategories = useMemo(() => {
    const cats = [...new Set(JERSEYS.map(j => j.mainCategory))]
    const ordered = categoryPriority.filter(c => c === 'All' || cats.includes(c))
    return ordered
  }, [])

  const displayCategoryLabel = (category: string) => category === 'Other' ? 'Others' : category

  const getSubCategories = (mainCat: string) => {
    if (mainCat === 'All') return []
    const subCats = JERSEYS
      .filter(j => j.mainCategory === mainCat)
      .map(j => j.subCategory)
      .filter((v): v is string => !!v)
    const uniqueSubCats = [...new Set(subCats)]
    
    // Apply priority ordering for Clubs
    if (mainCat === 'Clubs') {
      const ordered = clubsPriority.filter(c => uniqueSubCats.includes(c))
      const remaining = uniqueSubCats.filter(c => !clubsPriority.includes(c)).sort()
      return [...ordered, ...remaining]
    }
    
    return uniqueSubCats.sort()
  }

  const [filterMainCategory, setFilterMainCategory] = useState('All')
  const [filterSubCategory, setFilterSubCategory] = useState('All')
  const [filterStock, setFilterStock] = useState('All')
  const [search, setSearch] = useState('')

  const subCategories = useMemo(() => getSubCategories(filterMainCategory), [filterMainCategory])

  // Reset sub-category when main category changes
  useEffect(() => {
    setFilterSubCategory('All')
  }, [filterMainCategory])

  const filtered = useMemo(() => {
    const results = JERSEYS.filter(j => {
      if (filterMainCategory !== 'All' && j.mainCategory !== filterMainCategory) return false
      if (filterMainCategory !== 'IPL' && filterSubCategory !== 'All' && j.subCategory !== filterSubCategory) return false
      if (filterStock === 'In Stock' && !j.inStock) return false
      if (filterStock === 'Out of Stock' && j.inStock) return false
      if (search && !j.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
    
    // Sort with featured items first
    return results.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
  }, [filterMainCategory, filterSubCategory, filterStock, search])

  const pill = (active: boolean): React.CSSProperties => ({
    background: active ? '#111' : '#fff',
    color:      active ? '#fff' : '#444',
    border:     `1px solid ${active ? '#111' : '#d0d0d0'}`,
    padding: '4px 12px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
  })

  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      <Navbar />
      <Ticker />
      <Hero />

      {/* Collection */}
      <section id="collection" className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10" style={{ maxWidth: 1200 }}>

        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', margin: 0 }} className="sm:text-2xl">Jersey Collection</h2>
            <p style={{ fontSize: 12, color: '#aaa', margin: '4px 0 0' }} className="sm:text-sm">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          {/* Search */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 240 }} className="w-full sm:w-auto">
            <input
              type="text" placeholder="Search jerseys…" value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '8px 12px 8px 32px',
                fontSize: 13, borderRadius: 8, outline: 'none',
                border: '1px solid #d0d0d0', background: 'white', color: '#111',
                boxSizing: 'border-box',
              }}
            />
            <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', opacity: 0.35 }}
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
        </div>

        {/* Filter row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid #f0f0f0' }}>
          {mainCategories.map(category => (
            <button key={category} onClick={() => setFilterMainCategory(category)} style={pill(filterMainCategory === category)}>{displayCategoryLabel(category)}</button>
          ))}
        </div>

        {/* Sub-filter row */}
        {filterMainCategory !== 'All' && filterMainCategory !== 'IPL' && subCategories.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid #f0f0f0' }}>
            <button onClick={() => setFilterSubCategory('All')} style={pill(filterSubCategory === 'All')}>All</button>
            {subCategories.map(subCategory => (
              <button key={subCategory} onClick={() => setFilterSubCategory(subCategory)} style={pill(filterSubCategory === subCategory)}>{subCategory}</button>
            ))}
          </div>
        )}

        {/* Stock Filter row */}
        <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid #f0f0f0' }}>
          <h3 style={{ fontSize: 12, fontWeight: 600, color: '#111', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' }}>Availability</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {(['All', 'In Stock', 'Out of Stock'] as string[]).map(stock => (
              <button key={stock} onClick={() => setFilterStock(stock)} style={pill(filterStock === stock)}>{stock}</button>
            ))}
          </div>
        </div>

        {/* Grid — clicking navigates to product page */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#aaa' }}>
            <p style={{ fontSize: 18, fontWeight: 600 }}>No jerseys found</p>
            <p style={{ fontSize: 13, marginTop: 4 }}>Try different filters.</p>
          </div>
        ) : (
          <div
            id="jerseyGrid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
            }}
            className="sm:gap-4 md:gap-5 lg:gap-6"
          >
            {filtered.map(jersey => (
              <JerseyCard
                key={jersey.id}
                jersey={jersey}
                onClick={() => router.push(`/jersey/${jersey.id}`)}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
