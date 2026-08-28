import { useEffect, useState } from "react";
import { Menu, X, Drill } from "lucide-react";
import { CallButton, PhoneLink } from "./CallActions";
import { COMPANY } from "@/lib/site";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#process", label: "Процесс" },
  { href: "#types", label: "Виды бурения" },
  { href: "#gallery", label: "Галерея" },
  { href: "#prices", label: "Цены" },
  { href: "#area", label: "География" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
            <Drill className="size-5" strokeWidth={2.5} />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-lg leading-none">
              {COMPANY}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              бурение скважин · Нижний Тагил
            </span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <PhoneLink place="header" className="hidden text-lg sm:block" />
          <CallButton place="header" size="sm" className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 shrink-0 place-items-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-3 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display block rounded-sm px-2 py-3 text-base hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-2">
            <PhoneLink place="header_mobile_menu" className="px-2 text-2xl" />
            <CallButton place="header_mobile_menu" />
          </div>
        </nav>
      )}
    </header>
  );
}
