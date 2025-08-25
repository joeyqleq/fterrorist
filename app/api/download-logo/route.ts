import { NextRequest, NextResponse } from 'next/server'
import { writeFile, access } from 'fs/promises'
import { constants as FS_CONSTANTS } from 'fs'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const { logoUrl, companyName } = await request.json()

    if (!logoUrl || !companyName) {
      return NextResponse.json({ error: 'Logo URL and company name are required' }, { status: 400 })
    }

    // Fetch the logo
    const response = await fetch(logoUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch logo: ${response.statusText}`)
    }

    // Get the image buffer
    const buffer = await response.arrayBuffer()
    const uint8Array = new Uint8Array(buffer)

    // Create filename (sanitize company name)
    const sanitizedName = companyName.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    // Get file extension from URL or use default
    const urlPath = new URL(logoUrl).pathname
    const extension = urlPath.split('.').pop()?.toLowerCase() || 'png'
    const filename = `${sanitizedName}.${extension}`

    // Save to public/logos directory — do not overwrite if already exists
    const publicPath = join(process.cwd(), 'public', 'logos', filename)

    try {
      await access(publicPath, FS_CONSTANTS.F_OK)
      // File already exists; respect manual uploads and reuse
    } catch {
      await writeFile(publicPath, uint8Array)
    }

    // Return the public URL
    const publicUrl = `/logos/${filename}`

    return NextResponse.json({ 
      success: true, 
      localPath: publicUrl,
      originalUrl: logoUrl,
      company: companyName
    })

  } catch (error) {
    console.error('Logo download error:', error)
    return NextResponse.json({ 
      error: 'Failed to download logo',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}