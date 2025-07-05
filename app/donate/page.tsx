"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BackgroundPaths from "@/components/ui/background-paths"

export default function DonatePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundPaths />

      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-green-400 hover:text-green-300">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Support Our Mission
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us break educational barriers and provide legitimate .edu accounts to students worldwide. Every
            contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* PayPal */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PP</span>
                </div>
                PayPal
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
                  className="w-full max-w-[200px] mx-auto block"
                />
              </form>
              <Button
                asChild
                variant="outline"
                className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
              >
                <a href="https://paypal.me/joeyleq" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  PayPal.me/joeyleq
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Ko-Fi */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Ko</span>
                </div>
                Ko-Fi
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
                  className="w-full max-w-[200px] mx-auto block"
                />
              </a>
              <Button asChild variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10">
                <a href="https://ko-fi.com/poi5on" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  ko-fi.com/poi5on
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Alipay */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-400/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">支</span>
                </div>
                Alipay
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Image
                src="/alipay_qr.jpeg"
                alt="Alipay QR Code"
                width={200}
                height={200}
                className="mx-auto rounded-lg border border-gray-700"
              />
              <p className="text-sm text-gray-400 mt-2">Scan with Alipay app</p>
            </CardContent>
          </Card>

          {/* Bitcoin */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-orange-500/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-400">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">₿</span>
                </div>
                Bitcoin
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/binance_bitcoin_qr.jpeg"
                alt="Bitcoin QR Code"
                width={200}
                height={200}
                className="mx-auto rounded-lg border border-gray-700"
              />
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Bitcoin Address:</p>
                <div className="flex items-center gap-2">
                  <code className="text-xs text-orange-400 break-all flex-1">1Jqw59ytonMnPFEaN1KtUe36CPTbzgVn4n</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard("1Jqw59ytonMnPFEaN1KtUe36CPTbzgVn4n")}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* USDT */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-green-500/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">₮</span>
                </div>
                USDT (TRC20)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/binance_usdt_qr.jpeg"
                alt="USDT QR Code"
                width={200}
                height={200}
                className="mx-auto rounded-lg border border-gray-700"
              />
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">USDT Address (TRC20):</p>
                <div className="flex items-center gap-2">
                  <code className="text-xs text-green-400 break-all flex-1">TH8WkRX4pLPRXeToDnWLE8ixLL8TaCGR82</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard("TH8WkRX4pLPRXeToDnWLE8ixLL8TaCGR82")}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anonymous Support */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                Anonymous Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300 mb-4">
                All donations are anonymous and help us continue providing legitimate .edu accounts to students
                worldwide.
              </p>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-xs text-purple-300">
                  <strong>Tip-based service:</strong> No fixed prices. Pay what you can afford. Every contribution helps
                  break educational barriers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your support helps us maintain servers, acquire legitimate .edu accounts, and continue fighting against
            educational exclusivity. Thank you for being part of our mission.
          </p>
        </div>
      </div>
    </div>
  )
}
