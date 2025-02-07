import React from 'react';

const About = () => {
  return (
    <div 
      className="min-h-screen bg-gray-100 py-16" 
      style={{
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <section 
          className="bg-gradient-to-br from-[#1E40AF] to-blue-900 text-white py-16 rounded-xl shadow-lg mb-12"
          style={{ 
            '--tw-gradient-from-position': 'initial', 
            '--tw-gradient-via-position': 'initial', 
            '--tw-gradient-to-position': 'initial' 
          }}
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-6 text-black">Who Are We?</h1>
            <p className="text-xl max-w-3xl mx-auto text-black">
              MetalMach Mastery Pvt. Ltd. (MMPL) is a Solapur-based, professionally managed organization 
              specializing in gravity die casting and precision machining.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-[#374151]">Our Legacy</h2>
            <p className="text-lg text-[#5C6370]">
              Established in 1998, our journey is rooted in engineering excellence and 
              customer-centric innovation. With over 25 years of experience, we have 
              consistently pushed the boundaries of manufacturing precision.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-[#374151]">Key Highlights</h2>
            <ul className="space-y-4">
              {[
                "State-of-the-Art Infrastructure: 10,432 sqm facility",
                "Skilled Workforce: 50+ experts",
                "ISO 9001:2015 Certified",
                "Capacity: 35–40 tonnes/month of aluminum components"
              ].map((highlight, index) => (
                <li 
                  key={index} 
                  className="flex items-start text-[#5C6370]"
                >
                  <span className="mr-3 text-[#1E40AF]">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="bg-white py-16 rounded-xl shadow-md">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#374151]">Our Mission</h2>
            <blockquote 
              className="text-xl italic max-w-2xl mx-auto text-[#5C6370]"
              style={{ 
                fontFeatureSettings: 'normal',
                fontVariationSettings: 'normal' 
              }}
            >
              "To redefine manufacturing through innovation, integration of advanced technologies, 
              and elevation of industry standards."
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;