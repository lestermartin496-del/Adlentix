"use client";
import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "blue" | "danger";
type Size = "sm" | "md" | "lg";

interface Props {
  children: ReactNode; href?: string; onClick?: () => void;
  variant?: Variant; size?: Size; fullWidth?: boolean;
  disabled?: boolean; type?: "button" | "submit"; className?: string;
}

const styles: Record<Variant, string> = {
  primary:   "bg-white text-black hover:bg-[#f0f0f0] active:scale-[.98]",
  secondary: "bg-white/[0.07] text-white border border-white/[0.1] hover:bg-white/[0.11] hover:border-white/[0.18]",
  ghost:     "bg-transparent text-white/55 hover:text-white",
  blue:      "bg-[#4169E1] text-white hover:bg-[#2952cc] active:scale-[.98] shadow-[0_0_24px_rgba(65,105,225,0.35)]",
  danger:    "bg-transparent text-red-400 border border-red-500/20 hover:bg-red-500/10",
};
const sizes: Record<Size, string> = {
  sm: "text-[13px] px-4 py-2 rounded-[10px]",
  md: "text-sm px-5 py-2.5 rounded-xl",
  lg: "text-[15px] px-7 py-3.5 rounded-xl",
};

export default function Button({ children, href, onClick, variant = "primary", size = "md",
  fullWidth, disabled, type = "button", className }: Props) {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 cursor-pointer select-none",
    styles[variant], sizes[size],
    fullWidth && "w-full",
    disabled && "opacity-40 pointer-events-none",
    className
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
}
