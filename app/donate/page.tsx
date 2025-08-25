"use client"

import { CyberButton } from "@/components/ui/cyber-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Copy, ExternalLink, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import GradientUnderline from "@/components/ui/gradient-underline"
import CircuitBoardBackground from "@/components/ui/circuit-board-bg"
import GridDistortion from "@/components/ui/grid-distortion"
import TypingText from "@/components/ui/typing-text"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function DonatePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Terminal Background Animation */}
      <div className="fixed inset-0 z-0">
        <CircuitBoardBackground />
      </div>
      
      {/* Lightweight backdrop to match main page */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_40%)]" />

      {/* Header */}
      <header className="relative z-50 border-b border-cyan-400/20 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30 group-hover:bg-cyan-400/30 transition-all duration-300">
              <ArrowLeft className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="font-black text-white group-hover:text-cyan-400 transition-colors duration-300 font-mono uppercase tracking-wider">
              <GradientUnderline>BACK TO BASE</GradientUnderline>
            </span>
          </Link>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              <TypingText text="SUPPORT THE MISSION" speed={100} />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            <Target className="w-5 h-5 inline-block mr-2 text-cyan-400" />
            Support our mission to break educational barriers. We charge $13 per .edu account and $20 for student IDs, 
            but donations help us serve those who can't afford our services. <GradientUnderline hoverOnly={false}>Every contribution counts</GradientUnderline>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* PayPal */}
          <Card className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={48}
              inactiveZone={0.01}
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-400 font-mono uppercase tracking-wider">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">PP</span>
                  </div>
                  <span className="text-white">PAYPAL</span>
                  <Shield className="w-4 h-4 text-green-400 ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="hosted_button_id" value="TSTM58PM3NBMS" />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    border={0}
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                    className="w-full max-w-[200px] mx-auto block rounded-lg"
                  />
                </form>
                <CyberButton
                  variant="outline"
                  className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                >
                  <a href="https://paypal.me/joeyleq" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                    <ExternalLink className="w-4 h-4" />
                    PayPal.me/joeyleq
                  </a>
                </CyberButton>
              </CardContent>
            </div>
          </Card>

          {/* Ko-Fi */}
          <Card className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-red-500/50 transition-all duration-300 group overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 via-pink-400/20 to-orange-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-red-400 font-mono uppercase tracking-wider">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">Ko</span>
                  </div>
                  <span className="text-white">KO-FI</span>
                  <Shield className="w-4 h-4 text-green-400 ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="https://ko-fi.com/G2G81FLCK7" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    height="36"
                    style={{ border: 0, height: 36 }}
                    src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
                    border={0}
                    alt="Buy Me a Coffee at ko-fi.com"
                    className="w-full max-w-[200px] mx-auto block rounded-lg"
                  />
                </a>
                <CyberButton variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10">
                  <a href="https://ko-fi.com/poi5on" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                    <ExternalLink className="w-4 h-4" />
                    ko-fi.com/poi5on
                  </a>
                </CyberButton>
              </CardContent>
            </div>
          </Card>

          {/* Alipay */}
          <Card className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-blue-400/50 transition-all duration-300 group overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-blue-800/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-400 font-mono uppercase tracking-wider">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">支</span>
                  </div>
                  <span className="text-white">ALIPAY</span>
                  <Shield className="w-4 h-4 text-green-400 ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Image
                  src="/alipay_qr.jpeg"
                  alt="Alipay QR Code"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg border border-cyan-400/30 shadow-lg"
                />
                <p className="text-sm text-gray-400 mt-3 font-mono">SCAN WITH ALIPAY APP</p>
              </CardContent>
            </div>
          </Card>

          {/* Bitcoin */}
          <Card className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-yellow-400/20 to-amber-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-400 font-mono uppercase tracking-wider">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">₿</span>
                  </div>
                  <span className="text-white">BITCOIN</span>
                  <Shield className="w-4 h-4 text-green-400 ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/binance_bitcoin_qr.jpeg"
                  alt="Bitcoin QR Code"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg border border-orange-400/30 shadow-lg"
                />
                <div className="bg-gray-800/50 rounded-lg p-3 border border-orange-400/20">
                  <p className="text-xs text-gray-400 mb-1 font-mono uppercase tracking-wider">Bitcoin Address:</p>
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-orange-400 break-all flex-1 font-mono">1Jqw59ytonMnPFEaN1KtUe36CPTbzgVn4n</code>
                    <CyberButton
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard("1Jqw59ytonMnPFEaN1KtUe36CPTbzgVn4n")}
                      className="px-2 py-1"
                    >
                      <Copy className="w-3 h-3" />
                    </CyberButton>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* USDT */}
          <Card className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-green-500/50 transition-all duration-300 group overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 via-emerald-400/20 to-teal-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-400 font-mono uppercase tracking-wider">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">₮</span>
                  </div>
                  <span className="text-white">USDT (TRC20)</span>
                  <Shield className="w-4 h-4 text-green-400 ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/binance_usdt_qr.jpeg"
                  alt="USDT QR Code"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg border border-green-400/30 shadow-lg"
                />
                <div className="bg-gray-800/50 rounded-lg p-3 border border-green-400/20">
                  <p className="text-xs text-gray-400 mb-1 font-mono uppercase tracking-wider">USDT Address (TRC20):</p>
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-green-400 break-all flex-1 font-mono">TH8WkRX4pLPRXeToDnWLE8ixLL8TaCGR82</code>
                    <CyberButton
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard("TH8WkRX4pLPRXeToDnWLE8ixLL8TaCGR82")}
                      className="px-2 py-1"
                    >
                      <Copy className="w-3 h-3" />
                    </CyberButton>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Anonymous Support */}
          <Card className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-400/20 to-indigo-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-400 font-mono uppercase tracking-wider">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">?</span>
                  </div>
                  <span className="text-white">ANONYMOUS</span>
                  <Zap className="w-4 h-4 text-purple-400 ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4 font-light leading-relaxed">
                  All donations are <GradientUnderline>anonymous</GradientUnderline> and help us continue providing legitimate .edu accounts to students
                  worldwide.
                </p>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-xs text-purple-300 font-mono">
                    <strong className="text-purple-400">DONATION-BASED:</strong> We charge $13/.edu + $20/ID, but donations help subsidize students who can't afford our services.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="relative p-8 bg-gray-900/30 border border-cyan-400/20 rounded-xl backdrop-blur-sm max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <p className="text-gray-300 font-light leading-relaxed">
              <Target className="w-5 h-5 inline-block mr-2 text-cyan-400" />
              Your donations help us maintain servers, acquire .edu accounts, and subsidize services for students who can't afford the $13/.edu + $20/ID fees. 
              <GradientUnderline hoverOnly={false}>Thank you for supporting digital education equality</GradientUnderline>.
            </p>
            <div className="mt-4 flex justify-center gap-4 text-xs text-gray-500 font-mono">
              <span className="px-3 py-1 bg-green-400/20 border border-green-400/30 rounded text-green-400">SECURE</span>
              <span className="px-3 py-1 bg-blue-400/20 border border-blue-400/30 rounded text-blue-400">ANONYMOUS</span>
              <span className="px-3 py-1 bg-purple-400/20 border border-purple-400/30 rounded text-purple-400">GLOBAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
