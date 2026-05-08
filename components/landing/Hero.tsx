"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";

const METRICS = [
  { label: "People who saw your ads",   val: "142,400", delta: "+8.3%",  up: true  },
  { label: "People who clicked",        val: "5,140",   delta: "+12.1%", up: true  },
  { label: "Total ad spend",            val: "$1,840",  delta: null,     up: true  },
  { label: "New customers gained",      val: "284",     delta: "+5.6%",  up: true  },
  { label: "Cost per new customer",     val: "$6.48",   delta: "−5.2%",  up: true  },
];

const BRIEFS = [
  { icon:"🚀", label:"Scale",  color:"#4169E1", bg:"rgba(65,105,225,0.10)", bdr:"rgba(65,105,225,0.25)",
    title:"Put more money into Summer Sale",
    body:"8.2 out of 100 people who see it click it — your best ad right now. Moving 20% more budget here this week could bring in ~60 extra customers." },
  { icon:"⚠️", label:"Review", color:"rgba(255,255,255,0.6)", bg:"rgba(255,255,255,0.04)", bdr:"rgba(255,255,255,0.12)",
    title:"Brand Video is getting tired",
    body:"Clicks dropped 40% in 48 hours. Your audience has probably seen it too many times. Time to swap in a fresh version." },
  { icon:"🛑", label:"Pause",  color:"rgba(255,255,255,0.35)", bg:"rgba(255,255,255,0.02)", bdr:"rgba(255,255,255,0.08)",
    title:"Stop paying for Cold Audience",
    body:"You've spent $120 with only 1.8% of people clicking. That money would work 4× harder in Summer Sale right now." },
];

const BARS = [
  { name:"Summer Sale",   pct:82, color:"#4169E1",              val:"8.2%" },
  { name:"Brand Video",   pct:65, color:"rgba(255,255,255,0.5)", val:"6.5%" },
  { name:"Retargeting",   pct:48, color:"rgba(255,255,255,0.4)", val:"4.8%" },
  { name:"Cold Audience", pct:18, color:"rgba(255,255,255,0.15)",val:"1.8%" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [brief, setBrief] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start","end start"] });
  const rawRot = useTransform(scrollYProgress,[0,.4,.75,1],[20,0,-7,-14]);
  const rotateX = useSpring(rawRot, { stiffness:70, damping:18 });
  const scale   = useTransform(scrollYProgress,[0,.45],[.93,1]);
  const transY  = useTransform(scrollYProgress,[0,1],[0,-80]);

  useEffect(() => {
    const t = setInterval(() => setBrief(p => (p + 1) % 3), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div ref={sectionRef} className="relative" style={{ minHeight:"230vh" }}>
      <div className="sticky top-0 min-h-screen flex flex-col items-center overflow-hidden"
        style={{ paddingTop:140, background:"#000" }}>

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse 70% 50% at 50% 0%, rgba(65,105,225,0.09) 0%, transparent 70%)" }}/>
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize:"72px 72px",
          WebkitMaskImage:"radial-gradient(ellipse 80% 55% at 50% 0%, black 25%, transparent 85%)",
        }}/>

        {/* Headline */}
        <motion.div className="relative z-10 text-center px-6 mb-16"
          style={{ maxWidth:880 }}
          initial={{ opacity:0, y:32 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.8, ease:[.16,1,.3,1] }}>

          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border"
            style={{ borderColor:"rgba(65,105,225,0.35)", background:"rgba(65,105,225,0.08)", color:"#7b99f5", fontSize:12, fontWeight:500, letterSpacing:".06em" }}>
            <span className="w-1.5 h-1.5 rounded-full anim-pulse-dot" style={{ background:"#4169E1" }}/>
            Ad Intelligence for New Business Owners
          </div>

          <h1 className="font-display mb-5"
            style={{ fontSize:"clamp(58px,7.5vw,104px)", fontWeight:700, lineHeight:.92, letterSpacing:"-3px", color:"#fff" }}>
            Stop guessing.<br/>
            <em style={{ fontStyle:"italic", color:"#4169E1" }}>Start winning.</em>
          </h1>

          <p className="text-[18px] font-light leading-relaxed mx-auto mb-10"
            style={{ color:"rgba(255,255,255,0.48)", maxWidth:520 }}>
            Every morning, Adlentix tells you exactly which ads are making you money,
            which are wasting it, and <strong style={{ color:"rgba(255,255,255,0.75)", fontWeight:500 }}>the one thing to do right now</strong>.
            No marketing degree required.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button href="/auth?tab=signup" variant="blue" size="lg">
              Start free — no card needed
            </Button>
            <Button href="#how" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>
          <p className="mt-5 text-[12px]" style={{ color:"rgba(255,255,255,0.2)", letterSpacing:".04em" }}>
            Free forever · Connects in 60 seconds · Google, Meta &amp; LinkedIn
          </p>
        </motion.div>

        {/* Tilt dashboard */}
        <motion.div className="relative z-10 w-full px-8" style={{ maxWidth:1080, rotateX, scale, translateY:transY, perspective:1400, transformOrigin:"top center" }}>
          <div className="rounded-2xl overflow-hidden"
            style={{ background:"#111", border:"1px solid rgba(255,255,255,0.09)",
              boxShadow:"0 64px 128px rgba(0,0,0,0.85)", borderTop:"2px solid #4169E1" }}>

            {/* Chrome bar */}
            <div className="flex items-center gap-2 px-5 border-b"
              style={{ height:44, background:"rgba(255,255,255,0.03)", borderColor:"rgba(255,255,255,0.07)" }}>
              {["rgba(255,255,255,0.22)","rgba(255,255,255,0.38)","rgba(255,255,255,0.6)"].map((c,i)=>(
                <div key={i} className="rounded-full" style={{ width:11,height:11,background:c }}/>
              ))}
              <div className="flex-1 text-center" style={{ fontFamily:"'Geist Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.22)" }}>
                adlentix.app/dashboard
              </div>
              <div className="flex items-center gap-1.5" style={{ fontFamily:"monospace", fontSize:10, color:"#4169E1" }}>
                <span className="w-1.5 h-1.5 rounded-full anim-pulse-dot" style={{ background:"#4169E1" }}/>LIVE
              </div>
            </div>

            {/* KPIs — plain English */}
            <div className="grid grid-cols-5" style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
              {METRICS.map((m,i)=>(
                <div key={m.label} className="px-5 py-5" style={{ borderRight: i<4?"1px solid rgba(255,255,255,0.07)":undefined, borderLeft:i===4?"2px solid #4169E1":undefined }}>
                  <div style={{ fontSize:10, fontWeight:600, color:"rgba(255,255,255,0.28)", textTransform:"uppercase", letterSpacing:".07em", marginBottom:8 }}>{m.label}</div>
                  <div className="font-display" style={{ fontSize:26, color:"#fff", fontWeight:600, lineHeight:1, marginBottom:4 }}>{m.val}</div>
                  {m.delta && <div style={{ fontFamily:"monospace", fontSize:11, fontWeight:600, color: m.up?"#4169E1":"rgba(255,255,255,0.32)" }}>{m.delta} vs last week</div>}
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="grid grid-cols-2" style={{ borderTop:"1px solid rgba(255,255,255,0.07)" }}>

              {/* Click-rate bars */}
              <div className="p-6" style={{ borderRight:"1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize:10, fontWeight:600, color:"rgba(255,255,255,0.28)", textTransform:"uppercase", letterSpacing:".08em", marginBottom:20 }}>
                  How Often People Click Each Ad
                </div>
                {BARS.map((b,i)=>(
                  <div key={b.name} className="flex items-center gap-3" style={{ marginBottom: i<3?14:0 }}>
                    <span style={{ fontSize:12, color:"rgba(255,255,255,0.38)", width:100, flexShrink:0 }}>{b.name}</span>
                    <div className="flex-1 rounded-full overflow-hidden" style={{ height:5, background:"rgba(255,255,255,0.06)" }}>
                      <motion.div className="h-full rounded-full"
                        style={{ background:b.color }}
                        initial={{ width:0 }}
                        animate={{ width:`${b.pct}%` }}
                        transition={{ duration:1.3, delay:.6+i*.1, ease:[.23,1,.32,1] }}/>
                    </div>
                    <span style={{ fontFamily:"monospace", fontSize:11, color:"rgba(255,255,255,0.32)", width:38, textAlign:"right" }}>{b.val}</span>
                  </div>
                ))}
              </div>

              {/* Auto-cycling brief */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div style={{ fontSize:10, fontWeight:600, color:"rgba(255,255,255,0.28)", textTransform:"uppercase", letterSpacing:".08em" }}>
                    Today's Action Plan
                  </div>
                  <div className="flex gap-1.5">
                    {[0,1,2].map(i=>(
                      <button key={i} onClick={()=>setBrief(i)} style={{ width:6, height:6, borderRadius:"50%", background: i===brief?"#4169E1":"rgba(255,255,255,0.18)", border:"none", cursor:"pointer", transition:"all .2s" }}/>
                    ))}
                  </div>
                </div>
                <div style={{ minHeight:130, position:"relative", overflow:"hidden" }}>
                  {BRIEFS.map((b,i)=>(
                    <motion.div key={i} style={{ position:"absolute", inset:0 }}
                      initial={false}
                      animate={{ opacity:i===brief?1:0, x:i===brief?0:16 }}
                      transition={{ duration:.35 }}>
                      <div className="text-2xl mb-3">{b.icon}</div>
                      <div style={{ fontSize:14, fontWeight:600, color:"#fff", marginBottom:8 }}>{b.title}</div>
                      <div style={{ fontSize:12, color:"rgba(255,255,255,0.42)", lineHeight:1.65, marginBottom:14 }}>{b.body}</div>
                      <div className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 border"
                        style={{ fontSize:11, fontWeight:500, color:b.color, borderColor:b.bdr, background:b.bg, cursor:"pointer" }}>
                        View details →
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
