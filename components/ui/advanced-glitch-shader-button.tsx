"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AdvancedGlitchShaderButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  intensity?: "subtle" | "moderate" | "extreme";
  variant?: "matrix" | "cyber" | "neon";
}

export const AdvancedGlitchShaderButton: React.FC<
  AdvancedGlitchShaderButtonProps
> = ({
  children,
  onClick,
  className,
  intensity = "moderate",
  variant = "matrix",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationRef = useRef<number>();
  const [webglSupported, setWebglSupported] = useState(true);

  // WebGL Shader sources
  const vertexShaderSource = `
    attribute vec2 a_position;
    varying vec2 v_texCoord;
    
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = (a_position + 1.0) / 2.0;
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_intensity;
    uniform int u_variant;
    varying vec2 v_texCoord;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    vec3 matrixEffect(vec2 uv) {
      float gridSize = 40.0;
      vec2 grid = fract(uv * gridSize);
      vec2 gridId = floor(uv * gridSize);
      
      float t = u_time * 2.0;
      float rain = fract(gridId.y * 0.1 - t * 0.5 + random(gridId.xx) * 2.0);
      float char = random(gridId + floor(t * 5.0));
      char = step(0.95, char);
      
      float glow = 1.0 - smoothstep(0.0, 0.8, grid.y);
      float intensity = char * glow * rain;
      
      vec3 color1 = vec3(0.1, 0.8, 0.3);
      vec3 color2 = vec3(0.0, 1.0, 0.5);
      return mix(color1, color2, random(gridId)) * intensity;
    }
    
    vec3 cyberEffect(vec2 uv) {
      float distanceFromMouse = length(uv - u_mouse / u_resolution);
      float influence = max(0.0, 1.0 - distanceFromMouse * 2.0);
      
      vec2 distortedUV = uv + sin(u_time * 10.0 + uv * 50.0) * 0.01 * influence;
      
      float lines = sin(distortedUV.y * 100.0 + u_time * 5.0) * 0.5 + 0.5;
      float scanline = sin(uv.y * 800.0 + u_time * 20.0) * 0.1 + 0.9;
      
      vec3 cyan = vec3(0.0, 1.0, 1.0);
      vec3 magenta = vec3(1.0, 0.0, 1.0);
      
      return mix(cyan, magenta, lines) * scanline * influence;
    }
    
    vec3 neonEffect(vec2 uv) {
      vec2 center = vec2(0.5);
      float dist = length(uv - center);
      
      float pulse = sin(u_time * 8.0) * 0.5 + 0.5;
      float ripple = sin(dist * 20.0 - u_time * 10.0) * 0.5 + 0.5;
      
      vec3 neonPink = vec3(1.0, 0.2, 0.8);
      vec3 neonBlue = vec3(0.2, 0.8, 1.0);
      vec3 neonGreen = vec3(0.2, 1.0, 0.4);
      
      vec3 color = mix(neonPink, neonBlue, sin(u_time * 3.0 + dist * 10.0) * 0.5 + 0.5);
      color = mix(color, neonGreen, ripple * pulse * 0.3);
      
      return color * (1.0 - dist) * (pulse * 0.5 + 0.5);
    }
    
    void main() {
      vec2 uv = v_texCoord;
      vec3 color = vec3(0.0);
      
      if (u_variant == 0) {
        color = matrixEffect(uv);
      } else if (u_variant == 1) {
        color = cyberEffect(uv);
      } else {
        color = neonEffect(uv);
      }
      
      // Add glitch distortion
      if (u_intensity > 0.7) {
        float glitchNoise = noise(uv * 10.0 + u_time * 20.0);
        if (glitchNoise > 0.8) {
          uv.x += sin(u_time * 100.0) * 0.01;
          color.rgb = color.gbr; // channel shift
        }
      }
      
      color *= u_intensity;
      gl_FragColor = vec4(color, 0.8);
    }
  `;

  // Initialize WebGL with proper error handling
  const initWebGL = useCallback(() => {
    if (!canvasRef.current) return false;

    try {
      const gl =
        (canvasRef.current.getContext(
          "webgl",
        ) as WebGLRenderingContext | null) ||
        (canvasRef.current.getContext(
          "experimental-webgl",
        ) as WebGLRenderingContext | null);
      if (!gl) {
        setWebglSupported(false);
        return false;
      }

      glRef.current = gl;

      // Create shaders
      const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
      gl.shaderSource(vertexShader, vertexShaderSource);
      gl.compileShader(vertexShader);

      if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(
          "Vertex shader compilation error:",
          gl.getShaderInfoLog(vertexShader),
        );
        setWebglSupported(false);
        return false;
      }

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
      gl.shaderSource(fragmentShader, fragmentShaderSource);
      gl.compileShader(fragmentShader);

      if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error(
          "Fragment shader compilation error:",
          gl.getShaderInfoLog(fragmentShader),
        );
        setWebglSupported(false);
        return false;
      }

      // Create program
      const program = gl.createProgram()!;
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(
          "Shader program linking error:",
          gl.getProgramInfoLog(program),
        );
        setWebglSupported(false);
        return false;
      }

      programRef.current = program;

      // Create buffer
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW,
      );

      return true;
    } catch (error) {
      console.error("WebGL initialization error:", error);
      setWebglSupported(false);
      return false;
    }
  }, []);

  // Render WebGL
  const renderWebGL = useCallback(
    (time: number) => {
      const gl = glRef.current;
      const program = programRef.current;
      if (!gl || !program || !buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      gl.canvas.width = rect.width;
      gl.canvas.height = rect.height;
      gl.viewport(0, 0, rect.width, rect.height);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (!isHovered) return;

      gl.useProgram(program);

      // Set uniforms
      const timeLocation = gl.getUniformLocation(program, "u_time");
      const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      const mouseLocation = gl.getUniformLocation(program, "u_mouse");
      const intensityLocation = gl.getUniformLocation(program, "u_intensity");
      const variantLocation = gl.getUniformLocation(program, "u_variant");

      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, rect.width, rect.height);
      gl.uniform2f(mouseLocation, mousePos.x, rect.height - mousePos.y);

      const intensityMap = { subtle: 0.3, moderate: 0.6, extreme: 1.0 };
      const variantMap = { matrix: 0, cyber: 1, neon: 2 };

      gl.uniform1f(
        intensityLocation,
        intensityMap[intensity] * (isGlitching ? 1.5 : 1.0),
      );
      gl.uniform1i(variantLocation, variantMap[variant]);

      // Set attributes
      const positionLocation = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    },
    [isHovered, mousePos, intensity, variant, isGlitching],
  );

  // Canvas 2D fallback for non-WebGL browsers
  const renderCanvas2D = useCallback(
    (time: number) => {
      if (!canvasRef.current || !buttonRef.current || webglSupported) return;

      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const rect = buttonRef.current.getBoundingClientRect();
      canvasRef.current.width = rect.width;
      canvasRef.current.height = rect.height;

      ctx.clearRect(0, 0, rect.width, rect.height);

      if (!isHovered) return;

      // Simple particle effect for fallback
      const imageData = ctx.createImageData(rect.width, rect.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % rect.width;
        const y = Math.floor(i / 4 / rect.width);

        const distanceToMouse = Math.sqrt(
          Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2),
        );
        const influence = Math.max(0, 1 - distanceToMouse / 100);

        const noise = Math.random() * influence * 0.4;
        const wave = Math.sin(time * 0.01 + x * 0.1) * 0.3;

        const intensity = (noise + wave) * 255;

        // Color based on variant
        if (variant === "matrix") {
          data[i] = intensity * 0.1; // R
          data[i + 1] = intensity * 0.8; // G
          data[i + 2] = intensity * 0.3; // B
        } else if (variant === "cyber") {
          data[i] = intensity * 0.1; // R
          data[i + 1] = intensity * 0.6; // G
          data[i + 2] = intensity * 0.9; // B
        } else {
          // neon
          data[i] = intensity * 0.9; // R
          data[i + 1] = intensity * 0.2; // G
          data[i + 2] = intensity * 0.8; // B
        }

        data[i + 3] = intensity * 0.3; // A
      }

      ctx.putImageData(imageData, 0, 0);
    },
    [webglSupported, isHovered, mousePos, variant],
  );

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;

    let startTime = Date.now();

    // Try WebGL first, fallback to Canvas 2D
    const webglInitialized = initWebGL();
    if (!webglInitialized) {
      console.log("WebGL not available, using Canvas 2D fallback");
    }

    const animate = () => {
      const time = Date.now() - startTime;

      if (webglInitialized && webglSupported) {
        renderWebGL(time);
      } else {
        renderCanvas2D(time);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initWebGL, renderWebGL, renderCanvas2D, webglSupported]);

  // Mouse tracking
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [],
  );

  // Random glitch triggers
  useEffect(() => {
    if (!isHovered) return;

    const glitchInterval = setInterval(
      () => {
        const chance = { subtle: 0.1, moderate: 0.3, extreme: 0.6 }[intensity];
        if (Math.random() < chance) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 50 + Math.random() * 200);
        }
      },
      800 + Math.random() * 1200,
    );

    return () => clearInterval(glitchInterval);
  }, [isHovered, intensity]);

  const variantStyles = {
    matrix: "border-green-400/40 text-green-400 hover:border-green-400/70",
    cyber: "border-cyan-400/40 text-cyan-400 hover:border-cyan-400/70",
    neon: "border-pink-400/40 text-pink-400 hover:border-pink-400/70",
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden font-mono font-bold border-2 bg-black/70 backdrop-blur-sm",
        "transform-gpu will-change-transform transition-all duration-300",
        variantStyles[variant],
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsGlitching(false);
      }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        filter: isGlitching
          ? [
              "brightness(1)",
              "brightness(1.5)",
              "brightness(0.7)",
              "brightness(1.2)",
              "brightness(1)",
            ]
          : "brightness(1)",
        x: isGlitching ? [0, -1, 1, -0.5, 0] : 0,
      }}
      transition={{ duration: 0.1 }}
      data-oid="j.rr4ap"
    >
      {/* WebGL/Canvas2D Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{ mixBlendMode: webglSupported ? "screen" : "overlay" }}
        data-oid="_-moaob"
      />

      {/* Scan Lines */}
      <AnimatePresence data-oid="q2s-xwe">
        {isHovered && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "100%", opacity: [0, 0.8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className={cn(
              "absolute left-0 w-full h-[1px] z-[2] pointer-events-none",
              variant === "matrix" &&
                "bg-gradient-to-r from-transparent via-green-400 to-transparent",
              variant === "cyber" &&
                "bg-gradient-to-r from-transparent via-cyan-400 to-transparent",
              variant === "neon" &&
                "bg-gradient-to-r from-transparent via-pink-400 to-transparent",
            )}
            style={{
              boxShadow: `0 0 10px ${
                variant === "matrix"
                  ? "rgba(34, 197, 94, 0.8)"
                  : variant === "cyber"
                    ? "rgba(6, 182, 212, 0.8)"
                    : "rgba(236, 72, 153, 0.8)"
              }`,

              filter: "blur(0.5px)",
            }}
            data-oid="zrye._d"
          />
        )}
      </AnimatePresence>

      {/* Digital Grid */}
      <AnimatePresence data-oid="8tcl_db">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 98%, ${
                  variant === "matrix"
                    ? "rgba(34, 197, 94, 0.3)"
                    : variant === "cyber"
                      ? "rgba(6, 182, 212, 0.3)"
                      : "rgba(236, 72, 153, 0.3)"
                } 100%),
                linear-gradient(0deg, transparent 98%, ${
                  variant === "matrix"
                    ? "rgba(34, 197, 94, 0.3)"
                    : variant === "cyber"
                      ? "rgba(6, 182, 212, 0.3)"
                      : "rgba(236, 72, 153, 0.3)"
                } 100%)
              `,

              backgroundSize: "10px 10px",
            }}
            data-oid="4u7wz6n"
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div
        className="relative z-[3] flex items-center justify-center px-6 py-3 w-full h-full"
        data-oid="s1z:c38"
      >
        <div
          className="flex items-center justify-center gap-3"
          data-oid="98.b_zd"
        >
          {children}
        </div>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-[-2px] rounded-[inherit] pointer-events-none z-[0]"
        animate={{
          background: isHovered
            ? [
                `linear-gradient(45deg, transparent, ${
                  variant === "matrix"
                    ? "rgba(34, 197, 94, 0.3)"
                    : variant === "cyber"
                      ? "rgba(6, 182, 212, 0.3)"
                      : "rgba(236, 72, 153, 0.3)"
                }, transparent)`,

                `linear-gradient(225deg, transparent, ${
                  variant === "matrix"
                    ? "rgba(34, 197, 94, 0.3)"
                    : variant === "cyber"
                      ? "rgba(6, 182, 212, 0.3)"
                      : "rgba(236, 72, 153, 0.3)"
                }, transparent)`,

                `linear-gradient(45deg, transparent, ${
                  variant === "matrix"
                    ? "rgba(34, 197, 94, 0.3)"
                    : variant === "cyber"
                      ? "rgba(6, 182, 212, 0.3)"
                      : "rgba(236, 72, 153, 0.3)"
                }, transparent)`,
              ]
            : "transparent",
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        data-oid="2dcqr8b"
      />
    </motion.button>
  );
};

export default AdvancedGlitchShaderButton;
