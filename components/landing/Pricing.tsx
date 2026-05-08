"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
const FREE  = ["Connect 1 ad account","Full plain-English dashboard","Daily brief (up to 3 campaigns)","Campaign health scores","Creative tracking","1 spend alert per day","30-day data history","Up to 5 campaigns tracked"];
const PRO   = ["Everything in Free","Unlimited accounts & campaigns","Unlimited spend alerts","AI revenue recommendations (in dollars)","Weekly PDF report — every Monday 7am","1-year data history","Google + Meta + LinkedIn combined view","Priority support"];
export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-12" style={{ background:"#000" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
          <div className="text-[12px] font-semibold uppercase tracking-[.14em] mb-4" style={{ color:"#4169E1" }}>Pricing</div>
          <h2 className="font-display mb-4" style={{ fontSize:"clamp(38px,5vw,62px)", fontWeight:700, letterSpacing:"-2px", lineHeight:1.0, color:"#fff" }}>
            Start free.<br/><em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.35)" }}>Upgrade when ready.</em>
          </h2>
          <p className="text-[16px] font-light mx-auto" style={{ color:"rgba(255,255,255,0.38)", maxWidth:440 }}>
            No credit card. No tricks. Free forever on the basics.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border" style={{ background:"rgba(255,255,255,0.06)", borderColor:"rgba(255,255,255,0.07)" }}>
          {/* Free */}
          <motion.div className="p-10" style={{ background:"#0d0d0d" }} initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.5 }}>
            <div className="text-[11px] font-semibold uppercase tracking-[.1em] mb-3" style={{ color:"rgba(255,255,255,0.32)" }}>Free</div>
            <div className="font-display mb-1" style={{ fontSize:68, fontWeight:700, letterSpacing:"-4px", color:"#fff", lineHeight:1 }}>$0</div>
            <div className="text-sm mb-8" style={{ color:"rgba(255,255,255,0.28)" }}>forever · no card needed</div>
            <ul className="space-y-3 mb-10">
              {FREE.map(f=><li key={f} className="flex items-start gap-2.5 text-sm" style={{ color:"rgba(255,255,255,0.52)" }}>
                <span style={{ color:"rgba(255,255,255,0.25)", marginTop:1 }}>✓</span>{f}</li>)}
            </ul>
            <Button href="/auth?tab=signup" variant="secondary" fullWidth size="lg">Get started free</Button>
          </motion.div>
          {/* Pro */}
          <motion.div className="p-10 relative" style={{ background:"#0d0d0d", borderLeft:"1px solid rgba(65,105,225,0.3)", borderTop:"2px solid #4169E1" }}
            initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.5,delay:.1 }}>
            <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
              style={{ background:"rgba(65,105,225,0.12)", borderColor:"rgba(65,105,225,0.3)", color:"#4169E1" }}>Most Popular</div>
            <div className="text-[11px] font-semibold uppercase tracking-[.1em] mb-3" style={{ color:"#4169E1" }}>Pro</div>
            <div className="font-display mb-1" style={{ fontSize:68, fontWeight:700, letterSpacing:"-4px", color:"#fff", lineHeight:1 }}>$29</div>
            <div className="text-sm mb-8" style={{ color:"rgba(255,255,255,0.28)" }}>per month · or $249/year</div>
            <ul className="space-y-3 mb-10">
              {PRO.map(f=><li key={f} className="flex items-start gap-2.5 text-sm" style={{ color:"rgba(255,255,255,0.52)" }}>
                <span style={{ color:"#4169E1", marginTop:1 }}>✓</span>{f}</li>)}
            </ul>
            <Button href="/auth?tab=signup&plan=pro" variant="blue" fullWidth size="lg">Start 7-day free trial</Button>
            <p className="text-center text-xs mt-3" style={{ color:"rgba(255,255,255,0.22)" }}>Trial starts when you connect your first account</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
