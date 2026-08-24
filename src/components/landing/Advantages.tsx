import { Route, FileCheck, ShieldCheck, Layers, BadgePercent } from "lucide-react";
import { CallButton } from "./CallActions";
import { Reveal } from "./Reveal";

const items = [
  {
    Icon: Route,
    title: "Малогабаритная установка: проезд 1,5 × 2 м",
    text: "Заходим в тесный двор и между постройками. Для открытых участков — УРБ-2А2 на КАМАЗе.",
  },
  {
    Icon: Layers,
    title: "Двухтрубная конструкция скважины",
    text: "Только качественные материалы: труба 128 и 160 мм, металл 159 мм, мощные компрессоры Airman 530.",
  },
  {
    Icon: ShieldCheck,
    title: "Опыт более 10 лет",
    text: "Бригада 2–4 мастера, артезианские скважины глубиной до 120 м, гарантия на работы.",
  },
  {
    Icon: FileCheck,
    title: "Работа по договору",
    text: "Договор, расписка, акт, паспорт скважины. Материалы закупаем сами — вам не нужно ничего искать.",
  },
  {
    Icon: BadgePercent,
    title: "Скидки пенсионерам и участникам СВО",
    text: "Работаем ежедневно кроме воскресенья с 08:00 до 22:00, выезд по всему городу и области.",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <Reveal className="grid gap-4 sm:flex sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Почему выбирают ПрофБур</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Свой парк техники, опыт более 10 лет и работа по договору. Участок без подъезда
            для нас рабочая ситуация, а не отказ.
          </p>
        </div>
        <CallButton place="advantages" size="sm" />
      </Reveal>

      <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, text }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 80}
            direction="scale"
            className="group bg-card p-6"
          >
            <Icon
              className="size-8 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6"
              strokeWidth={2}
            />
            <h3 className="mt-4 text-lg leading-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </Reveal>
        ))}
        <Reveal
          as="li"
          delay={400}
          direction="scale"
          className="surface-steel flex flex-col justify-between gap-4 p-6"
        >
          <p className="font-display text-xl leading-tight">
            Сомневаетесь, заедет ли техника на ваш участок?
          </p>
          <CallButton place="advantages_card" label="Спросить у мастера" />
        </Reveal>
      </ul>
    </section>
  );
}
