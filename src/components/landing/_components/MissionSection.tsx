"use client"

export function MissionSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            The JRWA Advertising and Email Marketing Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img
              src="https://thejrwa.com/wp-content/uploads/2022/11/target-audience-768x507.jpeg"
              alt="Target audience strategy gears"
              className="w-full lg:w-[80%] h-[300px] rounded-none"
            />
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                The mission of The JRWA is to achieve a greater client ROI through targeted multi-media placements and
                emerging technologies. Our staff has well over a century of combined global marketing experience, and we
                continually surround ourselves with those who can help our marketing IQ grow.
              </p>

              <p className="font-semibold text-gray-800">
                We are advertising consultants for our clients, not just salesmen.
              </p>

              <p>
                With a focus on customer service and attention to detail, The JRWA is personally committed to helping
                our publishers and clients maximize their potential through our wide range of services.
              </p>

              <p>
                Our clients come to us for advertising, publicity, and email services from a wide range of niches and
                industries because of how we grow their business outreach to customers and increase their bottom line
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
