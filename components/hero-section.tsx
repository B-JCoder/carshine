"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, Sparkles, Car } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-card overflow-hidden mt-5"
    >
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/c4/c1/59/c4c1597c73c4f827d982f08e2a407dee.jpg')] bg-cover bg-center opacity-40"></div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Sparkles className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-2000">
          <Car className="h-12 w-12 text-secondary/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
          <Sparkles className="h-6 w-6 text-accent/40" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold  mb-6 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
              Car Shine
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-2xl sm:text-3xl text-primary font-semibold mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 animate-pulse" />
              Shine Today
              <Sparkles className="h-6 w-6 animate-pulse" />
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Professional mobile car detailing services in Edmonton, Alberta. We bring the shine to your driveway with
              interior and exterior deep cleaning that makes your car look brand new.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-scale-in" : "opacity-0 scale-95"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="flex items-center gap-2 text-lg px-8 py-4 hover-lift hover-glow group transition-all duration-300"
              >
                <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("tel:7803181308")}
                className="flex items-center gap-2 text-lg px-8 py-4 hover-lift border-primary/50 hover:border-primary group transition-all duration-300"
              >
                <Phone className="h-5 w-5 group-hover:animate-pulse" />
                Call Now: (780) 318-1308
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"}`}
          >
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Mobile Service
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-500"></div>
                Professional Results
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-1000"></div>
                Edmonton Based
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
