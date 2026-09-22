"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "PRASHANT TIWARI"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    return () => clearInterval(timer)
  }, [])

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Prashant_Tiwari_Resume.pdf"
    link.click()
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div className="text-sm text-primary mb-4">{">"} whoami</div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 min-h-[4rem]">
              {displayText}
              <span className="animate-pulse">_</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-light">Computer Science Engineering Student</h2>
            <p className="text-lg text-gray-400 italic">Cyber-focused Developer | Tech & Entrepreneurship Enthusiast</p>
            <div className="space-y-2 text-sm text-gray-500 font-mono">
              <div>{">"} Initializing system...</div>
              <div>{">"} Loading modules... [OK]</div>
              <div>{">"} System ready.</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 neon-glow font-bold"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Access Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary font-bold bg-transparent"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Initiate Contact
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center">
            <div className="relative float-animation">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary neon-glow overflow-hidden relative">
                <Image src="/profile.jpg" alt="Prashant Tiwari" fill className="object-cover" priority />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
