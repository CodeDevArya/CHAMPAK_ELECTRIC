import Image from "next/image";
import React from "react";

const WhyUS = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            Why Choose Us
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            The Champak Electric Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine technical expertise with exceptional customer service to
            deliver electrical solutions you can trust.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
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
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">Licensed & Insured</h3>
                <p className="text-muted-foreground">
                  Fully licensed and insured professionals you can trust for all
                  your electrical needs.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
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
                    className="lucide lucide-clock"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">On-Time Service</h3>
                <p className="text-muted-foreground">
                  We respect your time and always arrive as scheduled, with
                  clear communication.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
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
                    className="lucide lucide-badge-dollar-sign"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M12 7v10" />
                    <path d="M15 10h-6a2 2 0 1 0 0 4h6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees or surprise costs after the job is done. We
                  provide detailed quotes upfront.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
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
                    className="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our electricians are highly trained professionals with years
                  of experience in the field.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
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
                      className="lucide lucide-phone-call"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                      <path d="M14.05 6A5 5 0 0 1 18 10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      24/7 Emergency Support
                    </h3>
                    <p className="text-sm text-white/80">
                      Electrical emergencies don't wait, and neither do we.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold">Call Now: 530-444-0502</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://img.freepik.com/free-photo/electrician-construction-worker-with-beard-overalls-installation-sockets-home-renovation-concept_169016-7329.jpg?t=st=1743329756~exp=1743333356~hmac=e678efc5a099ff74f4c78827b77bd2ae002cb3436d578a24ade46d74a0f09d7b&w=1380"
                  width={500}
                  height={600}
                  alt="Electrician fixing a switchboard"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-0 h-full w-full rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-300"></div>
              <div className="absolute -left-8 top-12 rounded-xl bg-white p-6 shadow-lg z-20">
                <div className="flex flex-col items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FFD700"
                        stroke="#FFD700"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-2 text-lg font-bold">1500+</p>
                  <p className="text-sm text-muted-foreground">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUS;
