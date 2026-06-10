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

  // Sub-category priority for Clubs (priority order per user instructions)
  const clubsPriority = [
    'Barcelona', 'Manchester', 'Alnassr', 'Chelsea', 'AC Milan', 'Arsanel', 'Liverpool', 'Real', 'PSG', 'Juventus', 'Intermilan', 'InterMiami', 'Monaco'
  ]

  const displayCategoryLabel = (category: string) => category === 'Other' ? 'Others' : category

  const worldCupTeamOrder = [
    'Brazil', 'Argentina', 'France', 'Germany', 'Spain', 'England', 'Italy', 'Portugal', 'Mexico', 'Croatia', 'Japan', 'Jamaica', 'Sao Paulo', 'Morocco', 'Norway'
  ]

  const jerseyText = (j: any) => [j.country, j.name, ...(j.tags ?? [])].filter(Boolean).join(' ').toLowerCase()

  const isIPLJersey = (j: any) => {
    const text = jerseyText(j)
    return /\b(rcb|chennai|mumbai|kolkata|kolkatta|rajasthan|india)\b/i.test(text)
  }

  const getWorldCupTeam = (j: any) => {
    const text = jerseyText(j)
    if (/\bbrazil\b/i.test(text)) return 'Brazil'
    if (/\bargentina\b/i.test(text)) return 'Argentina'
    if (/\bfrance\b/i.test(text)) return 'France'
    if (/\bgermany\b/i.test(text)) return 'Germany'
    if (/\bspain\b/i.test(text)) return 'Spain'
    if (/\bengland\b/i.test(text)) return 'England'
    if (/\bitaly\b/i.test(text)) return 'Italy'
    if (/\bportugal\b/i.test(text)) return 'Portugal'
    if (/\bmexico\b/i.test(text)) return 'Mexico'
    if (/\bcroatia\b/i.test(text)) return 'Croatia'
    if (/\bjapan\b/i.test(text)) return 'Japan'
    if (/\bjamaica\b/i.test(text)) return 'Jamaica'
    if (/\bmorocco\b/i.test(text)) return 'Morocco'
    if (/\bnorway\b/i.test(text)) return 'Norway'
    if (/\bsao\s*paulo\b|\bsao\b/i.test(text)) return 'Sao Paulo'
    return ''
  }

  const isWorldCupJersey = (j: any) => {
    if (isIPLJersey(j)) return false
    return Boolean(getWorldCupTeam(j))
  }

  const getClubLabel = (j: any) => {
    const text = jerseyText(j)
    if (/\bintermiami\b/i.test(text)) return 'InterMiami'
    if (/\balnassr\b/i.test(text)) return 'Alnassr'
    if (/\barsanel\b|\barsenal\b/i.test(text)) return 'Arsanel'
    if (/\bac\s*milan\b|\bacmilan\b/i.test(text)) return 'AC Milan'
    if (/\bintermilan\b/i.test(text)) return 'Intermilan'
    if (/\bbarcelona\b/i.test(text)) return 'Barcelona'
    if (/\bchelsea\b/i.test(text)) return 'Chelsea'
    if (/\bliverpool\b/i.test(text)) return 'Liverpool'
    if (/\bjuventus\b/i.test(text)) return 'Juventus'
    if (/\bpsg\b/i.test(text) || /paris\s*saint\s*germain/i.test(text)) return 'PSG'
    if (/\bmonaco\b/i.test(text)) return 'Monaco'
    if (/\batletico\b|\bateltico\b/i.test(text)) return 'Atletico'
    if (/\bpepsi\b/i.test(text)) return 'Pepsi'
    if (/\b(united)\b/i.test(text)) return 'United'
    if (/\broma\b/i.test(text)) return 'Roma'
    if (/\bbayern\b/i.test(text)) return 'Bayern'
    if (/\bajax\b/i.test(text)) return 'Ajax'
    if (/\bparma\b/i.test(text)) return 'Parma'
    if (/\bnewcastle\b/i.test(text)) return 'Newcastle'
    if (/\bceltic\b/i.test(text)) return 'Celtic'
    if (/\bboca\b/i.test(text)) return 'Boca'
    if (/\bsporting\b/i.test(text)) return 'Sporting'
    if (/\bfiorentina\b/i.test(text)) return 'Fiorentina'
    if (/\bvalencia\b/i.test(text)) return 'Valencia'
    if (/\blazio\b/i.test(text)) return 'Lazio'
    return ''
  }

  const isClubJersey = (j: any) => Boolean(getClubLabel(j))

  const isFullSleeveJersey = (j: any) => /full\s*sl?eeve|fullsleeve/i.test(jerseyText(j))
  const isJacketJersey = (j: any) => /\bjacket\b/i.test(jerseyText(j))
  const isF1Jersey = (j: any) => /\bf1\b/i.test(jerseyText(j)) || /formula\s*1/i.test(jerseyText(j))
  const isShortsJersey = (j: any) => /\bshorts\b/i.test(jerseyText(j))
  const isCropTopJersey = (j: any) => /\bcrop\b/i.test(jerseyText(j))

  function getMainCategory(j: any) {
    if (isWorldCupJersey(j)) return 'World Cup'
    if (isClubJersey(j)) return 'Clubs'
    if (isFullSleeveJersey(j)) return 'FullSleeve'
    if (isJacketJersey(j)) return 'Jackets'
    if (isF1Jersey(j)) return 'F1'
    if (isShortsJersey(j)) return 'Shorts'
    if (isIPLJersey(j)) return 'IPL'
    if (isCropTopJersey(j)) return 'Crop Top'
    return 'Other'
  }

  function getSubCategory(j: any, mainCat: string) {
    if (mainCat === 'World Cup') return getWorldCupTeam(j)
    if (mainCat === 'Clubs') return getClubLabel(j)
    return ''
  }

  const getSubCategories = (mainCat: string) => {
    if (mainCat === 'All' || mainCat === 'IPL') return []

    if (mainCat === 'World Cup') {
      return worldCupTeamOrder.filter(team =>
        JERSEYS.some(j => getMainCategory(j) === 'World Cup' && getSubCategory(j, 'World Cup') === team)
      )
    }

    if (mainCat === 'Clubs') {
      const clubSet = new Set(
        JERSEYS.filter(j => getMainCategory(j) === 'Clubs')
          .map(j => getSubCategory(j, 'Clubs'))
          .filter(Boolean) as string[]
      )
      const ordered = clubsPriority.filter(club => clubSet.has(club))
      const remaining = [...clubSet].filter(club => !clubsPriority.includes(club)).sort()
      return [...ordered, ...remaining]
    }

    return []
  }

  const mainCategories = useMemo(() => {
    const catSet = new Set<string>(JERSEYS.map(j => getMainCategory(j)))
    const ordered = categoryPriority.filter(c => c === 'All' || catSet.has(c))
    return ordered
  }, [])

  const [filterMainCategory, setFilterMainCategory] = useState('All')
  const [filterSubCategory, setFilterSubCategory] = useState('All')
  const [filterStock, setFilterStock] = useState('In Stock')
  const [search, setSearch] = useState('')

  // Reset all filters and clear search
  const resetFilters = () => {
    setFilterMainCategory('All')
    setFilterSubCategory('All')
    setFilterStock('All')
    setSearch('')
  }

  const subCategories = useMemo(() => getSubCategories(filterMainCategory), [filterMainCategory])

  // Reset sub-category when main category changes
  useEffect(() => {
    setFilterSubCategory('All')
  }, [filterMainCategory])

  const highPriorityJerseyNames = [
    'Spain 2026 Away Kit Pedri Embroidery Premium',
    'Portugal 2026 Black Kit Ronaldo Fullsleeve Polo Embroidery Premium',
    'Argentina 2026 Home Kit Messi Embroidery With Knitted Rib Premium',
    'Argentina 2026 Away Kit Messi Embroidery Premium',
    'Argentina 2026 Away Kit Messi',
    'Portugal 2026 Away Kit Ronaldo Embroidery Premium',
    'Brazil 2026 Away Kit Neymer Embroidery Premium',
    'Portugal 2026 Away Kit Ronaldo',
    'Brazil 2026 Home Kit Neymer Embroidery Premium',
    'Germany 2026 Home Kit Writz Knitted Polo Embroidery Premium',
    'Portugal 2026 Home Kit Ronaldo Embroidery Premium',
    'Argentina 2026 Home Kit Messi Embroidery Premium',
    'Spain 2026 Away Kit Pedri',
    'Brazil 2026 Home Kit Neymer',
    'Argentina 2026 Home Kit Messi',
    'France 2026 Home Kit Mbappe Polo',
  ]

  const filtered = useMemo(() => {
    const items = JERSEYS.filter(j => {
      const mainCategory = getMainCategory(j)
      const subCategory = getSubCategory(j, mainCategory)
      if (filterMainCategory !== 'All' && mainCategory !== filterMainCategory) return false
      if (filterMainCategory !== 'IPL' && filterSubCategory !== 'All' && subCategory !== filterSubCategory) return false
      if (filterStock === 'In Stock' && !j.inStock) return false
      if (filterStock === 'Out of Stock' && j.inStock) return false
      if (search && !j.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })

    const shouldApplyPriority = filterMainCategory === 'All' || (filterMainCategory === 'World Cup' && filterSubCategory === 'All') || (filterMainCategory === 'IPL')
    if (!shouldApplyPriority) return items

    return items
      .map((j, index) => ({ jersey: j, index, priority: highPriorityJerseyNames.indexOf(j.name), featured: j.featured || false }))
      .sort((a, b) => {
        // For IPL, sort by featured status first
        if (filterMainCategory === 'IPL') {
          if (a.featured !== b.featured) {
            return (a.featured ? 0 : 1) - (b.featured ? 0 : 1)
          }
        }
        const aPriority = a.priority === -1 ? Number.MAX_SAFE_INTEGER : a.priority
        const bPriority = b.priority === -1 ? Number.MAX_SAFE_INTEGER : b.priority
        if (aPriority !== bPriority) return aPriority - bPriority
        return a.index - b.index
      })
      .map(item => item.jersey)
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
          {/* Search + Clear */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', width: '100%', maxWidth: 360 }} className="w-full sm:w-auto">
            <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
              <input
                type="text" 
                placeholder="👉 You will find any jersey here! 👈" 
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '8px 12px 8px 32px',
                  fontSize: 13, borderRadius: 8, outline: 'none',
                  border: '2px solid #d0d0d0', background: 'white', color: '#111',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff6b35';
                  e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 53, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d0d0d0';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', opacity: 0.35 }}
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <style>{`
                input {
                  animation: shimmer 2s infinite;
                }
                input::placeholder {
                  color: #ff6b35;
                  font-weight: 600;
                  opacity: 0.85;
                  letter-spacing: 0.3px;
                  animation: placeholderFlash 1.5s infinite;
                }
                @keyframes placeholderFlash {
                  0%, 100% {
                    opacity: 1;
                    color: #ff6b35;
                  }
                  50% {
                    opacity: 0.4;
                    color: #ff8c61;
                  }
                }
                @keyframes shimmer {
                  0%, 100% {
                    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.1);
                  }
                  50% {
                    box-shadow: 0 0 12px 4px rgba(255, 107, 53, 0.2);
                  }
                }
              `}</style>
            </div>
            <button
              onClick={resetFilters}
              style={{
                padding: '8px 12px', borderRadius: 8, border: '1px solid #d0d0d0', background: '#fff', color: '#111',
                cursor: 'pointer', fontSize: 13, fontWeight: 600
              }}
            >
              Clear
            </button>
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
