import { MapPinned } from "lucide-react";
import { Reveal } from "./Reveal";
import { CallButton } from "./CallActions";
import { SERVICE_CITIES, SERVICE_RADIUS_KM } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="area" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">География работ</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          База в Нижнем Тагиле. Выезжаем на бурение скважин на воду в города и
          посёлки в радиусе {SERVICE_RADIUS_KM} км — малогабаритная установка
          проезжает в узкий двор и на сложный участок.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8">
        <div className="rounded-sm border border-border bg-card p-5 sm:p-6">
          <p className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary">
            <MapPinned className="size-4 shrink-0" />
            Города выезда
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SERVICE_CITIES.map((city) => (
              <li
                key={city}
                className="rounded-sm border border-border/60 bg-background px-3 py-1.5 text-sm text-foreground/90"
              >
                {city}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Не нашли свой населённый пункт? Позвоните — подскажем, сможем ли
            выехать на ваш адрес в пределах {SERVICE_RADIUS_KM} км от Нижнего
            Тагила.
          </p>
          <div className="mt-5">
            <CallButton place="service_area" label="Уточнить выезд" size="md" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
