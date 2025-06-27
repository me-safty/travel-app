import DestinationCard from "../shared/DestinationCard"

export default function FeaturedDestinations() {
  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Travel Destinations
        </h2>
        <p className="text-lg text-gray-600">
          Check out some of the best places you can visit around the world.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="col-span-2 grid grid-cols-2 justify-between">
          <div className="col-span-2 h-fit">
            <DestinationCard
              imageSrc="/assets/images/card-img-3.png"
              imageAlt="Japan Tour"
              title="Japan Tour"
              overlayText="98% Activities"
              rating={3.5}
              width="w-[870px]"
              height="h-[297px]"
            />
          </div>
          <DestinationCard
            imageSrc="/assets/images/card-img-3.png"
            imageAlt="Japan Tour"
            title="Japan Tour"
            overlayText="98% Activities"
            rating={3.5}
            width="w-[420px]"
            height="h-[390px]"
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-3.png"
            imageAlt="Japan Tour"
            title="Japan Tour"
            overlayText="98% Activities"
            rating={3.5}
            width="w-[420px]"
            height="h-[390px]"
          />
        </div>
        <div className="col-span-1 grid gap-y-4 justify-end">
          <DestinationCard
            imageSrc="/assets/images/card-img-3.png"
            imageAlt="Japan Tour"
            title="Japan Tour"
            overlayText="98% Activities"
            rating={3.5}
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-3.png"
            imageAlt="Japan Tour"
            title="Japan Tour"
            overlayText="98% Activities"
            rating={3.5}
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-3.png"
            imageAlt="Japan Tour"
            title="Japan Tour"
            overlayText="98% Activities"
            rating={3.5}
          />
        </div>
      </div>
    </section>
  )
}
