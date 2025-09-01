export default function Devices() {
  const devices = [
    { title: "Celulares", desc: "Umoilas out dels arviâvelcis", icon: "📱" },
    { title: "Tablets", desc: "Clonariisinia qlus qamdsipiima", icon: "💻" },
    { title: "MacBooks", desc: "Rediciela mit auriou oficium", icon: "🖥️" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Quais dispositivos consertamos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Celulares */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-4">Celulares</h3>
            <ul className="text-gray-600 text-left space-y-2 mb-6">
              <li>✅ Troca de tela</li>
              <li>✅ Substituição de bateria</li>
              <li>✅ Reparo de placa</li>
              <li>✅ Problemas de software</li>
            </ul>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Solicitar orçamento
            </button>
          </div>

          {/* Tablets */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-4">Tablets</h3>
            <ul className="text-gray-600 text-left space-y-2 mb-6">
              <li>✅ Tela quebrada</li>
              <li>✅ Troca de bateria</li>
              <li>✅ Sistema lento</li>
              <li>✅ Botões e sensores</li>
            </ul>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Solicitar orçamento
            </button>
          </div>

          {/* MacBooks */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-4">🖥️</div>
            <h3 className="text-xl font-semibold mb-4">MacBooks</h3>
            <ul className="text-gray-600 text-left space-y-2 mb-6">
              <li>✅ Troca de teclado</li>
              <li>✅ Manutenção preventiva</li>
              <li>✅ Upgrade de SSD</li>
              <li>✅ Reparo de fonte</li>
            </ul>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Solicitar orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
