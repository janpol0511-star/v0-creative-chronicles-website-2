"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Benefits } from "@/components/benefits"
import { Collaboration } from "@/components/collaboration"
import { SuccessStories } from "@/components/success-stories"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { JobModal } from "@/components/job-modal"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [jobModalOpen, setJobModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenContactModal={() => setContactModalOpen(true)} />
      <Hero />
      <Features />
      <Benefits />
      <Collaboration onOpenContactModal={() => setContactModalOpen(true)} />
      <SuccessStories />
      <CTA onOpenContactModal={() => setContactModalOpen(true)} />
      <Footer onOpenJobModal={() => setJobModalOpen(true)} onOpenContactModal={() => setContactModalOpen(true)} />
      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </main>
  )
}
