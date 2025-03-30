import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { Projects } from "@/components/projects"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import WhyUS from "@/components/why-us"
import Cta from "@/components/cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyUS />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Projects Section */}
        <Projects />

        {/* Contact & CTA Section */}
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

