import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { PhoneCall, TicketCheck } from 'lucide-react'

const Hero = () => {
    return (
        <div>
            <section
                id="home"
                className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 md:py-28 lg:py-32"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-yellow-300/10 md:h-96 md:w-96"></div>
                    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-300/10 md:h-96 md:w-96"></div>
                </div>
                <div className="container relative z-10">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="flex flex-col items-start gap-6">
                            <div className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
                                Professional Electrical Services
                            </div>
                            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                                Powering Your{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    Electrical
                                </span>{" "}
                                Needs
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Expert electrical solutions for residential and commercial properties. Our certified electricians
                                deliver quality service, safety, and reliability.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="mailto:me@electric.com">
                                    <Button
                                        size="lg"
                                        className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transition-all hover:shadow-blue-300/30"
                                    >
                                        Get Free Quote
                                    </Button>
                                </a>
                                <a href="tel:0000000000">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="rounded-full border-blue-200 bg-white/80 backdrop-blur-sm"
                                    >
                                        <PhoneCall className="mr-2 h-4 w-4 text-blue-600" />
                                        Call Us
                                    </Button>
                                </a>
                            </div>
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
                                            <Image
                                                src={`/placeholder.svg?height=40&width=40&text=${i}`}
                                                width={40}
                                                height={40}
                                                alt="Customer"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center text-yellow-500">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-star"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground">Trusted by 10,000+ customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto aspect-square max-w-md rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-1 shadow-xl md:ml-auto">
                            <div className="h-full w-full overflow-hidden rounded-xl bg-white">
                                <Image
                                    src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.jpg?t=st=1743329331~exp=1743332931~hmac=fc55fb402fdadcf6e9bd05d5687e224ba415711459174445f0d4e586204171fc&w=1380"
                                    width={500}
                                    height={500}
                                    alt="Electrician at work"
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                                        <TicketCheck className="h-8 w-8 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">24/7 Service</p>
                                        <p className="text-sm text-muted-foreground">Emergency Response</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero