"use client";
import { motion } from "framer-motion";
const TERMS = [
  { jargon:"CTR",        plain:"How often people click your ad",         ex:"8 out of every 100 who see it click it." },
  { jargon:"CPC",        plain:"What you pay each time someone clicks",  ex:"That one visitor cost you $1.20." },
  { jargon:"Impressions",plain:"How many people saw your ad",            ex:"142,400 people scrolled past it this week." },
  { jargon:"ROAS",       plain:"How much money you made per dollar",     ex:"You spent $1 and made $4.20 back." },
  { jargon:"Conversion", plain:"Someone who clicked and then bought",    ex:"284 people bought after clicking." },
  { jargon:"Ad Fatigue", plain:"Your audience is tired of seeing it",    ex:"Clicks are dropping — time for a fresh ad." },
];
export default function PlainEnglish() {
  return (
    <section className="py-32 px-12" style={{ background:"#000" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-14" initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }}>
          <div className="text-[12px] font-semibold uppercase tracking-[.14em] mb-4" style={{ color:"#4169E1" }}>Built for real people</div>
          <h2 className="font-display mb-4" style={{ fontSize:"clamp(38px,5vw,62px)", fontWeight:700, letterSpacing:"-2px", lineHeight:1.0, color:"#fff" }}>
            We speak human.<br/><em style={{ fontStyle:"italic", color:"rgba(255,255,255,0.35)" }}>Not ad-speak.</em>
          </h2>
          <p className="text-[17px] font-light mx-auto" style={{ color:"rgba(255,255,255,0.42)", maxWidth:480, lineHeight:1.65 }}>
            Every number in Adlentix is explained in plain English. No jargon. No confusion. Just clarity.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden border" style={{ background:"rgba(255,255,255,0.06)", borderColor:"rgba(255,255,255,0.07)" }}>
          {TERMS.map((t,i)=>(
            <motion.div key={t.jargon} className="p-7 hover:bg-white/[0.03] transition-colors"
              style={{ background:"#0d0d0d" }}
              initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
              transition={{ duration:.5, delay:i*.07 }}>
              <div className="inline-block font-mono text-[11px] px-2.5 py-1 rounded-md border mb-4"
                style={{ background:"rgba(255,255,255,0.05)", borderColor:"rgba(255,255,255,0.09)", color:"rgba(255,255,255,0.35)" }}>
                {t.jargon}
              </div>
              <div className="text-sm font-semibold text-white mb-2 leading-snug">{t.plain}</div>
              <div className="text-xs italic" style={{ color:"rgba(255,255,255,0.32)", lineHeight:1.6 }}>&ldquo;{t.ex}&rdquo;</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
