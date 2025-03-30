import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import { ArrowRight, Plug2 } from 'lucide-react'
import { Button } from './ui/button'

const Services = () => {
  return (
            <section id="services" className="bg-gradient-to-b from-blue-50 to-white py-20">
              <div className="container">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                  <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
                    Our Services
                  </div>
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">Comprehensive Electrical Solutions</h2>
                  <p className="text-lg text-muted-foreground">
                    From simple repairs to complex installations, we provide a full range of electrical services for
                    residential and commercial properties.
                  </p>
                </div>
    
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-3 w-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                    <CardHeader>
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-lightbulb"
                        >
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                        </svg>
                      </div>
                      <CardTitle className="text-xl">Residential Electrical</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Complete electrical solutions for homes including wiring, lighting installation, outlet repairs, and
                        panel upgrades.
                      </p>
                      <Link
                        href="#"
                        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
    
                  <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-3 w-full bg-gradient-to-r from-yellow-500 to-yellow-300"></div>
                    <CardHeader>
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 transition-all group-hover:bg-yellow-500 group-hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-factory"
                        >
                          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                          <path d="M17 18h1" />
                          <path d="M12 18h1" />
                          <path d="M7 18h1" />
                        </svg>
                      </div>
                      <CardTitle className="text-xl">Commercial & Industrial</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Specialized electrical solutions for businesses, factories, and industrial facilities, ensuring
                        safety and efficiency.
                      </p>
                      <Link
                        href="#"
                        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
    
                  <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-3 w-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                    <CardHeader>
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                        <Plug2 className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">Electrical Repairs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Fast, reliable repairs for all electrical issues, from circuit breakers and faulty wiring to power
                        outages.
                      </p>
                      <Link
                        href="#"
                        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
    
                  <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-3 w-full bg-gradient-to-r from-yellow-500 to-yellow-300"></div>
                    <CardHeader>
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 transition-all group-hover:bg-yellow-500 group-hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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
                      <CardTitle className="text-xl">Energy Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Energy-saving solutions including LED lighting upgrades, smart home installations, and energy
                        audits.
                      </p>
                      <Link
                        href="#"
                        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
    
                  <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-3 w-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                    <CardHeader>
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-shield-check"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <CardTitle className="text-xl">Safety Inspections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Comprehensive electrical safety inspections for homes and businesses to prevent hazards and ensure
                        code compliance.
                      </p>
                      <Link
                        href="#"
                        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
    
                  <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-3 w-full bg-gradient-to-r from-yellow-500 to-yellow-300"></div>
                    <CardHeader>
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 transition-all group-hover:bg-yellow-500 group-hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-alarm-clock"
                        >
                          <circle cx="12" cy="13" r="8" />
                          <path d="M12 9v4l2 2" />
                          <path d="M5 3 2 6" />
                          <path d="m22 6-3-3" />
                          <path d="M6.38 18.7 4 21" />
                          <path d="M17.64 18.67 20 21" />
                        </svg>
                      </div>
                      <CardTitle className="text-xl">24/7 Emergency Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Round-the-clock emergency electrical services for urgent issues that can't wait for regular business
                        hours.
                      </p>
                      <Link
                        href="#"
                        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
    
                <div className="mt-12 text-center">
                  <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                    View All Services
                  </Button>
                </div>
              </div>
            </section>
  )
}

export default Services