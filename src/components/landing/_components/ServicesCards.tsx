"use client"

import Image from "next/image"


export function ServicesCards() {
  const services = [
    {
      title: "Publishers",
      image: "https://thejrwa.com/wp-content/uploads/2022/12/online-publishers.jpg",
      description:
        "We have averaged a 40% growth in revenue across all of our publishers without them having to increase their traffic or list sizes. We monetize your platform with ad sales that cater to your audience.",
      link: "#publishers",
    },
    {
      title: "Advertisers",
      image: "https://thejrwa.com/wp-content/uploads/2022/12/online-advertisers.jpg",
      description:
        "We put you in a position to succeed by getting your offer or product in front of targeted audiences. From graphic design to production to online marketing, we'll work with you to create, implement, and track your campaign to success.",
      link: "#advertisers",
    },
    {
      title: "Other Services",
      image: "https://thejrwa.com/wp-content/uploads/2022/12/other-services.jpg",
      description:
        "Digital ads are our bread and butter, but our sales department is well-versed in all media including television, radio, streaming, billboard and print campaigns, YouTube, funnel building, and more.",
      link: "#other-services",
    },
  ]

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`overflow-hidden shadow-lg border border-[#ff001c] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={600}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#ff001c] text-white p-4">
                  <h3 className="text-xl font-bold text-center">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-[#ff001c] font-semibold hover:text-red-600 transition-colors duration-200"
                >
                  Read more &gt;&gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
