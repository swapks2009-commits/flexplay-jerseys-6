'use client'
import { useState } from 'react'

interface ShareModalProps {
  productName: string
  productUrl: string
  onClose: () => void
}

export default function ShareModal({ productName, productUrl, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  const shareOptions = [
    {
      id: 'copy',
      label: 'Copy Link',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      action: async () => {
        try {
          const text = `Check out this awesome jersey: ${productName}\n\n${productUrl}`
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
            onClose()
          }, 1500)
        } catch (err) {
          console.error('Failed to copy:', err)
        }
      },
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      action: () => {
        const text = `Check out this awesome jersey: ${productName} ${productUrl}`
        const encoded = encodeURIComponent(text)
        window.open(`https://wa.me/?text=${encoded}`, '_blank')
        onClose()
      },
    },
    {
      id: 'sms',
      label: 'SMS',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      action: () => {
        const text = `Check out this awesome jersey: ${productName} ${productUrl}`
        window.location.href = `sms:?body=${encodeURIComponent(text)}`
        onClose()
      },
    },
    {
      id: 'email',
      label: 'Email',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      action: () => {
        const subject = `Check out this awesome jersey: ${productName}`
        const body = `${productUrl}`
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        onClose()
      },
    },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 999,
          animation: 'fadeIn 0.2s ease-out',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: '20px 16px 32px',
          zIndex: 1000,
          animation: 'slideUp 0.3s ease-out',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.1)',
          maxWidth: 480,
          margin: '0 auto',
        }}
      >
        {/* Handle bar */}
        <div
          style={{
            width: 40,
            height: 4,
            background: '#e5e5e5',
            borderRadius: 2,
            margin: '0 auto 20px',
          }}
        />

        {/* Title */}
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#111',
            margin: '0 0 20px',
            textAlign: 'center',
          }}
        >
          Share this jersey
        </h3>

        {/* Share options grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}
        >
          {shareOptions.map((option) => (
            <button
              key={option.id}
              onClick={option.action}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '16px',
                background: option.id === 'copy' && copied ? '#f0f0f0' : '#f9f9f9',
                border: '1px solid #e5e5e5',
                borderRadius: 10,
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: '#111',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#efefef'
                e.currentTarget.style.borderColor = '#d5d5d5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = option.id === 'copy' && copied ? '#f0f0f0' : '#f9f9f9'
                e.currentTarget.style.borderColor = '#e5e5e5'
              }}
              title={option.label}
            >
              <div style={{ color: '#111' }}>{option.icon}</div>
              <span style={{ fontSize: 12, fontWeight: 500 }}>
                {option.id === 'copy' && copied ? 'Copied!' : option.label}
              </span>
            </button>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            marginTop: 16,
            padding: '12px',
            background: 'none',
            border: '1px solid #e5e5e5',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            color: '#aaa',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ccc'
            e.currentTarget.style.color = '#888'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e5e5'
            e.currentTarget.style.color = '#aaa'
          }}
        >
          Cancel
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
