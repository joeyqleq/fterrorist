"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedCard({ className, ...props }: CardProps) {
  return (
    <div
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      className={cn(
        "group/animated-card relative w-[380px] overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:border-zinc-800/50 dark:bg-black/80",
        className,
      )}
      {...props}
      data-oid="ga5d.ex"
    />
  );
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      role="group"
      className={cn(
        "flex flex-col space-y-2 border-t border-zinc-200/30 p-6 dark:border-zinc-800/30",
        className,
      )}
      {...props}
      data-oid="clclsbb"
    />
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-xl leading-none font-bold tracking-tight text-black dark:text-white",
        className,
      )}
      {...props}
      data-oid="ryh.fvp"
    />
  );
}

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-neutral-600 dark:text-neutral-300",
        className,
      )}
      {...props}
      data-oid="v34bxrw"
    />
  );
}

export function CardVisual({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("h-[200px] w-[380px] overflow-hidden", className)}
      {...props}
      data-oid="unz75-l"
    />
  );
}

// Visual Component Props
interface VisualProps {
  mainColor?: string;
  secondaryColor?: string;
  gridColor?: string;
}

interface LayerProps {
  color: string;
  secondaryColor?: string;
  hovered?: boolean;
}

// Shared Components
const EllipseGradient: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center"
      data-oid=":ev_nks"
    >
      <svg
        width="380"
        height="200"
        viewBox="0 0 380 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-oid="cc0vcao"
      >
        <rect
          width="380"
          height="200"
          fill="url(#paint0_radial)"
          data-oid="aew1np-"
        />
        <defs data-oid="zqq4zv0">
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(190 100) rotate(90) scale(100 190)"
            data-oid="flxi5xz"
          >
            <stop stopColor={color} stopOpacity="0.3" data-oid="oi4kcxg" />
            <stop
              offset="0.4"
              stopColor={color}
              stopOpacity="0.2"
              data-oid="8w:q0a:"
            />
            <stop offset="1" stopOpacity="0" data-oid="dy68a4l" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

const GridLayer: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:24px_24px] bg-center opacity-60"
      data-oid="4frz:cx"
    />
  );
};

// Visual 1: Analytics Card (Enhanced Original)
const AnalyticsVisual: React.FC<VisualProps> = ({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false);
  const [mainProgress, setMainProgress] = useState(15);
  const [secondaryProgress, setSecondaryProgress] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (hovered) {
      timeout = setTimeout(() => {
        setMainProgress(75);
        setSecondaryProgress(100);
      }, 300);
    } else {
      setMainProgress(15);
      setSecondaryProgress(0);
    }

    return () => clearTimeout(timeout);
  }, [hovered]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const mainDashoffset = circumference - (mainProgress / 100) * circumference;
  const secondaryDashoffset =
    circumference - (secondaryProgress / 100) * circumference;

  const techItems = [
    { id: 1, translateX: "120", translateY: "60", text: "React", icon: "⚛️" },
    {
      id: 2,
      translateX: "120",
      translateY: "-60",
      text: "Next.js",
      icon: "🔷",
    },
    {
      id: 3,
      translateX: "140",
      translateY: "0",
      text: "TypeScript",
      icon: "📘",
    },
    {
      id: 4,
      translateX: "-140",
      translateY: "0",
      text: "Tailwind",
      icon: "💨",
    },
    { id: 5, translateX: "-120", translateY: "60", text: "Prisma", icon: "🔺" },
    {
      id: 6,
      translateX: "-120",
      translateY: "-60",
      text: "GraphQL",
      icon: "🌸",
    },
  ];

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-oid="eka6jhs"
      />

      <div
        className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl"
        data-oid="um4tgmv"
      >
        {/* Main Chart */}
        <div
          className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute top-0 left-0 z-[7] flex h-[400px] w-[380px] transform items-center justify-center transition-transform duration-700 group-hover/animated-card:-translate-y-[100px] group-hover/animated-card:scale-110"
          data-oid="nxjm7qg"
        >
          <div
            className="relative flex h-[140px] w-[140px] items-center justify-center"
            data-oid="2cl3::6"
          >
            <svg
              width="140"
              height="140"
              viewBox="0 0 100 100"
              data-oid="ydrysii"
            >
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                opacity={0.1}
                className="text-zinc-400 dark:text-zinc-600"
                data-oid=":nczw83"
              />

              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={secondaryColor}
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={secondaryDashoffset}
                transform="rotate(-90 50 50)"
                style={{
                  transition:
                    "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)",
                }}
                data-oid="_:wupby"
              />

              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={mainColor}
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={mainDashoffset}
                transform="rotate(-90 50 50)"
                style={{
                  transition:
                    "stroke-dashoffset 0.7s cubic-bezier(0.6, 0.6, 0, 1)",
                }}
                data-oid="ekqv3_v"
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center"
              data-oid="rv1m9ny"
            >
              <span
                className="text-2xl font-bold text-black dark:text-white"
                data-oid="3rn1dzy"
              >
                {hovered
                  ? secondaryProgress > 75
                    ? secondaryProgress
                    : mainProgress
                  : mainProgress}
                %
              </span>
            </div>
          </div>
        </div>

        {/* Info Badge */}
        <div
          className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[6] flex w-[380px] translate-y-0 items-start justify-center bg-transparent p-6 transition-transform duration-700 group-hover/animated-card:translate-y-full"
          data-oid="oije_su"
        >
          <div
            className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] rounded-lg border border-zinc-200/40 bg-white/40 px-4 py-3 opacity-100 backdrop-blur-md transition-opacity duration-500 group-hover/animated-card:opacity-0 dark:border-zinc-800/40 dark:bg-black/40"
            data-oid="p7e9kw."
          >
            <div className="flex items-center gap-3" data-oid="ce8ivgg">
              <div
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: mainColor }}
                data-oid="g-km.78"
              />
              <p
                className="text-sm font-medium text-black dark:text-white"
                data-oid="tgtbhhm"
              >
                Performance Analytics
              </p>
            </div>
            <p
              className="mt-1 text-xs text-neutral-600 dark:text-neutral-300"
              data-oid="_4fqwcv"
            >
              Real-time metrics and insights
            </p>
          </div>
        </div>

        {/* Tech Stack Items */}
        <div
          className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover/animated-card:opacity-100"
          data-oid="2vx3.be"
        >
          {techItems.map((item, index) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-2 rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1.5 backdrop-blur-md transition-all duration-700 dark:border-zinc-800/60 dark:bg-black/80"
              style={{
                transform: hovered
                  ? `translate(${item.translateX}px, ${item.translateY}px)`
                  : "translate(0px, 0px)",
                transitionDelay: `${index * 100}ms`,
              }}
              data-oid="qj_4-2d"
            >
              <span className="text-sm" data-oid="hfi5til">
                {item.icon}
              </span>
              <span
                className="text-xs font-medium text-black dark:text-white"
                data-oid="h1uio7_"
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <EllipseGradient color={mainColor} data-oid="uu9zd1t" />
        <GridLayer color={gridColor} data-oid="9gr2-v-" />
      </div>
    </>
  );
};

// Visual 2: Wave Animation Card
const WaveVisual: React.FC<VisualProps> = ({
  mainColor = "#06b6d4",
  secondaryColor = "#8b5cf6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-oid=".h0gbhv"
      />

      <div
        className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl"
        data-oid="n5jqtl4"
      >
        {/* Animated Waves */}
        <div className="absolute inset-0 z-[6]" data-oid="bjv8qex">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 380 200"
            fill="none"
            data-oid="8yb5pk3"
          >
            <path
              d="M0,160 Q95,120 190,140 T380,130 L380,200 L0,200 Z"
              fill={`${mainColor}40`}
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "translate-y-0" : "translate-y-8",
              )}
              data-oid="thkeowg"
            />

            <path
              d="M0,170 Q95,130 190,150 T380,140 L380,200 L0,200 Z"
              fill={`${secondaryColor}30`}
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "translate-y-0" : "translate-y-6",
              )}
              style={{ transitionDelay: "200ms" }}
              data-oid="jyecdfs"
            />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[7]" data-oid="o6o3q5f">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-2 w-2 rounded-full opacity-60 transition-all duration-1000 ease-in-out",
                hovered ? "animate-bounce" : "",
              )}
              style={{
                backgroundColor: i % 2 === 0 ? mainColor : secondaryColor,
                left: `${20 + i * 60}px`,
                top: `${80 + (i % 3) * 30}px`,
                animationDelay: `${i * 200}ms`,
                transform: hovered
                  ? `translateY(-${(i + 1) * 20}px)`
                  : "translateY(0)",
              }}
              data-oid="y0:rs:9"
            />
          ))}
        </div>

        {/* Central Icon */}
        <div
          className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[8] flex items-center justify-center transition-transform duration-700 group-hover/animated-card:scale-110 group-hover/animated-card:rotate-12"
          data-oid="rttxi0:"
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm dark:bg-black/80"
            data-oid="d83dx_y"
          >
            <span className="text-2xl" data-oid="7njg6-q">
              🌊
            </span>
          </div>
        </div>

        <GridLayer color={gridColor} data-oid="2nnjzt2" />
      </div>
    </>
  );
};

// Visual 3: Geometric Morphing Card
const GeometricVisual: React.FC<VisualProps> = ({
  mainColor = "#f59e0b",
  secondaryColor = "#ef4444",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-oid="-64_4o9"
      />

      <div
        className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl"
        data-oid="ktn0fs."
      >
        {/* Morphing Shapes */}
        <div
          className="absolute inset-0 z-[6] flex items-center justify-center"
          data-oid="6._ph.u"
        >
          <div className="relative" data-oid="rsm.ntk">
            {/* Main Shape */}
            <div
              className={cn(
                "transition-all duration-1000 ease-in-out",
                hovered ? "rotate-180 scale-150" : "rotate-0 scale-100",
              )}
              style={{ backgroundColor: mainColor }}
              data-oid="2koe.fa"
            >
              <div
                className="h-20 w-20 rounded-lg opacity-80"
                data-oid="njewrez"
              />
            </div>

            {/* Orbiting Shapes */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute h-4 w-4 rounded-full transition-all duration-1000 ease-in-out",
                  hovered ? "opacity-100" : "opacity-60",
                )}
                style={{
                  backgroundColor: i % 2 === 0 ? secondaryColor : mainColor,
                  top: "50%",
                  left: "50%",
                  transform: hovered
                    ? `translate(-50%, -50%) rotate(${i * 90 + 180}deg) translateX(60px) rotate(-${i * 90 + 180}deg)`
                    : `translate(-50%, -50%) rotate(${i * 90}deg) translateX(40px) rotate(-${i * 90}deg)`,
                  transitionDelay: `${i * 100}ms`,
                }}
                data-oid="q5v.es."
              />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 z-[5]" data-oid="3be78i:">
          <svg
            width="380"
            height="200"
            className="opacity-20"
            data-oid="suxj19l"
          >
            <defs data-oid="wsiynpk">
              <pattern
                id="hexagon"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                data-oid="h55nqr9"
              >
                <polygon
                  points="20,2 32,12 32,28 20,38 8,28 8,12"
                  fill="none"
                  stroke={mainColor}
                  strokeWidth="1"
                  data-oid="k4nsjjl"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#hexagon)"
              data-oid="4im2lpo"
            />
          </svg>
        </div>

        <GridLayer color={gridColor} data-oid=":0ebb0h" />
      </div>
    </>
  );
};

// Visual 4: Network Graph Card
const NetworkVisual: React.FC<VisualProps> = ({
  mainColor = "#10b981",
  secondaryColor = "#3b82f6",
  gridColor = "#80808020",
}) => {
  const [hovered, setHovered] = useState(false);

  const nodes = [
    { id: 1, x: 190, y: 100, size: 8 },
    { id: 2, x: 120, y: 60, size: 6 },
    { id: 3, x: 260, y: 80, size: 6 },
    { id: 4, x: 100, y: 140, size: 5 },
    { id: 5, x: 280, y: 140, size: 5 },
    { id: 6, x: 190, y: 40, size: 4 },
    { id: 7, x: 190, y: 160, size: 4 },
  ];

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-oid="4lnpd.c"
      />

      <div
        className="relative h-[200px] w-[380px] overflow-hidden rounded-t-2xl"
        data-oid="da8mioi"
      >
        {/* Network Lines */}
        <svg
          className="absolute inset-0 z-[6] h-full w-full"
          data-oid="b57ggro"
        >
          {nodes.map((node, i) =>
            nodes
              .slice(i + 1)
              .map((targetNode, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke={hovered ? mainColor : secondaryColor}
                  strokeWidth={hovered ? 2 : 1}
                  opacity={hovered ? 0.8 : 0.4}
                  className="transition-all duration-500 ease-in-out"
                  style={{ transitionDelay: `${(i + j) * 50}ms` }}
                  data-oid="swdgt0o"
                />
              )),
          )}
        </svg>

        {/* Network Nodes */}
        <div className="absolute inset-0 z-[7]" data-oid="v5swtm.">
          {nodes.map((node, i) => (
            <div
              key={node.id}
              className={cn(
                "absolute rounded-full transition-all duration-500 ease-in-out",
                hovered ? "animate-pulse" : "",
              )}
              style={{
                left: node.x - node.size / 2,
                top: node.y - node.size / 2,
                width: hovered ? node.size * 1.5 : node.size,
                height: hovered ? node.size * 1.5 : node.size,
                backgroundColor: i === 0 ? mainColor : secondaryColor,
                transitionDelay: `${i * 100}ms`,
              }}
              data-oid="cm5dqa3"
            />
          ))}
        </div>

        <EllipseGradient color={mainColor} data-oid="w4lo77z" />
        <GridLayer color={gridColor} data-oid="jhr3:_4" />
      </div>
    </>
  );
};

// Main Component
export default function InteractiveCards() {
  const cards = [
    {
      visual: <AnalyticsVisual data-oid="1lrsrm6" />,
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization with real-time progress tracking and technology stack overview.",
    },
    {
      visual: <WaveVisual data-oid="ar0o5b0" />,
      title: "Wave Dynamics",
      description:
        "Fluid wave animations with floating particles that respond to user interaction.",
    },
    {
      visual: <GeometricVisual data-oid="r6u6u7p" />,
      title: "Geometric Morphing",
      description:
        "Shape transformation animations with rotating elements and geometric patterns.",
    },
    {
      visual: <NetworkVisual data-oid="wo:vob1" />,
      title: "Network Graph",
      description:
        "Dynamic network visualization showing connected nodes with interactive animations.",
    },
  ];

  return (
    <div className="min-h-screen p-8" data-oid="18_in3:">
      <div className="mx-auto max-w-7xl" data-oid="nxrny-a">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 place-items-center"
          data-oid="ku-3d1_"
        >
          {cards.map((card, index) => (
            <AnimatedCard key={index} data-oid="2_c4dnp">
              <CardVisual data-oid="wl21-q9">{card.visual}</CardVisual>
              <CardBody data-oid="6wc87y-">
                <CardTitle data-oid="3uf2vkr">{card.title}</CardTitle>
                <CardDescription data-oid="wqcvdef">
                  {card.description}
                </CardDescription>
              </CardBody>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
