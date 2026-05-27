'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight" style={{ color: 'var(--text)' }}>
          <img 
            src="/images/flexplay-logo.png" 
            alt="FlexPlay Jerseys"
            className="h-7 w-auto"
          />
          <span className="whitespace-nowrap">FlexPlay Jerseys</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          <a href="#collection" className="hover:text-black transition-colors">Collection</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: 'var(--border)' }}>
          <nav className="flex flex-col px-4 py-4 gap-1 text-sm font-medium" style={{ color: 'var(--text)' }}>
            <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="py-3 px-2 hover:bg-gray-100 rounded transition-colors">
              Collection
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-3 px-2 hover:bg-gray-100 rounded transition-colors">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
