'use client'
import { useState, useEffect } from 'react'
import type { Jersey } from '@/constants/jerseys'

interface Props {
  jersey: Jersey
  initialSize: string
  onClose: () => void
}

const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function WhatsAppModal({ jersey, initialSize, onClose }: Props) {
  const [size, setSize] = useState(initialSize)
  const [qty, setQty] = useState(1)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [stateName, setStateName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Required'
    if (!address.trim()) e.address = 'Required'
    if (!city.trim()) e.city = 'Required'
    if (!pinCode.trim()) e.pinCode = 'Required'
    else if (!/^[0-9]{6}$/.test(pinCode)) e.pinCode = 'Enter a valid 6-digit PIN'
    if (!stateName.trim()) e.state = 'Required'
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid 10-digit number'
    if (!size) e.size = 'Please select a size'
    const isInStock = jersey.sizeStock?.[size] ?? true
    if (!isInStock) e.size = 'This size is out of stock'

    setErrors(e)
    return Object.keys(e).length === 0
  }

  function sendOrder() {
    if (!validate()) return
    const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919156165683'
    const total = jersey.discountedPrice * qty
    const fullAddress = `${address}${city ? `, ${city}` : ''}`
    const priceLine = qty > 1
      ? `Price : ₹${jersey.discountedPrice} × ${qty} = ₹${total}`
      : `Price : ₹${jersey.discountedPrice}`
    const msg = [
      `New Order – FlexPlay Jerseys`,
      ``,
      `*• Product*`,
      `${jersey.name}`,
      `Size   | Qty: ${qty}`,
      priceLine,
      `Free Delivery`,
      ``,
      `*• Customer*`,
      `NAME: ${name}`,
      `ADDRESS: ${fullAddress}`,
      `PIN: ${pinCode}`,
      `STATE: ${stateName}`,
      `PHONE NUMBER: ${phone}`,
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

  const isSendDisabled =
    !name.trim() ||
    !address.trim() ||
    !city.trim() ||
    !pinCode.trim() ||
    !stateName.trim() ||
    phone.replace(/\D/g, '').length !== 10 ||
    !size ||
    !/^[0-9]{6}$/.test(pinCode)

  const missingFieldWarning = isSendDisabled ?
    !name.trim() ? 'Please enter your name.' :
    !address.trim() ? 'Please enter your delivery address.' :
    !city.trim() ? 'Please enter your city.' :
    !pinCode.trim() ? 'Please enter your PIN code.' :
    !/^[0-9]{6}$/.test(pinCode) ? 'Please enter a valid 6-digit PIN code.' :
    !stateName.trim() ? 'Please enter your state.' :
    !phone.trim() ? 'Please enter your WhatsApp number.' :
    phone.replace(/\D/g, '').length !== 10 ? 'Please enter a valid 10-digit WhatsApp number.' :
    !size ? 'Please select a size.' :
    '' : ''

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
              {jersey.sizes.map(s => {
                const isInStock = jersey.sizeStock?.[s] ?? true
                return (
                  <button key={s} 
                    onClick={() => { 
                      if (isInStock) {
                        setSize(s); 
                        setErrors(p => ({ ...p, size: '' }))
                      }
                    }}
                    disabled={!isInStock}
                    title={!isInStock ? 'Out of stock' : ''}
                    className={`px-3 py-1.5 rounded text-sm font-medium border transition-all ${size === s && isInStock ? 'size-btn-active' : ''}`}
                    style={{
                      borderColor: size === s && isInStock ? 'var(--border-dark)' : isInStock ? 'var(--border-dark)' : '#d0d0d0',
                      color: size === s && isInStock ? 'white' : isInStock ? 'var(--text)' : '#999',
                      background: size === s && isInStock ? '#111' : isInStock ? 'white' : '#f0f0f0',
                      cursor: isInStock ? 'pointer' : 'not-allowed',
                      textDecoration: !isInStock ? 'line-through' : 'none',
                    }}>
                    {s}
                  </button>
                )
              })}
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

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.address ? 'var(--sale-red)' : 'var(--text)' }}>
              Address {errors.address && <span className="font-normal text-xs">— {errors.address}</span>}
            </label>
            <textarea rows={3} placeholder="Enter full delivery address" value={address}
              onChange={e => { setAddress(e.target.value); setErrors(p => ({ ...p, address: '' })) }}
              className={inputCls(errors.address)}
              style={inputStyle(errors.address)} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.city ? 'var(--sale-red)' : 'var(--text)' }}>
              City {errors.city && <span className="font-normal text-xs">— {errors.city}</span>}
            </label>
            <input type="text" placeholder="e.g. Coimbatore" value={city}
              onChange={e => { setCity(e.target.value); setErrors(p => ({ ...p, city: '' })) }}
              className={inputCls(errors.city)} style={inputStyle(errors.city)} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.pinCode ? 'var(--sale-red)' : 'var(--text)' }}>
              PIN Code {errors.pinCode && <span className="font-normal text-xs">— {errors.pinCode}</span>}
            </label>
            <input type="tel" placeholder="e.g. 641005" value={pinCode}
              onChange={e => {
                const val = e.target.value.replace(/\D/g, '')
                if (val.length <= 6) {
                  setPinCode(val)
                  setErrors(p => ({ ...p, pinCode: '' }))
                }
              }}
              maxLength={6}
              className={inputCls(errors.pinCode)} style={inputStyle(errors.pinCode)} />
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              {pinCode.length === 0 ? '6-digit PIN code' : `${pinCode.length}/6 digits`}
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.state ? 'var(--sale-red)' : 'var(--text)' }}>
              State {errors.state && <span className="font-normal text-xs">— {errors.state}</span>}
            </label>
            <input type="text" placeholder="e.g. Tamil Nadu" value={stateName}
              onChange={e => { setStateName(e.target.value); setErrors(p => ({ ...p, state: '' })) }}
              className={inputCls(errors.state)} style={inputStyle(errors.state)} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: errors.phone ? 'var(--sale-red)' : 'var(--text)' }}>
              WhatsApp Number {errors.phone && <span className="font-normal text-xs">— {errors.phone}</span>}
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '')
                  if (val.length <= 10) {
                    setPhone(val)
                    setErrors(p => ({ ...p, phone: '' }))
                  }
                }}
                maxLength={10}
                className={inputCls(errors.phone)}
                style={inputStyle(errors.phone)}
              />
              {phone.length > 0 && phone.length < 10 && (
                <span className="absolute right-3 top-2.5 text-xs" style={{ color: '#f59e0b' }}>
                  {10 - phone.length} more
                </span>
              )}
              {phone.length === 10 && (
                <span className="absolute right-3 top-2.5 text-xs" style={{ color: '#22c55e' }}>
                  ✓ Valid
                </span>
              )}
            </div>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              {phone.length === 0 ? 'Indian mobile number only' : `${phone.length}/10 digits`}
            </p>
          </div>

          {/* Send */}
          <button onClick={sendOrder}
            disabled={isSendDisabled}
            className="w-full py-3.5 rounded font-bold text-white flex items-center justify-center gap-2 transition-all"
            style={{
              background: isSendDisabled ? '#94d3a2' : 'var(--wa-green)',
              opacity: isSendDisabled ? 0.65 : 1,
              cursor: isSendDisabled ? 'not-allowed' : 'pointer',
            }}>
            <WaIcon size={18} />
            Send Order on WhatsApp
          </button>
          {missingFieldWarning && (
            <p className="text-sm mt-3 text-center" style={{ color: '#b91c1c' }}>
              {missingFieldWarning}
            </p>
          )}
          <p className="text-center text-xs pb-1" style={{ color: 'var(--text-muted)' }}>
            You&apos;ll be redirected to WhatsApp. We respond within minutes.
          </p>
        </div>
      </div>
    </div>
  )
}
