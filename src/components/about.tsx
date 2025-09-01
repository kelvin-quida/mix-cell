"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useInView, useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [20, 0]);

  // useEffect(() => {
  //   if (!isInView) return;
  //   document.fonts.ready.then(() => {
  //     if (!containerRef.current) return;
  //     containerRef.current.style.visibility = "visible";
  //     const { words } = splitText(titleRef.current!);
  //     animate(
  //       words,
  //       { opacity: [0, 1], y: [20, 0] },
  //       {
  //         type: "spring",
  //         duration: 3,
  //         bounce: 0.5,
  //         delay: stagger(0.05),
  //       }
  //     );
  //   });
  // }, [isInView]);

  return (
    <motion.div
      id="about"
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center"
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 2, bounce: 0.2 }}
        className="flex flex-col gap-12"
      >
        <Image
          src="/team.png"
          alt="Equipe"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </motion.div>
      <div>
        <motion.h2
          ref={titleRef}
          style={{
            opacity,
            y,
          }}
          className="text-2xl font-bold mb-4"
        >
          Um pouco Sobre nós{" "}
        </motion.h2>
        <motion.p
          className="mb-4"
          ref={titleRef}
          style={{
            opacity,
            y,
          }}
        >
          Na Mix Cell, acreditamos que a tecnologia deve facilitar a sua vida,
          não complicá-la. Por isso, oferecemos soluções ágeis e eficientes para
          manter você sempre conectado. Com um atendimento de qualidade e um
          compromisso real com a satisfação dos nossos clientes, estamos aqui
          para tornar sua experiência mais simples e sem preocupações.
        </motion.p>
      </div>
    </motion.div>
  );
}
