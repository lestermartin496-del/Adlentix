"use client";
"use client";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
export default function Footer() {
  return (
    <footer className="border-t py-10 px-12" style={{ borderColor:"rgba(255,255,255,0.07)", background:"#000" }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-5">
        <Logo size={28}/>
        <div className="flex gap-8">
          {[["Pricing","/pricing"],["Privacy","/privacy"],["Terms","/terms"],["Support","mailto:hello@adlentix.app"]].map(([l,h])=>(
            <Link key={String(l)} href={String(h)} className="text-[12px] transition-colors hover:text-white/65" style={{ color:"rgba(255,255,255,0.3)" }}>
              {l}
            </Link>
          ))}
        </div>
        <div className="text-[11px]" style={{ color:"rgba(255,255,255,0.2)" }}>© 2025 Adlentix</div>
      </div>
    </footer>
  );
}

