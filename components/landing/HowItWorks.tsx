"use client";
import { motion } from "framer-motion";
const STEPS = [
  { n:"01", title:"Connect your ad accounts", body:"Link Google, Meta, or LinkedIn in under 60 seconds. Secure read-only access — we see your data, never touch your campaigns.", img:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=640&q=80&fit=crop", note:"OAuth 2.0 · Read-only · No password shared" },
  { n:"02", title:"We watch everything for you", body:"Adlentix syncs your numbers every hour and scans for wasted spend, sudden drops, and hidden wins — automatically, all day long.", img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80&fit=crop", note:"Hourly sync · Zero manual exports" },
  { n:"03", title:"Wake up with your action plan", body:"Three clear actions every morning — what to scale, what to fix, what to stop paying for. Plain English. No analysis paralysis.", img:"https://images.unsplash.com/photo-1500627965408-b5f2c8793f17?w=640&q=80&fit=crop", note:"Daily brief at 7:00 AM · Max 3 actions" },
];
export default function HowItWorks() {
  return (
    <section id="how" className="py-32 px-12" style={{ background:"#070707" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-18" initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
          <div className="text-[12px] font-semibold uppercase tracking-[.14em] mb-4" style={{ color:"#4169E1" }}>How it works</div>
          <h2 className="font-display" style={{ fontSize:"clamp(38px,5vw,62px)", fontWeight:700, letterSpacing:"-2px", lineHeight:1.0, color:"#fff" }}>
            Three steps.<br/><em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.35)" }}>Zero confusion.</em>
          </h2>
        </motion.div>
        <div className="mt-14 rounded-2xl overflow-hidden border" style={{ borderColor:"rgba(255,255,255,0.07)" }}>
          {STEPS.map((s,i)=>(
            <motion.div key={s.n} className="grid hover:bg-white/[0.02] transition-colors"
              style={{ gridTemplateColumns:"1fr 360px", background: i%2===0?"#0d0d0d":"#0a0a0a", borderBottom: i<2?"1px solid rgba(255,255,255,0.07)":undefined }}
              initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:.6,delay:i*.12 }}>
              <div className="p-10 flex gap-8 items-start">
                <span className="font-display text-[64px] font-bold leading-none flex-shrink-0 mt-1" style={{ color:"rgba(255,255,255,0.06)" }}>{s.n}</span>
                <div>
                  <h3 className="text-[20px] font-semibold text-white mb-3 leading-snug">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed mb-5" style={{ color:"rgba(255,255,255,0.42)", maxWidth:420 }}>{s.body}</p>
                  <div style={{ fontFamily:"monospace", fontSize:11, color:"rgba(65,105,225,0.7)", letterSpacing:".04em" }}>{s.note}</div>
                </div>
              </div>
              <motion.div className="overflow-hidden border-l"
                style={{ borderColor:"rgba(255,255,255,0.07)", clipPath:"inset(0 100% 0 0)" }}
                whileInView={{ clipPath:"inset(0 0% 0 0)" }} viewport={{ once:true }}
                transition={{ duration:.9, delay:.2+i*.1, ease:[.16,1,.3,1] }}>
                <div className="relative w-full h-full" style={{ minHeight:200 }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover"
                    style={{ filter:"grayscale(80%) brightness(0.55) contrast(1.1)" }}/>
                  <div className="absolute inset-0" style={{ background:"rgba(65,105,225,0.08)" }}/>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
