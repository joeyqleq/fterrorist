"use client"

import { useState, useEffect } from "react"
import { fetchCompanyLogo } from "@/lib/logoService"
import Image from "next/image"

const testProviders = [
  "GitHub", "Microsoft Azure", "OpenAI", "Figma", "Notion", 
  "Spotify Premium", "Unity", "Webflow", "Canva Pro"
]

export default function LogoDebugger() {
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const testLogos = async () => {
    setIsLoading(true)
    setResults([])
    
    for (const provider of testProviders) {
      try {
        const logo = await fetchCompanyLogo(provider)
        setResults(prev => [...prev, {
          provider,
          success: !!logo.logoUrl,
          logoUrl: logo.logoUrl,
          fallback: logo.fallbackInitials,
          error: null
        }])
      } catch (error) {
        setResults(prev => [...prev, {
          provider,
          success: false,
          logoUrl: null,
          fallback: provider.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase(),
          error: error?.message || "Unknown error"
        }])
      }
    }
    setIsLoading(false)
  }

  return (
    <div className="fixed top-4 right-4 bg-gray-900 p-4 rounded-lg border border-gray-700 max-w-md z-50">
      <h3 className="text-white font-bold mb-3">Logo Debug Console</h3>
      
      <button 
        onClick={testLogos}
        disabled={isLoading}
        className="bg-blue-600 text-white px-3 py-1 rounded text-sm mb-3 disabled:opacity-50"
      >
        {isLoading ? "Testing..." : "Test Logo Fetching"}
      </button>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {results.map((result, i) => (
          <div key={i} className="bg-gray-800 p-2 rounded text-xs">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">{result.provider}:</span>
              {result.success ? (
                <span className="text-green-400">✓ Logo Found</span>
              ) : (
                <span className="text-yellow-400">Fallback ({result.fallback})</span>
              )}
            </div>
            
            {result.logoUrl && (
              <div className="mt-2">
                <img 
                  src={result.logoUrl} 
                  alt={result.provider}
                  className="w-8 h-8 object-contain bg-white rounded"
                  onError={() => console.log(`Failed to load: ${result.logoUrl}`)}
                />
                <div className="text-gray-400 text-xs truncate">{result.logoUrl}</div>
              </div>
            )}
            
            {result.error && (
              <div className="text-red-400 text-xs mt-1">Error: {result.error}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}