import { useState } from "react";
import { Ruler, Clock, MapPin } from "lucide-react";
import { WORK_HOURS, SERVICE_AREA, RADIUS } from "@/lib/site";

const FACTS = [
  {
    icon: Ruler,
    title: "Проезд от 1,5 м",
    text: "Малогабаритная установка заходит в тесный двор",
  },
  {
    icon: Clock,
    title: WORK_HOURS,
    text: "Выезд мастера по городу и области",
  },
  {
    icon: MapPin,
    title: SERVICE_AREA,
    text: `${RADIUS} от Нижнего Тагила — заказы дальше не берём`,
  },
];

export function HeroFacts() {
  const [active, setActive] = useState(0);

  return (
    <ul className="grid gap-2">
      {FACTS.map((f, i) => {
        const Icon = f.icon;
        const isActive = i === active;
        return (
          <li key={f.title}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              className={`group grid w-full grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-sm border-l-2 px-4 py-3 text-left transition-all duration-300 ${
                isActive
                  ? "border-primary bg-steel-foreground/10"
                  : "border-steel-foreground/20 bg-transparent hover:border-primary/60"
              }`}
            >
              <Icon
                className={`mt-0.5 size-5 shrink-0 transition-colors ${
                  isActive ? "text-primary" : "text-steel-foreground/50"
                }`}
              />
              <span className="min-w-0">
                <span className="font-display block text-base leading-tight sm:text-lg">
                  {f.title}
                </span>
                <span
                  className={`grid transition-all duration-300 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden text-sm text-steel-foreground/70">
                    {f.text}
                  </span>
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
