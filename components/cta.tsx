"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Star, Trophy } from "lucide-react"
import { JobModal } from "@/components/job-modal"

interface CTAProps {
  onOpenContactModal?: () => void
}

export function CTA({ onOpenContactModal }: CTAProps) {
  const [jobModalOpen, setJobModalOpen] = useState(false)

  const handleContactClick = () => {
    if (onOpenContactModal) {
      onOpenContactModal()
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-background px-6 py-20 lg:px-8 lg:py-28">
        {/* Background decorative elements */}
        <div className="absolute left-1/4 top-0 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          {/* Icons */}
          <div className="mb-8 flex justify-center gap-4">
            <div className="flex h-14 w-14 animate-fade-in-up items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 hover:scale-110">
              <Rocket className="h-7 w-7 text-primary" />
            </div>
            <div className="flex h-14 w-14 animate-fade-in-up items-center justify-center rounded-2xl bg-secondary/10 transition-transform duration-300 animation-delay-100 hover:scale-110">
              <Star className="h-7 w-7 text-secondary" />
            </div>
            <div className="flex h-14 w-14 animate-fade-in-up items-center justify-center rounded-2xl bg-accent/10 transition-transform duration-300 animation-delay-200 hover:scale-110">
              <Trophy className="h-7 w-7 text-accent" />
            </div>
          </div>

          <h2 className="mb-6 animate-fade-in-up text-balance text-3xl font-bold text-foreground animation-delay-200 sm:text-4xl lg:text-5xl">
            Start Your Sales Career with{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Creative Chronicle Solutions
            </span>{" "}
            Today!
          </h2>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-pretty text-lg text-muted-foreground animation-delay-300">
            Ready to elevate your career? Join the growing team of successful sales agents transforming the publishing industry. Unlock new opportunities and take the next step with us!
          </p>

          <div className="flex animate-fade-in-up flex-col items-center justify-center gap-4 animation-delay-400 sm:flex-row">
            <Button 
              size="lg" 
              onClick={() => setJobModalOpen(true)}
              className="bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleContactClick}
              className="border-secondary bg-transparent transition-all hover:scale-105 hover:bg-secondary/10"
            >
              Contact Us
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex animate-fade-in-up flex-wrap items-center justify-center gap-8 border-t border-border pt-12 animation-delay-500">
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Comprehensive Training</span>
            </div>
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                <Trophy className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Flexible Work Structure</span>
            </div>
            <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <Rocket className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Growth Opportunities</span>
            </div>
          </div>
        </div>
      </section>

      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
    </>
  )
}
