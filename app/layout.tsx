import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlexPlay Jerseys – World Cup 2026 Collection',
  description: 'Premium World Cup 2026 jerseys – Argentina, Portugal, Brazil, France & more. Order on WhatsApp for fast delivery across India.',
  icons: {
    icon: '/images/flexplay-logo.png',
  },
  openGraph: {
    title: 'FlexPlay Jerseys – World Cup 2026 Collection',
    description: 'Premium World Cup 2026 jerseys at unbeatable prices. Order via WhatsApp.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
