import { DestinationCard } from "../shared/DestinationCard"

export default function FeaturedDestinations() {
  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Featured Travel Destinations
        </h2>
        <p className="text-lg text-gray-600">
          Check out some of the best places you can visit around the world.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-2">
        <div className="col-span-2 grid grid-cols-2">
          <div className="col-span-2">
            <DestinationCard
              imageSrc="/assets/images/card-img-2.png"
              imageAlt="Destination 2"
              title="Mountain Adventure"
              description="Experience the thrill of hiking in the mountains."
              rating={4.8}
            />
          </div>
          <DestinationCard
            imageSrc="/assets/images/card-img-2.png"
            imageAlt="Destination 2"
            title="Mountain Adventure"
            description="Experience the thrill of hiking in the mountains."
            rating={4.8}
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-2.png"
            imageAlt="Destination 2"
            title="Mountain Adventure"
            description="Experience the thrill of hiking in the mountains."
            rating={4.8}
          />
        </div>
        <div className="col-span-1">
          <DestinationCard
            imageSrc="/assets/images/card-img-1.png"
            imageAlt="Destination 1"
            title="Beautiful Beach"
            description="Relax on the sandy shores of this beautiful beach."
            rating={4.5}
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-2.png"
            imageAlt="Destination 2"
            title="Mountain Adventure"
            description="Experience the thrill of hiking in the mountains."
            rating={4.8}
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-2.png"
            imageAlt="Destination 2"
            title="Mountain Adventure"
            description="Experience the thrill of hiking in the mountains."
            rating={4.8}
          />
        </div>
      </div>
    </section>
  )
}
