"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image src="/images/transparent-logo.png" alt="Champak Electric Logo" width={150} height={60} priority />
          </Link>
          {!isMobile && (
            <nav className="flex gap-8">
              <Link href="#home" className="font-medium text-blue-600 transition-colors hover:text-blue-800">
                Home
              </Link>
              <Link href="#about" className="font-medium text-muted-foreground transition-colors hover:text-blue-600">
                About
              </Link>
              <Link
                href="#services"
                className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                Services
              </Link>
              <Link href="#why-us" className="font-medium text-muted-foreground transition-colors hover:text-blue-600">
                Why Us
              </Link>
              <Link
                href="#testimonials"
                className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                Testimonials
              </Link>
              <Link
                href="#projects"
                className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
              >
                Projects
              </Link>
              <Link href="#contact" className="font-medium text-muted-foreground transition-colors hover:text-blue-600">
                Contact
              </Link>
            </nav>
          )}
        </div>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-10 w-10" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex justify-center py-4">
                <Image src="/images/transparent-logo.png" alt="Champak Electric Logo" width={120} height={48} />
              </div>
              <nav className="mt-8 flex flex-col gap-6">
                <Link href="#home" className="font-medium text-blue-600 transition-colors hover:text-blue-800">
                  Home
                </Link>
                <Link href="#about" className="font-medium text-muted-foreground transition-colors hover:text-blue-600">
                  About
                </Link>
                <Link
                  href="#services"
                  className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Services
                </Link>
                <Link
                  href="#why-us"
                  className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Why Us
                </Link>
                <Link
                  href="#testimonials"
                  className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Testimonials
                </Link>
                <Link
                  href="#projects"
                  className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="font-medium text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Contact
                </Link>
                <a href="tel:0000000000">
                  <Button className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                    Contact US
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <a href="tel:0000000000">
            <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-300/30">
              Contact Us
            </Button>
          </a>
        )}
      </div>
    </header>
  )
}

