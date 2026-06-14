'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { JERSEYS } from '@/constants/jerseys'
import type { Jersey } from '@/constants/jerseys'

const RECOMMENDED_JERSEY_IDS = [
  'spain-2026-away-kit-pedri-embroidery',
  'spain-2026-home-kit-pedri-embroidery-premium-1',
  'argentina-2026-away-kit-messi-embroidery-premium-2',
  'argentina-2026-home-kit-messi-1',
  'portugal-2026-home-kit-ronaldo-embroidery-premium-3',
  'portugal-2026-away-kit-ronaldo-embroidery-premium-1',
  'brazil-2026-home-kit-neymer-embroidery-premium',
  'brazil-2026-away-kit-neymer-embroidery-premium-1',
  'france-2026-home-kit-mbappe-polo-embroidery-premium-1',
  'france-2026-away-kit-mbappe-embroidery-premium',
  'portugal-2026-black-kit-ronaldo-fullsleeve-polo-embroidery-premium-2',
  'germany-2026-home-kit-writz-knitted-polo-embroidery-premium-1',
]

function ProductImage({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false)
  const isReal = src && !src.startsWith('/images/jerseys/') && !src.endsWith('.svg')
  
  if (!isReal || failed) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#f7f7f7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: '#bbb'
      }}>
        Image
      </div>
    )
  }
  
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      onError={() => setFailed(true)}
    />
  )
}

function JerseyCard({ jersey, onClick }: { jersey: Jersey; onClick: () => void }) {
  const discount = Math.round(((jersey.originalPrice - jersey.discountedPrice) / jersey.originalPrice) * 100)
  const mainImage = (jersey.images ?? []).find(u => u && !u.endsWith('.svg') && (u.startsWith('http') || u.startsWith('/'))) || ''
  
  // Check if any size is in stock
  const hasAvailableSize = Object.values(jersey.sizeStock ?? {}).some(inStock => inStock) || !Object.keys(jersey.sizeStock ?? {}).length
  
  return (
    <button
      onClick={onClick}
      style={{
        background: 'white',
        border: 'none',
        borderRadius: 8,
        overflow: 'hidden',
        cursor: 'pointer',
        flex: '0 0 auto',
        width: '100%',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px)'
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
      }}
    >
      {/* Image container */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden', background: '#f7f7f7' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ProductImage src={mainImage} alt={jersey.name} />
        </div>
        
        {/* Sale badge */}
        {discount > 0 && (
          <div style={{
            position: 'absolute',
            top: 8,
            left: 8,
            background: '#111',
            color: 'white',
            padding: '4px 10px',
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 700,
            zIndex: 2
          }}>
            Sale
          </div>
        )}
      </div>
      
      {/* Details */}
      <div style={{ padding: '12px 10px', textAlign: 'left' }}>
        <h3 style={{
          fontSize: 12,
          fontWeight: 600,
          color: '#111',
          margin: '0 0 6px',
          lineHeight: 1.4,
          minHeight: '32px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {jersey.name}
        </h3>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 6,
          flexWrap: 'wrap',
        }}>
          {discount > 0 && (
            <span style={{ fontSize: 11, textDecoration: 'line-through', color: '#aaa' }}>
              Rs. {(jersey.originalPrice ?? 0).toLocaleString('en-IN')}
            </span>
          )}
        </div>
        
        <p style={{
          fontSize: 13,
          fontWeight: 700,
          color: '#111',
          margin: '4px 0 8px',
        }}>
          Rs. {(jersey.discountedPrice ?? 0).toLocaleString('en-IN')}.00
        </p>
        
        {/* Stock status */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 8,
        }}>
          <span style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: hasAvailableSize ? '#22c55e' : '#f87171',
            display: 'inline-block',
          }} />
          <span style={{
            fontSize: 11,
            color: hasAvailableSize ? '#16a34a' : '#ef4444',
            fontWeight: 600,
          }}>
            {hasAvailableSize ? 'In stock' : 'Sold out'}
          </span>
        </div>
        
        {/* Size badges - show first 3 available sizes */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
        }}>
          {(jersey.sizes ?? []).slice(0, 3).map((size) => (
            <span
              key={size}
              style={{
                fontSize: 10,
                padding: '2px 6px',
                background: '#f5f5f5',
                borderRadius: 3,
                color: '#555',
              }}
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

export default function YouMightAlsoLike({ currentJerseyId }: { currentJerseyId: string }) {
  const router = useRouter()
  const [scrollPos, setScrollPos] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  
  // Get recommended jerseys, excluding current jersey
  const recommendedJerseys = RECOMMENDED_JERSEY_IDS
    .map(id => JERSEYS.find(j => j.id === id))
    .filter((j) => j && j.id !== currentJerseyId) as Jersey[]
  
  if (recommendedJerseys.length === 0) return null
  
  // Calculate items per view based on screen size (responsive)
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 640) return 2 // Mobile: show 2 items
      if (width < 1024) return 2.5 // Tablet: show 2.5 items
      return 3.5 // Desktop: show 3.5 items
    }
    return 3.5
  }
  
  const itemsPerView = getItemsPerView()
  const itemsPerPageNum = Math.floor(itemsPerView)
  const itemWidth = 100 / itemsPerPageNum // percentage of container
  const totalPages = Math.ceil(recommendedJerseys.length / itemsPerPageNum)
  
  const goToPage = (pageIndex: number) => {
    const container = document.getElementById('you-might-also-like-scroll')
    if (!container) return
    
    const gapPx = 16
    const itemWidthPx = container.offsetWidth / itemsPerPageNum
    const scrollAmount = pageIndex * (itemWidthPx * itemsPerPageNum + gapPx * (itemsPerPageNum - 1))
    
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    })
    setCurrentPage(pageIndex)
    setScrollPos(scrollAmount)
  }
  
  return (
    <section style={{
      maxWidth: 1100,
      margin: '0 auto',
      padding: '40px 16px',
      borderTop: '1px solid #f0f0f0',
    }}>
      <h2 style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#111',
        margin: '0 0 24px',
        textAlign: 'center',
      }}>
        You Might Also Like
      </h2>
      
      <div>
        {/* Carousel container */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Scroll container */}
        <div
          id="you-might-also-like-scroll"
          style={{
            display: 'flex',
            gap: 16,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            paddingLeft: 16,
            paddingRight: 16,
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            // Hide scrollbar
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          className="hide-scrollbar"
        >
          {recommendedJerseys.map((jersey) => (
            <div
              key={jersey.id}
              style={{
                flex: `0 0 calc((100% - ${(itemsPerPageNum - 1) * 16}px) / ${itemsPerPageNum})`,
                minWidth: 0,
                scrollSnapAlign: 'start',
              }}
            >
              <JerseyCard
                jersey={jersey}
                onClick={() => {
                  router.push(`/jersey/${jersey.id}`)
                  window.scrollTo(0, 0)
                }}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
      
      {/* Dot indicators - positioned below carousel */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginTop: 20,
          paddingBottom: 8,
        }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              style={{
                width: currentPage === idx ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                background: currentPage === idx ? '#111' : '#d0d0d0',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
              aria-label={`Go to page ${idx + 1}`}
              title={`Page ${idx + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
