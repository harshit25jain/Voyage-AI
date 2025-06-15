# VoyageAI - AI Travel Itinerary Generator

A beautiful, responsive travel itinerary generator built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🤖 AI-powered travel recommendations
- ✈️ Beautiful, responsive design
- 🎨 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🗺️ Interactive itinerary display
- 🎯 Personalized based on budget and duration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd voyageai-travel-generator
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── itinerary/
│       ├── page.tsx
│       └── itinerary-content.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── day-card.tsx
│       └── map.tsx
├── data/
│   └── itinerary.ts
├── lib/
│   └── utils.ts
└── package.json
\`\`\`

## License

MIT License
