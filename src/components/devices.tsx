export default function Devices() {
  const devices = [
    { title: "Celulares", desc: "Umoilas out dels arviâvelcis", icon: "📱" },
    { title: "Tablets", desc: "Clonariisinia qlus qamdsipiima", icon: "💻" },
    { title: "MacBooks", desc: "Rediciela mit auriou oficium", icon: "🖥️" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">
          Quais dispositivos consertamos?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {devices.map((d, i) => (
            <div
              key={i}
              className="p-6 bg-background-primary rounded-lg shadow text-center"
            >
              <div className="text-4xl mb-4">{d.icon}</div>
              <h3 className="font-bold">{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
