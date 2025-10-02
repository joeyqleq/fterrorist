import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

interface ArcProps {
  radius: number;
  strokeWidth: number;
  rotation: number;
  delay: number;
  duration: number;
}

const Logo: React.FC<LogoProps> = ({ size = 500, className = '' }) => {
  // Arc renderer function
  const renderArc = ({ radius, strokeWidth, rotation, delay, duration }: ArcProps) => {
    return (
      <path
        d={`M ${100 - radius} 100 a ${radius} ${radius} 0 0 1 ${radius * 2} 0`}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        style={{
          transformOrigin: '100px 100px',
          transform: `rotate(${rotation}deg)`,
          animation: `spin ${duration}s ${delay}s infinite linear`,
        }}
      />
    );
  };

  // Much smaller and subtle arcs configuration
  const arcs = [
    { radius: 25, strokeWidth: 1, rotation: 0, delay: 0, duration: 40 },
    { radius: 30, strokeWidth: 0.8, rotation: 25, delay: 0.3, duration: 35 },
    { radius: 35, strokeWidth: 1, rotation: 50, delay: 0.6, duration: 30 },
    { radius: 40, strokeWidth: 0.8, rotation: 75, delay: 0.9, duration: 32 },
  ];

  return (
    <div className={`relative ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="text-green-400 dark:text-green-400 transition-colors duration-500 hover:text-green-300 dark:hover:text-green-300"
        style={{ overflow: 'visible' }}
      >
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
            @keyframes subtleGlitch {
              0%, 99%, 100% { 
                transform: scale(1) skewX(0deg); 
                filter: hue-rotate(0deg); 
                opacity: 1;
              }
              0.5% { 
                transform: scale(1.001) skewX(0.1deg); 
                filter: hue-rotate(0.5deg); 
                opacity: 0.995;
              }
            }
            @keyframes revolutionSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .revolution-text {
              font-family: 'Courier New', monospace;
              font-weight: bold;
              text-shadow: 0 0 10px rgba(34, 197, 94, 0.8),
                           0 0 20px rgba(34, 197, 94, 0.6),
                           0 0 30px rgba(34, 197, 94, 0.4);
              filter: drop-shadow(0 0 5px rgba(34, 197, 94, 1));
            }
          `}
        </style>
        
        {/* Render all arcs with very subtle glitch effect */}
        <g style={{ animation: 'subtleGlitch 25s ease-in-out infinite' }}>
          {arcs.map((arc, index) => (
            <React.Fragment key={index}>
              {renderArc(arc)}
            </React.Fragment>
          ))}
        </g>
        
        {/* Revolutionary Text Spinning between arcs */}
        {arcs.map((arc, index) => {
          if (index % 2 === 0) return null; // Only place text on odd indices for spacing
          const textRadius = arc.radius + 5; // Slightly outside each arc
          const textCount = 8; // Number of text instances around circle
          
          return (
            <g key={`text-${index}`}>
              {Array.from({ length: textCount }).map((_, textIndex) => {
                const angle = (360 / textCount) * textIndex;
                const x = 100 + Math.cos((angle * Math.PI) / 180) * textRadius;
                const y = 100 + Math.sin((angle * Math.PI) / 180) * textRadius;
                
                return (
                  <text
                    key={textIndex}
                    x={x}
                    y={y}
                    fill="#22c55e"
                    fontSize="4"
                    fontFamily="Courier New, monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="revolution-text"
                    style={{
                      transformOrigin: '100px 100px',
                      transform: `rotate(${angle + 90}deg)`,
                      animation: `revolutionSpin ${15 + index * 2}s linear infinite`,
                      opacity: 0.7
                    }}
                  >
                    VIVA LA REVOLUTION!
                  </text>
                );
              })}
            </g>
          );
        })}
        
        {/* Logo Circle with Gradient (no text) */}
        <g>
          <defs>
            <linearGradient id="terroristGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(30)">
              <stop offset="0%" stopColor="#22c55e" className="animate-gradient-stop-1">
                <animate
                  attributeName="stop-color"
                  values="#22c55e; #16a34a; #15803d; #ec4899; #f59e0b; #22c55e"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#ec4899" className="animate-gradient-stop-2">
                <animate
                  attributeName="stop-color"
                  values="#ec4899; #f59e0b; #22c55e; #16a34a; #15803d; #ec4899"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Optional subtle center circle for visual anchor */}
          <circle
            cx="100"
            cy="100"
            r="3"
            fill="url(#terroristGradient)"
            opacity="0.6"
            style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;