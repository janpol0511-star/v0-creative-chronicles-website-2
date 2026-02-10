"use client"

import React from "react"

import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "#features" },
    { name: "Careers", href: "#", isJobModal: true },
    { name: "Our Team", href: "#stories" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Success Stories", href: "#stories" },
    { name: "Benefits", href: "#benefits" },
    { name: "Features", href: "#features" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/creativechroniclesolutions" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/creative-chronicle-solutions" },
]

interface FooterProps {
  onOpenJobModal?: () => void
}

export function Footer({ onOpenJobModal }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; isJobModal?: boolean }) => {
    if (link.isJobModal && onOpenJobModal) {
      e.preventDefault()
      onOpenJobModal()
    } else if (link.href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(link.href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Creative Chronicle Solutions Logo"
                width={64}
                height={64}
                className="h-16 w-16 object-contain drop-shadow-lg"
              />
              <span className="text-2xl font-bold text-foreground">
                Creative Chronicle
              </span>
            </div>
            <p className="mb-6 text-muted-foreground">
              Janpol coronadoTransforming the publishing industry through dedicated sales excellence and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:creativechroniclesolutions@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>creativechroniclesolutions@gmail.com</span>
              </a>
              <a 
                href="tel:+639175551234"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5 text-secondary" />
                <span>+63 917 555 1234</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Cebu City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Section */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Join Our Team</h3>
            <p className="mb-4 text-muted-foreground">
              Ready to start your sales career? We{"'"}re hiring motivated individuals to join our growing team.
            </p>
            <button
              onClick={onOpenJobModal}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
            >
              View Open Positions
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 lg:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Creative Chronicle Solutions. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
