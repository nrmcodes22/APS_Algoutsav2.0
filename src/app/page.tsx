"use client"
import Hero from "@/components/nupur/hero";
import About from "@/components/nupur/about";
import Prizes from "@/components/nupur/prizes";
import Gallery from "@/components/anwesha/gallary/gallery";
import Sponsorship from "@/components/anwesha/sponsorship/sponser";
import FAQ from "@/components/anwesha/faq/faq";
export default function Home() {
  return (
   <>
   
      <Hero />
      <About />
      <Sponsorship/>
      <Prizes />
      <Gallery/>
      <FAQ/>

    
  </>
  );
}
