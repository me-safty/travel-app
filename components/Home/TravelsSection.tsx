import Pagination from "../shared/Pagination"
import TravelCard from "../shared/TravelCard"

export default function TravelsSection() {
  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Handpicked Trips
        </h2>
        <p className="text-lg text-gray-600">
          Browse well-planned trips designed for different travel styles and
          interests.
        </p>
      </div>
      <div
        className="grid
            justify-items-center
            grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
            gap-y-4
            w-full
            mb-8"
      >
        <TravelCard
          imageSrc="/assets/images/sample.jpeg" // استبدل بمسار صورتك
          imageAlt="Thornridge Cir. Shiloh"
          price={500}
          title="Thornridge Cir. Shiloh"
          location="St George's Ln Singapore"
          categories={["Mountains", "City"]}
          height="h-64" // يمكنك تعديل الارتفاع حسب الحاجة
        />
        <TravelCard
          imageSrc="/assets/images/sample.jpeg"
          imageAlt="Another Destination"
          price={250}
          title="Ronsime Topul"
          location="Come Parks, Venezuela"
          categories={["Sea", "Forest", "Budget"]}
          height="h-64"
        />

        <TravelCard
          imageSrc="/assets/images/sample.jpeg" // استبدل بمسار صورتك
          imageAlt="Thornridge Cir. Shiloh"
          price={300}
          title="Thornridge Cir. Shiloh"
          location="St George's Ln Singapore"
          categories={["Mountains", "City"]}
          height="h-64" // يمكنك تعديل الارتفاع حسب الحاجة
        />
        <TravelCard
          imageSrc="/assets/images/sample.jpeg"
          imageAlt="Another Destination"
          price={250}
          title="Ronsime Topul"
          location="Come Parks, Venezuela"
          categories={["Sea", "Forest", "Budget"]}
          height="h-64"
        />

        <TravelCard
          imageSrc="/assets/images/sample.jpeg" // استبدل بمسار صورتك
          imageAlt="Thornridge Cir. Shiloh"
          price={300}
          title="Thornridge Cir. Shiloh"
          location="St George's Ln Singapore"
          categories={["Mountains", "City"]}
          height="h-64" // يمكنك تعديل الارتفاع حسب الحاجة
        />
        <TravelCard
          imageSrc="/assets/images/sample.jpeg"
          imageAlt="Another Destination"
          price={250}
          title="Ronsime Topul"
          location="Come Parks, Venezuela"
          categories={["Sea", "Forest", "Budget"]}
          height="h-64"
        />

        <TravelCard
          imageSrc="/assets/images/sample.jpeg" // استبدل بمسار صورتك
          imageAlt="Thornridge Cir. Shiloh"
          price={300}
          title="Thornridge Cir. Shiloh"
          location="St George's Ln Singapore"
          categories={["Mountains", "City"]}
          height="h-64" // يمكنك تعديل الارتفاع حسب الحاجة
        />
        <TravelCard
          imageSrc="/assets/images/sample.jpeg"
          imageAlt="Another Destination"
          price={250}
          title="Ronsime Topul"
          location="Come Parks, Venezuela"
          categories={["Sea", "Forest", "Budget"]}
          height="h-64"
        />
      </div>
      <Pagination />
    </section>
  )
}
