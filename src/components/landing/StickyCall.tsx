import { MessengerLinks, PhoneLink } from "./CallActions";
import { CallButton } from "./CallActions";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2 backdrop-blur sm:hidden">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <PhoneLink place="sticky_bar" className="min-w-0 truncate text-xl" />
        <CallButton
          place="sticky_bar"
          label="Позвонить"
          size="sm"
          className="pulse-ring"
        />
      </div>
    </div>
  );
}

export function StickyMessengers() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-40 hidden lg:block">
      <div className="pointer-events-auto">
        <MessengerLinks place="sticky_side" className="flex-col shadow-[var(--shadow-hard)]" />
      </div>
    </div>
  );
}
