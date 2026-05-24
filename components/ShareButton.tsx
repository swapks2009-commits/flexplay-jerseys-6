'use client'
import { useState, useRef, useEffect, type MouseEvent } from 'react'

interface ShareButtonProps {
  productName: string
  productUrl: string
  isIcon?: boolean
}

export default function ShareButton({ productName, productUrl, isIcon = false }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseEnter = (e?: MouseEvent<HTMLButtonElement>) => {
    setShowTooltip(true)
    if (buttonRef.current && isIcon) {
      const rect = buttonRef.current.getBoundingClientRect()
      setTooltipPos({
        top: rect.top - 40,
        left: rect.left + rect.width / 2,
      })
    }
    if (e) {
      e.currentTarget.style.background = 'rgba(0,0,0,0.08)'
    }
  }

  const handleMouseLeave = (e?: MouseEvent<HTMLButtonElement>) => {
    setShowTooltip(false)
    if (e) {
      e.currentTarget.style.background = 'transparent'
    }
  }

  async function handleShare() {
    // Check if Web Share API is available (mobile browsers and newer desktop browsers)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Flexplay Jerseys',
          text: `Check out this awesome jersey: ${productName}`,
          url: productUrl,
        })
      } catch (err) {
        // User cancelled share
        if ((err as any).name !== 'AbortError') {
          console.error('Error sharing:', err)
        }
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        const text = `Check out this awesome jersey: ${productName}\n\n${productUrl}`
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setShowToast(true)
        setTimeout(() => {
          setCopied(false)
          setShowToast(false)
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }

  if (isIcon) {
    return (
      <>
        <button
          ref={buttonRef}
          onClick={handleShare}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 54,
            height: 54,
            background: 'transparent',
            color: '#111',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.15s',
            flexShrink: 0,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>

        {/* Fixed Positioned Tooltip */}
        {showTooltip && (
          <div
            style={{
              position: 'fixed',
              top: `${tooltipPos.top}px`,
              left: `${tooltipPos.left}px`,
              transform: 'translateX(-50%)',
              background: '#111',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500,
              whiteSpace: 'nowrap',
              zIndex: 99999,
              animation: 'fadeIn 0.15s ease-out',
              pointerEvents: 'none',
            }}
          >
            Share this product
            {/* Tooltip arrow */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '5px solid #111',
                marginTop: -1,
              }}
            />
          </div>
        )}

        {/* Toast notification */}
        {showToast && (
          <div
            style={{
              position: 'fixed',
              bottom: 24,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#111',
              color: 'white',
              padding: '12px 20px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              zIndex: 1000,
              animation: 'slideUp 0.3s ease-out',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            ✓ Link copied to clipboard!
          </div>
        )}

        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <button
        onClick={handleShare}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          width: '100%',
          padding: '12px 0',
          background: '#f5f5f5',
          color: '#111',
          border: '1px solid #e5e5e5',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.15s',
          marginTop: 8,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#efefef'
          e.currentTarget.style.borderColor = '#d5d5d5'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#f5f5f5'
          e.currentTarget.style.borderColor = '#e5e5e5'
        }}
        title={copied ? 'Copied to clipboard!' : 'Share this product'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </svg>
        {copied ? 'Link Copied!' : 'Share Product'}
      </button>

      {/* Toast notification */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#111',
            color: 'white',
            padding: '12px 20px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            zIndex: 1000,
            animation: 'slideUp 0.3s ease-out',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          ✓ Link copied to clipboard!
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </>
  )
}
