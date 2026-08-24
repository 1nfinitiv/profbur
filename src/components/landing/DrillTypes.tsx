import { Reveal } from "./Reveal";
import { CallButton } from "./CallActions";

const types = [
  "Промышленное бурение",
  "Бурение артезианских скважин",
  "Бурение под инъектирование",
  "Бурение скважин под сваи и столбы",
  "Бурение скважин зимой",
  "Скважина под ключ",
  "Строительное водопонижение",
  "Укрепление котлованов",
  "Лидерное бурение скважин",
  "Укрепление фундамента",
  "Бурение малогабаритной установкой",
];

export function DrillTypes() {
  return (
    <section id="types" className="border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-primary">
            Виды бурения
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl">
            Бурим под любую задачу
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Вода, сваи, укрепление грунта и котлованов — техника и оснастка есть под
            каждый вид работ. Стоимость зависит от глубины и породы.
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-wrap gap-3">
          {types.map((t, i) => (
            <Reveal
              as="li"
              key={t}
              delay={(i % 4) * 70}
              direction="scale"
              className="group"
            >
              <span className="font-display flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-3 text-base transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary group-hover:text-primary">
                <span className="size-2 shrink-0 rounded-sm bg-primary transition-transform duration-300 group-hover:scale-150" />
                {t}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-8">
          <CallButton place="types" label="Уточнить цену по вашему виду работ" />
        </Reveal>
      </div>
    </section>
  );
}
