import { MotionDiv } from '@/components/motion-wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { Download, Star, Tag, ExternalLink } from 'lucide-react'
import extensionsData from '@/data/extensions.json'

export default function ExtensionsPage() {
  const extensions = extensionsData.extensions

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browser <span className="text-primary">Extensions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional browser extensions built to enhance productivity and streamline workflows.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((extension, index) => (
            <MotionDiv
              key={extension.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/extensions/${extension.slug}`}>
                <div className="group h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="p-6 border-b border-border bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
                          src={extension.icon}
                          alt={extension.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                          {extension.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {extension.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {extension.description}
                    </p>

                    {extension.tags && extension.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {extension.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>

        {extensions.length === 0 && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No extensions available yet. Check back soon!
            </p>
          </MotionDiv>
        )}
      </div>
    </div>
  )
}
