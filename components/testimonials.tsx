import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            Testimonials
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group overflow-hidden rounded-xl border-0 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1743329514~exp=1743333114~hmac=49f3ce819c6bf4f56099ab44e2868e4202cc828906e1671236e2996ad66850e5&w=1380"
                  width={64}
                  height={64}
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Homeowner</p>
              </div>
            </div>
            <div className="mb-4 flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
            <p className="text-muted-foreground">
              "The team at Cool Electric was professional and efficient. They fixed our electrical issues quickly and
              explained everything clearly. I'll definitely use their services again!"
            </p>
          </Card>

          <Card className="group overflow-hidden rounded-xl border-0 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src="https://img.freepik.com/free-photo/beautiful-blonde-woman-portrait-smiling-face_53876-139732.jpg?t=st=1743329868~exp=1743333468~hmac=3bfeb3a38e2b14465177b290e1ffb4fd76fc69d66b1206243b481253568c86c2&w=1380"
                  width={64}
                  height={64}
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Michael Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Business Owner</p>
              </div>
            </div>
            <div className="mb-4 flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
            <p className="text-muted-foreground">
              "We had a major electrical upgrade for our restaurant, and Cool Electric handled it perfectly. Their team
              worked after hours to minimize disruption to our business. Highly recommended!"
            </p>
          </Card>

          <Card className="group overflow-hidden rounded-xl border-0 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src="https://img.freepik.com/free-photo/beautiful-latin-young-woman-face-portrait_53876-143238.jpg?t=st=1743329944~exp=1743333544~hmac=f3790a926f3b6e82be9bed55716328f4d958bd3ea8991c78914bd3c4f2c3515b&w=1380"
                  width={64}
                  height={64}
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Jennifer Lee</h3>
                <p className="text-sm text-muted-foreground">Property Manager</p>
              </div>
            </div>
            <div className="mb-4 flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
            <p className="text-muted-foreground">
              "As a property manager, I need reliable contractors. Cool Electric has been our go-to for electrical work
              across multiple properties. They're always on time, on budget, and do quality work."
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            View More Testimonials
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
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

