"use client"

import { Suspense } from "react"
import ItineraryContent from "./itinerary-content"

function ItineraryPageFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function ItineraryPage() {
  return (
    <Suspense fallback={<ItineraryPageFallback />}>
      <ItineraryContent />
    </Suspense>
  )
}
