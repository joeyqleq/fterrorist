"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-4 z-50 w-full", className)}
      data-oid="6x1yfes"
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(10px)",
        background: visible
          ? "linear-gradient(135deg, rgba(21, 77, 21, 0.95) 0%, rgba(34, 139, 34, 0.85) 100%)"
          : "linear-gradient(135deg, rgba(21, 77, 21, 0.7) 0%, rgba(34, 139, 34, 0.6) 100%)",
        borderRadius: visible ? "24px" : "50px",
        boxShadow: visible
          ? "0 0 40px rgba(34, 139, 34, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 0 20px rgba(34, 139, 34, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3)",
        width: visible ? "90%" : "160px",
        height: visible ? "70px" : "50px",
        y: visible ? 0 : 10,
        padding: visible ? "12px 24px" : "12px 16px",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between lg:flex",
        "border border-green-500/20",
        className,
      )}
      data-oid="_f_0acb"
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-8 text-sm font-medium transition duration-200 lg:flex",
        className,
      )}
      data-oid="w7e::bx"
    >
      {items.map((item, idx) => (
        <motion.a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-amber-100 font-mono text-sm font-bold tracking-wide transition-all duration-300"
          key={`link-${idx}`}
          href={item.link}
          whileHover={{
            textShadow: [
              "0 0 0px #00ff00",
              "0 0 5px #00ff00, 0 0 10px #00ff00",
              "0 0 15px #00ff00, 0 0 20px #00ff00",
              "0 0 5px #00ff00, 0 0 10px #00ff00",
            ],

            transition: {
              duration: 0.8,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 1],
            },
          }}
          data-oid="mzxbyg:"
        >
          {hovered === idx && (
            <motion.div
              layoutId="navbar-hover"
              className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              data-oid="kfum5hi"
            />
          )}
          <span
            className="relative z-20 flex items-center gap-2"
            data-oid="0g0wuqn"
          >
            {item.icon}
            {item.name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(10px)",
        background: visible
          ? "linear-gradient(135deg, rgba(21, 77, 21, 0.95) 0%, rgba(34, 139, 34, 0.85) 100%)"
          : "linear-gradient(135deg, rgba(21, 77, 21, 0.7) 0%, rgba(34, 139, 34, 0.6) 100%)",
        borderRadius: visible ? "16px" : "25px",
        width: visible ? "95%" : "120px",
        height: visible ? "60px" : "45px",
        y: visible ? 0 : 8,
        padding: visible ? "8px 16px" : "8px 12px",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between border border-green-500/20 lg:hidden",
        className,
      )}
      data-oid="cqhqhr."
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
      data-oid="wxmt9cw"
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence data-oid="hvqra34">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-6 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-900/95 to-emerald-900/85 backdrop-blur-xl px-6 py-8 shadow-xl",
            className,
          )}
          data-oid="5_fk3rp"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="text-amber-100 hover:text-green-400 transition-colors"
      data-oid="ijiw-ug"
    >
      {isOpen ? (
        <IconX className="h-5 w-5" data-oid="h50n897" />
      ) : (
        <IconMenu2 className="h-5 w-5" data-oid="j2kqbn6" />
      )}
    </motion.button>
  );
};

export const NavbarLogo = () => {
  return (
    <motion.a
      href="#"
      className="relative z-20 flex items-center space-x-2 text-sm font-bold text-amber-100"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      data-oid="18ly:i-"
    >
      <Image
        src="/terrorist_logo_ascii.webp"
        alt="Freebie Terrorist"
        width={32}
        height={32}
        className="rounded-lg"
        data-oid="jg1ro1v"
      />

      <span
        className="font-mono font-black tracking-wider text-amber-100"
        data-oid="hv952za"
      >
        FREEBIE TERRORIST
      </span>
    </motion.a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "button",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-xl font-mono text-sm font-bold relative cursor-pointer transition-all duration-300 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 shadow-lg hover:shadow-green-500/25",
    secondary:
      "bg-transparent border border-green-500/50 text-amber-100 hover:bg-green-500/20",
    dark: "bg-black/50 text-amber-100 border border-green-500/30 hover:bg-black/70",
    gradient:
      "bg-gradient-to-r from-emerald-500 to-green-700 text-white shadow-lg hover:shadow-emerald-500/30",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-oid="uoww.xt"
    >
      <Tag
        href={href || undefined}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
        data-oid="6514xyg"
      >
        {children}
      </Tag>
    </motion.div>
  );
};
