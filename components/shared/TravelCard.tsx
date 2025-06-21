import * as React from "react";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TravleCardProps {
  imageSrc: string;
  imageAlt: string;
  price: number;
  title: string;
  location: string;
  categories: string[];
  className?: string;
  height?: string;
}

export default function TravleCard({
  imageSrc,
  imageAlt,
  price,
  title,
  location,
  categories,
  className,
  height = "h-56",
}: TravleCardProps) {
  return (
    <Card className={cn("relative overflow-hidden p-0 w-[270px] rounded-[20px] shadow-md hover:shadow-xl transition-shadow", className)}>
      
      <div className={cn("relative w-full", height)}> 
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        
        <div className="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
          ${price}
        </div>
      </div>

      
      <CardContent className="p-4 pt-3"> 
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPinIcon className="w-4 h-4 mr-1" /> 
          <span>{location}</span>
        </div>

        
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}