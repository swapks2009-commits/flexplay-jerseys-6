'use client'
import { useState, useEffect } from 'react'
import type { Jersey } from '@/constants/jerseys'

interface Props {
  jersey: Jersey
  initialSize: string
  onClose: () => void
}

type LocationStatus = 'idle' | 'loading' | 'done' | 'error'

const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function WhatsAppModal({ jersey, initialSize, onClose }: Props) {
  const [size, setSize] = useState(initialSize)
  const [qty, setQty] = useState(1)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [manualAddr, setManualAddr] = useState('')
  const [gpsAddr, setGpsAddr] = useState('')
  const [useGps, setUseGps] = useState(false)
  const [locStatus, setLocStatus] = useState<LocationStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  async function fetchGps() {
    if (!navigator.geolocation) { setLocStatus('error'); return }
    setLocStatus('loading')
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const { latitude: lat, longitude: lng } = pos.coords
        try {
          const r = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
          const d = await r.json()
          setGpsAddr(d.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`)
        } catch {
          setGpsAddr(`${lat.toFixed(5)}, ${lng.toFixed(5)}`)
        }
        setUseGps(true)
        setLocStatus('done')
      },
      () => setLocStatus('error'),
      { timeout: 10000 }
    )
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Required'
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid 10-digit number'
    if (!size) e.size = 'Please select a size'
    const loc = useGps ? gpsAddr : manualAddr
    if (!loc.trim()) e.location = 'Please enter or detect your delivery location'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function sendOrder() {
    if (!validate()) return
    const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919156165683'
    const loc = useGps ? gpsAddr : manualAddr
    const total = jersey.discountedPrice * qty
    const msg = [
      `🛒 *New Order – FlexPlay Jerseys*`,
      ``,
      `👕 *Product*`,
      `${jersey.name}`,
      `Kit: ${jersey.kit} | Country: ${jersey.country} ${jersey.flag}`,
      `Player: ${jersey.player}`,
      `Size: ${size} | Qty: ${qty}`,
      `Price: ₹${jersey.discountedPrice} × ${qty} = ₹${total}`,
      ``,
      `👤 *Customer*`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      ``,
      `📍 *Delivery Address*`,
      loc,
      ``,
      `_Ordered via FlexPlay Jerseys_`,
    ].join('\n')
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, '_blank')
    onClose()
  }

  const inputCls = (err?: string) =>
    `w-full px-3 py-2.5 text-sm rounded border outline-none focus:ring-1 focus:ring-gray-400 transition-all ${err ? 'border-red-400' : ''}`
  const inputStyle = (err?: string) => ({
    borderColor: err ? '#f87171' : 'var(--border-dark)',
    background: 'white',
    color: 'var(--text)',
  })

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center modal-backdrop"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="w-full md:max-w-md bg-white rounded-t-2xl md:rounded-xl shadow-2xl max-h-[95vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: '1px solid var(--border)' }}>
          <div>
            <p className="font-bold text-base" style={{ color: 'var(--text)' }}>Place Your Order</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>We&apos;ll confirm on WhatsApp within minutes</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-sm"
            style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>✕</button>
        </div>

        <div className="px-5 py-5 space-y-4">
          {/* Summary */}
          <div className="rounded-lg p-3 flex gap-3" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
            <span className="text-2xl">{jersey.flag}</span>
            <div>
              <p className="text-sm font-semibold leading-tight line-clamp-2" style={{ color: 'var(--text)' }}>{jersey.shortName}</p>
              <p className="font-bold text-base mt-1" style={{ color: 'var(--text)' }}>Rs. {jersey.discountedPrice}.00</p>
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: errors.size ? 'var(--sale-red)' : 'var(--text)' }}>
              Size {errors.size && <span className="font-normal text-xs">— {errors.size}</span>}
            </label>
            <div className="flex flex-wrap gap-2">
              {jersey.sizes.map(s => (
                <button key={s} onClick={() => { setSize(s); setErrors(p => ({ ...p, size: '' })) }}
                  className={`px-3 py-1.5 rounded text-sm font-medium border transition-all ${size === s ? 'size-btn-active' : ''}`}
                  style={size !== s ? { borderColor: 'var(--border-dark)', color: 'var(--text)', background: 'white' } : {}}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>Quantity</label>
            <div className="flex items-center gap-3">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-8 h-8 rounded border flex items-center justify-center font-bold text-lg hover:bg-gray-50"
                style={{ borderColor: 'var(--border-dark)', color: 'var(--text)' }}>−</button>
              <span className="w-8 text-center font-semibold text-base">{qty}</span>
              <button onClick={() => setQty(q => q + 1)}
                className="w-8 h-8 rounded border flex items-center justify-center font-bold text-lg hover:bg-gray-50"
                style={{ borderColor: 'var(--border-dark)', color: 'var(--text)' }}>+</button>
              <span className="text-sm ml-1" style={{ color: 'var(--text-secondary)' }}>
                Total: <strong>Rs. {(jersey.discountedPrice * qty).toLocaleString('en-IN')}.00</strong>
              </span>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.name ? 'var(--sale-red)' : 'var(--text)' }}>
              Your Name {errors.name && <span className="font-normal text-xs">— {errors.name}</span>}
            </label>
            <input type="text" placeholder="e.g. Rahul Sharma" value={name}
              onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) }}
              className={inputCls(errors.name)} style={inputStyle(errors.name)} />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.phone ? 'var(--sale-red)' : 'var(--text)' }}>
              WhatsApp Number {errors.phone && <span className="font-normal text-xs">— {errors.phone}</span>}
            </label>
            <input type="tel" placeholder="e.g. 9876543210" value={phone}
              onChange={e => { setPhone(e.target.value); setErrors(p => ({ ...p, phone: '' })) }}
              className={inputCls(errors.phone)} style={inputStyle(errors.phone)} />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.location ? 'var(--sale-red)' : 'var(--text)' }}>
              Delivery Location {errors.location && <span className="font-normal text-xs">— {errors.location}</span>}
            </label>

            {/* GPS */}
            <button onClick={fetchGps} disabled={locStatus === 'loading'}
              className="w-full py-2.5 rounded border text-sm font-medium flex items-center justify-center gap-2 mb-3 transition-all hover:bg-gray-50 disabled:opacity-60"
              style={{
                borderColor: locStatus === 'done' ? '#22c55e' : 'var(--border-dark)',
                color: locStatus === 'done' ? '#16a34a' : 'var(--text)',
                background: locStatus === 'done' ? '#f0fdf4' : 'white',
              }}>
              {locStatus === 'loading'
                ? <><span className="spinner inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" /> Detecting location…</>
                : locStatus === 'done'
                  ? <>📍 Location Detected ✓</>
                  : <>📍 Use My Current Location</>}
            </button>

            {locStatus === 'error' && (
              <p className="text-xs mb-2" style={{ color: 'var(--sale-red)' }}>
                ⚠ Could not access location. Please enable location permission or enter manually.
              </p>
            )}
            {locStatus === 'done' && gpsAddr && (
              <div className="rounded p-2 mb-2 text-xs" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534' }}>
                <strong>Detected:</strong> {gpsAddr}
              </div>
            )}

            <p className="text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>Or enter address manually:</p>
            <textarea rows={3} placeholder="Flat no., Building, Area, City, State, PIN"
              value={manualAddr}
              onChange={e => { setManualAddr(e.target.value); setUseGps(false); setErrors(p => ({ ...p, location: '' })) }}
              className={`${inputCls(errors.location)} resize-none`}
              style={inputStyle(errors.location)} />

            {(useGps ? gpsAddr : manualAddr) && (
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                ✓ Using {useGps ? 'GPS location' : 'manual address'}
              </p>
            )}
          </div>

          {/* Send */}
          <button onClick={sendOrder}
            className="w-full py-3.5 rounded font-bold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
            style={{ background: 'var(--wa-green)' }}>
            <WaIcon size={18} />
            Send Order on WhatsApp
          </button>
          <p className="text-center text-xs pb-1" style={{ color: 'var(--text-muted)' }}>
            You&apos;ll be redirected to WhatsApp. We respond within minutes.
          </p>
        </div>
      </div>
    </div>
  )
}
