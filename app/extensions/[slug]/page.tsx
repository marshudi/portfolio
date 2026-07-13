import { MotionDiv } from '@/components/motion-wrapper'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Chrome, ExternalLink, Github, Shield, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import extensionsData from '@/data/extensions.json'

export async function generateStaticParams() {
  return extensionsData.extensions.map((extension) => ({
    slug: extension.slug,
  }))
}

export default async function ExtensionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const extension = extensionsData.extensions.find((ext) => ext.slug === slug)

  if (!extension) {
    notFound()
  }

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['25 files/day', 'PDF + attachments', 'SharePoint uploads', 'Browser session auth'],
      cta: 'Get Started',
      highlight: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      features: ['500 files/day', 'PDF + attachments', 'SharePoint uploads', 'Priority support'],
      cta: 'Upgrade to Pro',
      highlight: true
    },
    {
      name: 'Business',
      price: '$29.99',
      period: '/month',
      features: ['Unlimited files', 'PDF + attachments', 'SharePoint uploads', 'Priority support'],
      cta: 'Upgrade to Business',
      highlight: false
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-background border-2 border-border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg">
              <Image
                src={extension.icon}
                alt={extension.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{extension.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{extension.tagline}</p>
              <div className="flex flex-wrap gap-3">
                {extension.storeLinks?.chrome && (
                  <Button asChild>
                    <a href={extension.storeLinks.chrome} target="_blank" rel="noopener noreferrer">
                      <Chrome className="w-4 h-4 mr-2" />
                      Add to Chrome
                    </a>
                  </Button>
                )}
                {extension.storeLinks?.edge && (
                  <Button variant="outline" asChild>
                    <a href={extension.storeLinks.edge} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Add to Edge
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4">About</h2>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Product Mission</h3>
                  <p className="leading-relaxed">
                    {extension.name} is an independent browser extension built to fill a critical gap in Atlassian data management.
                    While Atlassian Cloud offers powerful collaboration tools, backing up your valuable Confluence documentation and
                    Jira tickets has historically required complex API integrations, token management, and technical overhead.
                  </p>
                  <p className="leading-relaxed mt-3">
                    This extension changes that. It provides a professional-grade backup solution that works directly in your browser,
                    leveraging your existing authenticated session to export clean, archival-quality PDFs with full attachments-no
                    API tokens, no server-side storage, no complexity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Core Value Proposition</h3>
                  <p className="leading-relaxed font-medium text-foreground">
                    Security Without the API Token Headache
                  </p>
                  <p className="leading-relaxed mt-2">
                    Traditional backup tools require you to generate API tokens, manage credentials, and trust third-party services
                    with your organization's data. {extension.name} takes a fundamentally different approach:
                  </p>
                  <ul className="space-y-2 mt-3 ml-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Session-based authentication:</strong> Uses your active browser session-no tokens to create, store, or rotate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Client-side processing:</strong> All operations happen in your browser sandbox-your data never touches our servers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Direct-to-destination:</strong> Files go straight to your Downloads folder or your own SharePoint instance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Enterprise-ready output:</strong> Real PDF rendering via Chrome DevTools Protocol, not HTML screenshots</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Recursive page tree backup:</strong> Back up a Confluence page and all its children in one operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Full attachment support:</strong> All files are downloaded with proper streaming-handles large attachments efficiently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">SharePoint integration:</strong> Upload directly to your SharePoint document library with chunked transfer support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Windows/OneDrive safe:</strong> Path handling respects MAX_PATH limits for seamless OneDrive sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Rate-limit aware:</strong> Honors API limits and retry-after headers automatically</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Developer</h3>
                  <p className="leading-relaxed">
                    Built by <a href="https://marshudi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Marshudi</a>,
                    an independent developer based in Oman. This extension is born from real-world operational needs at scale,
                    refined through production use in enterprise telecom environments.
                  </p>
                  <p className="leading-relaxed mt-3">
                    GitHub: <a href="https://github.com/marshudi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">github.com/marshudi</a>
                  </p>
                </div>
              </div>
            </MotionDiv>

            {/* Pricing Section */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-2">Pricing</h2>
              <p className="text-muted-foreground mb-6">
                Flexible plans to match your backup needs. All plans include PDF export, full attachment downloads, and SharePoint uploads.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`border rounded-lg p-6 ${
                      plan.highlight
                        ? 'border-primary shadow-lg shadow-primary/10 relative'
                        : 'border-border'
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.highlight ? 'default' : 'outline'}
                      className="w-full"
                      asChild={plan.name !== 'Free'}
                    >
                      {plan.name === 'Free' ? (
                        <span>{plan.cta}</span>
                      ) : (
                        <a href={extension.storeLinks?.chrome || '#'}>{plan.cta}</a>
                      )}
                    </Button>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                Payments processed securely via Stripe using ExtensionPay. No payment data is stored by this extension.
              </p>
            </MotionDiv>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Version</dt>
                  <dd className="font-medium">{extension.version}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium">{extension.category}</dd>
                </div>
                {extension.tags && (
                  <div>
                    <dt className="text-muted-foreground mb-2">Tags</dt>
                    <dd className="flex flex-wrap gap-2">
                      {extension.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Privacy & Security
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your data security is paramount. This extension processes everything locally in your browser.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/extensions/${extension.slug}/privacy-policy`}>
                  View Privacy Policy
                </Link>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  )
}
