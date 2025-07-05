"use client"

import type { StudentOffer } from "@/lib/studentOffers"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"
import Link from "next/link"

interface OfferTableProps {
  offers: StudentOffer[]
}

const categoryColors = {
  "Web Design": "bg-blue-100 text-blue-700",
  Cloud: "bg-purple-100 text-purple-700",
  Domains: "bg-green-100 text-green-700",
  Design: "bg-pink-100 text-pink-700",
  "AI/Cloud": "bg-orange-100 text-orange-700",
  "AI Tools": "bg-red-100 text-red-700",
  "AI Coding": "bg-indigo-100 text-indigo-700",
  Productivity: "bg-yellow-100 text-yellow-700",
}

export default function OfferTable({ offers }: OfferTableProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg border shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/80">
            <TableHead className="font-semibold">Provider</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Offer</TableHead>
            <TableHead className="font-semibold">Duration</TableHead>
            <TableHead className="font-semibold">Savings</TableHead>
            <TableHead className="font-semibold">Verification</TableHead>
            <TableHead className="font-semibold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offers.map((offer, index) => {
            const categoryColor =
              categoryColors[offer.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-700"
            const slug = offer.provider.toLowerCase().replace(/\s+/g, "-")

            return (
              <TableRow key={index} className="hover:bg-purple-50/50 transition-colors">
                <TableCell className="font-medium">{offer.provider}</TableCell>
                <TableCell>
                  <Badge className={categoryColor}>{offer.category}</Badge>
                </TableCell>
                <TableCell className="max-w-xs">
                  <div className="truncate" title={offer.offer}>
                    {offer.offer}
                  </div>
                </TableCell>
                <TableCell>{offer.duration}</TableCell>
                <TableCell className="font-semibold text-green-600">{offer.savings}</TableCell>
                <TableCell className="text-sm text-gray-600">{offer.verification}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/offers/${slug}`}>
                        <Eye className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <a href={offer.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
