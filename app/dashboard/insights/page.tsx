"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";

const INSIGHTS = [
  { title:"Move budget from Cold Audience to Summer Sale", dollars:"+$340 est. revenue", detail:"Moving $80/day from Cold Audience (1.8% click rate) to Summer Sale (8.2% click rate) could bring in roughly $340 more in revenue this week based on your current conversion patterns." },
  { title:"Your best time to run ads is Tuesday 9am–2pm", dollars:"+$120 est. revenue", detail:"Looking at your last 4 weeks, Tuesday and Wednesday mornings produce 3× more clicks per dollar than weekend evenings. Shifting budget to those windows could significantly cut your cost per customer." },
  { title:"Summer Sale audience responds to lifestyle imagery", dollars:"Performance insight", detail:"Your lifestyle photo ad outperforms product-only ads by 3.8× in click rate. For your next creative, use images of people using or enjoying your product rather than product-only shots." },
];

export default function InsightsPage() {
  const { user } = useAuth();
  const isPro = user?.plan === "pro";

  if (!isPro) return (
    <div style={{ maxWidth:480 }}>
      <div style={{ borderRadius:20, padding:48, border:"1px solid rgba(65,105,225,0.2)", background:"rgba(65,105,225,0.06)", textAlign:"center" }}>
        <div style={{ fontSize:40, marginBottom:16 }}>✦</div>
        <div className="font-display" style={{ fontSize:24, fontWeight:700, color:"#fff", marginBottom:8 }}>AI Insights is a Pro feature</div>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.65, maxWidth:320, margin:"0 auto 24px" }}>
          Get specific recommendations in dollars — not percentages, not jargon. "Do this exact thing, make this much extra money."
        </p>
        <Link href="/pricing" style={{ display:"inline-block", padding:"12px 28px", borderRadius:12, background:"#4169E1", color:"#fff", fontSize:14, fontWeight:600, textDecoration:"none" }}>
          Upgrade to Pro →
        </Link>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth:680, display:"flex", flexDirection:"column", gap:18 }}>
      <div style={{ marginBottom:8 }}>
        <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>AI Insights</h2>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>Specific recommendations in dollars — not percentages, not jargon</p>
      </div>
      {INSIGHTS.map((ins, i) => (
        <motion.div key={ins.title} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay:i*0.1 }}
          style={{ borderRadius:18, padding:22, border:"1px solid rgba(65,105,225,0.2)", background:"rgba(65,105,225,0.05)" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:16, marginBottom:10 }}>
            <h3 style={{ fontSize:15, fontWeight:600, color:"#fff", lineHeight:1.4 }}>{ins.title}</h3>
            <div className="font-display" style={{ fontSize:18, fontWeight:700, color:"#4169E1", flexShrink:0 }}>{ins.dollars}</div>
          </div>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.65 }}>{ins.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
