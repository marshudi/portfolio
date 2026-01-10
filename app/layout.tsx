import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import profile from '@/data/profile.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://marshudi.com'),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.shortBio,
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marshudi.com',
    siteName: profile.name,
    title: `${profile.name} | ${profile.title}`,
    description: profile.shortBio,
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.title}`,
    description: profile.shortBio,
    images: ['/images/og.png'],
    creator: '@eMarshudi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://marshudi.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              url: 'https://marshudi.com',
              image: profile.avatar,
              jobTitle: profile.title,
              worksFor: {
                '@type': 'Organization',
                name: 'Vodafone Oman',
              },
              sameAs: [
                profile.social.github,
                profile.social.linkedin,
                profile.social.twitter,
                profile.social.youtube,
                profile.social.instagram,
              ].filter(Boolean),
              knowsAbout: profile.keywords,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Muscat',
                addressCountry: 'Oman',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: profile.name,
              url: 'https://marshudi.com',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
