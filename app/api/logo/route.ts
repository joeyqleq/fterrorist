import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const domain = searchParams.get('domain')
  const source = searchParams.get('source') || 'clearbit'

  if (!domain) {
    return NextResponse.json({ error: 'Domain is required' }, { status: 400 })
  }

  const logoSources = {
    clearbit: `https://logo.clearbit.com/${domain}`,
    favicon: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    faviconKit: `https://api.faviconkit.com/${domain}/128`,
  }

  const logoUrl = logoSources[source as keyof typeof logoSources]
  
  if (!logoUrl) {
    return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
  }

  try {
    // Fetch the logo from the external service
    const response = await fetch(logoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch logo: ${response.status}`)
    }

    const contentType = response.headers.get('content-type')
    
    if (!contentType?.startsWith('image/')) {
      throw new Error('Invalid content type')
    }

    // Return the image with proper headers
    const imageBuffer = await response.arrayBuffer()
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    })
  } catch (error) {
    console.error(`Logo fetch error for ${domain}:`, error)
    return NextResponse.json({ error: 'Failed to fetch logo' }, { status: 404 })
  }
}