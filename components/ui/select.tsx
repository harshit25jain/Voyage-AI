"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  className?: string
}

export function Select({ value, onValueChange, options, placeholder, className }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-base text-left ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200",
          className,
        )}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={cn("h-4 w-4 text-gray-400 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-2 bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onValueChange(option.value)
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-3 text-left text-base hover:bg-blue-50 transition-colors duration-150 first:rounded-t-2xl last:rounded-b-2xl"
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
