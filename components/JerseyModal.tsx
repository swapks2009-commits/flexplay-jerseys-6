'use client'
import { useState, useEffect } from 'react'
import type { Jersey } from '@/constants/jerseys'

interface Props {
  jersey: Jersey
  onClose: () => void
  onOrder: (jersey: Jersey, size: string) => void
}

/* ── Colour map for SVG placeholder ── */
const COUNTRY_COLORS: Record<string, [string, string]> = {
  Argentina: ['#74b9e8', '#ffffff'],
  Portugal:  ['#1a5c1a', '#cc0000'],
  Brazil:    ['#f5d020', '#009c3b'],
  France:    ['#002395', '#ed2939'],
  Germany:   ['#dddddd', '#111111'],
  Spain:     ['#c60b1e', '#ffc400'],
  Mexico:    ['#006847', '#ce1126'],
}

function SVGPlaceholder({ jersey }: { jersey: Jersey }) {
  const [primary, secondary] = COUNTRY_COLORS[jersey.country] ?? ['#e0e0e0', '#999']
  const num = jersey.player?.match(/#(\d+)/)?.[1] ?? ''
  return (
    <div style={{ width: '100%', height: '100%', background: '#f7f7f7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        <line x1="50" y1="8" x2="50" y2="16" stroke="#bbb" strokeWidth="2"/>
        <path d="M30 16 Q50 10 70 16" stroke="#bbb" strokeWidth="2" fill="none"/>
        <path d="M28 22 L18 38 L28 40 L28 80 L72 80 L72 40 L82 38 L72 22 Q60 18 50 20 Q40 18 28 22Z" fill={primary} stroke="#ccc" strokeWidth="1"/>
        <path d="M42 22 Q50 28 58 22" stroke={secondary} strokeWidth="2" fill="none"/>
        {num && <text x="50" y="58" textAnchor="middle" fontSize="18" fontWeight="bold" fill={secondary} opacity="0.9">{num}</text>}
      </svg>
      <span style={{ fontSize: 11, color: '#bbb' }}>{jersey.country} {jersey.flag}</span>
    </div>
  )
}

/* ── Single image with error fallback ── */
function Img({ src, alt, jersey, style }: { src: string; alt: string; jersey: Jersey; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false)
  const isReal = src && !src.startsWith('/images/jerseys/') && !src.endsWith('.svg')
  if (!isReal || failed) return <SVGPlaceholder jersey={jersey} />
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      onError={() => setFailed(true)} />
  )
}

export default function JerseyModal({ jersey, onClose, onOrder }: Props) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [sizeError, setSizeError] = useState(false)

  /* filter out SVG logos, keep only real product images */
  const images = (jersey.images ?? []).filter(
    u => u && !u.endsWith('.svg') && (u.startsWith('http') || u.startsWith('/'))
  )
  /* always have at least one slot so activeIdx never goes out of range */
  const slots = images.length > 0 ? images : ['']

  const discount = Math.round(
    ((jersey.originalPrice - jersey.discountedPrice) / jersey.originalPrice) * 100
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [onClose])

  function handleOrder() {
    if (!selectedSize) { setSizeError(true); return }
    const isInStock = jersey.sizeStock?.[selectedSize] ?? true
    if (!isInStock) { setSizeError(true); return }
    onOrder(jersey, selectedSize)
  }

  return (
    /* ── Backdrop ── */
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* ── Modal shell ── */}
      <div style={{
        position: 'relative',
        background: 'white',
        borderRadius: 12,
        width: '100%',
        maxWidth: 860,
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 24px 64px rgba(0,0,0,0.22)',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* ── Close button ── */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 12, right: 12, zIndex: 10,
          width: 32, height: 32, borderRadius: '50%',
          border: '1px solid #e5e5e5', background: 'white',
          cursor: 'pointer', fontSize: 14, color: '#555',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>✕</button>

        {/* ── Body: LEFT images + RIGHT details ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

          {/* ════ LEFT PANEL ════ */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            padding: 16,
            width: '100%',
            maxWidth: 460,
            boxSizing: 'border-box',
            borderRight: '1px solid #f0f0f0',
          }}>

            {/* ── Thumbnail column (always visible when >1 image) ── */}
            {slots.length > 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                {slots.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    style={{
                      width: 72, height: 72,
                      borderRadius: 6,
                      overflow: 'hidden',
                      border: activeIdx === i ? '2px solid #111' : '2px solid #e5e5e5',
                      cursor: 'pointer',
                      background: '#f7f7f7',
                      padding: 0,
                      flexShrink: 0,
                    }}
                  >
                    <Img src={src} alt={`view ${i + 1}`} jersey={jersey} />
                  </button>
                ))}
              </div>
            )}

            {/* ── Main large image ── */}
            <div style={{
              flex: 1,
              borderRadius: 8,
              overflow: 'hidden',
              background: '#f7f7f7',
              minHeight: 340,
              position: 'relative',
            }}>
              <Img src={slots[activeIdx] ?? ''} alt={jersey.name} jersey={jersey} />

              {/* Prev / Next for small screens */}
              {slots.length > 1 && (
                <>
                  <button onClick={() => setActiveIdx(i => (i - 1 + slots.length) % slots.length)}
                    style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', width: 30, height: 30, borderRadius: '50%', background: 'white', border: '1px solid #e5e5e5', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    ‹
                  </button>
                  <button onClick={() => setActiveIdx(i => (i + 1) % slots.length)}
                    style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', width: 30, height: 30, borderRadius: '50%', background: 'white', border: '1px solid #e5e5e5', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    ›
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ════ RIGHT PANEL ════ */}
          <div style={{
            flex: 1,
            minWidth: 260,
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            overflowY: 'auto',
          }}>
            {/* Breadcrumb */}
            <p style={{ fontSize: 11, color: '#aaa', margin: 0 }}>
              Home / World Cup 2026 / {jersey.country}
            </p>

            {/* Title */}
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: '#111', margin: 0, lineHeight: 1.35 }}>
                {jersey.name}
              </h2>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, fontWeight: 700, background: '#e53e3e', color: 'white', padding: '2px 8px', borderRadius: 4 }}>
                {discount}% off
              </span>
              <span style={{ fontSize: 13, textDecoration: 'line-through', color: '#aaa' }}>
                Rs. {(jersey.originalPrice ?? 0).toLocaleString('en-IN')}.00
              </span>
            </div>
            <p style={{ fontSize: 22, fontWeight: 700, color: '#111', margin: '-8px 0 0' }}>
              Rs. {(jersey.discountedPrice ?? 0).toLocaleString('en-IN')}.00
            </p>
            <p style={{ fontSize: 11, color: '#aaa', marginTop: -8 }}>Shipping calculated at checkout.</p>

            {/* Stock */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: jersey.inStock ? '#22c55e' : '#f87171', display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: jersey.inStock ? '#16a34a' : '#ef4444', fontWeight: 500 }}>
                {jersey.inStock ? 'In stock!' : 'Sold out'}
              </span>
            </div>

            {/* Size selector */}
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: sizeError ? '#e53e3e' : '#111', margin: '0 0 8px' }}>
                {sizeError ? '⚠ Please select a size first' : 'size:'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {(jersey.sizes ?? []).map(s => {
                  const isInStock = jersey.sizeStock?.[s] ?? true
                  return (
                    <button key={s} 
                      onClick={() => { 
                        if (isInStock) {
                          setSelectedSize(s); 
                          setSizeError(false)
                        }
                      }}
                      disabled={!isInStock}
                      title={!isInStock ? 'Out of stock' : ''}
                      style={{
                        padding: '6px 14px', borderRadius: 6, fontSize: 13, fontWeight: 500,
                        cursor: isInStock ? 'pointer' : 'not-allowed', 
                        transition: 'all 0.15s',
                        background: selectedSize === s && isInStock ? '#111' : isInStock ? 'white' : '#f0f0f0',
                        color: selectedSize === s && isInStock ? 'white' : isInStock ? '#111' : '#999',
                        border: selectedSize === s && isInStock ? '1px solid #111' : isInStock ? '1px solid #ccc' : '1px solid #d0d0d0',
                        textDecoration: !isInStock ? 'line-through' : 'none',
                        opacity: 1,
                      }}>
                      {s}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: 0 }}>
              {jersey.description}
            </p>

            {/* Fit tip */}
            <p style={{ fontSize: 11, color: '#aaa', fontStyle: 'italic', margin: 0 }}>
              Fit Tip: Choose one size larger than your regular T-shirt size for a comfortable fit.
            </p>

            {/* WhatsApp Order Button */}
            <button onClick={handleOrder} disabled={!jersey.inStock}
              style={{
                width: '100%', padding: '14px 0',
                background: jersey.inStock ? '#25D366' : '#ccc',
                color: 'white', border: 'none', borderRadius: 8,
                fontSize: 14, fontWeight: 700, cursor: jersey.inStock ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {jersey.inStock ? 'ORDER ON WHATSAPP' : 'SOLD OUT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
