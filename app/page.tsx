'use client'
import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { JERSEYS, COUNTRIES } from '@/constants/jerseys'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import JerseyCard from '@/components/JerseyCard'
import Footer from '@/components/Footer'
import Ticker from '@/components/Ticker'

export default function Home() {
  const router = useRouter()

  const [filterCountry, setFilterCountry] = useState('All')
  const [filterType,    setFilterType]    = useState('All')
  const [filterKit,     setFilterKit]     = useState('All')
  const [search,        setSearch]        = useState('')

  const filtered = useMemo(() => JERSEYS.filter(j => {
    if (filterCountry !== 'All' && j.country !== filterCountry) return false
    if (filterType    !== 'All' && j.type    !== filterType)    return false
    if (filterKit     !== 'All' && j.kit     !== filterKit)     return false
    if (search && !j.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  }), [filterCountry, filterType, filterKit, search])

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
      <section id="collection" style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', margin: 0 }}>World Cup 2026</h2>
            <p style={{ fontSize: 13, color: '#aaa', margin: '4px 0 0' }}>
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          {/* Search */}
          <div style={{ position: 'relative', width: 240 }}>
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
          {(['All', ...COUNTRIES] as string[]).map(c => (
            <button key={c} onClick={() => setFilterCountry(c)} style={pill(filterCountry === c)}>{c}</button>
          ))}
         
        </div>

        {/* Grid — clicking navigates to product page */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#aaa' }}>
            <p style={{ fontSize: 18, fontWeight: 600 }}>No jerseys found</p>
            <p style={{ fontSize: 13, marginTop: 4 }}>Try different filters.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: 20,
          }}>
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
