import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            Our Portfolio
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Recent Projects</h2>
          <p className="text-lg text-muted-foreground">
            Take a look at some of our recent electrical projects and see the quality of our work.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/electrician-builder-work-installation-lamps-height-professional-overalls-with-drill-repair-site_169016-8625.jpg?t=st=1743330044~exp=1743333644~hmac=75c17b6163afa7bb6c46262a213b21b7e640c1367aa8d21bb150b2402c756652&w=1380"
                fill
                alt="Residential rewiring project"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-bold">Residential Rewiring</h3>
                <p className="text-sm">Complete home electrical upgrade</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">Residential Rewiring</h3>
              <p className="mb-4 text-muted-foreground">
                Complete rewiring of a 3,000 sq ft home with modern electrical systems and smart home integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  Residential
                </span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  Rewiring
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Smart Home
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/view-modern-office_1170-1963.jpg?t=st=1743329999~exp=1743333599~hmac=58153086723682f699bdceb86bf42731c8bfa87b91abf810b2290af3f0af7f77&w=1380"
                fill
                alt="Commercial lighting project"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-bold">Office Building Lighting</h3>
                <p className="text-sm">Energy-efficient LED installation</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">Office Building Lighting Upgrade</h3>
              <p className="mb-4 text-muted-foreground">
                Energy-efficient LED lighting installation for a 10-story office building, reducing energy costs by 40%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Commercial</span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  Lighting
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Energy Efficient
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production_645730-185.jpg?t=st=1743330075~exp=1743333675~hmac=5e48f2c02d9b544951503913261d0224057faf544d86914e916d3e2a15fcd52f&w=1380"
                fill
                alt="Industrial electrical project"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-bold">Factory Electrical System</h3>
                <p className="text-sm">Complete industrial installation</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">Factory Electrical System</h3>
              <p className="mb-4 text-muted-foreground">
                Installation of a complete electrical system for a new manufacturing facility, including power
                distribution and safety systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Industrial</span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  Power Systems
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Safety</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/side-view-engineer-drawing-plan-outdoors_23-2149352262.jpg?t=st=1743330111~exp=1743333711~hmac=fdb6a2e53adc90990cfa9e668a176727910e68ba174c92138d8749c5fe05a8bc&w=1380"
                fill
                alt="Solar panel installation"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-bold">Solar Panel Integration</h3>
                <p className="text-sm">Renewable energy solution</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">Solar Panel Integration</h3>
              <p className="mb-4 text-muted-foreground">
                Installation and electrical integration of solar panels for a residential property, providing clean
                energy and reducing utility bills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  Residential
                </span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Solar</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Renewable Energy
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/low-angle-shot-electric-linemen-working-pole_181624-46993.jpg?t=st=1743330144~exp=1743333744~hmac=86e58fb8bb153b52892ec49b01528014bc0c3409b7f6df22f44ab2d3a2c3e3ac&w=1380"
                fill
                alt="Emergency electrical repair"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-bold">Emergency Power Restoration</h3>
                <p className="text-sm">Rapid response service</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">Emergency Power Restoration</h3>
              <p className="mb-4 text-muted-foreground">
                Rapid response and repair after storm damage to restore power to a residential neighborhood within 24
                hours.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Emergency</span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Repair</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Power Restoration
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/young-woman-using-home-technology_23-2149216655.jpg?t=st=1743330188~exp=1743333788~hmac=d0e96a035c5a0e715073eb931abc36db04241001d2fa5b39033c22d6421fa956&w=1380"
                fill
                alt="Smart home automation"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-bold">Smart Home Automation</h3>
                <p className="text-sm">Intelligent home systems</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">Smart Home Automation</h3>
              <p className="mb-4 text-muted-foreground">
                Complete smart home electrical system with automated lighting, climate control, and security
                integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  Residential
                </span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  Smart Home
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Automation
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

