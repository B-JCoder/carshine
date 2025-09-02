"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-foreground to-foreground/90 text-background py-16">
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 hover-lift hover-glow shadow-2xl"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Business Info */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
              Car Shine
            </h3>
            <p className="text-background/80 mb-4 font-medium">Shine Today</p>
            <p className="text-background/70 text-sm text-pretty leading-relaxed">
              Edmonton's premier mobile car detailing service. Professional quality, convenient service, exceptional
              results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="font-semibold mb-6 text-lg group-hover:text-primary transition-colors duration-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Pricing", id: "pricing" },
                { name: "Contact", id: "contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/70 hover:text-background hover:translate-x-2 transition-all duration-300 flex items-center group/link"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover/link:w-4 transition-all duration-300 mr-0 group-hover/link:mr-2"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="group">
            <h4 className="font-semibold mb-6 text-lg group-hover:text-primary transition-colors duration-300">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm">
              {[
                { icon: Phone, href: "tel:7803181308", text: "(780) 318-1308" },
                { icon: Mail, href: "mailto:4carshine@gmail.com", text: "4carshine@gmail.com" },
                { icon: MapPin, href: null, text: "Edmonton, Alberta" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center group/item hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="relative mr-3">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover/item:blur-lg transition-all duration-300"></div>
                    <item.icon className="relative h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-background/70 hover:text-background transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-background/70">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="group">
            <h4 className="font-semibold mb-6 text-lg group-hover:text-primary transition-colors duration-300">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative text-background/70 hover:text-background transition-all duration-300 group/social p-2 rounded-full hover:bg-primary/20"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                  <Icon className="relative h-6 w-6 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm text-center md:text-left">
              © 2024 Car Shine. All rights reserved.
            </p>
            <p className="text-background/70 text-sm text-center md:text-right">
              Edmonton, Alberta Mobile Car Detailing
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
