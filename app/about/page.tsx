"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { JobModal } from "@/components/job-modal"
import { ContactModal } from "@/components/contact-modal"

export default function AboutPage() {
  const [jobModalOpen, setJobModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenContactModal={() => setContactModalOpen(true)} />
      <About onOpenJobModal={() => setJobModalOpen(true)} />
      <Footer onOpenJobModal={() => setJobModalOpen(true)} onOpenContactModal={() => setContactModalOpen(true)} />
      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </main>
  )
}
