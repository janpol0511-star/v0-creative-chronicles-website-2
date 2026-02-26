"use client"

// using external images via <img>
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { ArrowRight, MapPin, Clock, Briefcase, DollarSign, X } from "lucide-react"

interface JobModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const jobs = [
  {
    id: 1,
    title: "Sales Representative",
    description: "Join our dynamic sales team and help connect authors with readers worldwide. You'll be responsible for building relationships with potential clients and driving book sales.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    location: "Cebu, Philippines",
    type: "Full-time",
    experience: "Entry to Mid Level",
    salary: "Competitive Commission",
    applyUrl: "https://www.mynimo.com/jobs/view/455224/cebu/sales-representative",
    highlights: [
      "Build and maintain client relationships",
      "Meet and exceed sales targets",
      "Participate in sales training programs",
      "Work with a supportive team environment"
    ]
  },
  {
    id: 2,
    title: "Sales Publishing Consultant",
    description: "As a Sales Publishing Consultant, you'll guide authors through the publishing process while promoting our publishing services. This role combines sales expertise with publishing knowledge.",
    image: "https://images.unsplash.com/photo-1545996124-1e6d8b6a3a54?auto=format&fit=crop&w=1200&q=80",
    location: "Cebu, Philippines",
    type: "Full-time",
    experience: "Mid to Senior Level",
    salary: "Base + Commission",
    applyUrl: "https://www.mynimo.com/jobs/view/453958/cebu/sales-publishing-agent",
    highlights: [
      "Consult with authors on publishing solutions",
      "Develop customized publishing proposals",
      "Drive revenue through consultative selling",
      "Collaborate with editorial and marketing teams"
    ]
  }
]

export function JobModal({ open, onOpenChange }: JobModalProps) {
  const router = useRouter()
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="animate-slide-in-modal max-h-[90vh] w-[95vw] max-w-2xl overflow-y-auto bg-background p-0 sm:w-[90vw] md:max-w-3xl">
        <DialogHeader className="sticky top-0 z-10 border-b border-border bg-background p-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground">
              Open Positions
            </DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-muted-foreground">
            Join Creative Chronicle Solutions and build your career with us
          </p>
        </DialogHeader>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className={`group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up ${index === 1 ? 'animation-delay-200' : ''}`}
            >
              {/* Job Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={job.image || "/placeholder.svg"}
                  alt={job.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                </div>
              </div>

              {/* Job Details */}
              <div className="p-5">
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                {/* Job Info */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{job.salary}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Responsibilities
                  </p>
                  <ul className="space-y-1">
                    {job.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-card-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg"
                >
                      <button
                        type="button"
                        onClick={() => {
                          onOpenChange(false)
                          router.push(`/about?apply=true&position=${encodeURIComponent(job.title)}`)
                        }}
                        className="flex items-center w-full justify-center"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-muted/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            {"Don't see a position that fits? "}
            <a 
              href="mailto:hrrecruitment@creativechroniclesolutions.com" 
              className="font-medium text-primary hover:underline"
            >
              Contact us
            </a>
            {" to explore other opportunities."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
