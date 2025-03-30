import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20">
    <div className="container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
          About Cool Electric
        </div>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Your Trusted Electrical Partner</h2>
        <p className="text-lg text-muted-foreground">
          With over 18 years of experience, we deliver exceptional electrical services with a focus on quality,
          safety, and customer satisfaction.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://img.freepik.com/free-photo/full-shot-people-working-as-engineers_23-2150379127.jpg?t=st=1743329662~exp=1743333262~hmac=0c0914d65ae37f250225d462cf745d01c184fb1c94add3b0388386a4d8768ed0&w=740"
              width={500}
              height={600}
              alt="Our team of electricians"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 z-0 h-full w-full rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400"></div>
          <div className="absolute -right-8 bottom-12 rounded-xl bg-white p-4 shadow-lg z-20">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">18+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500">50+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-bold">Our Story</h3>
          <p className="text-muted-foreground">
            Cool Electric was founded in 2005 with a simple mission: to provide reliable, high-quality electrical
            services that prioritize safety and customer satisfaction. What started as a small team has grown into
            a trusted electrical contractor serving both residential and commercial clients.
          </p>
          <p className="text-muted-foreground">
            Our team of certified electricians brings decades of combined experience to every project. We stay
            up-to-date with the latest electrical codes, technologies, and best practices to deliver solutions
            that are not only effective but also energy-efficient and future-proof.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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
                  className="lucide lucide-check-circle"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Licensed & Insured</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
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
                  className="lucide lucide-badge-check"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Quality Guaranteed</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button className="group rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About