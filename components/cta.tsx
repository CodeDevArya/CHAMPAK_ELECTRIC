import React from 'react'
import { Button } from './ui/button'

const Cta = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-blue-300/10 md:h-96 md:w-96"></div>
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-yellow-300/10 md:h-96 md:w-96"></div>
      </div>
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            Contact Us
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch With Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Have a question or need a quote? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Electrical</option>
                  <option value="commercial">Commercial & Industrial</option>
                  <option value="repairs">Electrical Repairs</option>
                  <option value="efficiency">Energy Efficiency</option>
                  <option value="inspection">Safety Inspection</option>
                  <option value="emergency">Emergency Service</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your electrical needs"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>
              <Button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                Submit Request
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Our Location</p>
                    <p className="text-muted-foreground">1881 Wild Cat Ct. Cool, CA 95614 USA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <p className="text-muted-foreground">(530) 444-0502</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <p className="text-muted-foreground">dan@coolelectric.net</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                    <p className="text-muted-foreground">Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Need Emergency Service?</h3>
                  <p className="text-sm text-white/80">Our team is available 24/7 for urgent electrical issues.</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a href="5304440502">
                  <Button size="lg" className="w-full rounded-lg bg-yellow-500 text-white hover:bg-yellow-600">
                    Call Now: 530-444-0502
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta