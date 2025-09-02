export function GallerySection() {
  const galleryImages = [
    { src: "https://i.pinimg.com/736x/19/70/3c/19703c7bd903c6cc242c63bd68e1a18e.jpg", alt: "Interior detailing before and after" },
    { src: "https://i.pinimg.com/736x/62/87/b6/6287b60a1c013d7ca2f7021a4756b65c.jpg", alt: "Exterior car wash and shine" },
    { src: "https://i.pinimg.com/1200x/fd/ca/72/fdca72d5165ba813bebfe33efad1e57c.jpg", alt: "Tire cleaning and polishing" },
    { src: "https://i.pinimg.com/1200x/55/ca/2f/55ca2ff696e337212170f11c83af0a4d.jpg", alt: "Dashboard deep cleaning" },
    { src: "https://i.pinimg.com/736x/7a/65/80/7a658067913f64ad776e3ffd31dab201.jpg", alt: "Seat vacuum and cleaning" },
    { src: "https://i.pinimg.com/736x/d5/51/dc/d551dcb3ba98cd96e5c99ae3b8253638.jpg", alt: "Car wax and polish application" },
  ]

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See the difference our professional detailing makes. From deep interior cleaning to exterior shine, we
            deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-sm">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
