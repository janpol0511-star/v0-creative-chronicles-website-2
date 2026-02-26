"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { JobModal } from "@/components/job-modal"
import { ContactModal } from "@/components/contact-modal"
import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function AboutPage() {
  const [jobModalOpen, setJobModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactMode, setContactMode] = useState<'message' | 'application'>('message')
  const [contactPosition, setContactPosition] = useState<string | undefined>(undefined)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const apply = searchParams.get('apply')
    const position = searchParams.get('position')
    if (apply === 'true') {
      setContactMode('application')
      if (position) setContactPosition(position)
      setContactModalOpen(true)
      // clean URL
      router.replace('/about')
    }
  }, [searchParams, router])

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenContactModal={() => setContactModalOpen(true)} />
      <About onOpenJobModal={() => setJobModalOpen(true)} />
      <Footer onOpenJobModal={() => setJobModalOpen(true)} onOpenContactModal={() => setContactModalOpen(true)} />
      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        mode={contactMode}
        initialPosition={contactPosition}
      />
    </main>
  )
}
