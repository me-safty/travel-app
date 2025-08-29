import * as React from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  userImage?: string
  userName?: string
}

export default function DestinationCard({
  imageSrc,
  imageAlt,
  title,
  overlayText,
  rating,
  width = "flex-1",
  height = "flex-1",
  userImage,
  userName,
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
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-[20px]" />

        {rating && (
          <div className="absolute top-5 left-5 bg-white text-red-500 text-sm font-bold px-5 py-1 rounded-full shadow-sm">
            {rating}
          </div>
        )}

        <div className="absolute bottom-5 left-5 text-white z-10">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={userImage} alt={`صورة ${userName}`} />
              <AvatarFallback className="text-black select-none">
                {userName ? userName.charAt(0).toUpperCase() : ""}
              </AvatarFallback>
            </Avatar>
            {overlayText && <p className="text-sm">{overlayText}</p>}
          </div>
        </div>
      </div>
    </Card>
  )
}
