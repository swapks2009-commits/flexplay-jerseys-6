'use client'
import { useState, useRef } from 'react'
import type { Jersey } from '@/constants/jerseys'

interface Props {
  jersey: Jersey
  onClick: () => void
}

function Placeholder({ jersey }: { jersey: Jersey }) {
  const colors: Record<string, [string, string]> = {
    'Argentina': ['#74b9e8', '#ffffff'],
    'Portugal':  ['#006600', '#cc0000'],
    'Brazil':    ['#f5d020', '#009c3b'],
    'France':    ['#002395', '#ed2939'],
    'Germany':   ['#dddddd', '#000000'],
    'Spain':     ['#c60b1e', '#ffc400'],
    'Mexico':    ['#006847', '#ce1126'],
  }
  const [primary, secondary] = colors[jersey.country] || ['#e0e0e0', '#999']
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 select-none"
      style={{ background: '#f7f7f7' }}>
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
        <line x1="50" y1="8" x2="50" y2="16" stroke="#bbb" strokeWidth="2"/>
        <path d="M30 16 Q50 10 70 16" stroke="#bbb" strokeWidth="2" fill="none"/>
        <path d="M28 22 L18 38 L28 40 L28 80 L72 80 L72 40 L82 38 L72 22 Q60 18 50 20 Q40 18 28 22Z"
          fill={primary} stroke="#ccc" strokeWidth="1"/>
        <path d="M42 22 Q50 28 58 22" stroke={secondary} strokeWidth="2" fill="none"/>
        <text x="50" y="58" textAnchor="middle" fontSize="16" fontWeight="bold" fill={secondary} opacity="0.9">
          {jersey.player.match(/#(\d+)/)?.[1] ?? ''}
        </text>
      </svg>
      <span className="text-[10px] font-medium" style={{ color: '#bbb' }}>
        {jersey.country} {jersey.flag}
      </span>
    </div>
  )
}

export default function JerseyCard({ jersey, onClick }: Props) {
  // Get all valid images
  const images = jersey.images.filter(
    u => u && !u.endsWith('.svg') && (u.startsWith('http') || u.startsWith('/'))
  )
  
  // Start from 2nd image if available, otherwise 1st
  const startIdx = images.length > 1 ? 1 : 0
  const [activeIdx, setActiveIdx] = useState(startIdx)
  const [failed, setFailed] = useState<Record<number, boolean>>({})
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const discount = Math.round(
    ((jersey.originalPrice - jersey.discountedPrice) / jersey.originalPrice) * 100
  )

  // Use placeholder if no real images
  const hasImages = images.length > 0
  const slots = hasImages ? images : ['']

  const currentImage = slots[activeIdx]
  const isRealImage = hasImages && currentImage && !failed[activeIdx]

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIdx(i => (i - 1 + slots.length) % slots.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIdx(i => (i + 1) % slots.length)
  }

  const handleImageError = () => {
    setFailed(prev => ({ ...prev, [activeIdx]: true }))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    
    const deltaX = touchEndX - touchStartX.current
    const deltaY = touchEndY - touchStartY.current
    
    // Only handle horizontal swipes (ignore vertical scrolling)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swiped right -> show previous image
        handlePrev(e as any)
      } else {
        // Swiped left -> show next image
        handleNext(e as any)
      }
    }
  }

  return (
    <div
      className="jersey-card rounded-lg overflow-hidden cursor-pointer bg-white group"
      style={{ border: '1px solid #e5e5e5' }}
      onClick={onClick}
    >
      {/* Image Slider */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', background: '#f7f7f7' }} 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        {isRealImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentImage}
            alt={jersey.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' }}
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
        ) : (
          <Placeholder jersey={jersey} />
        )}

        {/* Navigation arrows - only show on desktop hover */}
        {slots.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hidden md:flex z-10"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              aria-label="Previous image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hidden md:flex z-10"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              aria-label="Next image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}

        {/* Image indicator dots */}
        {slots.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {slots.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIdx(i)
                }}
                className="transition-all"
                style={{
                  width: activeIdx === i ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: activeIdx === i ? '#111' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Sale badge */}
        {jersey.inStock && (
          <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded text-white z-20"
            style={{ background: '#e53e3e' }}>
            {discount}% off
          </span>
        )}

        {/* Sold out overlay */}
        {!jersey.inStock && (
          <div className="absolute inset-0 flex items-center justify-center z-20"
            style={{ background: 'rgba(255,255,255,0.75)' }}>
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded border bg-white"
              style={{ color: '#555', borderColor: '#ccc' }}>
              Sold Out
            </span>
          </div>
        )}

        {/* Premium badge */}
        {jersey.type === 'Premium' && (
          <span className="absolute top-2 right-2 text-[10px] font-semibold px-1.5 py-0.5 rounded z-20"
            style={{ background: '#fffbeb', color: '#b8860b', border: '1px solid #e9c46a' }}>
            Premium
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-xs mb-1" style={{ color: '#999' }}>
          {jersey.country} · {jersey.kit} Kit
        </p>
        <h3 className="text-sm font-medium leading-snug mb-2 line-clamp-2" style={{ color: '#111' }}>
          {jersey.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold" style={{ color: '#111' }}>
            Rs. {jersey.discountedPrice.toLocaleString('en-IN')}.00
          </span>
          <span className="text-xs line-through" style={{ color: '#aaa' }}>
            Rs. {jersey.originalPrice.toLocaleString('en-IN')}.00
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {jersey.sizes.map(s => (
            <span key={s} className="text-[10px] px-1.5 py-0.5 rounded border"
              style={{ borderColor: '#e5e5e5', color: '#888' }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
