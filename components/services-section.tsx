"use client"

import { Button } from "@/components/ui/button"
import { Car, Sparkles, Shield } from "lucide-react"
import { useState } from "react"

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: Car,
      title: "Mobile Detailing",
      description: "Complete interior and exterior deep cleaning service brought directly to your location.",
      features: ["Interior & Exterior full deep clean", "Professional mobile service", "Convenient scheduling"],
      gradient: "from-primary/10 to-secondary/10",
    },
    {
      icon: Sparkles,
      title: "Interior Deep Clean",
      description: "Thorough interior cleaning that removes dirt, dust, and odors from every surface.",
      features: [
        "Dry vacuum treatment",
        "Electric brush cleaning",
        "Soap base clean & full wipe down",
        "Dust/dirt air blasting",
        "Spot vacuum detailing",
      ],
      gradient: "from-secondary/10 to-accent/10",
    },
    {
      icon: Shield,
      title: "Exterior Wash & Protection",
      description: "Complete exterior cleaning with protective treatments to keep your car looking new.",
      features: [
        "Hand wash service",
        "Pressure wash cleaning",
        "Tire cleaning & treatment",
        "Polish and wax application",
      ],
      gradient: "from-accent/10 to-primary/10",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Professional car detailing services designed to restore and protect your vehicle's appearance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg hover-lift transition-all duration-500 ${
                hoveredCard === index ? "scale-105 shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <service.icon className="relative h-14 w-14 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                </div>

                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-muted-foreground flex items-start group-hover:text-foreground transition-colors duration-300"
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full hover-glow group-hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
