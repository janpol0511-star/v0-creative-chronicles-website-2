"use client"

import { useState } from "react"
import Link from "next/link"
// using external img for logo
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { JobModal } from "@/components/job-modal"

interface HeaderProps {
  onOpenContactModal?: () => void
}

export function Header({ onOpenContactModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [jobModalOpen, setJobModalOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const handleContactClick = () => {
    if (onOpenContactModal) {
      onOpenContactModal()
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-4 transition-transform hover:scale-105">
            <img
              src="https://framerusercontent.com/images/641vTth7zJIhrEdbNEZ1Evuk38.png"
              alt="Creative Chronicle Solutions Logo"
              className="h-20 w-20 object-contain drop-shadow-xl sm:h-28 sm:w-28 lg:h-36 lg:w-36"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <button
              onClick={() => scrollToSection("features")}
              className="relative text-sm font-medium text-muted-foreground transition-all hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="relative text-sm font-medium text-muted-foreground transition-all hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("stories")}
              className="relative text-sm font-medium text-muted-foreground transition-all hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Success Stories
            </button>
            <button
              onClick={handleContactClick}
              className="relative text-sm font-medium text-muted-foreground transition-all hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contact Us
            </button>
          </div>

          <div className="hidden lg:flex">
            <Button 
              onClick={() => setJobModalOpen(true)}
              className="bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-6 pb-4 pt-2">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("stories")}
                className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary"
              >
                Success Stories
              </button>
              <button
                onClick={handleContactClick}
                className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary"
              >
                Contact Us
              </button>
              <div className="pt-2">
                <Button 
                  onClick={() => {
                    setJobModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <JobModal open={jobModalOpen} onOpenChange={setJobModalOpen} />
    </>
  )
}
