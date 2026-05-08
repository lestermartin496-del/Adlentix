"use client";
import { motion } from "framer-motion";

const CAMPAIGNS = [
  { name:"Summer Sale Banner",   platform:"Google",   health:95, humanHealth:"Excellent",       spend:"$312", clicks:"8.2 out of 100 views", customers:38,  action:"Increase budget — it's working great"              },
  { name:"Brand Story Video",    platform:"Meta",     health:65, humanHealth:"Needs attention",  spend:"$240", clicks:"6.5 out of 100 views", customers:24,  action:"Make a fresh version — audience is tuning out"      },
  { name:"Retargeting Carousel", platform:"Meta",     health:70, humanHealth:"Doing okay",       spend:"$195", clicks:"4.8 out of 100 views", customers:19,  action:"Keep running — performance is healthy"              },
  { name:"Cold Audience Reach",  platform:"LinkedIn", health:18, humanHealth:"Not working",      spend:"$120", clicks:"1.8 out of 100 views", customers:3,   action:"Pause this and move the budget to Summer Sale"      },
];

function healthColor(h: number) {
  return h >= 70 ? "#4169E1" : h >= 40 ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)";
}

export default function CampaignsPage() {
  return (
    <div style={{ maxWidth:880, display:"flex", flexDirection:"column", gap:20 }}>
      <div style={{ marginBottom:8 }}>
        <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>Campaign Health</h2>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>Plain-English breakdown of every ad you&#39;re running right now</p>
      </div>

      {CAMPAIGNS.map((c, i) => (
        <motion.div key={c.name} initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay:i*0.08 }}
          style={{ borderRadius:18, border:"1px solid rgba(255,255,255,0.07)", background:"#0d0d0d", padding:24 }}>
          {/* Header row */}
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:16 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:5, flexWrap:"wrap" }}>
                <h3 style={{ fontSize:16, fontWeight:600, color:"#fff" }}>{c.name}</h3>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.28)", border:"1px solid rgba(255,255,255,0.1)", padding:"2px 8px", borderRadius:99 }}>{c.platform}</span>
              </div>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.38)", fontStyle:"italic" }}>{c.action}</p>
            </div>
            <div style={{ textAlign:"right", flexShrink:0 }}>
              <div className="font-display" style={{ fontSize:36, fontWeight:700, letterSpacing:"-2px", color:healthColor(c.health), lineHeight:1, marginBottom:3 }}>{c.health}</div>
              <div style={{ fontSize:11, fontWeight:600, color:healthColor(c.health) }}>{c.humanHealth}</div>
            </div>
          </div>

          {/* Health bar */}
          <div style={{ width:"100%", height:6, borderRadius:3, background:"rgba(255,255,255,0.06)", marginBottom:20, overflow:"hidden" }}>
            <motion.div initial={{ width:0 }} animate={{ width:`${c.health}%` }} transition={{ duration:1, delay:0.3+i*0.1, ease:[.23,1,.32,1] }}
              style={{ height:"100%", borderRadius:3, background:healthColor(c.health) }}/>
          </div>

          {/* Stats */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
            {[["Total spent",c.spend],["Click rate",c.clicks],["New customers",String(c.customers)]].map(([l,v])=>(
              <div key={String(l)} style={{ background:"rgba(255,255,255,0.03)", borderRadius:12, padding:"12px 14px", border:"1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize:10, fontWeight:600, textTransform:"uppercase", letterSpacing:".07em", color:"rgba(255,255,255,0.25)", marginBottom:6 }}>{l}</div>
                <div className="font-display" style={{ fontSize:18, fontWeight:700, color:"#fff" }}>{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
