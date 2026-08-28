import { CallButton } from "./CallActions";
import { Reveal } from "./Reveal";
import { SERVICE_RADIUS_KM } from "@/lib/site";

const services = [
  {
    n: "01",
    title: "Бурение артезианских скважин",
    text: "Глубина до 120 м, двухтрубная конструкция, установки УРБ-2А2 на КАМАЗе и малогабаритная для узких проездов.",
  },
  {
    n: "02",
    title: "Бурение на известняк",
    text: "Скважина на известняковый водонос — стабильный дебит и чистая вода круглый год. 1 400 ₽ за метр.",
  },
  {
    n: "03",
    title: "Обустройство скважины",
    text: "Кессон или адаптер, подключение, благоустройство, оформление паспорта скважины — от 35 000 ₽.",
  },
  {
    n: "04",
    title: "Монтаж насосного оборудования",
    text: "Подбор насоса по дебиту и глубине, установка фильтров, ввод воды в дом — от 15 000 ₽.",
  },
  {
    n: "05",
    title: "Ремонт и обслуживание скважин",
    text: "Падение дебита, заклинивший насос, обрыв трубы, промывка и прокачка — от 30 000 ₽.",
  },
];

export function Services() {
  return (
    <section id="services" className="surface-steel">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Услуги</h2>
          <p className="mt-3 max-w-xl text-steel-foreground/75">
            Полный цикл работ по скважине в Нижнем Тагиле и городах в радиусе{" "}
            {SERVICE_RADIUS_KM} км: бурение, обустройство, насос, ремонт. Работаем по
            договору, с гарантией, материалы закупаем сами.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-steel-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 80}
              className="group bg-steel/80 p-6 transition-colors duration-300 hover:bg-steel"
            >
              <span className="font-display inline-block text-sm text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                {s.n}
              </span>
              <h3 className="mt-3 text-xl leading-tight transition-colors group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-steel-foreground/70">{s.text}</p>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={400}
            className="flex flex-col justify-between gap-4 bg-primary p-6 text-primary-foreground"
          >
            <p className="font-display text-xl leading-tight">
              Не нашли нужную работу? Позвоните — подскажем по вашей ситуации.
            </p>
            <CallButton
              place="services_card"
              label="Позвонить нам"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            />
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
