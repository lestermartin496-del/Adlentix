"use client";
import { motion } from "framer-motion";
const ROWS = [
  { label:"Monthly cost",             a:"Free or $29",    b:"$1,000–5,000", c:"Your time" },
  { label:"Plain English explanations",a:true,            b:"Sometimes",    c:false },
  { label:"Available 24/7",            a:true,            b:false,          c:false },
  { label:"Daily action plan",         a:true,            b:false,          c:false },
  { label:"Spend alerts",              a:true,            b:false,          c:false },
  { label:"Setup time",                a:"60 seconds",    b:"Weeks",        c:"Ongoing" },
];
const Cell = ({ v, blue }: { v: any; blue?: boolean }) => (
  <div className="p-4 text-center text-sm" style={{ color: blue ? "#fff" : "rgba(255,255,255,0.32)", fontWeight: blue ? 500 : 400 }}>
    {v === true ? <span style={{ color:"#4169E1" }}>✓</span> : v === false ? <span style={{ opacity:.25 }}>—</span> : v}
  </div>
);
export default function CompareTable() {
  return (
    <section className="py-24 px-12" style={{ background:"#070707" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div className="text-center mb-10" initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
          <h2 className="font-display text-[34px] font-bold text-white tracking-[-1.5px]">A smarter choice</h2>
        </motion.div>
        <motion.div className="rounded-2xl overflow-hidden border" style={{ borderColor:"rgba(255,255,255,0.08)" }}
          initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}>
          <div className="grid grid-cols-4 border-b" style={{ borderColor:"rgba(255,255,255,0.08)", background:"#0d0d0d" }}>
            <div className="p-4"/>
            {[["Adlentix","#4169E1"],["Marketing Agency","rgba(255,255,255,0.28)"],["Doing It Yourself","rgba(255,255,255,0.28)"]].map(([h,c])=>(
              <div key={String(h)} className="p-4 text-center text-[11px] font-semibold uppercase tracking-wider" style={{ color:c }}>{h}</div>
            ))}
          </div>
          {ROWS.map((r,i)=>(
            <div key={r.label} className="grid grid-cols-4 divide-x" style={{ background: i%2===0?"#0a0a0a":"#080808", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
              <div className="p-4 text-[13px]" style={{ color:"rgba(255,255,255,0.48)" }}>{r.label}</div>
              <Cell v={r.a} blue/>
              <Cell v={r.b}/>
              <Cell v={r.c}/>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
