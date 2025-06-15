"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Camera } from "lucide-react"
import { Map } from "./map"
import type { Day } from "@/data/itinerary"

interface DayCardProps {
  day: Day
}

export function DayCard({ day }: DayCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
    >
      <div className="p-6 md:p-8">
        {/* Day Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Day {day.day}
            </h2>
            <p className="text-gray-600 font-medium">{day.title}</p>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">{day.activities.length} activities</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Activities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Today's Activities
            </h3>

            {day.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 rounded-2xl p-4 border border-white/30"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{activity.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {activity.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image and Map */}
          <div className="space-y-6">
            {/* Day Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={day.image || "/placeholder.svg?height=256&width=400"}
                alt={`Day ${day.day} in ${day.title}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Camera className="w-4 h-4" />
                <span className="text-sm font-medium">Day {day.day} Highlights</span>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/50 rounded-2xl p-4 border border-white/30">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Location Map
              </h4>
              <Map location={day.activities[0]?.location || day.title} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
