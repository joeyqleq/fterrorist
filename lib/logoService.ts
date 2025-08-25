// Logo service for company logos - LOCAL ONLY (no HTTP requests)
export interface CompanyLogo {
  company: string
  logoUrl: string | null
  fallbackInitials: string
  fallbackColor: string
}

// Logo manifest interface
interface LogoManifest {
  [companyName: string]: {
    filename: string;
    downloadedAt: string;
    source: string;
    size: number;
  }
}

// Manual logo mappings - these take priority over automated fetching
const MANUAL_LOGOS: Record<string, string> = {
  // Original manual mappings
  "ZW3D": "/logos/zw3d.png",
  "Sketch": "/logos/sketch.png", 
  "Jotform": "/logos/jotform.png",
  "Perplexity Pro": "/logos/perplexity-pro.png",
  "Lumion Pro": "/logos/lumion-pro.png",
  "Fetch": "/logos/fetch.jpg",
  "Basecamp": "/logos/basecamp.png",
  "Cursor AI": "/logos/cursor-ai.png",
  "Manus AI": "/logos/manus-ai.png",
  "Spline": "/logos/spline.png",
  "Keycreator CAD": "/logos/keycreator.png",
  "Altium Designer": "/logos/altium.png",
  
  // Downloaded logos mappings
  "Webflow": "/logos/webflow.png",
  "Microsoft Azure": "/logos/microsoft-azure.png",
  "Microsoft Office 365": "/logos/microsoft-office-365.png",
  "Alibaba Cloud": "/logos/alibaba-cloud.png",
  "Namecheap": "/logos/namecheap.png",
  "Bootstrap Studio": "/logos/bootstrap-studio.png",
  "Google One AI Premium": "/logos/google-one-ai-premium.png",
  "Figma": "/logos/figma.png",
  "Craft.do": "/logos/craft-do.png",
  "InterServer": "/logos/interserver.png",
  "Infomaniak Education": "/logos/infomaniak-education.png",
  "Canva Pro": "/logos/canva-pro.png",
  "Grok by x.AI": "/logos/grok.png",
  "Zight Pro": "/logos/zight-pro.png",
  "Dashlane Premium": "/logos/dashlane-premium.png",
  "JetBrains": "/logos/jetbrains.png",
  "D5 Render": "/logos/d5-render.png",
  "Kapwing Pro": "/logos/kapwing-pro.png",
  "Autodesk Education": "/logos/autodesk-education.png",
  "GitHub": "/logos/github.png",
  "Notion": "/logos/notion.png",
  "Atlassian": "/logos/atlassian.png",
  "Tableau": "/logos/tableau.png",
  "Spotify Premium": "/logos/spotify-premium.png",
  "YNAB": "/logos/ynab.png",
  "Zoho Survey": "/logos/zoho-survey.png",
  "Unity": "/logos/unity.png",
  "Amazon Prime": "/logos/amazon-prime.png",
  "Axure": "/logos/axure.png",
  "Lucidchart": "/logos/lucidchart.png",
  "Bitbucket": "/logos/bitbucket.png",
  "Kickresume": "/logos/kickresume.png",
  "Tower Pro": "/logos/tower-pro.png",
  "Asana": "/logos/asana.png",
  "Miro AI": "/logos/miro-ai.png",
  "Anthropic Claude": "/logos/anthropic-claude.png",
  "OpenAI": "/logos/openai.png",
  "Beautiful.AI": "/logos/beautiful-ai.png",
  "PTC Creo": "/logos/ptc-creo.png",
  "JMP": "/logos/jmp.png",
  "Affinity Designer": "/logos/affinity_designer.png",
  "Affinity Publisher": "/logos/affinity_publisher.png", 
  "Affinity Photo": "/logos/affinity_photo.png",
  "GraphPad Prism": "/logos/prism.png",
  "SurveyHero": "/logos/surveyhero.png",
  "Suno AI": "/logos/suno-ai.png",
  "Rayon": "/logos/rayon.png",
  "Altair": "/logos/altair.png",
  "KickHost": "/logos/kickhost.jpg",
  "Grok by x.AI": "/logos/grok.png",
  "Roboform": "/logos/roboform.png",
}

// In-memory cache for logo manifest
let logoManifest: LogoManifest | null = null

// Removed LOGO_SOURCES - we only use local logos now

// Company domain mappings
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
}

// Generate fallback colors based on company name
function generateFallbackColor(companyName: string): string {
  const colors = [
    "from-blue-500 via-cyan-400 to-blue-600",
    "from-purple-600 via-pink-500 to-purple-400",
    "from-green-500 via-emerald-400 to-teal-500",
    "from-orange-500 via-yellow-400 to-red-500",
    "from-red-500 via-pink-500 to-purple-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-cyan-400 via-blue-500 to-indigo-600",
  ]
  
  const hash = companyName.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  
  return colors[Math.abs(hash) % colors.length]
}

// Generate company initials
function generateInitials(companyName: string): string {
  return companyName
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

// Load logo manifest (cached)
async function loadLogoManifest(): Promise<LogoManifest> {
  if (logoManifest !== null) {
    return logoManifest
  }
  
  try {
    const response = await fetch('/logos/manifest.json')
    if (response.ok) {
      logoManifest = await response.json()
      return logoManifest!
    }
  } catch (error) {
    console.warn('Failed to load logo manifest:', error)
  }
  
  // Return empty manifest if loading fails
  logoManifest = {}
  return logoManifest
}

// Fetch logo - LOCAL ONLY (no HTTP requests during runtime)
export async function fetchCompanyLogo(companyName: string): Promise<CompanyLogo> {
  const fallbackInitials = generateInitials(companyName)
  const fallbackColor = generateFallbackColor(companyName)
  
  // Check cache first
  if (PROVIDER_LOGOS[companyName]) {
    return PROVIDER_LOGOS[companyName]
  }
  
  // Check manual logos first - these take absolute priority
  if (MANUAL_LOGOS[companyName]) {
    const logoData = {
      company: companyName,
      logoUrl: MANUAL_LOGOS[companyName],
      fallbackInitials,
      fallbackColor,
    }
    // Cache the manual logo
    PROVIDER_LOGOS[companyName] = logoData
    return logoData
  }
  
  // For SSR compatibility
  if (typeof window === 'undefined') {
    return {
      company: companyName,
      logoUrl: null,
      fallbackInitials,
      fallbackColor,
    }
  }

  // Check downloaded logos from manifest
  try {
    const manifest = await loadLogoManifest()
    const logoInfo = manifest[companyName]
    
    if (logoInfo) {
      const logoData = {
        company: companyName,
        logoUrl: `/logos/${logoInfo.filename}`,
        fallbackInitials,
        fallbackColor,
      }
      // Cache the logo
      PROVIDER_LOGOS[companyName] = logoData
      return logoData
    }
  } catch (error) {
    console.warn(`Failed to check manifest for ${companyName}:`, error)
  }

  // Return fallback if no logo found and cache it
  const fallbackLogo = {
    company: companyName,
    logoUrl: null,
    fallbackInitials,
    fallbackColor,
  }
  PROVIDER_LOGOS[companyName] = fallbackLogo
  return fallbackLogo
}

// Batch fetch logos for multiple companies
export async function fetchAllCompanyLogos(companies: string[]): Promise<CompanyLogo[]> {
  const promises = companies.map(company => fetchCompanyLogo(company))
  return Promise.allSettled(promises).then(results =>
    results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value
      } else {
        const companyName = companies[index]
        return {
          company: companyName,
          logoUrl: null,
          fallbackInitials: generateInitials(companyName),
          fallbackColor: generateFallbackColor(companyName),
        }
      }
    })
  )
}

// Removed checkLocalLogo and downloadAndSaveLogo - we use manifest now

// Pre-generate logo data for all student offer providers
export const PROVIDER_LOGOS: Record<string, CompanyLogo> = {}

// Local storage cache for logo URLs to avoid repeated fetching
const LOGO_CACHE_KEY = 'fterrorist_logo_cache'
const CACHE_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours

// Get cached logo data from localStorage
function getCachedLogoData(): Record<string, { url: string; timestamp: number }> {
  if (typeof window === 'undefined') return {}
  try {
    const cached = localStorage.getItem(LOGO_CACHE_KEY)
    return cached ? JSON.parse(cached) : {}
  } catch {
    return {}
  }
}

// Cache logo data in localStorage
function setCachedLogoData(data: Record<string, { url: string; timestamp: number }>) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(LOGO_CACHE_KEY, JSON.stringify(data))
  } catch {
    // Silent fail if localStorage is not available
  }
}

// Initialize logos by pre-loading manifest (fast, no HTTP requests to external services)
export async function initializeProviderLogos(providers: string[]) {
  // Only run on client side
  if (typeof window === 'undefined') {
    console.log('Logo initialization skipped on server side')
    return
  }

  try {
    // Pre-load the manifest to warm the cache
    await loadLogoManifest()
    
    // Pre-populate the cache with all provider logos
    const logos = await fetchAllCompanyLogos(providers)
    logos.forEach(logo => {
      PROVIDER_LOGOS[logo.company] = logo
    })
    
    console.log(`Successfully initialized ${logos.length} provider logos from local cache`)
  } catch (error) {
    console.error('Failed to initialize provider logos:', error)
  }
}