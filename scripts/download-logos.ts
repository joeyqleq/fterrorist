#!/usr/bin/env node

import { promises as fs } from 'fs'
import { join } from 'path'
import https from 'https'
import http from 'http'
import { URL } from 'url'

// Company domain mappings (copied from logoService.ts)
const COMPANY_DOMAINS: Record<string, string> = {
  "Webflow": "webflow.com",
  "Microsoft Azure": "azure.microsoft.com", 
  "Microsoft Office 365": "microsoft.com",
  "Alibaba Cloud": "alibabacloud.com",
  "Namecheap": "namecheap.com",
  "Bootstrap Studio": "bootstrapstudio.io",
  "Google One AI Premium": "google.com",
  "Cursor AI": "cursor.com",
  "Figma": "figma.com",
  "Craft.do": "craft.do",
  "InterServer": "interserver.net",
  "Infomaniak Education": "infomaniak.com",
  "Canva Pro": "canva.com",
  "Grok by x.AI": "x.ai",
  "Zight Pro": "zight.com",
  "Dashlane Premium": "dashlane.com",
  "JetBrains": "jetbrains.com",
  "D5 Render": "d5render.com",
  "Kapwing Pro": "kapwing.com",
  "Autodesk Education": "autodesk.com",
  "GitHub": "github.com",
  "Notion": "notion.so",
  "Atlassian": "atlassian.com",
  "Tableau": "tableau.com",
  "Spotify Premium": "spotify.com",
  "YNAB": "youneedabudget.com",
  "Zoho Survey": "zoho.com",
  "SurveyHero": "surveyhero.com",
  "Jotform": "jotform.com",
  "Unity": "unity.com",
  "Sketch": "sketch.com",
  "Perplexity Pro": "perplexity.ai",
  "ZW3D": "zw3d.com",
  "Amazon Prime": "amazon.com",
  "Fetch": "fetch.com",
  "Kickhost": "kickhost.com",
  "Axure": "axure.com",
  "Basecamp": "basecamp.com",
  "Altair": "altair.com",
  "Lucidchart": "lucidchart.com",
  "Bitbucket": "bitbucket.org",
  "Kickresume": "kickresume.com",
  "Tower Pro": "git-tower.com",
  "Asana": "asana.com",
  "Lumion Pro": "lumion.com",
  "Miro AI": "miro.com",
  "Anthropic Claude": "anthropic.com",
  "OpenAI": "openai.com",
  "Suno AI": "suno.ai",
  "Manus AI": "manus.im",
  "Spline": "spline.design",
  "Keycreator CAD": "kubotekkosmos.com",
  "Altium Designer": "altium.com",
  "Beautiful AI": "beautiful.ai",
  "GraphPad Prism": "graphpad.com",
  "PTC Creo": "ptc.com",
  "Affinity Designer": "affinity.serif.com"
}

// Logo sources
const LOGO_SOURCES = {
  clearbit: (domain: string) => `https://logo.clearbit.com/${domain}`,
  logoApi: (domain: string) => `https://img.logo.dev/${domain}?token=pk_X-1ZO13ESEOuFh-9qK_9BA`,
  favicon: (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  faviconKit: (domain: string) => `https://api.faviconkit.com/${domain}/144`,
}

interface LogoManifest {
  [companyName: string]: {
    filename: string;
    downloadedAt: string;
    source: string;
    size: number;
  }
}

// Download file from URL
function downloadFile(url: string, destination: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url)
    const client = parsedUrl.protocol === 'https:' ? https : http
    
    const request = client.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        if (response.headers.location) {
          downloadFile(response.headers.location, destination)
            .then(resolve)
            .catch(reject)
          return
        }
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`))
        return
      }

      const contentType = response.headers['content-type'] || ''
      if (!contentType.startsWith('image/')) {
        reject(new Error(`Not an image: ${contentType}`))
        return
      }

      const fileStream = require('fs').createWriteStream(destination)
      response.pipe(fileStream)

      fileStream.on('error', reject)
      fileStream.on('finish', () => {
        fileStream.close()
        resolve()
      })
    })

    request.on('error', reject)
    request.setTimeout(10000, () => {
      request.abort()
      reject(new Error('Download timeout'))
    })
  })
}

// Sanitize company name for filename
function sanitizeCompanyName(companyName: string): string {
  return companyName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// Get file extension from URL or content type
function getFileExtension(url: string, contentType?: string): string {
  if (contentType?.includes('svg')) return 'svg'
  if (contentType?.includes('png')) return 'png'
  if (contentType?.includes('jpg') || contentType?.includes('jpeg')) return 'jpg'
  if (contentType?.includes('webp')) return 'webp'
  
  // Fallback to URL extension
  const urlExt = url.split('.').pop()?.toLowerCase()
  if (['png', 'jpg', 'jpeg', 'svg', 'webp'].includes(urlExt || '')) {
    return urlExt!
  }
  
  return 'png' // Default fallback
}

// Check if logo already exists locally (including manual ones)
async function checkExistingLogo(companyName: string, logoDir: string): Promise<{ filename: string; size: number } | null> {
  const sanitizedName = sanitizeCompanyName(companyName)
  const extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp']
  
  for (const ext of extensions) {
    const filename = `${sanitizedName}.${ext}`
    const filepath = join(logoDir, filename)
    
    try {
      const stats = await fs.stat(filepath)
      if (stats.size > 0) {
        console.log(`  ✓ Found existing logo: ${filename} (${stats.size} bytes)`)
        return { filename, size: stats.size }
      }
    } catch {
      // File doesn't exist, continue checking
      continue
    }
  }
  
  return null
}

// Try to download logo from multiple sources
async function downloadLogoForCompany(companyName: string, domain: string, logoDir: string): Promise<{ filename: string; source: string; size: number } | null> {
  const sanitizedName = sanitizeCompanyName(companyName)
  
  // First check if we already have this logo locally (including manually downloaded ones)
  const existingLogo = await checkExistingLogo(companyName, logoDir)
  if (existingLogo) {
    return {
      filename: existingLogo.filename,
      source: 'existing',
      size: existingLogo.size
    }
  }
  
  const sources = [
    { name: 'clearbit', url: LOGO_SOURCES.clearbit(domain) },
    { name: 'logoApi', url: LOGO_SOURCES.logoApi(domain) },
    { name: 'faviconKit', url: LOGO_SOURCES.faviconKit(domain) },
    { name: 'favicon', url: LOGO_SOURCES.favicon(domain) },
  ]

  for (const source of sources) {
    try {
      console.log(`  Trying ${source.name} for ${companyName}...`)
      
      // Try to get content type first
      const parsedUrl = new URL(source.url)
      const client = parsedUrl.protocol === 'https:' ? https : http
      
      const headCheck = await new Promise<{ contentType?: string; contentLength?: number }>((resolve, reject) => {
        const request = client.request(source.url, { method: 'HEAD' }, (response) => {
          if (response.statusCode === 200) {
            resolve({
              contentType: response.headers['content-type'],
              contentLength: parseInt(response.headers['content-length'] || '0')
            })
          } else {
            reject(new Error(`HEAD request failed: ${response.statusCode}`))
          }
        })
        request.on('error', reject)
        request.setTimeout(5000, () => {
          request.abort()
          reject(new Error('HEAD request timeout'))
        })
        request.end()
      })

      if (!headCheck.contentType?.startsWith('image/')) {
        continue
      }

      const extension = getFileExtension(source.url, headCheck.contentType)
      const filename = `${sanitizedName}.${extension}`
      const filepath = join(logoDir, filename)
      
      await downloadFile(source.url, filepath)
      
      // Verify file was created and has content
      const stats = await fs.stat(filepath)
      if (stats.size > 0) {
        console.log(`  ✓ Downloaded ${companyName} from ${source.name} (${stats.size} bytes)`)
        return {
          filename,
          source: source.name,
          size: stats.size
        }
      } else {
        await fs.unlink(filepath) // Remove empty file
      }
    } catch (error) {
      console.log(`  ✗ Failed ${source.name}: ${error}`)
      continue
    }
  }

  return null
}

async function main() {
  console.log('🚀 Starting logo download process...')
  console.log('📁 This will check for existing logos in public/logos and only download missing ones')
  
  const projectRoot = process.cwd()
  const logoDir = join(projectRoot, 'public', 'logos')
  const manifestPath = join(projectRoot, 'public', 'logos', 'manifest.json')
  
  // Ensure logos directory exists
  await fs.mkdir(logoDir, { recursive: true })
  
  // Load existing manifest if it exists
  let manifest: LogoManifest = {}
  try {
    const existingManifest = await fs.readFile(manifestPath, 'utf-8')
    manifest = JSON.parse(existingManifest)
    console.log(`📋 Loaded existing manifest with ${Object.keys(manifest).length} entries`)
  } catch {
    console.log('📋 Creating new manifest')
  }

  // Scan existing logos in directory
  const existingFiles = await fs.readdir(logoDir)
  const logoFiles = existingFiles.filter(file => 
    file.match(/\.(png|jpg|jpeg|svg|webp)$/i) && file !== 'manifest.json'
  )
  console.log(`📂 Found ${logoFiles.length} existing logo files in directory`)

  const totalCompanies = Object.keys(COMPANY_DOMAINS).length
  let downloadedCount = 0
  let skippedCount = 0
  let existingCount = 0
  
  console.log(`\n📦 Processing ${totalCompanies} companies...\n`)

  for (const [companyName, domain] of Object.entries(COMPANY_DOMAINS)) {
    console.log(`[${downloadedCount + skippedCount + existingCount + 1}/${totalCompanies}] ${companyName}`)

    const result = await downloadLogoForCompany(companyName, domain, logoDir)
    
    if (result) {
      manifest[companyName] = {
        filename: result.filename,
        downloadedAt: new Date().toISOString(),
        source: result.source,
        size: result.size
      }
      
      if (result.source === 'existing') {
        existingCount++
      } else {
        downloadedCount++
      }
    } else {
      console.log(`  ⚠️  No logo found for ${companyName}`)
    }
  }

  // Save manifest
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2))
  
  console.log(`\n✅ Download complete!`)
  console.log(`📊 Downloaded: ${downloadedCount} new logos`)
  console.log(`📁 Found existing: ${existingCount} logos`)
  console.log(`⏭️  Skipped: ${skippedCount} logos`)
  console.log(`📋 Total in manifest: ${Object.keys(manifest).length} logos`)
  console.log(`💾 Manifest saved to: ${manifestPath}`)
  
  if (existingCount > 0) {
    console.log(`\n🎉 Great! Your manually downloaded logos have been included in the manifest.`)
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error)
}

export default main
