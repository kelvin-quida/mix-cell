export default function Features() {
  const items = [
    { icon: "🔧", text: "Reparo e substituição de componentes" },
    { icon: "📊", text: "Trabalhamos com todas as principais marcas" },
    { icon: "👤", text: "Atendimento ao cliente e garantia" },
  ];

  return (
    <section
      className="max-w-6xl mx-auto rounded-xl shadow-lg p-8 md:p-10"
      style={{
        background: "linear-gradient(135deg, #4a3826, #1b140e)",
        color: "#e6d5b8",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Coluna da Esquerda com o Texto Principal */}
        <div className="text-left">
          <h2 className="text-4xl font-serif">Entrega rápida e prática</h2>
        </div>

        {/* Coluna da Direita com os Ícones */}
        <div className="grid grid-cols-3 gap-6 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Ajuste o tamanho do ícone conforme necessário */}
              <div className="text-4xl mb-3 opacity-80">{item.icon}</div>
              <p className="text-sm opacity-90">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
