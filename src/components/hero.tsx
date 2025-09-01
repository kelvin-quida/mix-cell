import Image from "next/image";
import Features from "./features";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/bg-images.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10 h-"
      />
      <div className="h-full">
        <Navbar />
        <div className="flex flex-col gap-10 items-center justify-center">
          <section className="mx-auto px-6 py-6 flex flex-col md:flex-row items-center gap-8 mt-16">
            <div className="flex justify-between mx-auto text-center md:text-left gap-44 items-center">
              <div className="flex flex-col gap-3">
                <p className="">Bem-vindo à</p>
                <h1 className="text-6xl font-bold uppercase">Mix Cell</h1>
                <p className="text-lg">Especialista em todas as Marcas</p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full">
                  Whatsapp
                </button>
              </div>
              <div className="">
                <Image
                  src="/iphones.png"
                  alt="iphone"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </section>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 ">
            <Features />
          </div>
        </div>
      </div>
    </div>
  );
}
