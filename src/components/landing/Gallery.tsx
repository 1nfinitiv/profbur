import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import compactHouse from "@/assets/gallery-compact-house-yard.jpg";
import compactOpen from "@/assets/gallery-compact-open-site.jpg";
import compactFoundation from "@/assets/gallery-compact-foundation.jpg";
import kamaz from "@/assets/gallery-kamaz-truck.jpg";
import narrow from "@/assets/gallery-narrow-yard.jpg";
import mast from "@/assets/gallery-drilling-site.jpg";
import site from "@/assets/gallery-under-construction.jpg";
import water from "@/assets/gallery-water-flow.png";

const slides = [
  {
    src: compactHouse,
    tag: "Малогабаритная установка",
    caption: "Основной объём работ — гусеничная установка в узком проезде между домом и забором",
  },
  {
    src: compactOpen,
    tag: "На любом участке",
    caption: "Малогабаритная буровая заезжает туда, куда не проходит большая техника",
  },
  {
    src: compactFoundation,
    tag: "Бурение у дома",
    caption: "Работаем рядом со строящимся домом и фундаментом без лишней грязи на участке",
  },
  {
    src: kamaz,
    tag: "УРБ на КАМАЗе",
    caption: "Выезд бригады с установкой на базе КАМАЗа",
  },
  {
    src: narrow,
    tag: "Узкий проезд",
    caption: "Работаем между постройками, где не проходит большая техника",
  },
  {
    src: mast,
    tag: "Бурение с промывкой",
    caption: "Промывка ствола: вымываем шлам и проходим породу",
  },
  {
    src: site,
    tag: "На участке",
    caption: "Мачта в работе рядом со строящимся домом",
  },
  {
    src: water,
    tag: "Вода пошла",
    caption: "Прокачка скважины до чистой воды",
  },
];

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((v) => (v + dir + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 4500);
    return () => clearInterval(id);
  }, [paused, go]);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">Наши работы</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Реальные фото с объектов: малогабаритная гусеничная установка, бурение с
          промывкой и результат.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div
          className="relative overflow-hidden rounded-sm bg-secondary"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
            {slides.map((s, i) => (
              <img
                key={s.tag}
                src={s.src}
                alt={s.caption}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`absolute inset-0 size-full object-cover transition-all duration-700 ${
                  i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel via-steel/60 to-transparent p-4 pt-16 sm:p-6 sm:pt-24">
              <span className="font-display inline-block bg-primary px-3 py-1 text-sm text-primary-foreground">
                {slides[index].tag}
              </span>
              <p className="mt-2 max-w-xl text-steel-foreground/90">
                {slides[index].caption}
              </p>
            </div>

            <button
              type="button"
              aria-label="Предыдущее фото"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-sm bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Следующее фото"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-sm bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {slides.map((s, i) => (
            <button
              key={s.tag}
              type="button"
              aria-label={s.tag}
              onClick={() => setIndex(i)}
              className={`overflow-hidden rounded-sm border-2 transition-all ${
                i === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={s.src}
                alt={s.tag}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
