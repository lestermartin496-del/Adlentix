import Link from "next/link";
export default function PrivacyPage() {
  return (
    <main style={{ background:"#000", minHeight:"100vh", padding:"120px 48px 80px", maxWidth:640, margin:"0 auto" }}>
      <Link href="/" style={{ fontSize:13, color:"rgba(255,255,255,0.3)", textDecoration:"none", display:"inline-block", marginBottom:40 }}>← Back</Link>
      <h1 className="font-display" style={{ fontSize:48, fontWeight:700, color:"#fff", marginBottom:16, letterSpacing:"-2px" }}>Privacy Policy</h1>
      <p style={{ fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.8 }}>
        Adlentix connects to your ad accounts using read-only OAuth. We never store passwords,
        never modify campaigns, and never share your data with third parties.
        Questions? Email us at <a href="mailto:legal@adlentix.app" style={{ color:"#4169E1" }}>legal@adlentix.app</a>
      </p>
    </main>
  );
}
