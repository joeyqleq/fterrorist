// Test script to verify logo scraping functionality
// Run with: npx tsx scripts/test-logos.ts

import { fetchCompanyLogo, fetchAllCompanyLogos } from "../lib/logoService"

async function testSingleLogo() {
  console.log("🧪 Testing single logo fetch...")
  
  const testCompanies = ["GitHub", "Microsoft Azure", "OpenAI", "Figma", "Notion"]
  
  for (const company of testCompanies) {
    console.log(`\n📦 Testing ${company}...`)
    try {
      const logo = await fetchCompanyLogo(company)
      console.log(`  ✅ Company: ${logo.company}`)
      console.log(`  🖼️  Logo URL: ${logo.logoUrl || "❌ Not found"}`)
      console.log(`  🔤 Fallback: ${logo.fallbackInitials}`)
      console.log(`  🎨 Color: ${logo.fallbackColor}`)
    } catch (error) {
      console.log(`  ❌ Error: ${error}`)
    }
  }
}

async function testBatchLogos() {
  console.log("\n\n🚀 Testing batch logo fetch...")
  
  const companies = [
    "Webflow", "Microsoft Azure", "GitHub", "Figma", "OpenAI", 
    "Notion", "Spotify Premium", "Unity", "Adobe", "Unknown Company"
  ]
  
  try {
    const logos = await fetchAllCompanyLogos(companies)
    console.log(`\n📊 Processed ${logos.length} companies:`)
    
    let successCount = 0
    let fallbackCount = 0
    
    logos.forEach(logo => {
      if (logo.logoUrl) {
        console.log(`  ✅ ${logo.company}: ${logo.logoUrl}`)
        successCount++
      } else {
        console.log(`  🔤 ${logo.company}: ${logo.fallbackInitials} (${logo.fallbackColor})`)
        fallbackCount++
      }
    })
    
    console.log(`\n📈 Results:`)
    console.log(`  🎯 Successfully fetched: ${successCount}/${logos.length}`)
    console.log(`  🔄 Using fallbacks: ${fallbackCount}/${logos.length}`)
    console.log(`  📊 Success rate: ${((successCount / logos.length) * 100).toFixed(1)}%`)
    
  } catch (error) {
    console.log(`❌ Batch fetch error: ${error}`)
  }
}

async function main() {
  console.log("🏗️  Logo Service Test Suite")
  console.log("=" .repeat(50))
  
  await testSingleLogo()
  await testBatchLogos()
  
  console.log("\n🎉 Logo service testing complete!")
}

main().catch(console.error)