import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Advantages } from "@/components/landing/Advantages";
import { Services } from "@/components/landing/Services";
import { DrillProcess } from "@/components/landing/DrillProcess";
import { DrillTypes } from "@/components/landing/DrillTypes";
import { Gallery } from "@/components/landing/Gallery";
import { Prices } from "@/components/landing/Prices";
import { Contacts } from "@/components/landing/Contacts";
import { StickyCallBar, StickyMessengers } from "@/components/landing/StickyCall";
import { initAnalytics } from "@/lib/analytics";
import { SITE_URL } from "@/lib/site";

const title = "Бурение скважин на воду в Нижнем Тагиле — ПрофБур";
const description =
  "Бурение артезианских скважин на воду до 120 м в Нижнем Тагиле и Свердловской области. Обустройство, монтаж насоса, ремонт скважин. Опыт более 10 лет, договор и гарантия.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: SITE_URL ? [{ rel: "canonical", href: `${SITE_URL}/` }] : [],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="scroll-smooth pb-16 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <DrillProcess />
        <DrillTypes />
        <Gallery />
        <Prices />
        <Contacts />
      </main>
      <StickyCallBar />
      <StickyMessengers />
    </div>
  );
}
