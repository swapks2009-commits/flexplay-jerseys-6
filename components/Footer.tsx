export default function Footer() {
  return (
    <footer id="about" className="mt-16 pt-10 pb-8 px-4 md:px-8"
      style={{ background: '#111', color: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: '1px solid #333' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-white text-black text-xs font-black">FP</span>
              FlexPlay Jerseys
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#aaa' }}>
              Premium World Cup 2026 jerseys at the best prices. All orders confirmed personally on WhatsApp.
            </p>
            <a href="https://wa.me/919156165683" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: '#25D366' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm tracking-widest uppercase" style={{ color: '#888' }}>Contact</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#aaa' }}>
              <li>📱 <a href="tel:+919156165683" className="hover:text-white transition-colors">+91 91561 65683</a></li>
              <li>📱 <a href="tel:+917058049668" className="hover:text-white transition-colors">+91 70580 49668</a></li>

              <li>⏰ 10 AM – 8 PM</li>
              <li>✉️ <a href="mailto:flexplayjersey@gmail.com" className="hover:text-white transition-colors">flexplayjersey@gmail.com</a></li>
              <li>📦 Pan India Delivery</li>
            </ul>
          </div>
          {/* Why us */}
          <div>
            <h4 className="font-semibold mb-3 text-sm tracking-widest uppercase" style={{ color: '#888' }}>Why FlexPlay</h4>
            <ul className="space-y-1.5 text-sm" style={{ color: '#aaa' }}>
              {['🏅 Premium embroidered crests','👕 Sizes S to XXXL','🚀 Fast delivery across India','💬 Personal WhatsApp support','✅ Quality guaranteed'].map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ color: '#666' }}>
          <p>© {new Date().getFullYear()} FlexPlay Jerseys. All rights reserved.</p>
          <p>Made with ⚽ for football fans across India</p>
        </div>
      </div>
    </footer>
  )
}
