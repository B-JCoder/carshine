import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Edmonton, AB",
      rating: 5,
      text: "Car Shine did an amazing job on my SUV! The mobile service was so convenient, and my car looks better than when I first bought it. Highly recommend!",
    },
    {
      name: "Mike Chen",
      location: "Edmonton, AB",
      rating: 5,
      text: "Professional service and attention to detail. They cleaned every inch of my car, inside and out. The pricing is fair and the results speak for themselves.",
    },
    {
      name: "Jennifer Martinez",
      location: "Edmonton, AB",
      rating: 5,
      text: "I've been using Car Shine for months now. They're always on time, thorough, and my car always looks fantastic. Best detailing service in Edmonton!",
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what Edmonton drivers are saying about Car Shine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
