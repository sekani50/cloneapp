"use client"

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Increase Your Revenue with Creative Advertising
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Are you an advertiser looking to generate more traffic, leads, and sales? Or a publisher, and want to up
                the ad revenue for your successful publication? Perhaps {"you're"} just frustrated with the
                functionality of your current email service provider?
              </p>

              <p>
                The JRWA is much more than just an advertising agency. We specialize in strategic planning, media
                buying, digital marketing, production and more.
              </p>

              <p>
                {"We don't"} strive to be just another one of your vendors, we look at all of our clients as partners.
              </p>

              <p className="font-semibold">
                With that mentality, failure is not an option because success is the only road we travel.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <img
              src="https://thejrwa.com/wp-content/uploads/2022/11/creative-advertising-1024x737.jpeg"
              alt="Professional business meeting"
              className="w-full lg:w-[80%] h-[300px] rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
