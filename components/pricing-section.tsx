"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"
import { useState } from "react"
import { Car } from "lucide-react" // Declared the Car variable

export function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const plans = [
    {
      name: "Basic Clean",
      price: "$89",
      description: "Perfect for regular maintenance",
      features: ["Exterior hand wash", "Interior vacuum", "Dashboard wipe down", "Window cleaning", "Tire cleaning"],
      popular: false,
      icon: Car,
      color: "from-muted to-card",
    },
    {
      name: "Premium Detail",
      price: "$149",
      description: "Our most popular service",
      features: [
        "Everything in Basic Clean",
        "Deep interior cleaning",
        "Leather conditioning",
        "Exterior wax application",
        "Engine bay cleaning",
        "Air freshener treatment",
      ],
      popular: true,
      icon: Star,
      color: "from-primary/10 to-secondary/10",
    },
    {
      name: "Ultimate Shine",
      price: "$229",
      description: "Complete transformation",
      features: [
        "Everything in Premium Detail",
        "Paint correction",
        "Ceramic coating application",
        "Headlight restoration",
        "Trunk deep clean",
        "6-month protection guarantee",
      ],
      popular: false,
      icon: Zap,
      color: "from-secondary/10 to-accent/10",
    },
  ]

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Pricing Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Choose the perfect detailing package for your vehicle. All services include mobile convenience at no extra
              charge.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${plan.color} backdrop-blur-sm border rounded-2xl p-8 shadow-lg hover-lift transition-all duration-500 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-primary/20 scale-105"
                  : hoveredPlan === index
                    ? "scale-105 shadow-2xl border-primary/50"
                    : "border-border/50"
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <plan.icon className="relative h-12 w-12 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="relative mr-3 mt-1">
                        <Check className="h-5 w-5 text-primary group-hover:scale-125 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full hover-glow group-hover:shadow-xl transition-all duration-300"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
