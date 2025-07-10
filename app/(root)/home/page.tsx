import Image from "next/image"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-options"
import { redirect } from "next/navigation"
import Header from "@/components/Home/Header"
import Hero from "@/components/Home/Hero"
import FeaturedDestinations from "@/components/Home/FeaturedDestinations"
import TravelsSection from "@/components/Home/TravelsSection"
import Footer from "@/components/shared/Footer"

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <>
      <div
        className="
        absolute
        -z-10
        h-[640px]
        w-full
        left-0
        top-0
        overflow-hidden
      "
      >
        <Image
          src="/assets/images/hero-img.png"
          alt="Background Image with Gradient"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
        <div
          className="
          absolute inset-0
          z-10
          bg-[linear-gradient(to_bottom,rgba(224,242,247,0.8)_0%,rgba(224,242,247,0)_100%)]
        "
        ></div>
      </div>

      <div
        className="container
            mx-auto
            px-4
            sm:px-7
            lg:px-8
            h-[640px]"
      >
        <Header />
        <Hero />
      </div>
      <div
        className="container
            mx-auto
            px-4
            sm:px-7
            lg:px-8"
      >
        <FeaturedDestinations />
        <TravelsSection />
        <Footer />
      </div>
    </>
  )
}
