"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"

const categories = [
  "All",
  "Web Design",
  "Cloud",
  "Domains",
  "Design",
  "AI/Cloud",
  "AI Tools",
  "AI Coding",
  "Productivity",
]

const verificationTypes = [
  "All",
  ".edu email",
  ".edu email and student ID",
  "SheerID verification",
  ".edu or school doc",
]

export default function OfferFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVerification, setSelectedVerification] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const clearFilters = () => {
    setSelectedCategory("All")
    setSelectedVerification("All")
    setSearchTerm("")
  }

  const hasActiveFilters = selectedCategory !== "All" || selectedVerification !== "All" || searchTerm !== ""

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg border shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-purple-500" />
        <h3 className="font-semibold text-gray-800">Filter Offers</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search offers, providers, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-gray-200 focus:border-purple-300 focus:ring-purple-200"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedCategory === category
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "hover:bg-purple-50 hover:border-purple-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Verification Filter */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Verification Method</label>
        <div className="flex flex-wrap gap-2">
          {verificationTypes.map((verification) => (
            <Badge
              key={verification}
              variant={selectedVerification === verification ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedVerification === verification
                  ? "bg-pink-500 text-white hover:bg-pink-600"
                  : "hover:bg-pink-50 hover:border-pink-300"
              }`}
              onClick={() => setSelectedVerification(verification)}
            >
              {verification}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
