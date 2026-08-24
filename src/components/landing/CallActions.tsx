import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, MAX_HREF } from "@/lib/site";
import { trackContact } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { MaxIcon } from "./MaxIcon";

export function CallButton({
  place,
  label = "Позвонить нам",
  className,
  size = "md",
}: {
  place: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <a
      href={PHONE_HREF}
      onClick={() => trackContact("phone", place)}
      className={cn(
        "font-display inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-primary uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        size === "sm" && "px-3 py-2 text-sm",
        size === "md" && "px-5 py-3 text-base",
        size === "lg" && "px-7 py-4 text-lg sm:text-xl",
        className,
      )}
    >
      <Phone className="size-[1.1em] shrink-0" strokeWidth={2.5} />
      <span>{label}</span>
    </a>
  );
}

export function PhoneLink({
  place,
  className,
}: {
  place: string;
  className?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      onClick={() => trackContact("phone", place)}
      className={cn("font-display tracking-wide hover:text-primary", className)}
    >
      {PHONE_DISPLAY}
    </a>
  );
}

const messengers = [{ kind: "max" as const, label: "MAX", href: MAX_HREF, Icon: MaxIcon }];

export function MessengerLinks({
  place,
  className,
}: {
  place: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {messengers.map(({ kind, label, href, Icon }) => (
        <a
          key={kind}
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackContact(kind, place)}
          className="flex min-w-0 items-center gap-2 rounded-sm border border-border/60 bg-card px-4 py-3 text-card-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Icon className="size-5 shrink-0" />
          <span className="min-w-0">
            <span className="font-display block text-sm leading-none">{label}</span>
            <span className="block truncate text-sm text-muted-foreground">
              {PHONE_DISPLAY}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
