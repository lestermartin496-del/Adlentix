"use client";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

const links = [
  { label: "How It Works", id: "how" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300"
      style={{
        padding: scrolled ? "13px 48px" : "22px 48px",
        background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : undefined,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}>
      <Logo />
      <div className="flex items-center gap-9">
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={e => scrollTo(e, l.id)}
            className="text-[13px] font-medium text-white/50 hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {isAuthenticated
          ? <Button href="/dashboard" variant="blue" size="sm">Dashboard →</Button>
          : <>
              <Button href="/auth?tab=signin" variant="ghost" size="sm">Sign in</Button>
              <Button href="/auth?tab=signup" variant="primary" size="sm">Sign up</Button>
            </>
        }
      </div>
    </nav>
  );
}
