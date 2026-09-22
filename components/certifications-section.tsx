import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  "NASA Space Apps Challenge – Volunteer",
  "Illuminate 2025",
  "AZ-900 Sandbox Workshop",
  "Effective Leadership",
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">{">"} ls certifications/</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-2 border-primary/30 bg-card hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] p-6 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <p className="text-gray-300 font-medium">{cert}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
