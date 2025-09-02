import Image from "next/image";
import Features from "./features";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/oi.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10 h-"
        quality={100}
      />
      <div className="h-full">
        <Navbar />
        <div className="flex flex-col gap-10 items-center justify-center">
          <section className="mx-auto px-6 py-6 flex flex-col md:flex-row items-center gap-8 mt-16">
            <div className="flex justify-between mx-auto text-center md:text-left gap-44 items-center">
              <div className="flex flex-col gap-3">
                <p className="text-white">Bem-vindo à</p>
                <h1 className="max-md:text-4xl text-6xl font-bold uppercase text-white">
                  Mix Celulares
                </h1>
                <p className="text-lg text-white">
                  Especialista em todas as Marcas
                </p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full w-full mx-auto">
                  Whatsapp
                </button>
              </div>
              <div className="hidden md:block">
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
