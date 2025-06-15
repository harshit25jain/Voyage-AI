export interface Activity {
  name: string
  description: string
  duration: string
  location: string
}

export interface Day {
  day: number
  title: string
  activities: Activity[]
  image: string
}

export interface Itinerary {
  destination: string
  duration: number
  budget: "low" | "medium" | "high"
  days: Day[]
}

// Mock itinerary data for different destinations
const mockItineraries: Record<string, Itinerary> = {
  tokyo: {
    destination: "Tokyo, Japan",
    duration: 5,
    budget: "medium",
    days: [
      {
        day: 1,
        title: "Arrival & Traditional Tokyo",
        activities: [
          {
            name: "Senso-ji Temple",
            description: "Visit Tokyo's oldest temple in historic Asakusa district",
            duration: "2 hours",
            location: "Asakusa",
          },
          {
            name: "Nakamise Shopping Street",
            description: "Traditional shopping street leading to Senso-ji",
            duration: "1 hour",
            location: "Asakusa",
          },
          {
            name: "Tokyo Skytree",
            description: "Panoramic city views from Japan's tallest tower",
            duration: "2 hours",
            location: "Sumida",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 2,
        title: "Modern Tokyo & Pop Culture",
        activities: [
          {
            name: "Shibuya Crossing",
            description: "Experience the world's busiest pedestrian crossing",
            duration: "1 hour",
            location: "Shibuya",
          },
          {
            name: "Harajuku District",
            description: "Explore youth culture and unique fashion",
            duration: "2 hours",
            location: "Harajuku",
          },
          {
            name: "Meiji Shrine",
            description: "Peaceful shrine dedicated to Emperor Meiji",
            duration: "1.5 hours",
            location: "Shibuya",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 3,
        title: "Imperial Palace & Ginza",
        activities: [
          {
            name: "Imperial Palace East Gardens",
            description: "Beautiful gardens of the former Edo Castle",
            duration: "2 hours",
            location: "Chiyoda",
          },
          {
            name: "Ginza Shopping District",
            description: "Luxury shopping and dining in Tokyo's upscale area",
            duration: "3 hours",
            location: "Ginza",
          },
          {
            name: "Tsukiji Outer Market",
            description: "Fresh sushi and street food experience",
            duration: "2 hours",
            location: "Tsukiji",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 4,
        title: "Akihabara & Traditional Arts",
        activities: [
          {
            name: "Akihabara Electric Town",
            description: "Electronics and anime culture hub",
            duration: "2 hours",
            location: "Akihabara",
          },
          {
            name: "Tokyo National Museum",
            description: "Japan's largest collection of cultural artifacts",
            duration: "2.5 hours",
            location: "Ueno",
          },
          {
            name: "Ueno Park",
            description: "Spacious public park with museums and zoo",
            duration: "1.5 hours",
            location: "Ueno",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 5,
        title: "Day Trip to Nikko",
        activities: [
          {
            name: "Toshogu Shrine",
            description: "Lavishly decorated shrine complex",
            duration: "2 hours",
            location: "Nikko",
          },
          {
            name: "Kegon Falls",
            description: "Spectacular 97-meter waterfall",
            duration: "1.5 hours",
            location: "Nikko",
          },
          {
            name: "Lake Chuzenji",
            description: "Scenic lake surrounded by mountains",
            duration: "2 hours",
            location: "Nikko",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  paris: {
    destination: "Paris, France",
    duration: 5,
    budget: "medium",
    days: [
      {
        day: 1,
        title: "Classic Paris Icons",
        activities: [
          {
            name: "Eiffel Tower",
            description: "Visit the iconic iron lattice tower",
            duration: "2 hours",
            location: "Champ de Mars",
          },
          {
            name: "Seine River Cruise",
            description: "Scenic boat tour along the Seine",
            duration: "1.5 hours",
            location: "Seine River",
          },
          {
            name: "Trocadéro Gardens",
            description: "Best views of the Eiffel Tower",
            duration: "1 hour",
            location: "Trocadéro",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 2,
        title: "Art & Culture",
        activities: [
          {
            name: "Louvre Museum",
            description: "World's largest art museum",
            duration: "3 hours",
            location: "1st Arrondissement",
          },
          {
            name: "Tuileries Garden",
            description: "Beautiful formal garden",
            duration: "1 hour",
            location: "1st Arrondissement",
          },
          {
            name: "Place Vendôme",
            description: "Luxury shopping square",
            duration: "1 hour",
            location: "1st Arrondissement",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 3,
        title: "Montmartre & Sacré-Cœur",
        activities: [
          {
            name: "Sacré-Cœur Basilica",
            description: "Stunning basilica with panoramic views",
            duration: "1.5 hours",
            location: "Montmartre",
          },
          {
            name: "Place du Tertre",
            description: "Artists' square in Montmartre",
            duration: "2 hours",
            location: "Montmartre",
          },
          {
            name: "Moulin Rouge",
            description: "Famous cabaret venue",
            duration: "2 hours",
            location: "Pigalle",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 4,
        title: "Notre-Dame & Latin Quarter",
        activities: [
          {
            name: "Notre-Dame Cathedral",
            description: "Gothic masterpiece (exterior visit)",
            duration: "1 hour",
            location: "Île de la Cité",
          },
          {
            name: "Sainte-Chapelle",
            description: "Stunning stained glass windows",
            duration: "1 hour",
            location: "Île de la Cité",
          },
          {
            name: "Latin Quarter",
            description: "Historic student district with cafés",
            duration: "2 hours",
            location: "5th Arrondissement",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 5,
        title: "Versailles Day Trip",
        activities: [
          {
            name: "Palace of Versailles",
            description: "Opulent royal palace and gardens",
            duration: "4 hours",
            location: "Versailles",
          },
          {
            name: "Gardens of Versailles",
            description: "Magnificent formal gardens",
            duration: "2 hours",
            location: "Versailles",
          },
          {
            name: "Marie Antoinette's Estate",
            description: "Queen's private retreat",
            duration: "1.5 hours",
            location: "Versailles",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  london: {
    destination: "London, England",
    duration: 5,
    budget: "medium",
    days: [
      {
        day: 1,
        title: "Royal London",
        activities: [
          {
            name: "Buckingham Palace",
            description: "Official residence of the British monarch",
            duration: "1.5 hours",
            location: "Westminster",
          },
          {
            name: "Westminster Abbey",
            description: "Historic church and coronation site",
            duration: "2 hours",
            location: "Westminster",
          },
          {
            name: "Big Ben & Houses of Parliament",
            description: "Iconic clock tower and government buildings",
            duration: "1 hour",
            location: "Westminster",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 2,
        title: "Museums & Culture",
        activities: [
          {
            name: "British Museum",
            description: "World-famous museum of human history",
            duration: "3 hours",
            location: "Bloomsbury",
          },
          {
            name: "Covent Garden",
            description: "Shopping and entertainment district",
            duration: "2 hours",
            location: "Covent Garden",
          },
          {
            name: "West End Show",
            description: "World-class theater performance",
            duration: "2.5 hours",
            location: "West End",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 3,
        title: "Tower of London & Thames",
        activities: [
          {
            name: "Tower of London",
            description: "Historic castle and Crown Jewels",
            duration: "2.5 hours",
            location: "Tower Hill",
          },
          {
            name: "Tower Bridge",
            description: "Iconic Victorian bridge",
            duration: "1 hour",
            location: "Tower Bridge",
          },
          {
            name: "Thames River Walk",
            description: "Scenic walk along the Thames",
            duration: "1.5 hours",
            location: "South Bank",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 4,
        title: "Parks & Markets",
        activities: [
          {
            name: "Hyde Park",
            description: "Large royal park in central London",
            duration: "2 hours",
            location: "Hyde Park",
          },
          {
            name: "Camden Market",
            description: "Alternative market with unique shops",
            duration: "2 hours",
            location: "Camden",
          },
          {
            name: "Regent's Park",
            description: "Beautiful park with rose gardens",
            duration: "1.5 hours",
            location: "Regent's Park",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        day: 5,
        title: "Greenwich & Maritime History",
        activities: [
          {
            name: "Greenwich Observatory",
            description: "Home of Greenwich Mean Time",
            duration: "2 hours",
            location: "Greenwich",
          },
          {
            name: "Cutty Sark",
            description: "Historic tea clipper ship",
            duration: "1 hour",
            location: "Greenwich",
          },
          {
            name: "Greenwich Park",
            description: "Royal park with London views",
            duration: "1.5 hours",
            location: "Greenwich",
          },
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
}

export function getItinerary(destination: string, duration: number, budget: "low" | "medium" | "high"): Itinerary {
  // Normalize destination for lookup
  const normalizedDestination = destination.toLowerCase().trim()

  // Try to find exact match first
  let itinerary = mockItineraries[normalizedDestination]

  // If no exact match, try partial matches
  if (!itinerary) {
    const matchingKey = Object.keys(mockItineraries).find(
      (key) => key.includes(normalizedDestination) || normalizedDestination.includes(key),
    )
    if (matchingKey) {
      itinerary = mockItineraries[matchingKey]
    }
  }

  // If still no match, use Tokyo as default and customize
  if (!itinerary) {
    itinerary = {
      ...mockItineraries.tokyo,
      destination: destination.charAt(0).toUpperCase() + destination.slice(1),
    }
  }

  // Adjust itinerary based on duration
  const adjustedItinerary = {
    ...itinerary,
    duration,
    budget,
    days: itinerary.days.slice(0, duration),
  }

  return adjustedItinerary
}
