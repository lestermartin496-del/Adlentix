"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PLATFORMS = [
  { id:"google",   name:"Google Ads",   icon:"🔵", desc:"Search, Display & YouTube campaigns",     live:true  },
  { id:"meta",     name:"Meta Ads",     icon:"📘", desc:"Facebook & Instagram advertising",         live:true  },
  { id:"linkedin", name:"LinkedIn Ads", icon:"💼", desc:"Sponsored content & Lead Generation",      live:true  },
  { id:"tiktok",   name:"TikTok Ads",   icon:"🎵", desc:"Coming soon",                              live:false },
];

export default function ConnectPage() {
  const [connecting, setConnecting] = useState<string | null>(null);
  const [connected, setConnected] = useState<string[]>(["google"]);

  const handleConnect = (id: string) => {
    setConnecting(id);
    setTimeout(() => {
      setConnected(p => [...p, id]);
      setConnecting(null);
    }, 1800);
  };

  return (
    <div style={{ maxWidth:580, display:"flex", flexDirection:"column", gap:16 }}>
      <div style={{ marginBottom:8 }}>
        <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>Connect Accounts</h2>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>Secure read-only access — we see your data, never touch your campaigns or budget</p>
      </div>

      {/* Security notice */}
      <div style={{ padding:"14px 18px", borderRadius:14, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(65,105,225,0.05)", display:"flex", alignItems:"center", gap:12, marginBottom:4 }}>
        <span style={{ fontSize:18 }}>🔒</span>
        <span style={{ fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.5 }}>OAuth 2.0 — your password is never shared with us. Read-only access only.</span>
      </div>

      {PLATFORMS.map((p, i) => {
        const isConn = connected.includes(p.id);
        return (
          <motion.div key={p.id} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.4, delay:i*0.07 }}
            style={{ borderRadius:16, padding:20, border:`1px solid ${isConn ? "rgba(65,105,225,0.22)" : "rgba(255,255,255,0.07)"}`, background: isConn ? "rgba(65,105,225,0.05)" : "#0d0d0d", display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ width:48, height:48, borderRadius:12, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{p.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, fontWeight:600, color:"#fff", marginBottom:3 }}>{p.name}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)" }}>{p.desc}</div>
            </div>
            {!p.live ? (
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.22)", border:"1px solid rgba(255,255,255,0.1)", padding:"6px 14px", borderRadius:99 }}>Coming soon</span>
            ) : isConn ? (
              <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, fontWeight:600, color:"#4169E1" }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#4169E1" }} />
                Connected
              </div>
            ) : (
              <button onClick={() => handleConnect(p.id)} disabled={!!connecting}
                style={{ fontSize:12, fontWeight:700, padding:"9px 20px", borderRadius:10, background:connecting===p.id?"rgba(65,105,225,0.45)":"#4169E1", color:"#fff", border:"none", cursor:connecting?"not-allowed":"pointer", fontFamily:"inherit", transition:"all 0.15s" }}>
                {connecting === p.id ? "Connecting…" : "Connect →"}
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
