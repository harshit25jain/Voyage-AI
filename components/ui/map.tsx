"use client"

import { MapPin } from "lucide-react"

interface MapProps {
  location: string
}

export function Map({ location }: MapProps) {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl overflow-hidden border border-blue-200">
      {/* Map placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-purple-200/50" />

      {/* Grid pattern to simulate map */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 grid-rows-6 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-blue-300/30" />
          ))}
        </div>
      </div>

      {/* Location marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 whitespace-nowrap border border-gray-200">
            {location}
          </div>
        </div>
      </div>

      {/* Map controls placeholder */}
      <div className="absolute top-4 right-4 space-y-2">
        <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded border border-gray-200 flex items-center justify-center">
          <span className="text-xs font-bold text-gray-600">+</span>
        </div>
        <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded border border-gray-200 flex items-center justify-center">
          <span className="text-xs font-bold text-gray-600">−</span>
        </div>
      </div>

      {/* Overlay text */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white/70 backdrop-blur-sm px-2 py-1 rounded">
        Interactive map placeholder
      </div>
    </div>
  )
}
