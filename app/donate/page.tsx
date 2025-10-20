"use client";

import { CyberButton } from "@/components/ui/cyber-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Copy,
  ExternalLink,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import GradientUnderline from "@/components/ui/gradient-underline";
import CircuitBoardBackground from "@/components/ui/circuit-board-bg";
import GridDistortion from "@/components/ui/grid-distortion";
import TypingText from "@/components/ui/typing-text";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const MagnetLines = dynamic(
  () =>
    import("@/components/ui/magnet-lines").then((mod) => ({
      default: mod.MagnetLines,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-screen opacity-0" data-oid="2-teaff" />
    ),
  },
);

export default function DonatePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      data-oid="0tz0s6d"
    >
      {/* Terminal Background Animation */}
      <div className="fixed inset-0 z-0" data-oid="s-k.ngs">
        <CircuitBoardBackground data-oid="hxvs7mr" />
      </div>

      {/* Magnet Lines Background */}
      <div className="fixed inset-0 z-0 opacity-20" data-oid="0ddbuc8">
        <MagnetLines
          rows={12}
          columns={20}
          containerSize="100vw"
          lineWidth="2px"
          lineHeight="8px"
          gradientColors={[
            "#22c55e",
            "#16a34a",
            "#15803d",
            "#166534",
            "#14532d",
          ]}
          className="h-screen w-screen"
          data-oid="yqtwbq3"
        />
      </div>

      {/* Lightweight backdrop to match main page */}
      <div
        className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_40%)]"
        data-oid="lkci.7w"
      />

      {/* Header */}
      <header
        className="relative z-50 border-b border-cyan-400/20 bg-black/60 backdrop-blur-xl"
        data-oid="g920ek7"
      >
        <div
          className="container mx-auto px-4 sm:px-6 py-4 sm:py-6"
          data-oid="yegic:9"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 group"
            data-oid="b4dako0"
          >
            <div
              className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30 group-hover:bg-cyan-400/30 transition-all duration-300"
              data-oid="helhade"
            >
              <ArrowLeft className="w-5 h-5 text-cyan-400" data-oid="ia_uv-9" />
            </div>
            <span
              className="font-black text-white group-hover:text-cyan-400 transition-colors duration-300 font-mono uppercase tracking-wider"
              data-oid="zd7sy.4"
            >
              <GradientUnderline data-oid="k2y:4ov">
                BACK TO BASE
              </GradientUnderline>
            </span>
          </Link>
        </div>
      </header>

      <div
        className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
        data-oid="6-go9ra"
      >
        <div className="text-center mb-12 sm:mb-16" data-oid="g8:tt90">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 font-mono"
            data-oid="8p3atq:"
          >
            <span
              className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
              data-oid="kmo_s:h"
            >
              <TypingText
                text="SUPPORT THE MISSION"
                speed={100}
                data-oid="bk1o2pm"
              />
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
            data-oid="7:rqn9-"
          >
            <Target
              className="w-5 h-5 inline-block mr-2 text-cyan-400"
              data-oid="cjsucj0"
            />
            Support our mission to break educational barriers. We charge $13 per
            .edu account and $20 for student IDs, but donations help us serve
            those who can't afford our services.{" "}
            <GradientUnderline hoverOnly={false} data-oid="a86-gp9">
              Every contribution counts
            </GradientUnderline>
            .
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          data-oid=":rwbpk2"
        >
          {/* PayPal */}
          <Card
            className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
            data-oid="qrjnpor"
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={48}
              inactiveZone={0.01}
              data-oid="4eqakmi"
            />

            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
              data-oid="pmh9mx3"
            ></div>
            <div className="relative z-10" data-oid="rpuf4jo">
              <CardHeader data-oid="l-x-:xx">
                <CardTitle
                  className="flex items-center gap-3 text-blue-400 font-mono uppercase tracking-wider"
                  data-oid="yuymc0e"
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg"
                    data-oid="ht9:sdp"
                  >
                    <span
                      className="text-white font-bold text-sm"
                      data-oid="dg8-d15"
                    >
                      PP
                    </span>
                  </div>
                  <span className="text-white" data-oid="7v7u_43">
                    PAYPAL
                  </span>
                  <Shield
                    className="w-4 h-4 text-green-400 ml-auto"
                    data-oid="uccx-qb"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="n2.rtxa">
                <form
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                  data-oid="mfkwlss"
                >
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="TSTM58PM3NBMS"
                    data-oid="v597wfd"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                    className="w-full max-w-[200px] mx-auto block rounded-lg"
                    data-oid="w5dj3g3"
                  />
                </form>
                <CyberButton
                  variant="outline"
                  className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                  data-oid="6irsk44"
                >
                  <a
                    href="https://paypal.me/joeyleq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full"
                    data-oid="yk20dxh"
                  >
                    <ExternalLink className="w-4 h-4" data-oid="0c9dlrb" />
                    PayPal.me/joeyleq
                  </a>
                </CyberButton>
              </CardContent>
            </div>
          </Card>

          {/* Ko-Fi */}
          <Card
            className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-red-500/50 transition-all duration-300 group overflow-hidden"
            data-oid="iqouir1"
          >
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 via-pink-400/20 to-orange-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
              data-oid="rln5f1s"
            ></div>
            <div className="relative z-10" data-oid="7ftvfo.">
              <CardHeader data-oid="k_6rhgh">
                <CardTitle
                  className="flex items-center gap-3 text-red-400 font-mono uppercase tracking-wider"
                  data-oid="v6wd223"
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg"
                    data-oid="5em2be-"
                  >
                    <span
                      className="text-white font-bold text-sm"
                      data-oid="b15_luc"
                    >
                      Ko
                    </span>
                  </div>
                  <span className="text-white" data-oid="hjcic6m">
                    KO-FI
                  </span>
                  <Shield
                    className="w-4 h-4 text-green-400 ml-auto"
                    data-oid="xao124y"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="fmh98ky">
                <a
                  href="https://ko-fi.com/G2G81FLCK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-oid="q5ykc0q"
                >
                  <img
                    height="36"
                    style={{ height: 36 }}
                    src="https://storage.ko-fi.com/cdn/kofi6.png?v=6"
                    alt="Buy Me a Coffee at ko-fi.com"
                    className="w-full max-w-[200px] mx-auto block rounded-lg"
                    data-oid=".y7307f"
                  />
                </a>
                <CyberButton
                  variant="outline"
                  className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10"
                  data-oid=":t39ofo"
                >
                  <a
                    href="https://ko-fi.com/poi5on"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full"
                    data-oid="z64luaz"
                  >
                    <ExternalLink className="w-4 h-4" data-oid="8ylnb_-" />
                    ko-fi.com/poi5on
                  </a>
                </CyberButton>
              </CardContent>
            </div>
          </Card>

          {/* Alipay */}
          <Card
            className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-blue-400/50 transition-all duration-300 group overflow-hidden"
            data-oid="sw8qnd9"
          >
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-blue-800/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
              data-oid="_ebj_iv"
            ></div>
            <div className="relative z-10" data-oid="56g7eic">
              <CardHeader data-oid="aqw-n5q">
                <CardTitle
                  className="flex items-center gap-3 text-blue-400 font-mono uppercase tracking-wider"
                  data-oid="v82om-7"
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg"
                    data-oid="ovj_q7e"
                  >
                    <span
                      className="text-white font-bold text-sm"
                      data-oid="kq8f:cq"
                    >
                      支
                    </span>
                  </div>
                  <span className="text-white" data-oid="93i8k9v">
                    ALIPAY
                  </span>
                  <Shield
                    className="w-4 h-4 text-green-400 ml-auto"
                    data-oid="padjed0"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center" data-oid="my5l3by">
                <Image
                  src="/alipay_qr.jpeg"
                  alt="Alipay QR Code"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg border border-cyan-400/30 shadow-lg"
                  data-oid="ye1qke."
                />

                <p
                  className="text-sm text-gray-400 mt-3 font-mono"
                  data-oid="yp2ok72"
                >
                  SCAN WITH ALIPAY APP
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Bitcoin */}
          <Card
            className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden"
            data-oid="e4z-x5j"
          >
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-yellow-400/20 to-amber-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
              data-oid="c18:rn7"
            ></div>
            <div className="relative z-10" data-oid="jvwnb7k">
              <CardHeader data-oid="88:7ewt">
                <CardTitle
                  className="flex items-center gap-3 text-orange-400 font-mono uppercase tracking-wider"
                  data-oid="17ll:.i"
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg"
                    data-oid="hzpy7po"
                  >
                    <span
                      className="text-white font-bold text-sm"
                      data-oid="6m6o.pk"
                    >
                      ₿
                    </span>
                  </div>
                  <span className="text-white" data-oid="tkipfqs">
                    BITCOIN
                  </span>
                  <Shield
                    className="w-4 h-4 text-green-400 ml-auto"
                    data-oid="l5w5frr"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="_48ysvh">
                <Image
                  src="/binance_bitcoin_qr.jpeg"
                  alt="Bitcoin QR Code"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg border border-orange-400/30 shadow-lg"
                  data-oid="wt.3ao5"
                />

                <div
                  className="bg-gray-800/50 rounded-lg p-3 border border-orange-400/20"
                  data-oid="-zvj1b3"
                >
                  <p
                    className="text-xs text-gray-400 mb-1 font-mono uppercase tracking-wider"
                    data-oid="j:m:5z2"
                  >
                    Bitcoin Address:
                  </p>
                  <div className="flex items-center gap-2" data-oid="72.p0vl">
                    <code
                      className="text-xs text-orange-400 break-all flex-1 font-mono"
                      data-oid="dqdhniw"
                    >
                      1Jqw59ytonMnPFEaN1KtUe36CPTbzgVn4n
                    </code>
                    <CyberButton
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard("1Jqw59ytonMnPFEaN1KtUe36CPTbzgVn4n")
                      }
                      className="px-2 py-1"
                      data-oid="xx0v48w"
                    >
                      <Copy className="w-3 h-3" data-oid="d--vh70" />
                    </CyberButton>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* USDT */}
          <Card
            className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-green-500/50 transition-all duration-300 group overflow-hidden"
            data-oid=":.o57f1"
          >
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 via-emerald-400/20 to-teal-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
              data-oid="fa-c1iv"
            ></div>
            <div className="relative z-10" data-oid="87w6yvm">
              <CardHeader data-oid="bdl0gxd">
                <CardTitle
                  className="flex items-center gap-3 text-green-400 font-mono uppercase tracking-wider"
                  data-oid="xxft-23"
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg"
                    data-oid="phh6z6i"
                  >
                    <span
                      className="text-white font-bold text-sm"
                      data-oid="ckamkwe"
                    >
                      ₮
                    </span>
                  </div>
                  <span className="text-white" data-oid="f3__uhb">
                    USDT (TRC20)
                  </span>
                  <Shield
                    className="w-4 h-4 text-green-400 ml-auto"
                    data-oid="t3zacep"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="g.f3_us">
                <Image
                  src="/binance_usdt_qr.jpeg"
                  alt="USDT QR Code"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg border border-green-400/30 shadow-lg"
                  data-oid="rws3-s."
                />

                <div
                  className="bg-gray-800/50 rounded-lg p-3 border border-green-400/20"
                  data-oid="0lzfphk"
                >
                  <p
                    className="text-xs text-gray-400 mb-1 font-mono uppercase tracking-wider"
                    data-oid="rpz-tpa"
                  >
                    USDT Address (TRC20):
                  </p>
                  <div className="flex items-center gap-2" data-oid="zpzbmd3">
                    <code
                      className="text-xs text-green-400 break-all flex-1 font-mono"
                      data-oid="s-twgk."
                    >
                      TH8WkRX4pLPRXeToDnWLE8ixLL8TaCGR82
                    </code>
                    <CyberButton
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard("TH8WkRX4pLPRXeToDnWLE8ixLL8TaCGR82")
                      }
                      className="px-2 py-1"
                      data-oid="9n0esqr"
                    >
                      <Copy className="w-3 h-3" data-oid="m9zi:ps" />
                    </CyberButton>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Anonymous Support */}
          <Card
            className="relative bg-black/60 backdrop-blur-xl border border-cyan-400/30 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
            data-oid="eb1dso4"
          >
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-400/20 to-indigo-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
              data-oid=":n.ik_h"
            ></div>
            <div className="relative z-10" data-oid="lsyskn0">
              <CardHeader data-oid=":6l_xlh">
                <CardTitle
                  className="flex items-center gap-3 text-purple-400 font-mono uppercase tracking-wider"
                  data-oid="sw8_w26"
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg"
                    data-oid="q1qbq6:"
                  >
                    <span
                      className="text-white font-bold text-sm"
                      data-oid="15k6ag4"
                    >
                      ?
                    </span>
                  </div>
                  <span className="text-white" data-oid="10mi6ti">
                    ANONYMOUS
                  </span>
                  <Zap
                    className="w-4 h-4 text-purple-400 ml-auto"
                    data-oid="nddoy4a"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="kld4nkp">
                <p
                  className="text-sm text-gray-300 mb-4 font-light leading-relaxed"
                  data-oid="ry08o.w"
                >
                  All donations are{" "}
                  <GradientUnderline data-oid="maf4che">
                    anonymous
                  </GradientUnderline>{" "}
                  and help us continue providing legitimate .edu accounts to
                  students worldwide.
                </p>
                <div
                  className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 backdrop-blur-sm"
                  data-oid="cfj0xej"
                >
                  <p
                    className="text-xs text-purple-300 font-mono"
                    data-oid=":2y:ng3"
                  >
                    <strong className="text-purple-400" data-oid="a8n4h-p">
                      DONATION-BASED:
                    </strong>{" "}
                    We charge $13/.edu + $20/ID, but donations help subsidize
                    students who can't afford our services.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 sm:mt-16" data-oid="4cudl06">
          <div
            className="relative p-8 bg-gray-900/30 border border-cyan-400/20 rounded-xl backdrop-blur-sm max-w-4xl mx-auto"
            data-oid="bnwj5oq"
          >
            <div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              data-oid="02g54yp"
            ></div>
            <p
              className="text-gray-300 font-light leading-relaxed"
              data-oid="vlwr8e1"
            >
              <Target
                className="w-5 h-5 inline-block mr-2 text-cyan-400"
                data-oid="cog:zvx"
              />
              Your donations help us maintain servers, acquire .edu accounts,
              and subsidize services for students who can't afford the $13/.edu
              + $20/ID fees.
              <GradientUnderline hoverOnly={false} data-oid="1rgqfki">
                Thank you for supporting digital education equality
              </GradientUnderline>
              .
            </p>
            <div
              className="mt-4 flex justify-center gap-4 text-xs text-gray-500 font-mono"
              data-oid="zbhwiku"
            >
              <span
                className="px-3 py-1 bg-green-400/20 border border-green-400/30 rounded text-green-400"
                data-oid="j7.7b1o"
              >
                SECURE
              </span>
              <span
                className="px-3 py-1 bg-blue-400/20 border border-blue-400/30 rounded text-blue-400"
                data-oid="cmq90ik"
              >
                ANONYMOUS
              </span>
              <span
                className="px-3 py-1 bg-purple-400/20 border border-purple-400/30 rounded text-purple-400"
                data-oid="-..z4p1"
              >
                GLOBAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
