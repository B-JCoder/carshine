"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const features = [
    {
      icon: MapPin,
      title: "Local Edmonton Service",
      description: "Proudly serving Edmonton, Alberta and surrounding areas with reliable mobile detailing.",
      color: "from-primary/10 to-secondary/10",
    },
    {
      icon: Clock,
      title: "Convenient Mobile Service",
      description: "We come to you! No need to drive anywhere - we'll detail your car at your home or office.",
      color: "from-secondary/10 to-accent/10",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Expert techniques and premium products ensure your car gets the care it deserves.",
      color: "from-accent/10 to-primary/10",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Car Shine</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Car Shine is Edmonton's premier mobile car detailing service. We bring professional-grade cleaning directly
            to your location, saving you time while delivering exceptional results. Our experienced team uses only the
            finest products and techniques to restore your vehicle's beauty and protect its value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg hover-lift transition-all duration-500 ${
                  hoveredCard === index ? "scale-105 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <feature.icon className="relative h-14 w-14 text-primary mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "animate-scale-in" : "opacity-0 scale-95"
          }`}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="hover-glow hover-lift transition-all duration-300 px-8 py-4"
          >
            Get Your Quote Today
          </Button>
        </div>
      </div>
    </section>
  )
}
