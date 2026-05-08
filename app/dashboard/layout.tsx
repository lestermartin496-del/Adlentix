"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/ui/Logo";

const NAV = [
  { href:"/dashboard",          label:"Overview",         icon:"▦",  exact:true },
  { href:"/dashboard/brief",    label:"Daily Brief",      icon:"☀️" },
  { href:"/dashboard/campaigns",label:"Campaign Health",  icon:"💚" },
  { href:"/dashboard/alerts",   label:"Alerts",           icon:"🔔" },
  { href:"/dashboard/creative", label:"Creative Tracking",icon:"🎯" },
  { href:"/dashboard/connect",  label:"Connect Accounts", icon:"🔗" },
  { href:"/dashboard/insights", label:"AI Insights",      icon:"✦",  pro:true },
  { href:"/dashboard/reports",  label:"Weekly Reports",   icon:"📩", pro:true },
  { href:"/dashboard/settings", label:"Settings",         icon:"⚙"  },
];

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.replace("/auth?tab=signin");
  }, [isLoading, isAuthenticated, router]);

  const pageTitle: Record<string,string> = {
    "/dashboard":"Overview","/dashboard/brief":"Daily Brief",
    "/dashboard/campaigns":"Campaign Health","/dashboard/alerts":"Alerts",
    "/dashboard/creative":"Creative Tracking","/dashboard/connect":"Connect Accounts",
    "/dashboard/insights":"AI Insights","/dashboard/reports":"Weekly Reports",
    "/dashboard/settings":"Settings",
  };

  if (isLoading || !isAuthenticated) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background:"#000" }}>
      <div style={{ textAlign:"center" }}>
        <div className="font-display text-2xl text-white mb-2">Adlentix</div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.3)" }}>Loading…</div>
      </div>
    </div>
  );

  const isActive = (item: typeof NAV[0]) =>
    item.exact ? path === item.href : path.startsWith(item.href) && item.href !== "/dashboard";

  const firstName = user?.full_name?.split(" ")[0] || user?.email?.split("@")[0] || "User";
  const initials = (user?.full_name || user?.email || "U")[0].toUpperCase();

  return (
    <div className="flex h-screen overflow-hidden" style={{ background:"#000" }}>
      {/* ── SIDEBAR ── */}
      <aside className="w-56 flex-shrink-0 flex flex-col"
        style={{ background:"#080808", borderRight:"1px solid rgba(255,255,255,0.07)" }}>
        {/* Logo */}
        <div className="px-5 py-6" style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
          <Logo size={28} />
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto" style={{ display:"flex", flexDirection:"column", gap:2 }}>
          {NAV.map(item => {
            const active = isActive(item) || (item.exact && path === item.href);
            return (
              <Link key={item.href} href={item.href}
                style={{
                  display:"flex", alignItems:"center", gap:10,
                  padding:"10px 12px", borderRadius:10, textDecoration:"none",
                  background: active ? "rgba(65,105,225,0.11)" : "transparent",
                  borderLeft: active ? "2px solid #4169E1" : "2px solid transparent",
                  color: active ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize:13, fontWeight:500,
                  transition:"all 0.15s",
                }}>
                <span style={{ fontSize:15, width:20, textAlign:"center", flexShrink:0 }}>{item.icon}</span>
                <span style={{ flex:1 }}>{item.label}</span>
                {item.pro && (
                  <span style={{
                    fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:4,
                    background:"rgba(65,105,225,0.15)", color:"#4169E1",
                    border:"1px solid rgba(65,105,225,0.2)",
                  }}>PRO</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Upgrade nudge (free only) */}
        {user?.plan === "free" && (
          <div className="mx-3 mb-3 p-4 rounded-xl"
            style={{ background:"rgba(65,105,225,0.07)", border:"1px solid rgba(65,105,225,0.18)" }}>
            <div className="font-display text-sm font-bold text-white mb-1">Upgrade to Pro</div>
            <p style={{ fontSize:11, color:"rgba(255,255,255,0.38)", lineHeight:1.5, marginBottom:10 }}>
              Unlock AI insights, unlimited alerts & weekly reports.
            </p>
            <Link href="/pricing"
              style={{
                display:"block", textAlign:"center", padding:"8px", borderRadius:8,
                background:"#4169E1", color:"#fff", fontSize:12, fontWeight:600,
                textDecoration:"none", transition:"background 0.15s",
              }}>
              Upgrade →
            </Link>
          </div>
        )}

        {/* User */}
        <div className="px-4 py-4 flex items-center gap-3"
          style={{ borderTop:"1px solid rgba(255,255,255,0.07)" }}>
          <div style={{
            width:32, height:32, borderRadius:"50%", background:"#4169E1",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:12, fontWeight:700, color:"#fff", flexShrink:0,
          }}>{initials}</div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:12, fontWeight:500, color:"#fff", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{firstName}</div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.28)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{user?.email}</div>
          </div>
          <button onClick={() => { logout(); router.push("/"); }}
            style={{ background:"none", border:"none", fontSize:11, cursor:"pointer", color:"rgba(255,255,255,0.22)", fontFamily:"inherit", padding:0 }}
            onMouseEnter={e=>(e.currentTarget.style.color="#f87171")}
            onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.22)")}>
            Out
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between px-7 flex-shrink-0"
          style={{ height:58, background:"rgba(0,0,0,0.88)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
          <h1 className="font-display text-[18px] font-bold text-white">
            {pageTitle[path] || "Dashboard"}
          </h1>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:11, padding:"5px 12px", borderRadius:99, border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.38)" }}>
              {user?.plan === "pro" ? "Pro" : "Free plan"}
            </span>
            <Link href="/"
              style={{ fontSize:12, color:"rgba(255,255,255,0.3)", textDecoration:"none", transition:"color 0.15s" }}
              onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,255,255,0.65)")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.3)")}>
              ← Home
            </Link>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 overflow-y-auto p-7">{children}</main>
      </div>
    </div>
  );
}
