"use client";
import { useEffect, useState } from "react";

export default function Tools() {
  const [bgPos, setBgPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setBgPos(window.scrollY / 20);
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className="w-full min-h-[420px] flex flex-col justify-end bg-[url('/fix.jpg')] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundPosition: `center ${-bgPos}px`,
        transition: "background-position 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div className="max-w-5xl mx-auto w-full px-8 pt-20 pb-32 flex flex-col items-start">
        <p className="text-white font-semibold tracking-widest text-base mb-2">
          Utilizamos
        </p>
        <h1 className="text-white font-extrabold text-5xl md:text-6xl leading-tight mb-2">
          Peças de qualidade das
          <br />
          melhores marcas
        </h1>
      </div>
      <div className="w-full flex justify-center -mt-20 pb-8">
        <div className="w-[90vw] max-w-6xl bg-white rounded-xl shadow-lg border border-gray-200 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="flex items-center gap-4 px-8 py-8">
            <img
              src="/logos/mechanic.png"
              alt="Mechanic Logo"
              className="w-10 h-10"
            />
            <span className="text-gray-600 text-2xl font-normal">Mechanic</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-8">
            <img src="/logos/vezr.png" alt="Vezr Logo" className="w-10 h-10" />
            <span className="text-gray-600 text-2xl font-normal">Vezr</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-8">
            <img src="/logos/k.png" alt="KBS Logo" className="w-10 h-10" />
            <span className="text-gray-600 text-2xl font-normal">KBS</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-8">
            <img
              src="/logos/bdk.png"
              alt="Rox Baterias Logo"
              className="w-10 h-10"
            />
            <span className="text-gray-600 text-2xl font-normal">
              Rox Baterias
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
