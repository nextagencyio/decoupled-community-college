import './globals.css'
import { DemoModeBanner } from './components/DemoModeBanner'
import { Viewport, type Metadata } from 'next'
import { Roboto_Slab, Roboto } from 'next/font/google'

const displayFont = Roboto_Slab({ subsets: ['latin'], variable: '--font-roboto-slab', display: 'swap', weight: ['400', '500', '600', '700', '800', '900'] })
const bodyFont = Roboto({ subsets: ['latin'], variable: '--font-roboto', display: 'swap', weight: ['400', '500', '700'] })

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1 }

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://${process.env.HOST || 'localhost'}:${process.env.PORT || '3000'}`
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: 'Crestwood Community College', template: `%s | Crestwood Community College` },
  description: 'Providing accessible, high-quality education that prepares students for transfer, career success, and lifelong learning.',
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: [{ url: '/icon', sizes: '32x32', type: 'image/png' }, { url: '/favicon.ico', sizes: 'any' }], apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <DemoModeBanner />
        {children}
      </body>
    </html>
  )
}
