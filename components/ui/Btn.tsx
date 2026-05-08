"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BtnProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "blue";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
}

const styles = {
  primary: {
    background: "#ffffff", color: "#000000",
    border: "1px solid #ffffff",
  },
  secondary: {
    background: "transparent", color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  ghost: {
    background: "transparent", color: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  blue: {
    background: "#4169E1", color: "#ffffff",
    border: "1px solid #4169E1",
  },
};

const sizes = {
  sm: { padding: "8px 18px", fontSize: 13, borderRadius: 8 },
  md: { padding: "11px 24px", fontSize: 14, borderRadius: 10 },
  lg: { padding: "14px 36px", fontSize: 15, borderRadius: 12 },
};

export default function Btn({
  children, href, onClick, variant = "primary",
  size = "md", className, type = "button",
  disabled = false, fullWidth = false,
}: BtnProps) {
  const base: React.CSSProperties = {
    ...styles[variant],
    ...sizes[size],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "inherit",
    fontWeight: 500,
    letterSpacing: "-0.01em",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.18s ease",
    textDecoration: "none",
    width: fullWidth ? "100%" : undefined,
    pointerEvents: disabled ? "none" : undefined,
  };

  if (href) {
    return (
      <Link href={href} style={base} className={cn("hover-lift", className)}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = ".85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = ""; }}
      >{children}</Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={base} className={className}
      onMouseEnter={e => { e.currentTarget.style.opacity = ".85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}
    >{children}</button>
  );
}
