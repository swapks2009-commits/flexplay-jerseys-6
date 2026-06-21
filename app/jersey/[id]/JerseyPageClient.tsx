'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { JERSEYS } from '@/constants/jerseys'
import type { Jersey } from '@/constants/jerseys'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppModal from '@/components/WhatsAppModal'
import ShareButton from '@/components/ShareButton'
import YouMightAlsoLike from '@/components/YouMightAlsoLike'

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
    <div style={{ width: '100%', height: '100%', minHeight: 320, background: '#f7f7f7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
        <line x1="50" y1="8" x2="50" y2="16" stroke="#bbb" strokeWidth="2"/>
        <path d="M30 16 Q50 10 70 16" stroke="#bbb" strokeWidth="2" fill="none"/>
        <path d="M28 22 L18 38 L28 40 L28 80 L72 80 L72 40 L82 38 L72 22 Q60 18 50 20 Q40 18 28 22Z" fill={primary} stroke="#ccc" strokeWidth="1"/>
        <path d="M42 22 Q50 28 58 22" stroke={secondary} strokeWidth="2" fill="none"/>
        {num && <text x="50" y="58" textAnchor="middle" fontSize="18" fontWeight="bold" fill={secondary} opacity="0.9">{num}</text>}
      </svg>
      <span style={{ fontSize: 13, color: '#bbb' }}>{jersey.country} {jersey.flag}</span>
    </div>
  )
}

function ProductImage({ src, alt, jersey, style }: { src: string; alt: string; jersey: Jersey; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false)
  const isReal = src && !src.startsWith('/images/jerseys/') && !src.endsWith('.svg')
  if (!isReal || failed) return <SVGPlaceholder jersey={jersey} />
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src} alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      onError={() => setFailed(true)}
    />
  )
}

const SIZE_CHART = [
  { size: 'S',    chest: '36"', length: '26"', shoulder: '15.75"' },
  { size: 'M',    chest: '38"', length: '27"', shoulder: '16.25"' },
  { size: 'L',    chest: '40"', length: '28"', shoulder: '17"'    },
  { size: 'XL',   chest: '42"', length: '29"', shoulder: '17.5"'  },
  { size: 'XXL',  chest: '44"', length: '30"', shoulder: '18"'    },
  { size: 'XXXL', chest: '46"', length: '31"', shoulder: '18.5"'  },
]

function SizeGuide() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 13, color: '#888' }}>Size Guide</span>

      {/* ⓘ icon button */}
      <button
        onClick={() => setOpen(o => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        style={{
          width: 18, height: 18, borderRadius: '50%',
          border: '1.5px solid #aaa', background: 'white',
          cursor: 'pointer', fontSize: 11, fontWeight: 700,
          color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 0, lineHeight: 1, flexShrink: 0,
        }}
        title="Size Guide"
      >
        i
      </button>

      {/* Tooltip */}
      {open && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'white',
          border: '1px solid #e5e5e5',
          borderRadius: 10,
          boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
          padding: '16px',
          width: 300,
          zIndex: 100,
        }}>
          {/* Arrow */}
          <div style={{
            position: 'absolute', bottom: -7, left: '50%',
            width: 12, height: 12, background: 'white',
            border: '1px solid #e5e5e5', borderTop: 'none', borderLeft: 'none',
            transform: 'translateX(-50%) rotate(45deg)',
          }} />

          <p style={{ fontSize: 13, fontWeight: 700, color: '#111', margin: '0 0 12px', textAlign: 'center', letterSpacing: '0.05em' }}>
            📏 SIZE GUIDE — FLEXPLAY JERSEYS
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: '#111' }}>
                {['SIZE', 'CHEST', 'LENGTH', 'SHOULDER'].map(h => (
                  <th key={h} style={{ padding: '6px 8px', color: 'white', fontWeight: 600, textAlign: 'center', fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIZE_CHART.map((row, i) => (
                <tr key={row.size} style={{ background: i % 2 === 0 ? '#f9f9f9' : 'white' }}>
                  <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, color: '#111' }}>{row.size}</td>
                  <td style={{ padding: '6px 8px', textAlign: 'center', color: '#555' }}>{row.chest}</td>
                  <td style={{ padding: '6px 8px', textAlign: 'center', color: '#555' }}>{row.length}</td>
                  <td style={{ padding: '6px 8px', textAlign: 'center', color: '#555' }}>{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ fontSize: 11, color: '#aaa', margin: '10px 0 0', textAlign: 'center' }}>
            All measurements in inches. For best fit, choose 1 size up.
          </p>
        </div>
      )}
    </div>
  )
}

export default function JerseyPageClient({ id }: { id: string }) {
  const router = useRouter()
  const jersey = JERSEYS.find(j => j.id === id)

  const [activeIdx, setActiveIdx]   = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [sizeError, setSizeError]   = useState(false)
  const [showOrder, setShowOrder]   = useState(false)

  const images = (jersey?.images ?? []).filter(
    u => u && !u.endsWith('.svg') && (u.startsWith('http') || u.startsWith('/'))
  )
  const slots = images.length > 0 ? images : ['']

  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!jersey) {
    return (
      <main style={{ minHeight: '100vh', background: 'white' }}>
        <Navbar />
        <div style={{ paddingTop: 100, textAlign: 'center', color: '#aaa', paddingBottom: 80 }}>
          <p style={{ fontSize: 20, fontWeight: 600 }}>Jersey not found</p>
          <button onClick={() => router.push('/')}
            style={{ marginTop: 16, padding: '10px 24px', background: '#111', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}>
            ← Back to Collection
          </button>
        </div>
        <Footer />
      </main>
    )
  }

  const discount = Math.round(((jersey.originalPrice - jersey.discountedPrice) / jersey.originalPrice) * 100)

  // Construct product URL - use the dynamic origin if available, fallback to absolute URL
  const productUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/jersey/${jersey.id}`
    : `https://flexplay-jerseys.netlify.app/jersey/${jersey.id}`

  function handleOrderClick() {
    if (!selectedSize || !jersey) { setSizeError(true); return }
    const isInStock = jersey.sizeStock?.[selectedSize] ?? true
    if (!isInStock) { setSizeError(true); return }
    setShowOrder(true)
  }

  return (
    <main style={{ minHeight: '100vh', background: 'white' }}>
      <Navbar />

      {/* Breadcrumb bar */}
      <div style={{ paddingTop: 56, background: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
        <div className="px-4 sm:px-6 md:px-8" style={{ maxWidth: 1100, margin: '0 auto', padding: '12px 0', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#aaa', flexWrap: 'wrap' }}>
          <button onClick={() => router.push('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', fontSize: 12, padding: 0 }}>
            🏠 Home
          </button>
          <span>/</span>
          <button onClick={() => router.push('/#collection')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', fontSize: 12, padding: 0 }}>
            World Cup 2026
          </button>
          <span>/</span>
          <span style={{ color: '#555' }}>{jersey.name}</span>
        </div>
      </div>

      {/* Product layout */}
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px sm:gap-8 md:gap-10', alignItems: 'flex-start' }}>

        {/* ════ LEFT: thumbnails + main image ════ */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 12, flex: '1 1 100%', maxWidth: '100%' }} className="sm:flex-1 sm:max-w-md">

          {/* Thumbnail column — always visible when multiple images */}
          {slots.length > 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
              {slots.map((src, i) => (
                <button key={i} onClick={() => setActiveIdx(i)}
                  style={{
                    width: 56, height: 56,
                    borderRadius: 6,
                    overflow: 'hidden',
                    border: activeIdx === i ? '2px solid #111' : '2px solid #e5e5e5',
                    cursor: 'pointer',
                    background: '#f7f7f7',
                    padding: 0,
                    flexShrink: 0,
                    transition: 'border-color 0.15s',
                  }} className="sm:w-[76px] sm:h-[76px]">
                  <ProductImage src={src} alt={`view ${i + 1}`} jersey={jersey} />
                </button>
              ))}
            </div>
          )}

          {/* Main image */}
          <div style={{ flex: 1, borderRadius: 10, overflow: 'hidden', background: '#f7f7f7', position: 'relative', minHeight: 320 }} className="sm:min-h-[460px]">
            <ProductImage
              src={slots[activeIdx] ?? ''}
              alt={jersey.name}
              jersey={jersey}
              style={{ minHeight: 320 }}
            />
            {/* Share button on image */}
            <div style={{ position: 'absolute', top: 4, right: 4, zIndex: 10 }}>
              <ShareButton 
                productName={jersey.name}
                productUrl={productUrl}
                isIcon={true}
              />
            </div>
          </div>
        </div>

        {/* ════ RIGHT: details ════ */}
        <div style={{ flex: '1 1 100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: 16 }} className="sm:flex-1 sm:max-w-sm md:max-w-md">

          <div>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: '#111', margin: 0, lineHeight: 1.3 }} className="sm:text-xl md:text-2xl">
              {jersey.name}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, fontWeight: 700, background: '#111', color: 'white', padding: '3px 10px', borderRadius: 4 }}>
              {discount}% off
            </span>
            <span style={{ fontSize: 14, textDecoration: 'line-through', color: '#aaa' }}>
              Rs. {(jersey.originalPrice ?? 0).toLocaleString('en-IN')}.00
            </span>
          </div>

          <p style={{ fontSize: 24, fontWeight: 700, color: '#111', margin: '-8px 0 0' }} className="sm:text-3xl">
            Rs. {(jersey.discountedPrice ?? 0).toLocaleString('en-IN')}.00
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: jersey.inStock ? '#22c55e' : '#f87171', display: 'inline-block' }} />
            <span style={{ fontSize: 14, color: jersey.inStock ? '#16a34a' : '#ef4444', fontWeight: 600 }}>
              {jersey.inStock ? 'In stock!' : 'Sold out'}
            </span>
          </div>

          {/* Size */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: sizeError ? '#e53e3e' : '#111', margin: 0 }}>
                {sizeError ? '⚠ Please select a size first' : 'size:'}
              </p>
              <SizeGuide />
            </div>
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
                      padding: '8px 18px', borderRadius: 6, fontSize: 14, fontWeight: 500,
                      cursor: isInStock ? 'pointer' : 'not-allowed',
                      background: selectedSize === s && isInStock ? '#111' : isInStock ? 'white' : '#f0f0f0',
                      color: selectedSize === s && isInStock ? 'white' : isInStock ? '#111' : '#999',
                      border: selectedSize === s && isInStock ? '1px solid #111' : isInStock ? '1px solid #ccc' : '1px solid #d0d0d0',
                      transition: 'all 0.15s',
                      textDecoration: !isInStock ? 'line-through' : 'none',
                    }}>
                    {s}
                  </button>
                )
              })}
            </div>
          </div>

          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.65, margin: 0 }}>{jersey.description}</p>

          <p style={{ fontSize: 12, color: '#aaa', fontStyle: 'italic', margin: 0 }}>
            Fit Tip: Choose one size larger than your regular T-shirt size for a comfortable fit.
          </p>

          <button onClick={handleOrderClick} disabled={!jersey.inStock}
            style={{
              width: '100%', padding: '15px 0',
              background: jersey.inStock ? '#25D366' : '#ccc',
              color: 'white', border: 'none', borderRadius: 8,
              fontSize: 15, fontWeight: 700,
              cursor: jersey.inStock ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {jersey.inStock ? 'ORDER ON WHATSAPP' : 'SOLD OUT'}
          </button>

          <button onClick={() => router.push('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#aaa', textAlign: 'left', padding: 0, textDecoration: 'underline' }}>
            ← Back to Collection
          </button>
        </div>
      </div>

      <YouMightAlsoLike currentJerseyId={jersey.id} />

      <Footer />

      {showOrder && (
        <WhatsAppModal jersey={jersey} initialSize={selectedSize} onClose={() => setShowOrder(false)} />
      )}
    </main>
  )
}
