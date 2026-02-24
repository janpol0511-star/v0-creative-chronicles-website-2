import Image from "next/image"
import { BarChart3, Workflow, FolderKanban, Users } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Data Driven Success",
    description: "Use powerful analytics to make informed decisions and boost your sales performance.",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Spend more time selling and less on admin with our seamless automation tools.",
    color: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
  {
    icon: FolderKanban,
    title: "Project Management Made Easy",
    description: "Track and manage multiple deals in one place, keeping your sales organized and efficient.",
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: Users,
    title: "Collaborative Workspace",
    description: "Work closely with our creative and distribution teams to ensure every sale is a win for our authors and readers.",
    color: "bg-chart-4",
    textColor: "text-primary-foreground",
  },
]

const featureImages: Record<string, string> = {
  'Data Driven Success': '/images/analytics.jpg',
  'Automated Workflows': '/images/transparency.jpg',
  'Project Management Made Easy': '/images/global-opportunities.jpg',
  'Collaborative Workspace': '/images/collaboration.jpg',
}

export function Features() {
  return (
    <section id="features" className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 animate-fade-in-down text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </p>
          <h2 className="mb-4 animate-fade-in-up text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-secondary">Succeed</span>
          </h2>
          <p className="mx-auto max-w-2xl animate-fade-in-up text-pretty text-lg text-muted-foreground animation-delay-200">
            At Creative Chronicle Solutions, we provide our sales agents with the best tools and support to achieve remarkable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={"mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl " + feature.color + " transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className={"h-7 w-7 " + feature.textColor} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">{feature.description}</p>

                {/* Feature image */}
                {featureImages[feature.title] && (
                  <div className="mt-4 overflow-hidden rounded-md">
                    <Image
                      src={featureImages[feature.title]}
                      alt={feature.title}
                      width={600}
                      height={340}
                      className="h-32 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}

                {/* Decorative gradient */}
                <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )
          })}
        </div>

        {/* Image Section */}
        <div className="mt-16 animate-scale-in overflow-hidden rounded-3xl border border-border shadow-xl transition-transform duration-500 hover:scale-[1.01]">
          <Image
            src="/images/analytics.jpg"
            alt="Analytics dashboard showing sales performance"
            width={1200}
            height={500}
            className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
