import { CallButton } from "./CallActions";
import { Reveal } from "./Reveal";

const meters = [
  { soil: "Бурение артезианской скважины (до 120 м)", price: "1 400 ₽ / метр" },
  { soil: "Обсадная труба 128 мм", price: "1 000 ₽ / метр" },
  { soil: "Обсадная труба 160 мм", price: "1 000 ₽ / метр" },
  { soil: "Труба металлическая 159 мм", price: "4 000 ₽ / метр" },
];

const extras = [
  { name: "Обустройство скважины", price: "от 35 000 ₽" },
  { name: "Монтаж насосного оборудования", price: "от 15 000 ₽" },
  { name: "Ремонт скважины", price: "от 30 000 ₽" },
  { name: "Минимальная сумма заказа", price: "70 000 ₽" },
];

export function Prices() {
  return (
    <section id="prices" className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Цены — информационно</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Бурение — 1 400 ₽ за метр, обсадная труба оплачивается отдельно. Заказы
            берём только в радиусе 300 км от Нижнего Тагила. Пенсионерам и участникам
            СВО — скидка.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal direction="left" className="lift-hover rounded-sm border border-border bg-card p-6">
            <h3 className="text-xl">Бурение и обсадка</h3>
            <ul className="mt-4 divide-y divide-border">
              {meters.map((m) => (
                <li key={m.soil} className="flex flex-wrap justify-between gap-2 py-3">
                  <span className="min-w-0 text-sm">{m.soil}</span>
                  <span className="font-display shrink-0 text-base">{m.price}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            direction="right"
            delay={100}
            className="lift-hover rounded-sm border border-border bg-card p-6"
          >
            <h3 className="text-xl">Дополнительные работы</h3>
            <ul className="mt-4 divide-y divide-border">
              {extras.map((e) => (
                <li key={e.name} className="flex flex-wrap justify-between gap-2 py-3">
                  <span className="min-w-0 text-sm">{e.name}</span>
                  <span className="font-display shrink-0 text-base">{e.price}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="surface-steel mt-6 grid gap-4 rounded-sm p-6 sm:flex sm:items-center sm:justify-between">
          <p className="font-display min-w-0 text-lg">
            Работаем по договору с гарантией, материалы закупаем сами. Точную стоимость
            назовём по телефону.
          </p>
          <CallButton place="prices" label="Узнать по телефону" />
        </Reveal>
      </div>
    </section>
  );
}
