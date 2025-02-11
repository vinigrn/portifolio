"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Download,
  Bug,
  CheckCircle,
  Code,
  TestTube2,
} from "lucide-react"
import { useState, useRef } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-3xl"
          style={{ y: backgroundY }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <motion.a
                href="#"
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                QA Portfolio
              </motion.a>
              <div className="hidden md:flex space-x-8">
                <NavLink href="/hobbies">Hobbies</NavLink>
                <NavLink href="/qa-thoughts">QA Thoughts</NavLink>
                <NavLink href="/tools">Tools</NavLink>
              </div>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </Button>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden backdrop-blur-xl border-b border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="px-4 py-2 space-y-2">
                <MobileNavLink href="/hobbies" onClick={() => setIsMenuOpen(false)}>
                  Hobbies
                </MobileNavLink>
                <MobileNavLink href="/qa-thoughts" onClick={() => setIsMenuOpen(false)}>
                  QA Thoughts
                </MobileNavLink>
                <MobileNavLink href="/tools" onClick={() => setIsMenuOpen(false)}>
                  Tools
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-[800px] h-[800px] border border-violet-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6 space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Bug className="w-12 h-12 text-violet-500" />
                </motion.div>
                <TestTube2 className="w-12 h-12 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold animate-shimmer bg-[linear-gradient(110deg,#000,45%,#7c3aed,55%,#000)] bg-[length:250%_100%] inline-block bg-clip-text text-transparent">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                  Test Analyst & QA Professional
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Ensuring software excellence through innovative testing methodologies and quality assurance at Edulabzz
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] active:scale-95"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] active:scale-95"
                    asChild
                  >
                    <a href="/resume.pdf" download="QA_Resume.pdf" className="flex items-center gap-2">
                      Download Resume <Download className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-t border-b border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard icon={<Bug className="w-8 h-8 text-violet-500" />} value="500+" label="Bugs Identified" />
              <StatCard icon={<CheckCircle className="w-8 h-8 text-cyan-400" />} value="100%" label="Test Coverage" />
              <StatCard icon={<Code className="w-8 h-8 text-violet-500" />} value="50+" label="Test Suites" />
              <StatCard icon={<TestTube2 className="w-8 h-8 text-cyan-400" />} value="1000+" label="Test Cases" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Testing Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Automated Test Framework"
                description="Developed a comprehensive automated testing framework using Selenium and TestNG"
                image="/placeholder.svg?height=200&width=400"
                link="https://example.com"
                tags={["Selenium", "TestNG", "Java"]}
              />
              <ProjectCard
                title="API Testing Suite"
                description="Created an extensive API testing suite using Postman and Newman for CI/CD pipeline"
                image="/placeholder.svg?height=200&width=400"
                link="https://example.com"
                tags={["Postman", "Newman", "CI/CD"]}
              />
              <ProjectCard
                title="Performance Testing"
                description="Implemented performance testing strategies using JMeter for high-traffic applications"
                image="/placeholder.svg?height=200&width=400"
                link="https://example.com"
                tags={["JMeter", "Performance", "Analysis"]}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 backdrop-blur-sm" />
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                  About Me
                </h2>
                <p className="text-white/70">
                  As a dedicated Test Analyst at Edulabzz, I specialize in ensuring software quality through
                  comprehensive testing methodologies. With expertise in both manual and automated testing, I'm
                  passionate about delivering bug-free, user-friendly applications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <SkillCard
                    title="Testing"
                    items={["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing"]}
                  />
                  <SkillCard title="Tools" items={["Selenium", "JMeter", "Postman", "JIRA"]} />
                </div>
              </motion.div>
              <motion.div
                className="relative h-[400px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-lg backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/placeholder.svg?height=300&width=300" alt="Profile" className="rounded-lg shadow-lg" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
                Get in Touch
              </h2>
              <Card className="backdrop-blur-xl bg-white/5 border-white/10">
                <form className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/70">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/70">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/70">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={6}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-violet-500 to-cyan-400 hover:from-violet-600 hover:to-cyan-500">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-white/50">© 2024 Portfolio. All rights reserved.</p>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/yourusername">
                  <Github className="w-4 h-4" />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/yourusername">
                  <Linkedin className="w-4 h-4" />
                </SocialLink>
                <SocialLink href="mailto:your.email@example.com">
                  <Mail className="w-4 h-4" />
                </SocialLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white/70 hover:text-white transition-all duration-300 hover:scale-105 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a href={href} className="block py-2 text-white/70 hover:text-white transition-colors" onClick={onClick}>
      {children}
    </a>
  )
}

function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden group backdrop-blur-xl bg-white/5 border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(124,58,237,0.2)]">
        <div className="relative">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
          <p className="text-white/70 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center space-y-2"
    >
      <div className="flex justify-center">{icon}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-white/70">{label}</div>
    </motion.div>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-4">
      <h3 className="font-semibold mb-3 text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-white/70 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/50 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

