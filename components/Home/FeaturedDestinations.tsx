import DestinationCard from "../shared/DestinationCard"

export default function FeaturedDestinations() {
  return (
    <section className="mt-30">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Travel Destinations
        </h2>
        <p className="text-lg text-gray-600">
          Check out some of the best places you can visit around the world. 
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-[3.5] flex-col gap-3">
          <div className="h-fit flex-1">
            <DestinationCard
              imageSrc="/assets/images/card-img-1.png"
              imageAlt="Barcelona Tour"
              title="Barcelona Tour"
              overlayText="98% Activities"
              rating={3.5}
              width="w-[100%]"
              height="h-[297px]"
              userName="Omar"
              
            />
          </div>
          <div className="flex flex-1 flex-row gap-3">
          <DestinationCard
            imageSrc="/assets/images/card-img-2.png"
            imageAlt="London Tour"
            title="London Tour"
            overlayText="98% Activities"
            rating={3.5}
            width="flex-1"
            height="h-[390px]"
            userName="Omar"
            
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-3.png"
            imageAlt="Australia Tour"
            title="Australia Tour"
            overlayText="98% Activities"
            rating={3.5}
            width="flex-1"
            userName="Omar"
            
          />
          </div>
        </div>
        <div className="flex flex-1 flex-row lg:flex-col gap-3">
          <DestinationCard
            imageSrc="/assets/images/card-img-4.png"
            imageAlt="Australia Tour"
            width="flex-1"
            title="Australia Tour"
            height="h-[226px] lg:h-none"
            overlayText="98% Activities"
            rating={3.5}
            userName="Omar"
            
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-5.png"
            imageAlt="Japan Tour"
            height="h-[226px] lg:h-none"
            title="Japan Tour"
            width="flex-1"
            overlayText="98% Activities"
            rating={3.5}
            userName="Omar"
            
          />
          <DestinationCard
            imageSrc="/assets/images/card-img-6.png"
            height="h-[226px] lg:h-none"
            imageAlt="Japan Tour"
            title="Japan Tour"
            width="flex-1"
            overlayText="98% Activities"
            rating={3.5}
            userName="Omar"
            
          />
        </div>
      </div>
    </section>
  )
}
