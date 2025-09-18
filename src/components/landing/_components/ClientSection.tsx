"use client"

export function ClientsSection() {
  const clientTypes = [
    {
      title: "Publishers",
      description:
        "We have averaged a 40% growth in revenue across all of our publishers without them having to increase their traffic or list sizes. We monetize your platform with ad sales that cater to your audience.",
      link: "#publishers",
    },
    {
      title: "Advertisers",
      description:
        "We put you in a position to succeed by getting your offer or product in front of targeted audiences. From graphic design to production to online marketing, we'll work with you to create, implement, and track your campaign to success.",
      link: "#advertisers",
    },
    {
      title: "SEO",
      description:
        "Would you like to turn your website into a real barnstormer? When today's consumer needs a product or service, 87% of those purchasing decisions begin online. Our SEO team ensures that you show up on Google's organic search results for your ideal customers.",
      link: "#seo",
    },
    {
      title: "Email Service Provider",
      description:
        "Our platform is an enterprise-level Email Service Provider (ESP) created for high volume, strategic email senders, to keep your product or service front and center of your audience and customers.",
      link: "#email-service",
    },
    {
      title: "Site ID",
      description:
        "Site ID helps you monetize your website audience by giving you a second and third chance to win back visitors who never submitted their contact info or who simply bounced. It's a huge untapped audience for most brands – and we can help you to tap in to maximize sales.",
      link: "#site-id",
    },
    {
      title: "Other Advertising and Marketing Services",
      description:
        "Digital ads are our bread and butter, but our sales department is well-versed in all media including television, radio, streaming, billboard and print campaigns, YouTube, funnel building, and more.",
      link: "#other-services",
    },
  ]

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto bg-[#f2f2f2] p-4 sm:p-6 lg:p-8 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 animate-fade-in-up">Who Are Our Clients?</h2>

        <div className="space-y-8  ">
          {clientTypes.map((client, index) => (
            <div key={client.title} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-[#ff001c] mb-4">{client.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 max-w-5xl">{client.description}</p>
              <a
                href={client.link}
                className="text-[#ff001c] font-semibold hover:text-red-600 transition-colors duration-200"
              >
                Read more &gt;&gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
