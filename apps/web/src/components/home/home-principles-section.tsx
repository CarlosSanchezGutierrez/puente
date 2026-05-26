const principles = [
  "Alcance claro antes de construir.",
  "Herramientas simples de explicar.",
  "Documentacion suficiente para continuar.",
  "Datos y reportes cuando aporten valor real.",
];

export function HomePrinciplesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="grid gap-8 rounded-[1.5rem] border border-[#d7dedf] bg-white/70 p-6 md:grid-cols-[0.75fr_1.25fr] md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Criterio
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#10233f] md:text-5xl">
            Menos ruido. Mas utilidad.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              className="border-t border-[#d7dedf] pt-4 text-sm leading-7 text-[#425875]"
              key={principle}
            >
              {principle}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
