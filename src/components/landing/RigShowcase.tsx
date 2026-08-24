import rigPhoto from "@/assets/rig-3d-photo.png";

export function RigShowcase() {
  return (
    <div className="relative flex h-[380px] w-full items-end justify-center sm:h-[520px] lg:h-[640px]">
      {/* Подсветка сцены */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 55% 45%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
        }}
      />

      <img
        src={rigPhoto}
        alt="Гусеничная буровая установка для бурения скважин на воду"
        width={1024}
        height={1024}
        className="rig-float relative z-10 h-full w-auto max-w-none object-contain drop-shadow-[0_36px_36px_hsl(0_0%_0%/0.6)] lg:scale-125"
      />

      {/* Контактная тень на «полу» */}
      <div className="pointer-events-none absolute bottom-6 z-0 h-8 w-3/4 rounded-[50%] bg-black/50 blur-2xl" />
    </div>
  );
}
