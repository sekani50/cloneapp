"use client"

export function HeroSection() {
  return (
    <section
      className="relative bg-[#1a365d]/50 text-white py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('https://thejrwa.com/wp-content/uploads/2023/01/skyline.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
   
      <div className="absolute inset-0 bg-[#1a365d]/50 bg-opacity-85"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="text-balance">
              The JRWA - your trusted source for Direct Mail, Email and Podcast Advertising
            </span>
          </h1>

          <div className="space-y-6 animate-fade-in-up animate-delay-200">
            <p className="text-xl md:text-2xl font-light italic text-gray-200">
              {"Let's work together to MAXIMIZE your profits!"}
            </p>

            <p className="text-lg md:text-xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed">
              We establish attentive partnerships with an experienced and knowledgeable staff to fulfill your marketing
              needs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
