import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Offer Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The offer you're looking for doesn't exist or may have been removed. Let's get you back to discovering amazing
          student freebies!
        </p>

        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Link href="/">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Offers
          </Link>
        </Button>
      </div>
    </div>
  )
}
