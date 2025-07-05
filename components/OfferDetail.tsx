"use client"

import type { StudentOffer } from "@/lib/studentOffers"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Clock, DollarSign, MapPin, Shield, AlertTriangle, Info } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import OfferLogo3D from "./OfferLogo3D"

interface OfferDetailProps {
  offer: StudentOffer
}

const categoryColors = {
  "Web Design": "bg-blue-100 text-blue-700 border-blue-200",
  Cloud: "bg-purple-100 text-purple-700 border-purple-200",
  Domains: "bg-green-100 text-green-700 border-green-200",
  Design: "bg-pink-100 text-pink-700 border-pink-200",
  "AI/Cloud": "bg-orange-100 text-orange-700 border-orange-200",
  "AI Tools": "bg-red-100 text-red-700 border-red-200",
  "AI Coding": "bg-indigo-100 text-indigo-700 border-indigo-200",
  Productivity: "bg-yellow-100 text-yellow-700 border-yellow-200",
}

export default function OfferDetail({ offer }: OfferDetailProps) {
  const categoryColor =
    categoryColors[offer.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-700 border-gray-200"

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Offers</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <OfferLogo3D provider={offer.provider} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`${categoryColor} font-medium text-sm`}>{offer.category}</Badge>
                    <div className="text-2xl font-bold text-green-600">{offer.savings}</div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{offer.provider}</h1>

                  <p className="text-xl text-gray-600 leading-relaxed">{offer.offer}</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Key Information */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-purple-500" />
                    Key Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <div>
                        <div className="font-medium text-gray-800">Duration</div>
                        <div className="text-gray-600">{offer.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-medium text-gray-800">Estimated Savings</div>
                        <div className="text-green-600 font-semibold">{offer.savings}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-pink-500" />
                      <div>
                        <div className="font-medium text-gray-800">Eligibility</div>
                        <div className="text-gray-600">{offer.eligibility}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <Shield className="w-5 h-5 text-orange-500" />
                      <div>
                        <div className="font-medium text-gray-800">Verification</div>
                        <div className="text-gray-600">{offer.verification}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notes */}
              {offer.notes && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      Important Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800">{offer.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-purple-100 mb-6">
                    Click below to visit the official offer page and claim your free access.
                  </p>
                  <Button asChild size="lg" className="w-full bg-white text-purple-600 hover:bg-gray-50">
                    <a href={offer.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Get This Offer
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Tips Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Have your .edu email ready before starting the verification process</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Check if your institution is specifically supported before applying</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Set calendar reminders for renewal dates to avoid losing access</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
