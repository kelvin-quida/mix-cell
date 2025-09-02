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
    <main className="min-h-screen max-w-screen overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      {/* <About /> */}
      <Tools />
      <Clients />
      <Devices />
      <Footer />
    </main>
  );
}
