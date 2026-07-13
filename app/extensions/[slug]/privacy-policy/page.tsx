import { MotionDiv } from '@/components/motion-wrapper'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import extensionsData from '@/data/extensions.json'

export async function generateStaticParams() {
  return extensionsData.extensions.map((extension) => ({
    slug: extension.slug,
  }))
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const extension = extensionsData.extensions.find((ext) => ext.slug === slug)

  if (!extension) {
    notFound()
  }

  const effectiveDate = 'July 13, 2026'

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="mb-4">
            <Link href={`/extensions/${extension.slug}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {extension.name}
            </Link>
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground">
            Effective Date: {effectiveDate}
          </p>
        </MotionDiv>

        {/* Privacy Policy Content */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-8"
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{extension.name}</strong> ("we," "our," or "the Extension") is a browser extension
              developed by Marshudi, an independent developer based in Oman. This Privacy Policy explains how we handle information
              when you use our Extension to back up Confluence pages and Jira tickets from Atlassian Cloud services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We are committed to transparency and protecting your privacy. This policy describes our data practices in clear,
              straightforward terms suitable for both individual users and enterprise security teams evaluating our Extension.
            </p>
          </section>

          {/* Core Privacy Principle */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Core Privacy Principle
            </h2>
            <p className="text-foreground leading-relaxed font-medium">
              We do not collect, store, or transmit your Atlassian content or credentials to any external servers.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All backup operations occur entirely within your browser's sandboxed environment. Your Confluence pages, Jira tickets,
              attachments, and authentication tokens remain exclusively on your local machine or are sent directly to your chosen
              destination (Downloads folder or your own SharePoint instance)-never to us.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Extension collects only the minimum data necessary to enforce plan limits and verify subscriptions. Specifically:
            </p>

            <h3 className="text-xl font-semibold mb-3">What We Collect</h3>
            <ul className="space-y-3 ml-6">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Daily file count:</strong> A numerical counter of how many files (pages, attachments)
                you've backed up each day. This is stored locally in your browser and synchronized via ExtensionPay to enforce your
                plan's daily limits (25 files for Free, 500 for Pro, unlimited for Business).
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Subscription status:</strong> A flag indicating whether you have an active paid
                subscription (Pro or Business). This is managed by ExtensionPay and Stripe to determine which plan features you can access.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">What We Do NOT Collect</h3>
            <ul className="space-y-3 ml-6">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Atlassian content:</strong> We never see, store, or transmit the actual text,
                images, attachments, or metadata from your Confluence pages or Jira tickets.
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Authentication credentials:</strong> The Extension uses your browser's existing
                session cookies to authenticate with Atlassian. We never capture, store, or transmit your Atlassian username, password,
                or API tokens.
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">SharePoint content or credentials:</strong> When backing up to SharePoint, the
                Extension uses your browser's existing SharePoint session. We never capture or store your Microsoft credentials or
                access tokens.
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Browsing history:</strong> We do not track which Confluence pages or Jira tickets
                you visit, view, or back up.
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Personal identifiable information:</strong> We do not collect your name, email
                address, IP address, or device identifiers-except as required by Stripe for payment processing (see Third-Party
                Processing below).
              </li>
            </ul>
          </section>

          {/* Zero Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Zero Data Retention Policy for Atlassian Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The Extension operates on a <strong className="text-foreground">zero-retention architecture</strong> for all Atlassian
              and SharePoint content:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">No server-side storage:</strong> We do not operate servers that receive or store
                your backup data.
              </li>
              <li>
                <strong className="text-foreground">Client-side processing only:</strong> All PDF rendering, attachment downloads, and
                metadata assembly happen in your browser using the Chrome DevTools Protocol and standard web APIs.
              </li>
              <li>
                <strong className="text-foreground">Direct-to-destination:</strong> Files go straight from Atlassian's servers (via
                your browser) to your local Downloads folder or your SharePoint instance. They never transit through our infrastructure.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When you uninstall the Extension, the only data that remains is whatever you chose to download to your local machine or
              upload to SharePoint-all of which you control directly.
            </p>
          </section>

          {/* Third-Party Processing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Extension integrates with two third-party services for payment and subscription management:
            </p>

            <h3 className="text-xl font-semibold mb-3">ExtensionPay (Subscription Management)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We use <a href="https://extensionpay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ExtensionPay</a> to manage subscription logic and daily usage limits. ExtensionPay:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground mb-4">
              <li>Stores your daily file count and subscription tier (Free, Pro, Business) in your browser's local storage.</li>
              <li>Synchronizes subscription status with Stripe to verify paid plans.</li>
              <li>Does not collect or transmit your Atlassian content.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Stripe (Payment Processor)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              When you upgrade to a paid plan (Pro or Business), payments are processed by{' '}
              <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe</a>,
              a PCI-DSS compliant payment processor. Stripe:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground mb-4">
              <li>Collects your payment information (credit card number, billing address, email) to process charges.</li>
              <li>Issues a subscription token that ExtensionPay uses to verify your paid status.</li>
              <li>Does not share your payment details with us-we only receive a subscription confirmation.</li>
              <li>
                Operates under its own privacy policy:{' '}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  stripe.com/privacy
                </a>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed font-medium">
              <strong className="text-foreground">Important:</strong> All payments occur outside the Google Chrome Web Store or
              Microsoft Edge Add-ons store. We process subscriptions via ExtensionPay and Stripe only-not through browser store billing systems.
            </p>
          </section>

          {/* Permissions Explained */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Browser Permissions Explained</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Extension requests several browser permissions. Here's what each permission is used for and what it is NOT used for:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-1">activeTab, tabs</h4>
                <p className="text-muted-foreground text-sm">
                  <strong>Used for:</strong> Communicating with the Confluence or Jira tab you're currently viewing, and opening a
                  hidden tab to render pages to PDF via Chrome DevTools Protocol.
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  <strong>NOT used for:</strong> Reading your browsing history, tracking which sites you visit, or accessing tabs
                  unrelated to Atlassian or SharePoint.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-1">debugger</h4>
                <p className="text-muted-foreground text-sm">
                  <strong>Used for:</strong> Rendering Confluence pages to real PDFs (not HTML screenshots) using the Chrome DevTools
                  Protocol's Page.printToPDF command. This produces vector-based PDFs with correct CSS and metadata.
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  <strong>NOT used for:</strong> Debugging or inspecting any tabs other than the Extension's own hidden render tab.
                  You'll see a "Started debugging this browser" banner during PDF rendering-this is harmless and indicates normal operation.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-1">downloads</h4>
                <p className="text-muted-foreground text-sm">
                  <strong>Used for:</strong> Saving backup files (PDFs, attachments, metadata JSON) to your browser's Downloads folder
                  via the browser's download manager.
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  <strong>NOT used for:</strong> Accessing or reading files already on your computer.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-1">host_permissions: *.atlassian.net, *.atlassian.com</h4>
                <p className="text-muted-foreground text-sm">
                  <strong>Used for:</strong> Calling the Confluence and Jira REST APIs using your existing browser session, and
                  downloading attachments from media.atlassian.com (which Atlassian Cloud uses for attachment redirects).
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  <strong>NOT used for:</strong> Intercepting or modifying your Atlassian session, capturing your credentials, or
                  accessing Atlassian data you haven't explicitly chosen to back up.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-1">host_permissions: *.sharepoint.com</h4>
                <p className="text-muted-foreground text-sm">
                  <strong>Used for:</strong> (SharePoint mode only) Listing folders and uploading files to your chosen SharePoint
                  document library via the SharePoint REST API, using your existing browser session.
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  <strong>NOT used for:</strong> Accessing SharePoint if you haven't enabled SharePoint mode, or uploading data without
                  your explicit backup action.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground mb-1">storage</h4>
                <p className="text-muted-foreground text-sm">
                  <strong>Used for:</strong> Storing your preferences (backup destination choice: Download or SharePoint, selected
                  SharePoint folder URL) and daily file count locally in your browser.
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  <strong>NOT used for:</strong> Storing Atlassian content, credentials, or any personal data beyond usage counts and preferences.
                </p>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Because we do not collect or store your Atlassian content or personal data (beyond payment info handled by Stripe),
              you inherently retain full control:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Right to access:</strong> All data the Extension uses is stored locally in your
                browser (chrome.storage.local). You can inspect it via Chrome DevTools.
              </li>
              <li>
                <strong className="text-foreground">Right to deletion:</strong> Uninstalling the Extension removes all locally stored
                preferences and usage counts. Backup files you downloaded remain on your device or SharePoint-you control those directly.
              </li>
              <li>
                <strong className="text-foreground">Right to data portability:</strong> All backup files are saved in standard formats
                (PDF, JSON) that you can move, archive, or process as you see fit.
              </li>
              <li>
                <strong className="text-foreground">Right to withdraw consent:</strong> You can stop using the Extension at any time
                by uninstalling it. Cancel paid subscriptions via the Extension's settings or by contacting Stripe support.
              </li>
            </ul>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy to reflect changes in the Extension's features or legal requirements. If we make
              material changes, we'll notify you via an in-extension message or update notice in the Chrome Web Store listing. Your
              continued use of the Extension after such changes constitutes acceptance of the updated policy.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The current effective date is listed at the top of this page: <strong className="text-foreground">{effectiveDate}</strong>.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we do not store your Atlassian content, we recognize that the Extension runs in your browser and interacts with
              sensitive data. Security measures include:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground mt-3">
              <li>
                <strong className="text-foreground">Sandboxed execution:</strong> All operations occur within Chrome's extension
                sandbox, isolated from other browser processes.
              </li>
              <li>
                <strong className="text-foreground">No remote code execution:</strong> The Extension does not load external scripts
                or code at runtime.
              </li>
              <li>
                <strong className="text-foreground">HTTPS-only communication:</strong> All API calls to Atlassian and SharePoint occur
                over encrypted HTTPS connections.
              </li>
            </ul>
          </section>

          {/* Enterprise Considerations */}
          <section className="bg-muted/30 border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Enterprise Considerations</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              For security teams evaluating this Extension:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Data residency:</strong> All Atlassian content remains in your environment
                (local machine or your SharePoint tenant). Nothing transits through our servers or third-party storage.
              </li>
              <li>
                <strong className="text-foreground">Compliance:</strong> Because we do not collect or store content, GDPR, CCPA,
                and similar regulations primarily apply to Stripe's payment processing. The Extension itself imposes no additional
                compliance burden.
              </li>
              <li>
                <strong className="text-foreground">Conditional Access:</strong> If your organization enforces Conditional Access
                policies on SharePoint, the Extension inherits those controls-it cannot bypass your tenant's security settings.
              </li>
              <li>
                <strong className="text-foreground">No network telemetry:</strong> The Extension does not phone home with usage
                analytics, crash reports, or telemetry beyond what's required for subscription verification via ExtensionPay/Stripe.
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you have questions or concerns about this Privacy Policy, your data, or the Extension's operation, please contact:
            </p>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-foreground font-medium">Marshudi</p>
              <p className="text-muted-foreground">Independent Developer, Oman</p>
              <p className="text-muted-foreground mt-2">
                Website:{' '}
                <a href="https://marshudi.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  marshudi.com
                </a>
              </p>
              <p className="text-muted-foreground">
                GitHub:{' '}
                <a href="https://github.com/marshudi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/marshudi
                </a>
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For payment or subscription issues, contact{' '}
              <a href="https://stripe.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Stripe Support
              </a>
              .
            </p>
          </section>

          {/* Acknowledgment */}
          <section className="border-t pt-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              By installing and using <strong className="text-foreground">{extension.name}</strong>, you acknowledge that you have
              read, understood, and agree to this Privacy Policy. If you do not agree, please do not install or use the Extension.
            </p>
          </section>
        </MotionDiv>

        {/* Back Button */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Button asChild>
            <Link href={`/extensions/${extension.slug}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {extension.name}
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </div>
  )
}
