'use client'
import { useState } from 'react'
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
  const [failed, setFailed] = useState(false)

  const discount = Math.round(
    ((jersey.originalPrice - jersey.discountedPrice) / jersey.originalPrice) * 100
  )

  // Find first usable image (not .svg, not a placeholder path)
  const firstReal = jersey.images.find(
    u => u && !u.endsWith('.svg') && !u.startsWith('/images/jerseys/')
  )
  const showReal = !!firstReal && !failed

  return (
    <div
      className="jersey-card rounded-lg overflow-hidden cursor-pointer bg-white group"
      style={{ border: '1px solid #e5e5e5' }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', background: '#f7f7f7' }}>
        {showReal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={firstReal}
            alt={jersey.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
          />
        ) : (
          <Placeholder jersey={jersey} />
        )}

        {/* Sale badge */}
        {jersey.inStock && (
          <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded text-white"
            style={{ background: '#e53e3e' }}>
            {discount}% off
          </span>
        )}

        {/* Sold out overlay */}
        {!jersey.inStock && (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.75)' }}>
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded border bg-white"
              style={{ color: '#555', borderColor: '#ccc' }}>
              Sold Out
            </span>
          </div>
        )}

        {/* Premium badge */}
        {jersey.type === 'Premium' && (
          <span className="absolute top-2 right-2 text-[10px] font-semibold px-1.5 py-0.5 rounded"
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
