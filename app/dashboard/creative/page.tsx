"use client";
import { motion } from "framer-motion";

const CREATIVES = [
  { name:"Summer Sale — Lifestyle Photo", type:"Image",    clickRate:"8.2 out of 100 views", trend:"↑ Growing fast", score:95, note:"Your best performer. Make more ads that look like this." },
  { name:"Brand Story — 30s Video",       type:"Video",    clickRate:"6.5 out of 100 views", trend:"↓ Slowing down", score:62, note:"Still working but clicks are dropping. Refresh soon."  },
  { name:"Retargeting — Product Grid",    type:"Carousel", clickRate:"4.8 out of 100 views", trend:"→ Holding steady", score:71, note:"Consistent performer. Keep running as-is."            },
  { name:"Cold Audience — Text Only",     type:"Text",     clickRate:"1.8 out of 100 views", trend:"↓ Not working",  score:18, note:"Very low click rate. Pause this and try something new." },
];

function scoreColor(s: number) {
  return s >= 70 ? "#4169E1" : s >= 40 ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)";
}
function trendColor(t: string) {
  return t.startsWith("↑") ? "#4169E1" : t.startsWith("↓") ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.42)";
}

export default function CreativePage() {
  return (
    <div style={{ maxWidth:800, display:"flex", flexDirection:"column", gap:16 }}>
      <div style={{ marginBottom:8 }}>
        <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>Creative Tracking</h2>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>Which specific ad — image, video, or text — is actually getting people to click</p>
      </div>

      {CREATIVES.map((c, i) => (
        <motion.div key={c.name} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.45, delay:i*0.07 }}
          style={{ borderRadius:16, border:"1px solid rgba(255,255,255,0.07)", background:"#0d0d0d", padding:20, display:"flex", alignItems:"center", gap:20 }}>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:5, flexWrap:"wrap" }}>
              <h3 style={{ fontSize:14, fontWeight:600, color:"#fff" }}>{c.name}</h3>
              <span style={{ fontSize:10, color:"rgba(255,255,255,0.25)", border:"1px solid rgba(255,255,255,0.08)", padding:"2px 7px", borderRadius:6 }}>{c.type}</span>
            </div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.38)", marginBottom:4 }}>
              {c.clickRate} &nbsp;·&nbsp; <span style={{ color:trendColor(c.trend), fontWeight:600 }}>{c.trend}</span>
            </div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.32)", fontStyle:"italic" }}>{c.note}</div>
          </div>
          <div style={{ textAlign:"right", flexShrink:0 }}>
            <div className="font-display" style={{ fontSize:32, fontWeight:700, letterSpacing:"-1px", color:scoreColor(c.score), lineHeight:1, marginBottom:3 }}>{c.score}</div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.2)" }}>health score</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
