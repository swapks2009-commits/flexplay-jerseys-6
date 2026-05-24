export default function Ticker() {
  const items = [
    'FREE DELIVERY',
    'BULK ORDERS ACCEPTED',
    'WORLD CUP 2026 SPECIAL COLLECTION IS LIVE',
    'PREMIUM EMBROIDERY QUALITY',
    'ORDER ON WHATSAPP – INSTANT CONFIRMATION',
  ]
  const repeated = [...items, ...items]
  return (
    <div className="w-full overflow-hidden py-2 sm:py-2.5 mt-12 sm:mt-14" style={{ background: '#111', color: '#fff' }}>
      <div className="ticker-inner text-[10px] sm:text-xs font-medium tracking-widest uppercase">
        {repeated.map((item, i) => (
          <span key={i} className="inline-block px-4 sm:px-8">• {item}</span>
        ))}
      </div>
    </div>
  )
}
