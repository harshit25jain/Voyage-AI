"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DayCard } from "@/components/ui/day-card"
import { getItinerary, type Itinerary } from "@/data/itinerary"

export default function ItineraryContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [itinerary, setItinerary] = useState<Itinerary | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const place = searchParams?.get("place") || ""
  const days = searchParams?.get("days") || "5"
  const budget = searchParams?.get("budget") || "medium"

  useEffect(() => {
    const loadItinerary = async () => {
      if (!place) {
        router.push("/")
        return
      }

      setIsLoading(true)
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      try {
        const data = getItinerary(place, Number.parseInt(days), budget as "low" | "medium" | "high")
        setItinerary(data)
      } catch (error) {
        console.error("Error loading itinerary:", error)
        setItinerary(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadItinerary()
  }, [place, days, budget, router])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating your perfect itinerary...</h2>
          <p className="text-gray-600">Our AI is crafting the best experience for {place}</p>
        </motion.div>
      </div>
    )
  }

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Oops! Something went wrong</h2>
          <Button onClick={() => router.push("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button variant="ghost" onClick={() => router.push("/")} className="mb-6 hover:bg-white/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {itinerary.destination}
                  </h1>
                  <p className="text-gray-600">Your AI-generated travel itinerary</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">{itinerary.duration} days</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-full">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800 capitalize">{itinerary.budget} budget</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Itinerary Days */}
          <motion.div variants={itemVariants} className="space-y-6">
            <AnimatePresence>
              {itinerary.days.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DayCard day={day} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Summary */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for your adventure? ✈️</h3>
              <p className="text-gray-600 mb-6">
                Your personalized itinerary is ready! Save it, share it, or create another one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => router.push("/")} variant="outline" className="bg-white/50 hover:bg-white/70">
                  Plan Another Trip
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Save Itinerary
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
