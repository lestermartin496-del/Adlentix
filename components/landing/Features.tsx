"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  { id:"brief",    icon:"☀️",  label:"Daily Brief",        pro:false, badge:null,
    headline:"Know exactly what to do every morning",
    body:"Wake up to 3 clear actions based on your actual ad data. Not reports or dashboards — just: scale this, fix that, stop paying for this. Written in plain English.",
    bullets:["Delivered at 7:00 AM every day","Maximum 3 actions — never overwhelming","Backed by real data from your accounts"],
    img:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&q=80&fit=crop" },
  { id:"health",   icon:"💚",  label:"Campaign Health",    pro:false, badge:null,
    headline:"See which ads are healthy and which need help",
    body:"Every campaign gets a score from 0–100. Green means it's working. Red means it's costing you money. No technical knowledge needed — just look at the number.",
    bullets:["Live score per campaign, updated hourly","Plain English explanation of why","Compared to your own performance benchmarks"],
    img:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80&fit=crop" },
  { id:"alerts",   icon:"🔔",  label:"Spend Alerts",       pro:false, badge:"1/day free · Unlimited Pro",
    headline:"Get warned the moment money starts disappearing",
    body:"Set a limit. The second any ad crosses it without results, you get an alert. Free users get 1 alert per day. Pro gets unlimited alerts across every account.",
    bullets:["Free: 1 alert per day","Pro: Unlimited alerts across all accounts","Budget, click-rate drop, and sync alerts"],
    img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80&fit=crop" },
  { id:"creative", icon:"🎯",  label:"Creative Tracking",  pro:false, badge:null,
    headline:"Find out which exact ad is winning",
    body:"Not just 'this campaign is doing well' — Adlentix shows you which specific image, video, or text is getting clicked most, so you know what to make more of.",
    bullets:["Per-creative performance scores","Spot ad fatigue before it costs you","Works across Google, Meta, LinkedIn"],
    img:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80&fit=crop" },
  { id:"insights", icon:"✦",   label:"AI Insights",        pro:true,  badge:"Pro only",
    headline:"Recommendations in dollars — not percentages",
    body:"Not 'your CTR is low'. Instead: \"Move $80 from Cold Audience to Summer Sale — that's worth ~$340 in extra revenue this week.\" Specific. Actionable. In real money.",
    bullets:["Every recommendation includes an expected dollar result","Updates weekly based on your actual trends","Plain English, always — no jargon"],
    img:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80&fit=crop" },
  { id:"reports",  icon:"📩",  label:"Weekly Reports",     pro:true,  badge:"Pro only",
    headline:"A full week delivered to your inbox every Monday",
    body:"Every Monday at 7am, Pro users get a clean PDF summary. What worked. What didn't. Your best ad. Your biggest win. Professional enough to forward to anyone.",
    bullets:["Delivered every Monday at 7:00 AM","Downloadable PDF — looks professional","Week-over-week comparisons built in"],
    img:"https://images.unsplash.com/photo-1586866633-98b10eb24005?w=700&q=80&fit=crop" },
];

export default function Features() {
  const [active, setActive] = useState("brief");
  const cur = FEATURES.find(f => f.id === active)!;

  return (
    <section id="features" className="py-32 px-12" style={{ background:"#000" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-14" initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
          <div className="text-[12px] font-semibold uppercase tracking-[.14em] mb-4" style={{ color:"#4169E1" }}>Features</div>
          <h2 className="font-display" style={{ fontSize:"clamp(38px,5vw,62px)", fontWeight:700, letterSpacing:"-2px", lineHeight:1.0, color:"#fff" }}>
            Everything you need.<br/><em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.35)" }}>Nothing you don't.</em>
          </h2>
        </motion.div>

        <div className="grid rounded-2xl overflow-hidden border" style={{ gridTemplateColumns:"200px 1fr", borderColor:"rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.04)" }}>
          {/* Tab rail */}
          <div className="flex flex-col" style={{ background:"#0a0a0a", borderRight:"1px solid rgba(255,255,255,0.07)" }}>
            {FEATURES.map(f=>(
              <button key={f.id} onClick={()=>setActive(f.id)}
                className="flex items-center gap-3 px-5 py-4 text-left transition-all"
                style={{ borderLeft: active===f.id?"2px solid #4169E1":"2px solid transparent",
                  background: active===f.id?"rgba(65,105,225,0.09)":"transparent",
                  borderBottom:"1px solid rgba(255,255,255,0.05)", cursor:"pointer" }}>
                <span style={{ fontSize:17 }}>{f.icon}</span>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color: active===f.id?"#fff":"rgba(255,255,255,0.42)" }}>{f.label}</div>
                  {f.pro && <div style={{ fontSize:10, fontWeight:600, color:"#4169E1", marginTop:1 }}>Pro</div>}
                </div>
              </button>
            ))}
          </div>

          {/* Content pane */}
          <div style={{ background:"#0d0d0d" }}>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:.28 }}>
                {/* Image — wipes in */}
                <motion.div className="overflow-hidden relative" style={{ height:200, borderBottom:"1px solid rgba(255,255,255,0.07)" }}
                  initial={{ clipPath:"inset(0 100% 0 0)" }} animate={{ clipPath:"inset(0 0% 0 0)" }}
                  transition={{ duration:.7, ease:[.16,1,.3,1] }}>
                  <img src={cur.img} alt={cur.label} className="w-full h-full object-cover"
                    style={{ filter:"grayscale(65%) brightness(0.55) contrast(1.1)" }}/>
                  <div className="absolute inset-0" style={{ background:"rgba(65,105,225,0.09)" }}/>
                  {cur.badge && (
                    <div className="absolute top-3 right-3 font-mono text-[10px] px-3 py-1.5 rounded-full border"
                      style={{ background:"rgba(0,0,0,0.75)", borderColor:"rgba(65,105,225,0.4)", color:"#4169E1" }}>
                      {cur.badge}
                    </div>
                  )}
                </motion.div>
                <div className="p-8">
                  <h3 className="font-display text-[22px] font-semibold text-white mb-3 leading-snug">{cur.headline}</h3>
                  <p className="text-[14px] leading-relaxed mb-6" style={{ color:"rgba(255,255,255,0.42)" }}>{cur.body}</p>
                  <ul className="space-y-2.5">
                    {cur.bullets.map(b=>(
                      <li key={b} className="flex items-center gap-2.5 text-[13px]" style={{ color:"rgba(255,255,255,0.55)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background:"#4169E1" }}/>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
