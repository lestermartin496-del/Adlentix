"use client";
import { motion } from "framer-motion";
export default function ProofBar() {
  return (
    <motion.section className="border-y py-5 px-12"
      style={{ borderColor:"rgba(255,255,255,0.07)", background:"#080808" }}
      initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {["#4169E1","#2952cc","#374151","#1c1c1e","#111"].map((bg,i)=>(
              <div key={i} className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold text-white" style={{ background:bg }}>
                {String.fromCharCode(65+i)}
              </div>
            ))}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">2,400+ business owners</div>
            <div className="text-xs" style={{ color:"rgba(255,255,255,0.38)" }}>already using Adlentix</div>
          </div>
        </div>
        <div className="flex items-center gap-2" style={{ fontSize:11, fontWeight:600, color:"rgba(255,255,255,0.3)", letterSpacing:".1em", textTransform:"uppercase" }}>
          Connects with
        </div>
        <div className="flex items-center gap-7">
          {[["🔵","Google Ads"],["📘","Meta Ads"],["💼","LinkedIn Ads"]].map(([icon,name])=>(
            <div key={name} className="flex items-center gap-2">
              <span className="text-xl">{icon}</span>
              <span className="text-sm font-medium" style={{ color:"rgba(255,255,255,0.55)" }}>{name}</span>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#4169E1" }}/>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color:"rgba(255,255,255,0.3)" }}>Avg. wasted spend caught:</span>
          <span className="font-display text-xl font-medium text-white">$420</span>
          <span className="text-sm" style={{ color:"rgba(255,255,255,0.3)" }}>/ month</span>
        </div>
      </div>
    </motion.section>
  );
}
