"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("> Message sent successfully! I will get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{">"} ./initiate_contact.sh</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-primary/30 bg-card p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:prashanttiwari9713@gmail.com" className="hover:text-primary transition-colors">
                    prashanttiwari9713@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919752625513" className="hover:text-primary transition-colors">
                    +91 9752625513
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/prashant-tiwari-856832306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors break-all"
                  >
                    linkedin.com/in/prashant-tiwari
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-primary/30 bg-card p-6">
            <h3 className="text-xl font-bold text-primary mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="$ enter_name"
                  className="bg-black border-primary/50 text-gray-300 placeholder:text-gray-600 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="$ enter_email"
                  className="bg-black border-primary/50 text-gray-300 placeholder:text-gray-600 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="$ write_message"
                  rows={4}
                  className="bg-black border-primary/50 text-gray-300 placeholder:text-gray-600 focus:border-primary resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "> Processing..." : "> Execute Send"}
              </Button>
              {submitMessage && <p className="text-primary text-sm mt-2">{submitMessage}</p>}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
