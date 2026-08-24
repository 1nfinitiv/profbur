import { CallButton, PhoneLink } from "./CallActions";
import { RigShowcase } from "./RigShowcase";
import { HeroFacts } from "./HeroFacts";
import { SLOGAN_BADGE, SLOGAN_MAIN, SLOGAN_SECOND } from "@/lib/site";
import heroRig from "@/assets/hero-rig.jpg";

export function Hero() {
  return (
    <section id="top" className="surface-steel relative overflow-hidden">
      <img
        src={heroRig}
        alt="Гусеничная буровая установка работает в узком проезде между домом и забором"
        width={1600}
        height={1008}
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-20 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:px-6 lg:py-28">
        <div>
          <span className="font-display inline-block bg-primary px-3 py-1 text-sm text-primary-foreground">
            {SLOGAN_BADGE}
          </span>
          <h1 className="mt-5 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
            Бурение скважин на воду в Нижнем Тагиле
          </h1>
          <ul className="mt-5 grid max-w-xl gap-2 text-lg text-steel-foreground/85">
            {[SLOGAN_MAIN, SLOGAN_SECOND].map((s) => (
              <li key={s} className="flex gap-3">
                <span className="mt-2.5 size-2.5 shrink-0 bg-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CallButton place="hero" label="Позвонить мастеру" size="lg" />
            <PhoneLink place="hero" className="text-2xl text-steel-foreground sm:text-3xl" />
          </div>

          <div className="mt-10">
            <HeroFacts />
          </div>

          <div className="mt-8 overflow-hidden rounded-full">
            <div className="hatch hatch-scroll h-1.5 w-full" />
          </div>
        </div>

        <RigShowcase />
      </div>
    </section>
  );
}
