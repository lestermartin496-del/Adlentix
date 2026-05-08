"use client";
import { motion } from "framer-motion";

const ACTIONS = [
  {
    icon:"🚀", type:"Scale", color:"#4169E1", bg:"rgba(65,105,225,0.09)", border:"rgba(65,105,225,0.22)",
    title:"Put more money into Summer Sale",
    why:"8.2 out of every 100 people who see this ad click it — your best performer right now. Moving 20% more of your daily budget here could bring in roughly 60 extra customers this week.",
    action:"Increase budget",
  },
  {
    icon:"⚠️", type:"Review", color:"rgba(255,255,255,0.6)", bg:"rgba(255,255,255,0.04)", border:"rgba(255,255,255,0.12)",
    title:"Brand Video is getting tired",
    why:"The number of people clicking it dropped 40% in 48 hours. Your audience has likely seen it too many times. Make a new version — same message, fresh look.",
    action:"Refresh creative",
  },
  {
    icon:"🛑", type:"Pause", color:"rgba(255,255,255,0.32)", bg:"rgba(255,255,255,0.025)", border:"rgba(255,255,255,0.08)",
    title:"Stop spending on Cold Audience",
    why:"You spent $120 and only 1.8 out of 100 people clicked. That money would produce 4x more results if moved to Summer Sale instead.",
    action:"Pause this ad",
  },
];

export default function BriefPage() {
  return (
    <div style={{ maxWidth:680, display:"flex", flexDirection:"column", gap:20 }}>
      <div style={{ marginBottom:8 }}>
        <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>☀️ Today&#39;s Action Plan</h2>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>3 things to do today, based on how your ads actually performed</p>
      </div>

      {ACTIONS.map((a, i) => (
        <motion.div key={a.title} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay:i*0.1 }}
          style={{ borderRadius:20, padding:24, border:`1px solid ${a.border}`, background:a.bg }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap:16 }}>
            <span style={{ fontSize:26, flexShrink:0, marginTop:2 }}>{a.icon}</span>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, flexWrap:"wrap" }}>
                <span style={{ fontFamily:"monospace", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, border:`1px solid ${a.border}`, background:"rgba(0,0,0,0.35)", color:a.color, letterSpacing:".06em" }}>{a.type.toUpperCase()}</span>
                <h3 style={{ fontSize:16, fontWeight:600, color:"#fff" }}>{a.title}</h3>
              </div>
              <p style={{ fontSize:14, color:"rgba(255,255,255,0.45)", lineHeight:1.65, marginBottom:16 }}>{a.why}</p>
              <button style={{ fontSize:12, fontWeight:600, padding:"8px 18px", borderRadius:10, border:`1px solid ${a.border}`, background:"transparent", color:a.color, cursor:"pointer", fontFamily:"inherit", transition:"all 0.15s" }}
                onMouseEnter={e=>(e.currentTarget.style.background="rgba(255,255,255,0.06)")}
                onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
                {a.action} →
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
