import { MapPin, Clock } from "lucide-react";
import { CallButton, MessengerLinks, PhoneLink } from "./CallActions";
import { SERVICE_AREA, WORK_HOURS, COMPANY, ADDRESS, RADIUS, SERVICE_CITIES_TEXT, SERVICE_RADIUS_KM } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Contacts() {
  return (
    <section id="contacts" className="surface-steel">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Контакты</h2>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left">
            <p className="text-sm uppercase tracking-widest text-primary">
              Звоните напрямую мастеру
            </p>
            <PhoneLink
              place="contacts"
              className="mt-2 block text-4xl leading-none text-steel-foreground sm:text-5xl"
            />
            <div className="mt-6 flex flex-wrap gap-4">
              <CallButton place="contacts" size="lg" />
            </div>

            <p className="mt-8 text-sm uppercase tracking-widest text-steel-foreground/60">
              Мессенджеры
            </p>
            <MessengerLinks place="contacts" className="mt-3" />

            <ul className="mt-8 grid gap-3 text-steel-foreground/80">
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{WORK_HOURS}</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  {ADDRESS}
                  <span className="block text-steel-foreground/60">
                    {SERVICE_AREA} — {RADIUS.toLowerCase()}
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <p className="text-sm uppercase tracking-widest text-steel-foreground/60">
              Зона обслуживания
            </p>
            <div className="mt-3 overflow-hidden rounded-sm border border-steel-foreground/15">
              <iframe
                title="Карта зоны обслуживания"
                src="https://www.openstreetmap.org/export/embed.html?bbox=57.405%2C56.57%2C62.525%2C59.27&layer=mapnik&marker=57.9195%2C59.9650"
                loading="lazy"
                className="h-[320px] w-full border-0 sm:h-[420px]"
              />
            </div>
            <p className="mt-3 text-sm text-steel-foreground/60">
              Нижний Тагил, ул. Пархоменко. Выезжаем в города в радиусе {SERVICE_RADIUS_KM}{" "}
              км: {SERVICE_CITIES_TEXT}. Дальние адреса обсуждаем по телефону.
            </p>
          </Reveal>
        </div>

        <p className="mt-14 border-t border-steel-foreground/15 pt-6 text-sm text-steel-foreground/50">
          © {new Date().getFullYear()} {COMPANY}. Бурение артезианских скважин на воду в
          Нижнем Тагиле и Свердловской области.
        </p>
      </div>
    </section>
  );
}
