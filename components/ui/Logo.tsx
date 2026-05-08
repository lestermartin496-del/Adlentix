import Link from "next/link";
export default function Logo({ size = 32, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline select-none">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="9" fill="#4169E1"/>
        <rect x="7" y="25" width="4" height="9" rx="1.5" fill="white" opacity="0.35"/>
        <rect x="13" y="19" width="4" height="15" rx="1.5" fill="white" opacity="0.55"/>
        <rect x="19" y="13" width="4" height="21" rx="1.5" fill="white" opacity="0.75"/>
        <rect x="25" y="8" width="4" height="26" rx="1.5" fill="white"/>
        <polyline points="9,25 15,19 21,13 27,8" stroke="white" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
      </svg>
      <span className={`text-[17px] font-semibold tracking-[-0.3px] ${dark ? "text-black" : "text-white"}`}
        style={{ fontFamily: "-apple-system, 'SF Pro Display', 'Inter', sans-serif" }}>
        Adlentix
      </span>
    </Link>
  );
}
