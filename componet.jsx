/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FcZ475jh2nL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#f5f5f5] dark:bg-[#1a1a1a] py-6 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5]"
            prefetch={false}
          >
            <MapPinIcon className="w-6 h-6 text-[#8c6b4e]" />
            Makueni County
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-[#4a4a4a] dark:text-[#f5f5f5] hover:text-[#8c6b4e] transition-colors"
              prefetch={false}
            >
              Destinations
            </Link>
            <Link
              href="#"
              className="text-[#4a4a4a] dark:text-[#f5f5f5] hover:text-[#8c6b4e] transition-colors"
              prefetch={false}
            >
              Accommodations
            </Link>
            <Link
              href="#"
              className="text-[#4a4a4a] dark:text-[#f5f5f5] hover:text-[#8c6b4e] transition-colors"
              prefetch={false}
            >
              Activities
            </Link>
            <Link
              href="#"
              className="text-[#4a4a4a] dark:text-[#f5f5f5] hover:text-[#8c6b4e] transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" className="text-[#4a4a4a] dark:text-[#f5f5f5]">
              <SearchIcon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#4a4a4a] dark:text-[#f5f5f5]">
              <MenuIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#f5f5f5] dark:bg-[#1a1a1a] py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                  Discover the Beauty of Makueni County
                </h1>
                <p className="text-[#4a4a4a] dark:text-[#f5f5f5] text-lg mb-6">
                  Explore the stunning landscapes, rich culture, and diverse wildlife of Makueni County.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">
                    Explore Destinations
                  </Button>
                  <Button
                    variant="secondary"
                    className="text-[#8c6b4e] border-[#8c6b4e] hover:bg-[#8c6b4e] hover:text-[#f5f5f5] transition-colors"
                  >
                    Book Accommodations
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <img src="/placeholder.svg" alt="Makueni County Map" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#f5f5f5] dark:bg-[#1a1a1a] p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Explore the Map</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Click on different locations to discover top attractions and accommodation options.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">
                    Explore Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="destinations" className="bg-[#f5f5f5] dark:bg-[#1a1a1a] py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-8">
              Top Destinations in Makueni County
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Destination 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Chyulu Hills</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Explore the stunning Chyulu Hills, home to diverse wildlife and breathtaking views.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Explore</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Destination 2"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">
                    Tsavo East National Park
                  </h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Discover the vast and diverse Tsavo East National Park, home to a wide range of wildlife.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Explore</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Destination 3"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Kilungu Hills</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Hike through the scenic Kilungu Hills and enjoy the stunning views of the surrounding landscape.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Explore</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Destination 4"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Kibwezi Forest</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Immerse yourself in the lush greenery and diverse wildlife of the Kibwezi Forest.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Explore</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="accommodations" className="bg-[#f5f5f5] dark:bg-[#1a1a1a] py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-8">
              Accommodations in Makueni County
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Accommodation 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Chyulu Hills Eco-Lodge</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Enjoy a sustainable and eco-friendly stay at the Chyulu Hills Eco-Lodge.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Book Now</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Accommodation 2"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Tsavo Serena Lodge</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Experience luxury and comfort at the Tsavo Serena Lodge, nestled within the national park.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Book Now</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Accommodation 3"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Kilungu Hills Retreat</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Unwind and rejuvenate at the Kilungu Hills Retreat, offering stunning views and tranquil
                    surroundings.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Book Now</Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Accommodation 4"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-2">Kibwezi Forest Campsite</h3>
                  <p className="text-[#4a4a4a] dark:text-[#f5f5f5] mb-4">
                    Immerse yourself in nature and camp under the stars at the Kibwezi Forest Campsite.
                  </p>
                  <Button className="bg-[#8c6b4e] text-[#f5f5f5] hover:bg-[#6b5439] transition-colors">Book Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="activities" className="bg-[#f5f5f5] dark:bg-[#1a1a1a] py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a4a4a] dark:text-[#f5f5f5] mb-8">
              Activities in Makueni County
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Activity 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
