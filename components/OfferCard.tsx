"use client"

import type { StudentOffer } from "@/lib/studentOffers"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Clock, MapPin, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface OfferCardProps {
  offer: StudentOffer
  index: number
}

const categoryColors = {
  "Web Design": "bg-gradient-to-r from-blue-500 to-cyan-400 text-black",
  Cloud: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  Domains: "bg-gradient-to-r from-green-500 to-emerald-400 text-black",
  Design: "bg-gradient-to-r from-pink-500 to-rose-400 text-white",
  "AI/Cloud": "bg-gradient-to-r from-orange-500 to-yellow-400 text-black",
  "AI Tools": "bg-gradient-to-r from-red-500 to-pink-500 text-white",
  "AI Coding": "bg-gradient-to-r from-indigo-500 to-purple-500 text-white",
  Productivity: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black",
}

export default function OfferCard({ offer, index }: OfferCardProps) {
  const categoryColor =
    categoryColors[offer.category as keyof typeof categoryColors] ||
    "bg-gradient-to-r from-gray-500 to-gray-400 text-white"
  const slug = offer.provider.toLowerCase().replace(/\s+/g, "-")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300 group overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <Badge className={`${categoryColor} font-bold px-3 py-1 rounded-full border-0`}>{offer.category}</Badge>
            <div className="text-right">
              <div className="text-xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {offer.savings}
              </div>
              <div className="text-xs text-gray-400">value</div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {offer.provider}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">{offer.offer}</p>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-300">{offer.duration}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-300">{offer.eligibility}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-black" />
              </div>
              <span className="text-gray-300">{offer.verification}</span>
            </div>
          </div>

          {offer.notes && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
              <p className="text-xs text-yellow-300 leading-relaxed">{offer.notes}</p>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              asChild
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-xl"
            >
              <a href={offer.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Get Free
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-xl"
            >
              <Link href={`/offers/${slug}`}>Details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
