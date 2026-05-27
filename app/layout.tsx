import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
      <body>
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TTEPGP2BET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TTEPGP2BET');
          `}
        </Script>
      </body>
    </html>
  )
}