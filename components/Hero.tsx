export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/img/diecast.mp4" type="video/mp4" />
      </video>

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto lg:ml-[10%]">
          <h1 className="mb-6">
            <span className="block text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] 
              font-bold text-white leading-[1.1] mb-4 tracking-tight font-serif">
              Precision Engineering
              <span className="block mt-2 text-primary-400">
                for Global Industries
              </span>
            </span>
            <span className="block text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] 
              font-medium text-gray-200 leading-tight font-candara">
              Transforming Complex Manufacturing Challenges into Innovative Solutions
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="mt-10 flex space-x-6">
            <a 
              href="/services" 
              className="px-8 py-3 bg-primary-500 text-white font-bold rounded-full 
              hover:bg-primary-600 transition-colors duration-300 text-lg"
            >
              Explore Services
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-full 
              hover:bg-white hover:text-black transition-colors duration-300 text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}