"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
export default function FinalCTA() {
  return (
    <section className="py-44 px-12 relative overflow-hidden" style={{ background:"#000" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 60% 55% at 50% 50%, rgba(65,105,225,0.08) 0%, transparent 70%)" }}/>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity:0,y:28 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.8 }}>
          <h2 className="font-display mb-6" style={{ fontSize:"clamp(48px,8vw,92px)", fontWeight:700, letterSpacing:"-3px", lineHeight:.94, color:"#fff" }}>
            Your ads are running.<br/><em style={{ fontStyle:"italic", color:"#4169E1" }}>Are you winning?</em>
          </h2>
          <p className="text-[18px] font-light mb-10 mx-auto" style={{ color:"rgba(255,255,255,0.38)", maxWidth:460, lineHeight:1.65 }}>
            Connect in 60 seconds. Wake up tomorrow knowing exactly what to do.
          </p>
          <Button href="/auth?tab=signup" variant="blue" size="lg">Start free — no card needed</Button>
          <p className="mt-5 text-[12px]" style={{ color:"rgba(255,255,255,0.2)", letterSpacing:".04em" }}>Free forever · Cancel Pro anytime · No hidden fees</p>
        </motion.div>
      </div>
    </section>
  );
}
