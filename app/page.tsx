import Nav from "@/components/layout/Nav";
import Hero from "@/components/landing/Hero";
import ProofBar from "@/components/landing/ProofBar";
import PlainEnglish from "@/components/landing/PlainEnglish";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import CompareTable from "@/components/landing/CompareTable";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProofBar />
      <PlainEnglish />
      <HowItWorks />
      <Features />
      <CompareTable />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
