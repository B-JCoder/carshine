"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const benefits = [
    "Mobile service - we come to you",
    "Professional equipment and products",
    "Experienced and insured team",
    "Competitive pricing with no hidden fees",
    "100% satisfaction guarantee",
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-muted/50 to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Get Your Free Quote</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ready to give your car the shine it deserves? Contact us today for a free quote and convenient appointment
            scheduling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl hover-lift">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold text-card-foreground">Send Us a Message</h3>
                {isSubmitted && (
                  <div className="flex items-center text-primary animate-scale-in">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span className="text-sm font-medium">Message Sent!</span>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`transition-all duration-300 ${
                      focusedField === "name" ? "ring-2 ring-primary/50 border-primary" : ""
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      focusedField === "name" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>

                <div className="relative group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`transition-all duration-300 ${
                      focusedField === "email" ? "ring-2 ring-primary/50 border-primary" : ""
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      focusedField === "email" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>

                <div className="relative group">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`transition-all duration-300 ${
                      focusedField === "phone" ? "ring-2 ring-primary/50 border-primary" : ""
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      focusedField === "phone" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>

                <div className="relative group">
                  <Textarea
                    name="message"
                    placeholder="Tell us about your car and what services you're interested in..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    required
                    className={`transition-all duration-300 resize-none ${
                      focusedField === "message" ? "ring-2 ring-primary/50 border-primary" : ""
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      focusedField === "message" ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>

                <Button
                  type="submit"
                  className="w-full hover-glow hover-lift transition-all duration-300 py-4 text-lg"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl hover-lift group">
              <h3 className="text-2xl font-semibold text-card-foreground mb-8 group-hover:text-primary transition-colors duration-300">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "(780) 318-1308", href: "tel:7803181308" },
                  { icon: Mail, label: "Email", value: "4carshine@gmail.com", href: "mailto:4carshine@gmail.com" },
                  { icon: MapPin, label: "Service Area", value: "Edmonton, Alberta", href: null },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center group/item hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover/item:blur-xl transition-all duration-300"></div>
                      <item.icon className="relative h-6 w-6 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl hover-lift group">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                Why Choose Car Shine?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start group/benefit hover:translate-x-2 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 group-hover/benefit:scale-150 transition-transform duration-300"></div>
                    <span className="text-muted-foreground group-hover/benefit:text-foreground transition-colors duration-300 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
