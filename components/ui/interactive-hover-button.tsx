import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative min-w-[280px] h-16 cursor-pointer overflow-hidden rounded-xl border border-green-400/40 bg-background/10 backdrop-blur-sm text-center font-semibold px-6 py-4 transition-all duration-300 hover:border-green-400/60 hover:bg-green-500/10",
        className,
      )}
      {...props}
    >
      {/* Always visible content - no translation or opacity changes */}
      <div className="flex items-center justify-center gap-3 h-full text-green-400 group-hover:text-green-300 transition-colors duration-300">
        {children}
      </div>
      
      {/* Hover background effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600/20 to-emerald-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
