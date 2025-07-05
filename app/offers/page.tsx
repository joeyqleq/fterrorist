import { studentOffers } from "@/lib/studentOffers"
import DisplayCards from "@/components/ui/display-cards"
import OfferFilter from "@/components/OfferFilter"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import BackgroundPaths from "@/components/ui/background-paths"

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundPaths />

      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-green-400 hover:text-green-300">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <Link href="/donate">Support Us</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-green-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              All Student Offers
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Browse all {studentOffers.length} free offers available with your .edu account
          </p>
        </div>

        <OfferFilter />
        <DisplayCards offers={studentOffers} />
      </div>
    </div>
  )
}
