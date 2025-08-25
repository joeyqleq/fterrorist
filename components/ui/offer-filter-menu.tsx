"use client"
import { CyberButton } from "@/components/ui/cyber-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, X, Target } from "lucide-react"

interface OfferFilterMenuProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchTerm: string
  onSearchChange: (term: string) => void
}

export function OfferFilterMenu({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}: OfferFilterMenuProps) {
  const clearFilters = () => {
    onCategoryChange("All")
    onSearchChange("")
  }

  const hasActiveFilters = selectedCategory !== "All" || searchTerm !== ""

  return (
    <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-8 mb-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-purple-400/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30">
            <Target className="w-5 h-5 text-cyan-400" />
          </div>
          <h3 className="font-black text-white text-xl font-mono uppercase tracking-wider">TARGET FILTERS</h3>
          {hasActiveFilters && (
            <CyberButton variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
              <X className="w-4 h-4 mr-1" />
              CLEAR ALL
            </CyberButton>
          )}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
          <Input
            placeholder="SEARCH TARGETS, PROVIDERS, KEYWORDS..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-12 h-12 bg-gray-900/50 border-cyan-400/30 text-white placeholder-gray-500 focus:border-cyan-400 rounded-xl font-mono text-sm backdrop-blur-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="text-sm font-bold text-gray-300 mb-4 block font-mono uppercase tracking-wider">CATEGORY SELECTION</label>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-300 px-4 py-2 text-sm font-mono uppercase tracking-wider ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:from-cyan-400 hover:to-blue-500 border-0 shadow-lg"
                    : "border-gray-600 text-gray-300 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-400"
                }`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
