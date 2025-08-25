"use client"

import { useEffect, useState } from "react"
import { studentOffers } from "@/lib/studentOffers"
import { initializeProviderLogos } from "@/lib/logoService"

/**
 * Component that initializes logos for all providers on app startup
 * This should be included once in the root layout or main app component
 */
export default function LogoInitializer() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client flag to prevent SSR issues
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Completely disable logo initialization to prevent console errors
    console.log("Logo initialization disabled to prevent errors")
    return
  }, [isClient])

  // This component doesn't render anything visible
  return null
}

/**
 * Hook to get the list of all unique providers
 */
export function useProviders() {
  return Array.from(new Set(studentOffers.map(offer => offer.provider)))
}