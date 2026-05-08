"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const FAQS = [
  { q:"Do I need to know anything about advertising?", a:"No — that's the entire point. Adlentix is built for business owners who aren't marketing experts. Every number is explained in plain English. If you can read a text message, you can use Adlentix." },
  { q:"Will Adlentix change my ads or spend money?", a:"Never. Adlentix is read-only. We connect to your accounts to read performance data but have zero ability to touch your campaigns, change your budget, or spend anything. You stay in full control." },
  { q:"What platforms does Adlentix support right now?", a:"Google Ads, Meta Ads (Facebook & Instagram), and LinkedIn Ads. TikTok is coming soon. Each connects in under 60 seconds via secure OAuth." },
  { q:"What's the difference between Free and Pro?", a:"Free gives you the full dashboard, daily brief, campaign health scores, creative tracking, and 1 spend alert per day — plenty to get started. Pro adds unlimited alerts, AI revenue recommendations (in actual dollars), weekly PDF reports every Monday, unlimited campaigns, and 1-year of history." },
  { q:"How is this different from just using Google Ads reports?", a:"Google Ads shows you numbers. Adlentix tells you what those numbers mean and what to do about them. It watches all your platforms at once, translates everything into plain English, and gives you a clear action plan every morning." },
  { q:"What does '1 alert per day' mean on the free plan?", a:"The free plan includes one spend watchdog alert per 24 hours. If one of your ads crosses a budget threshold, you'll get notified once per day. Pro users get unlimited alerts — notified immediately for every campaign on every platform." },
];
export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section className="py-32 px-12" style={{ background:"#070707" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div className="mb-14" initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
          <div className="text-[12px] font-semibold uppercase tracking-[.14em] mb-4" style={{ color:"#4169E1" }}>FAQ</div>
          <h2 className="font-display" style={{ fontSize:"clamp(34px,4vw,52px)", fontWeight:700, letterSpacing:"-2px", color:"#fff" }}>Questions we hear a lot</h2>
        </motion.div>
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor:"rgba(255,255,255,0.08)" }}>
          {FAQS.map((f,i)=>(
            <motion.div key={i} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:i*.06 }}>
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                style={{ background: i===open?"rgba(65,105,225,0.05)":"#0d0d0d", borderBottom:"1px solid rgba(255,255,255,0.07)", cursor:"pointer" }}
                onClick={()=>setOpen(open===i?null:i)}>
                <span className="text-sm font-medium text-white pr-8">{f.q}</span>
                <span className="text-xl flex-shrink-0 transition-transform duration-200" style={{ color:"rgba(255,255,255,0.35)", transform:open===i?"rotate(45deg)":"none" }}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open===i && (
                  <motion.div initial={{ height:0 }} animate={{ height:"auto" }} exit={{ height:0 }}
                    transition={{ duration:.28, ease:[.23,1,.32,1] }} className="overflow-hidden" style={{ background:"#0a0a0a" }}>
                    <div className="px-6 pb-6 pt-1"><p className="text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.42)" }}>{f.a}</p></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
