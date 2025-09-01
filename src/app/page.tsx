import About from "@/components/about";
import Clients from "@/components/clients";
import Devices from "@/components/devices";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <main className="bg-brand-yellow min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Tools />
      <Clients />
      <Devices />
      <div className="max-w-6xl mx-auto px-6"></div>
      <Footer />
    </main>
  );
}
