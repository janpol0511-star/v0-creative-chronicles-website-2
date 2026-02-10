"use client";

import React from "react"

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      onOpenChange(false);
    }, 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="animate-slide-in-modal max-h-[90vh] w-[95vw] max-w-md overflow-y-auto bg-background p-0 sm:w-[90vw] sm:max-w-lg">
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-primary-foreground">
              <Mail className="h-7 w-7" />
              Contact Us
            </DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-primary-foreground/90">
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in-up">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Message Sent!
              </h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                  <User className="h-4 w-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border bg-background transition-all focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border bg-background transition-all focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="resize-none border-border bg-background transition-all focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-6 border-t border-border pt-6">
            <p className="text-center text-sm text-muted-foreground">
              Or reach us directly at{" "}
              <a
                href="mailto:creativechroniclesolutions@gmail.com"
                className="font-medium text-primary transition-colors hover:underline"
              >
                creativechroniclesolutions@gmail.com
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
