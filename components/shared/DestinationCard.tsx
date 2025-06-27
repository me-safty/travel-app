import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface TravelCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  className?: string
  height?: string
  width?: string
  overlayText?: string
  rating?: number
}

export default function DestinationCard({
  imageSrc,
  imageAlt,
  title,
  overlayText,
  rating,
  width = "w-[270px]",
  height = "h-[226px]",
}: TravelCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden p-0 rounded-[20px] shadow-md hover:shadow-xl transition-shadow",
        width
      )}
    >
      <div className={cn("relative w-full", height)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-[20px]"
        />

        {rating && (
          <div className="absolute top-3 left-3 bg-white text-red-500 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            {rating}
          </div>
        )}

        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          {overlayText && <p className="text-sm opacity-80">{overlayText}</p>}
        </div>
      </div>
    </Card>
  )
}
