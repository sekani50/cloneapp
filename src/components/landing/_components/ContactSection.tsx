"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      })
      
      setSubmitStatus("success")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to maximize your profits? Let's discuss how we can help you achieve your marketing goals.
            Contact us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#ff001c] mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">561-432-0075</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#ff001c] mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@jrwa.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#ff001c] mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    1850 Forest Hill Blvd.<br />
                    Lake Clarke Shores, FL 33406
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Why Choose The JRWA?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#ff001c] mr-2">•</span>
                  <span>40% average growth in revenue for publishers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff001c] mr-2">•</span>
                  <span>Strategic planning and media buying expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff001c] mr-2">•</span>
                  <span>Partnership approach - we're not just vendors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff001c] mr-2">•</span>
                  <span>Over a century of combined marketing experience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up animate-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-700 font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service" className="text-gray-700 font-medium">
                  Service Interest
                </Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="mt-2 flex h-11 w-full rounded-lg border border-gray-200 bg-baseColor-100 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="publishers">Publishers</option>
                  <option value="advertisers">Advertisers</option>
                  <option value="social-media">Social Media</option>
                  <option value="direct-mail">Direct Mail</option>
                  <option value="seo">SEO</option>
                  <option value="email-service">Email Service Provider</option>
                  <option value="site-id">Site ID</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 min-h-32"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff001c] hover:bg-[#e6001a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
