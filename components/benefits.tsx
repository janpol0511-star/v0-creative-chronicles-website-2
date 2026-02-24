"use client"

import { useState } from "react"
// using external images via <img>
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Globe } from "lucide-react"
import { JobModal } from "@/components/job-modal"

const benefits = [
  {
    icon: Target,
    title: "Results Oriented",
    description: "We are results-driven. We make sure that our clients will have the best experience.",
    color: "bg-primary",
    iconColor: "text-primary-foreground",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "With years of experience, we have mastered the art of listening to the challenges our clients face and provide effective realistic solutions.",
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "We strategically create global opportunities to widen the reach and strengthen your brand for potential book buyers and investors.",
    color: "bg-accent",
    iconColor: "text-accent-foreground",
  },
]

export function Benefits() {
  const [jobModalOpen, setJobModalOpen] = useState(false)

  return (
    <>
      <section id="benefits" className="bg-background px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 animate-fade-in-down text-sm font-semibold uppercase tracking-wider text-secondary">
              Why Join Us
            </p>
            <h2 className="mb-4 animate-fade-in-up text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Your Success is Our{" "}
              <span className="text-primary">Priority</span>
            </h2>
          </div>

          <div className="space-y-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <div
                  key={benefit.title}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                {/* Content */}
                <div className={`flex-1 text-center lg:text-left ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}>
                    <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.color} transition-all duration-300 hover:scale-110 hover:rotate-3`}>
                      <Icon className={`h-8 w-8 ${benefit.iconColor}`} />
                    </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                    {benefit.title}
                  </h3>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {benefit.description}
                  </p>
                  <Button 
                    onClick={() => setJobModalOpen(true)}
                    className="bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={`relative flex-1 ${index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'}`}>
                  <div className={`absolute -inset-4 rounded-3xl ${
                    index === 0 ? "bg-primary/10" : index === 1 ? "bg-secondary/10" : "bg-accent/10"
                  } animate-pulse-glow blur-2xl`} />
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                      <div className="flex aspect-[4/3] items-center justify-center">
                        <img
                          src={
                            index === 0
                              ? 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80'
                              : index === 1
                              ? 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80'
                              : 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
                          }
                          alt={benefit.title}
                          width={500}
                          height={350}
                          className="h-full w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                  </div>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
    </>
  )
}
