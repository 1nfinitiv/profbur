import { useEffect, useState } from "react";
import { CallButton } from "./CallActions";
import { Reveal } from "./Reveal";
import stepMarking from "@/assets/step-1-marking.jpg";
import stepMarkingWebp from "@/assets/step-1-marking.webp";
import stepDrilling from "@/assets/step-2-drilling.jpg";
import stepDrillingWebp from "@/assets/step-2-drilling.webp";
import stepCasing from "@/assets/step-3-casing.jpg";
import stepCasingWebp from "@/assets/step-3-casing.webp";
import stepWater from "@/assets/step-4-water.jpg";
import stepWaterWebp from "@/assets/step-4-water.webp";

const steps = [
  {
    title: "Выезд и разметка",
    text: "Смотрим участок, выбираем точку и заезд для гусеничной установки.",
    img: stepMarking,
    imgWebp: stepMarkingWebp,
    alt: "Мастер размечает точку бурения на участке, рядом гусеничная установка",
  },
  {
    title: "Проходка ствола",
    text: "Бурим с промывкой, проходим песок, глину и скальные породы.",
    img: stepDrilling,
    imgWebp: stepDrillingWebp,
    alt: "Бурильная колонна с промывкой входит в ствол скважины",
  },
  {
    title: "Обсадка и фильтр",
    text: "Ставим колонну и фильтр, изолируем верховодку от чистого горизонта.",
    img: stepCasing,
    imgWebp: stepCasingWebp,
    alt: "Рабочие опускают обсадную трубу с фильтром в скважину",
  },
  {
    title: "Прокачка до чистой воды",
    text: "Прокачиваем скважину и замеряем дебет — сдаём с чистой водой.",
    img: stepWater,
    imgWebp: stepWaterWebp,
    alt: "Чистая вода бьёт из новой скважины при прокачке",
  },
];


export function DrillProcess() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % steps.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="process" className="border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Как проходит бурение</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            От разметки точки до чистой воды — обычно один день работы на участке.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal direction="left">
            <ol className="grid gap-2">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.title}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-sm border-l-2 px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-secondary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span
                        className={`font-display text-2xl leading-none transition-colors ${
                          isActive ? "text-primary" : "text-muted-foreground/50"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <h3 className="font-display block text-lg leading-tight">
                          {s.title}
                        </h3>
                        <span
                          className={`grid transition-all duration-300 ${
                            isActive
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <span className="overflow-hidden text-sm text-muted-foreground">
                            {s.text}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="mt-6">
              <CallButton place="process" label="Спросить про свой участок" />
            </div>
          </Reveal>

          <Reveal direction="right" className="flex justify-center">
            <StepPhotos active={active} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StepPhotos({ active }: { active: number }) {
  return (
    <div className="w-full max-w-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-secondary">
        {steps.map((s, i) => (
          <picture
            key={s.title}
            className={`absolute inset-0 block size-full transition-all duration-700 ${
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <source srcSet={s.imgWebp} type="image/webp" />
            <img
              src={s.img}
              alt={s.alt}
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </picture>
        ))}
        <span className="font-display absolute bottom-0 left-0 bg-steel/90 px-3 py-2 text-sm text-steel-foreground">
          {String(active + 1).padStart(2, "0")} — {steps[active].title}
        </span>
      </div>

      <div className="mt-3 flex gap-1.5">
        {steps.map((s, i) => (
          <span
            key={s.title}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
              i === active ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

