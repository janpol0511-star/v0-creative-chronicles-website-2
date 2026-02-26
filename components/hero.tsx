"use client"

import { useState } from "react"
// no next/image used here; using <video> for hero media
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { JobModal } from "@/components/job-modal"

export function Hero() {
  const [jobModalOpen, setJobModalOpen] = useState(false)

  const scrollToFeatures = () => {
    const element = document.getElementById("features")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-background px-6 py-20 lg:px-8 lg:py-28">
        {/* Background decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 -z-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex animate-fade-in-down items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
                <Sparkles className="h-4 w-4 animate-pulse text-primary" />
                <span className="text-sm font-medium text-primary">Now Hiring Sales Agents</span>
              </div>
              
              <h1 className="mb-6 animate-fade-in-up text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Transform{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  the Way
                </span>{" "}
                You Work
              </h1>
              
              <p className="mb-8 animate-fade-in-up text-pretty text-lg leading-relaxed text-muted-foreground animation-delay-200 lg:text-xl">
                Join Our Sales Team at Creative Chronicle Solutions! We{"'"}re looking for motivated sales agents to help us grow our publishing success.
              </p>

              <div className="flex animate-fade-in-up flex-col items-center gap-4 animation-delay-300 sm:flex-row lg:justify-start">
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
                  onClick={scrollToFeatures}
                  className="border-secondary bg-transparent text-secondary transition-all hover:scale-105 hover:bg-secondary/10"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid animate-fade-in-up grid-cols-3 gap-8 border-t border-border pt-8 animation-delay-400">
                <div className="transition-transform hover:scale-110">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Sales Agents</p>
                </div>
                <div className="transition-transform hover:scale-110">
                  <p className="text-3xl font-bold text-secondary">1000+</p>
                  <p className="text-sm text-muted-foreground">Books Sold</p>
                </div>
                <div className="transition-transform hover:scale-110">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>

            {/* Hero Media: Video (primary) with fallback image */}
            <div className="relative animate-fade-in-right animation-delay-300">
              <div className="animate-pulse-glow absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-black h-64 sm:h-80 lg:h-[480px]">
                <video
                  src="https://res.cloudinary.com/domah6aab/video/upload/v1728429828/Anniversary_Video_2_yrrgm1.mp4"
                  controls
                  className="h-full w-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
    </>
  )
}
