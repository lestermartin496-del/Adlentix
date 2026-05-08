"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const inputStyle: React.CSSProperties = {
  width:"100%", padding:"13px 16px", borderRadius:12,
  background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)",
  color:"#fff", fontSize:14, outline:"none",
  fontFamily:"-apple-system, 'SF Pro Display', 'Inter', sans-serif",
  transition:"border-color 0.15s",
};

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const section = (title: string, children: React.ReactNode) => (
    <div style={{ borderRadius:18, border:"1px solid rgba(255,255,255,0.07)", background:"#0d0d0d", padding:24, marginBottom:16 }}>
      <div className="font-display" style={{ fontSize:16, fontWeight:700, color:"#fff", marginBottom:18 }}>{title}</div>
      {children}
    </div>
  );

  return (
    <div style={{ maxWidth:520 }}>
      <div style={{ marginBottom:24 }}>
        <h2 className="font-display" style={{ fontSize:32, fontWeight:700, color:"#fff", marginBottom:4 }}>Settings</h2>
      </div>

      {section("Account", (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {[{label:"Full name", val:user?.full_name||"", type:"text"},{label:"Email address", val:user?.email||"", type:"email"}].map(f=>(
            <div key={f.label}>
              <label style={{ display:"block", fontSize:12, fontWeight:500, color:"rgba(255,255,255,0.35)", marginBottom:6 }}>{f.label}</label>
              <input type={f.type} defaultValue={f.val} style={inputStyle}
                onFocus={e=>(e.target.style.borderColor="rgba(65,105,225,0.5)")}
                onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.09)")}/>
            </div>
          ))}
          <button onClick={handleSave} style={{
            padding:"12px 24px", borderRadius:12, border:"none",
            background: saved ? "#1a1a1a" : "#4169E1",
            color: saved ? "rgba(255,255,255,0.4)" : "#fff",
            fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit",
            transition:"all 0.15s", alignSelf:"flex-start",
          }}>
            {saved ? "✓ Saved" : "Save changes"}
          </button>
        </div>
      ))}

      {section("Notifications", (
        <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
          {[
            { label:"Daily brief email", sub:"Sent at 7:00 AM every morning", on:true },
            { label:"Weekly report email", sub:"Sent Monday at 7:00 AM (Pro)", on:true, pro:true },
            { label:"Spend alert notifications", sub:"When a campaign crosses your limit", on:true },
          ].map((item, i) => (
            <div key={item.label} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:14, paddingBottom:14, borderBottom: i<2?"1px solid rgba(255,255,255,0.05)":"none" }}>
              <div>
                <div style={{ fontSize:13, fontWeight:500, color:"#fff", display:"flex", alignItems:"center", gap:6 }}>
                  {item.label}
                  {item.pro && <span style={{ fontSize:9, fontWeight:700, padding:"2px 6px", borderRadius:4, background:"rgba(65,105,225,0.15)", color:"#4169E1", border:"1px solid rgba(65,105,225,0.2)" }}>PRO</span>}
                </div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.28)", marginTop:2 }}>{item.sub}</div>
              </div>
              <ToggleSwitch on={item.on} />
            </div>
          ))}
        </div>
      ))}

      {/* Sign out */}
      <div style={{ borderRadius:18, border:"1px solid rgba(239,68,68,0.12)", background:"rgba(239,68,68,0.04)", padding:20 }}>
        <div style={{ fontSize:13, fontWeight:600, color:"#fff", marginBottom:4 }}>Sign out</div>
        <p style={{ fontSize:12, color:"rgba(255,255,255,0.3)", marginBottom:14 }}>You&#39;ll be returned to the homepage.</p>
        <button onClick={() => { logout(); router.push("/"); }}
          style={{ padding:"9px 20px", borderRadius:10, background:"transparent", border:"1px solid rgba(239,68,68,0.25)", color:"#f87171", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", transition:"all 0.15s" }}
          onMouseEnter={e=>(e.currentTarget.style.background="rgba(239,68,68,0.08)")}
          onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
          Sign out
        </button>
      </div>
    </div>
  );
}

function ToggleSwitch({ on: initial }: { on: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <button onClick={() => setOn(!on)} style={{
      width:38, height:22, borderRadius:11,
      background: on ? "#4169E1" : "rgba(255,255,255,0.1)",
      border:"none", cursor:"pointer", position:"relative", transition:"background 0.2s", flexShrink:0,
    }}>
      <div style={{ position:"absolute", top:2, width:18, height:18, borderRadius:"50%", background:"#fff", transition:"left 0.2s", left: on ? 18 : 2 }}/>
    </button>
  );
}
