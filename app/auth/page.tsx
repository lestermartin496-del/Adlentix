"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

function AuthForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { login, signup, isAuthenticated } = useAuth();
  const [tab, setTab] = useState<"signin"|"signup">(params.get("tab")==="signup"?"signup":"signin");
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [pass,setPass]=useState("");
  const [loading,setLoading]=useState(false); const [error,setError]=useState("");

  useEffect(()=>{ if(isAuthenticated) router.replace("/dashboard"); },[isAuthenticated]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setError(""); setLoading(true);
    try {
      if(tab==="signup") await signup(email,pass,name||undefined);
      else await login(email,pass);
      router.push("/dashboard");
    } catch(err:any){ setError(err.message); }
    setLoading(false);
  };

  const inp = "w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all";
  const inpStyle = { background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", fontFamily:"inherit" };
  const inpFocus = { borderColor:"rgba(65,105,225,0.55)", background:"rgba(255,255,255,0.07)" };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative" style={{ background:"#000" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 60% 45% at 50% 25%, rgba(65,105,225,0.07) 0%, transparent 65%)" }}/>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
        backgroundSize:"72px 72px",
        WebkitMaskImage:"radial-gradient(ellipse 70% 55% at 50% 25%, black 20%, transparent 80%)",
      }}/>
      <motion.div className="w-full max-w-[420px] relative z-10"
        initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:.6,ease:[.16,1,.3,1] }}>
        <div className="flex justify-center mb-10"><Logo size={36}/></div>
        <div className="rounded-2xl overflow-hidden" style={{ background:"#0d0d0d", border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 32px 80px rgba(0,0,0,0.6)" }}>
          {/* Tabs */}
          <div className="grid grid-cols-2" style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
            {(["signin","signup"] as const).map(t=>(
              <button key={t} onClick={()=>{ setTab(t); setError(""); }}
                className="py-4 text-[13px] font-medium transition-all"
                style={{ color:tab===t?"#fff":"rgba(255,255,255,0.32)", borderBottom:tab===t?"2px solid #4169E1":"2px solid transparent", background:"transparent", cursor:"pointer", fontFamily:"inherit" }}>
                {t==="signin"?"Sign in":"Create account"}
              </button>
            ))}
          </div>
          <div className="p-8">
            <h1 className="font-display text-[24px] font-bold text-white mb-1">{tab==="signin"?"Welcome back":"Start for free"}</h1>
            <p className="text-[13px] mb-7" style={{ color:"rgba(255,255,255,0.35)" }}>{tab==="signin"?"Sign in to your Adlentix account":"No credit card · Free forever plan"}</p>
            {error && <div className="mb-5 px-4 py-3 rounded-xl text-[13px]" style={{ background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.2)", color:"#fca5a5" }}>{error}</div>}
            <form onSubmit={submit} className="space-y-4">
              {tab==="signup" && <input className={inp} style={inpStyle} placeholder="Full name" value={name} onChange={e=>setName(e.target.value)}
                onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>Object.assign(e.target.style,inpStyle)}/>}
              <input type="email" className={inp} style={inpStyle} placeholder="Email address" required value={email} onChange={e=>setEmail(e.target.value)}
                onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>Object.assign(e.target.style,inpStyle)}/>
              <input type="password" className={inp} style={inpStyle} placeholder={tab==="signup"?"Password (min 8 characters)":"Password"} required value={pass} onChange={e=>setPass(e.target.value)}
                onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>Object.assign(e.target.style,inpStyle)}/>
              <button type="submit" disabled={loading} className="w-full py-4 rounded-xl text-[14px] font-semibold transition-all mt-1" style={{
                background:loading?"rgba(65,105,225,0.5)":"#4169E1", color:"#fff", cursor:loading?"not-allowed":"pointer", fontFamily:"inherit",
                boxShadow:loading?"none":"0 0 28px rgba(65,105,225,0.35)", border:"none",
              }}>{loading?"Please wait…":tab==="signin"?"Sign in →":"Create account →"}</button>
            </form>
            <p className="text-center text-[12px] mt-6" style={{ color:"rgba(255,255,255,0.28)" }}>
              {tab==="signin"?"No account? ":"Already have one? "}
              <button onClick={()=>{ setTab(tab==="signin"?"signup":"signin"); setError(""); }}
                className="transition-colors" style={{ color:"#4169E1", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:"inherit" }}>
                {tab==="signin"?"Sign up free":"Sign in"}
              </button>
            </p>
          </div>
        </div>
        <p className="text-center text-[11px] mt-5" style={{ color:"rgba(255,255,255,0.2)" }}>
          By continuing you agree to our <Link href="/terms" className="hover:text-white/50 transition-colors" style={{ color:"rgba(255,255,255,0.3)" }}>Terms</Link> and <Link href="/privacy" className="hover:text-white/50 transition-colors" style={{ color:"rgba(255,255,255,0.3)" }}>Privacy Policy</Link>
        </p>
      </motion.div>
    </div>
  );
}
export default function AuthPage() { return <Suspense><AuthForm/></Suspense>; }
