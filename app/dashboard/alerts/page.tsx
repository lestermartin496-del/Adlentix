"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AlertsPage() {
  const { user } = useAuth();
  const isPro = user?.plan === "pro";

  return (
    <div style={{ maxWidth:620, display:"flex", flexDirection:"column", gap:20 }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12, marginBottom:8 }}>
        <div>
          <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>Alerts</h2>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>
            {isPro ? "Pro: Unlimited alerts across all accounts" : "Free plan: 1 alert per day"}
          </p>
        </div>
        {!isPro && (
          <Link href="/pricing" style={{ fontSize:12, padding:"8px 16px", borderRadius:10, background:"rgba(65,105,225,0.1)", border:"1px solid rgba(65,105,225,0.2)", color:"#4169E1", textDecoration:"none", flexShrink:0 }}>
            Get unlimited →
          </Link>
        )}
      </div>

      {/* Fired alert */}
      <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
        style={{ borderRadius:18, padding:22, border:"1px solid rgba(65,105,225,0.25)", background:"rgba(65,105,225,0.06)" }}>
        <div style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
          <span style={{ fontSize:22, flexShrink:0 }}>🛑</span>
          <div>
            <div style={{ fontFamily:"monospace", fontSize:11, color:"rgba(255,255,255,0.28)", marginBottom:4 }}>Today 7:02 AM</div>
            <div style={{ fontSize:14, fontWeight:600, color:"#fff", marginBottom:6 }}>Cold Audience crossed your $100 spend limit</div>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.6 }}>
              This ad has now spent $120 with very few results. You set a $100 watchdog limit.
              Consider pausing it and moving the budget to Summer Sale.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Empty state */}
      <div style={{ borderRadius:18, border:"1px solid rgba(255,255,255,0.07)", background:"#0d0d0d", padding:28, textAlign:"center" }}>
        <div style={{ fontSize:14, color:"rgba(255,255,255,0.2)", marginBottom:6 }}>No more alerts today</div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.15)" }}>
          {isPro ? "You'll be notified immediately when anything needs attention." : "Upgrade to Pro for unlimited alerts across all campaigns."}
        </div>
      </div>

      {/* Alert settings (Pro) */}
      {!isPro && (
        <div style={{ borderRadius:18, border:"1px solid rgba(65,105,225,0.15)", background:"rgba(65,105,225,0.05)", padding:22, textAlign:"center" }}>
          <div style={{ fontSize:22, marginBottom:10 }}>🔔</div>
          <div className="font-display" style={{ fontSize:18, fontWeight:700, color:"#fff", marginBottom:6 }}>Set custom alert limits</div>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.38)", lineHeight:1.6, maxWidth:340, margin:"0 auto 16px" }}>
            Pro users can set custom spend limits per campaign and get unlimited real-time notifications.
          </p>
          <Link href="/pricing" style={{ display:"inline-block", padding:"10px 24px", borderRadius:12, background:"#4169E1", color:"#fff", fontSize:13, fontWeight:600, textDecoration:"none" }}>
            Upgrade to Pro →
          </Link>
        </div>
      )}
    </div>
  );
}
