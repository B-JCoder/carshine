"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/95 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/carshine-logo.jpg"
                alt="Car Shine Logo"
                width={120}
                height={40}
                className="h-8 w-auto sm:h-10"
                priority
              />
            </div>
            <span className="ml-3 text-sm text-muted-foreground hidden sm:inline group-hover:text-primary transition-colors duration-300">
              Shine Today
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Gallery", "Pricing", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
                className="relative text-foreground hover:text-primary transition-all duration-300 group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:7803181308")}
              className="flex items-center gap-2 hover-lift group transition-all duration-300"
            >
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="hover-glow transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {["Home", "About", "Services", "Gallery", "Pricing", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
                  className="text-left text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("tel:7803181308")}
                  className="flex items-center gap-2 justify-center hover-lift group"
                >
                  <Phone className="h-4 w-4 group-hover:animate-pulse" />
                  Call Now
                </Button>
                <Button onClick={() => scrollToSection("contact")} size="sm" className="hover-glow">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
