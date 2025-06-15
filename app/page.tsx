"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Plane, MapPin, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

export default function HomePage() {
  const router = useRouter()
  const [destination, setDestination] = useState("")
  const [days, setDays] = useState("5")
  const [budget, setBudget] = useState("medium")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!destination.trim()) return

    setIsLoading(true)

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const params = new URLSearchParams({
      place: destination.toLowerCase().trim(),
      days: days,
      budget: budget,
    })

    router.push(`/itinerary?${params.toString()}`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
                className="text-6xl"
              >
                ✈️
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Plan your dream trip with AI
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Let our AI create the perfect itinerary for your next adventure. Just tell us where you want to go, and
              we'll handle the rest.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.div variants={itemVariants}>
            <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Where do you want to go?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-12 h-14 text-lg"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                      <Select
                        value={days}
                        onValueChange={setDays}
                        options={Array.from({ length: 10 }, (_, i) => ({
                          value: (i + 1).toString(),
                          label: `${i + 1} day${i === 0 ? "" : "s"}`,
                        }))}
                        className="pl-12 h-14"
                        placeholder="Trip duration"
                      />
                    </div>

                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                      <Select
                        value={budget}
                        onValueChange={setBudget}
                        options={[
                          { value: "low", label: "Budget-friendly" },
                          { value: "medium", label: "Moderate" },
                          { value: "high", label: "Luxury" },
                        ]}
                        className="pl-12 h-14"
                        placeholder="Budget range"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!destination.trim() || isLoading}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Plane className="w-5 h-5 mr-2" />
                      Generate My Itinerary
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: "🤖",
                  title: "AI-Powered",
                  description: "Smart recommendations based on your preferences",
                },
                {
                  icon: "⚡",
                  title: "Instant Results",
                  description: "Get your complete itinerary in seconds",
                },
                {
                  icon: "🎯",
                  title: "Personalized",
                  description: "Tailored to your budget and travel style",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-sm bg-white/50 rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
