import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

interface DestinationCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  rating?: number
}

export function DestinationCard({
  imageSrc,
  imageAlt,
  title,
  description,
  rating,
}: DestinationCardProps) {
  return (
    <Card className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className=""
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {rating && (
            <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm font-semibold px-2 py-1 rounded-full z-10">
              {rating}
            </div>
          )}

          <div className="absolute bottom-4 left-4 z-10 text-white">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div>
              <span className="text-sm text-gray-700">{description}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
