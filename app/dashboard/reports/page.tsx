"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function ReportsPage() {
  const { user } = useAuth();
  const isPro = user?.plan === "pro";

  if (!isPro) return (
    <div style={{ maxWidth:480 }}>
      <div style={{ borderRadius:20, padding:48, border:"1px solid rgba(65,105,225,0.2)", background:"rgba(65,105,225,0.06)", textAlign:"center" }}>
        <div style={{ fontSize:40, marginBottom:16 }}>📩</div>
        <div className="font-display" style={{ fontSize:24, fontWeight:700, color:"#fff", marginBottom:8 }}>Weekly PDF Reports</div>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.65, maxWidth:320, margin:"0 auto 24px" }}>
          Every Monday at 7am — a clean, professional PDF summary of the week. What worked. What didn&#39;t. Your best ad. Your biggest win. Forward it to anyone.
        </p>
        <Link href="/pricing" style={{ display:"inline-block", padding:"12px 28px", borderRadius:12, background:"#4169E1", color:"#fff", fontSize:14, fontWeight:600, textDecoration:"none" }}>
          Upgrade to Pro →
        </Link>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth:640 }}>
      <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:8 }}>Weekly Reports</h2>
      <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)", marginBottom:24 }}>Your Monday morning PDF appears here after your first full week of data.</p>
      <div style={{ borderRadius:18, border:"1px solid rgba(255,255,255,0.07)", background:"#0d0d0d", padding:32, textAlign:"center" }}>
        <div style={{ fontSize:14, color:"rgba(255,255,255,0.25)" }}>No reports yet — check back next Monday</div>
      </div>
    </div>
  );
}
