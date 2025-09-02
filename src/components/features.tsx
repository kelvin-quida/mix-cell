export default function Features() {
  const items = [
    { icon: "🔧", text: "Reparo e substituição de componentes" },
    { icon: "📊", text: "Trabalhamos com todas as principais marcas" },
    { icon: "👤", text: "Atendimento ao cliente e garantia" },
  ];

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-11 w-full mx-auto md:mt-10">
        <div
          className="bg-white p-4 rounded-2xl shadow hover:shadow-lg flex flex-col items-center 
                  transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <span className="text-green-500 text-3xl">📱</span>
          <p className="mt-2 font-semibold">Troca de Tela</p>
        </div>

        <div
          className="bg-white p-4 rounded-2xl shadow hover:shadow-lg flex flex-col items-center 
                  transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <span className="text-purple-500 text-3xl">🔋</span>
          <p className="mt-2 font-semibold">Bateria Nova</p>
        </div>

        <div
          className="bg-white p-4 rounded-2xl shadow hover:shadow-lg flex flex-col items-center 
                  transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <span className="text-blue-500 text-3xl">⚡</span>
          <p className="mt-2 font-semibold">Entrada de Carga</p>
        </div>

        <div
          className="bg-white p-4 rounded-2xl shadow hover:shadow-lg flex flex-col items-center 
                  transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <span className="text-blue-400 text-3xl">💧</span>
          <p className="mt-2 font-semibold">Celular Molhado</p>
        </div>

        <div
          className="bg-white p-4 rounded-2xl shadow hover:shadow-lg md:flex flex-col items-center hidden 
                  transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <span className="text-red-500 text-3xl">🛠️</span>
          <p className="mt-2 font-semibold">Outros Serviços</p>
        </div>
      </section>

      {/* <section className="bg-gray-50 p-6 rounded-2xl max-w-xl w-full">
        <h2 className="text-xl font-bold mb-4">Entrega rápida e prática</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-2xl">⏱️</span>
            <p className="text-sm mt-2">Conserto Rápido até 1h</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-2xl">⚙️</span>
            <p className="text-sm mt-2">Peças Originais</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-2xl">🛡️</span>
            <p className="text-sm mt-2">Garantia Estendida</p>
          </div>
        </div>
      </section> */}
    </>
  );
}
