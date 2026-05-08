"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

const KPIS = [
  { label:"People who saw your ads",  val:"142,400", delta:"+8.3%",  up:true  },
  { label:"People who clicked",       val:"5,140",   delta:"+12.1%", up:true  },
  { label:"Total ad spend",           val:"$1,840",  delta:null,     up:true  },
  { label:"New customers this week",  val:"284",     delta:"+5.6%",  up:true  },
  { label:"Cost per new customer",    val:"$6.48",   delta:"−5.2%",  up:true, accent:true },
];

const CAMPAIGNS = [
  { name:"Summer Sale Banner",   platform:"Google",   health:95, pct:"8.2%", spend:"$312", status:"active"  },
  { name:"Brand Story Video",    platform:"Meta",     health:65, pct:"6.5%", spend:"$240", status:"active"  },
  { name:"Retargeting Carousel", platform:"Meta",     health:70, pct:"4.8%", spend:"$195", status:"active"  },
  { name:"Cold Audience Reach",  platform:"LinkedIn", health:18, pct:"1.8%", spend:"$120", status:"paused"  },
];

export default function Overview() {
  const { user } = useAuth();
  const firstName = user?.full_name?.split(" ")[0] || "there";

  return (
    <div style={{ maxWidth:960, display:"flex", flexDirection:"column", gap:24 }}>
      {/* Welcome */}
      <div>
        <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>
          Good morning, {firstName} 👋
        </h2>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>Here's how your ads performed this week</p>
      </div>

      {/* KPI bar */}
      <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
        style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", borderRadius:18, overflow:"hidden", border:"1px solid rgba(255,255,255,0.07)", gap:1, background:"rgba(255,255,255,0.05)" }}>
        {KPIS.map((k, i) => (
          <div key={k.label} style={{ background:"#0d0d0d", padding:"20px 20px", borderLeft: k.accent ? "2px solid #4169E1" : undefined }}>
            <div style={{ fontSize:10, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em", color:"rgba(255,255,255,0.3)", marginBottom:8 }}>{k.label}</div>
            <div className="font-display" style={{ fontSize:26, fontWeight:700, color:"#fff", marginBottom:4, letterSpacing:"-1px" }}>{k.val}</div>
            {k.delta && <div style={{ fontFamily:"monospace", fontSize:11, fontWeight:600, color: k.up ? "#4169E1" : "rgba(255,255,255,0.3)" }}>{k.delta}</div>}
          </div>
        ))}
      </motion.div>

      {/* Bottom row */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 300px", gap:20 }}>
        {/* Campaign table */}
        <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.1 }}
          style={{ borderRadius:18, border:"1px solid rgba(255,255,255,0.07)", background:"#0d0d0d", overflow:"hidden" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
            <div className="font-display" style={{ fontSize:15, fontWeight:700, color:"#fff" }}>Campaign Health</div>
            <Link href="/dashboard/campaigns" style={{ fontSize:12, color:"#4169E1", textDecoration:"none" }}>View all →</Link>
          </div>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
            <thead>
              <tr style={{ borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                {["Campaign","Platform","Health","Click Rate","Spend","Status"].map(h => (
                  <th key={h} style={{ padding:"10px 16px", textAlign:"left", fontSize:10, fontWeight:600, textTransform:"uppercase", letterSpacing:".07em", color:"rgba(255,255,255,0.22)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CAMPAIGNS.map(c => (
                <tr key={c.name} style={{ borderBottom:"1px solid rgba(255,255,255,0.04)", transition:"background 0.1s" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="rgba(255,255,255,0.02)")}
                  onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
                  <td style={{ padding:"13px 16px", color:"#fff", fontWeight:500 }}>{c.name}</td>
                  <td style={{ padding:"13px 16px", color:"rgba(255,255,255,0.38)", fontSize:12 }}>{c.platform}</td>
                  <td style={{ padding:"13px 16px" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ flex:1, height:5, borderRadius:3, background:"rgba(255,255,255,0.06)", overflow:"hidden" }}>
                        <div style={{ height:"100%", width:`${c.health}%`, borderRadius:3, background: c.health>=70?"#4169E1":c.health>=40?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.15)" }}/>
                      </div>
                      <span style={{ fontFamily:"monospace", fontSize:11, fontWeight:600, color: c.health>=70?"#4169E1":c.health>=40?"rgba(255,255,255,0.45)":"rgba(255,255,255,0.2)", width:24, textAlign:"right" }}>{c.health}</span>
                    </div>
                  </td>
                  <td style={{ padding:"13px 16px", fontFamily:"monospace", fontSize:12, color:"rgba(255,255,255,0.42)" }}>{c.pct}</td>
                  <td style={{ padding:"13px 16px", fontFamily:"monospace", fontSize:12, color:"rgba(255,255,255,0.42)" }}>{c.spend}</td>
                  <td style={{ padding:"13px 16px" }}>
                    <span style={{ fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:99,
                      background: c.status==="active" ? "rgba(65,105,225,0.1)" : "rgba(255,255,255,0.06)",
                      color: c.status==="active" ? "#4169E1" : "rgba(255,255,255,0.28)",
                      border: c.status==="active" ? "1px solid rgba(65,105,225,0.2)" : "1px solid rgba(255,255,255,0.08)" }}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Today's Brief preview */}
        <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.15 }}
          style={{ borderRadius:18, border:"1px solid rgba(255,255,255,0.07)", background:"#0d0d0d", overflow:"hidden" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
            <div className="font-display" style={{ fontSize:15, fontWeight:700, color:"#fff" }}>Today&#39;s Brief</div>
            <Link href="/dashboard/brief" style={{ fontSize:12, color:"#4169E1", textDecoration:"none" }}>Full brief →</Link>
          </div>
          <div style={{ padding:20, display:"flex", flexDirection:"column", gap:10 }}>
            {[
              { icon:"🚀", text:"Put more money into Summer Sale" },
              { icon:"⚠️", text:"Brand Video needs a fresh version" },
              { icon:"🛑", text:"Stop paying for Cold Audience" },
            ].map(a => (
              <div key={a.text} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"12px 14px", borderRadius:12, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontSize:16, flexShrink:0 }}>{a.icon}</span>
                <span style={{ fontSize:12, color:"rgba(255,255,255,0.58)", lineHeight:1.5 }}>{a.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
