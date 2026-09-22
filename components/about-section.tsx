export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{">"} cat about.txt</h2>
        <div className="relative border-2 border-primary/50 rounded-lg p-8 bg-card terminal-window overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/30">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="ml-4 text-sm text-primary/70">terminal@prashant:~</span>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-primary">$ whoami</p>
            <p>
              Computer Science Engineering student at{" "}
              <span className="text-primary font-bold">Gyan Ganga College of Technology (GGCT), Jabalpur</span>
            </p>

            <p className="text-primary mt-6">$ education --current</p>
            <p>
              Pursuing <span className="text-primary font-bold">B.Tech in CSE (2024–2028)</span> under{" "}
              <span className="text-primary">RGPV</span>
            </p>

            <p className="text-primary mt-6">$ interests --list</p>
            <ul className="list-none space-y-2 ml-4">
              <li>{">"} Technology & Innovation</li>
              <li>{">"} Problem Solving</li>
              <li>{">"} Entrepreneurship</li>
              <li>{">"} Technical Leadership</li>
            </ul>

            <p className="text-primary mt-6">$ activities --status</p>
            <p>
              Actively involved in technical and startup-focused activities, contributing to the tech community and
              building innovative solutions.
            </p>

            <p className="text-muted-foreground mt-6">_</p>
          </div>
        </div>
      </div>
    </section>
  )
}
