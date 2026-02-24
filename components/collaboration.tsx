"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Video, FileText, Calendar, Mail } from "lucide-react"
import { JobModal } from "@/components/job-modal"

const tools = [
  { icon: MessageCircle, label: "Team Chat" },
  { icon: Video, label: "Video Calls" },
  { icon: FileText, label: "Shared Docs" },
  { icon: Calendar, label: "Scheduling" },
]

interface CollaborationProps {
  onOpenContactModal?: () => void
}

export function Collaboration({ onOpenContactModal }: CollaborationProps) {
  const [jobModalOpen, setJobModalOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary px-6 py-20 lg:px-8 lg:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="animate-fade-in-left">
              <h2 className="mb-6 text-balance text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
                Maximize Team Efficiency with Seamless Collaboration
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Our integrated communication tools make it easy to connect with your team, share resources, and close deals faster than ever before.
              </p>

              {/* Tool badges */}
              <div className="mb-8 flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                    <div
                      key={tool.label}
                      className="flex animate-fade-in-up items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-primary-foreground/20"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {(() => {
                        const Icon = tool.icon
                        return (
                          <>
                            <Icon className="h-4 w-4 text-primary-foreground" />
                            <span className="text-sm font-medium text-primary-foreground">{tool.label}</span>
                          </>
                        )
                      })()}
                    </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setJobModalOpen(true)}
                  className="bg-primary-foreground text-primary transition-all hover:bg-primary-foreground/90 hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={onOpenContactModal}
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground transition-all hover:scale-105 hover:bg-primary-foreground/10"
                >
                  Contact Us
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-right animation-delay-300">
              <div className="animate-pulse-glow absolute -inset-4 rounded-3xl bg-primary-foreground/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/collaboration.jpg"
                  alt="Team collaboration workspace"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating stats */}
              <div className="animate-float absolute -bottom-4 -right-4 rounded-2xl border border-primary-foreground/20 bg-card p-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                    <MessageCircle className="h-6 w-6 animate-pulse text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">24/7</p>
                    <p className="text-sm text-muted-foreground">Team Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
    </>
  )
}
