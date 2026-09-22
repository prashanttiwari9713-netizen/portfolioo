import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/30 bg-black py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 | System Online – <span className="text-primary">Prashant Tiwari</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/prashant-tiwari-856832306"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:prashanttiwari9713@gmail.com"
              className="w-10 h-10 border-2 border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/prashanttiwari9713-netizen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border-2 border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-600">
          <p>{">"} System Status: ONLINE</p>
          <p>{">"} Last Updated: 2025</p>
        </div>
      </div>
    </footer>
  )
}
