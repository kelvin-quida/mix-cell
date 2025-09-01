import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 mx-auto bg-transparent ">
      <div className="flex items-center gap-2">
        <Link href="#">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </Link>
      </div>
      <ul className="hidden md:flex gap-6 font-medium ">
        <li>
          <Link href="#servicos">Serviços</Link>
        </li>
        <li>
          <Link href="#feedback">Feedbacks</Link>
        </li>
        <li>
          <Link href="#about">Sobre nos</Link>
        </li>
      </ul>
      <button className="bg-transparent text-black px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors">
        Orçamento grátis
      </button>
    </nav>
  );
}
