"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const heroImages = [
    { src: "/assets/mtn1.png", alt: "Mountain scene" },
    { src: "/assets/board2.jpg", alt: "Board detail" },
  ];
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((prev) => (prev + 1) % heroImages.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section id="collections" className="relative min-h-[80vh] overflow-hidden">
      <Image
        key={heroImages[current].src}
        src={heroImages[current].src}
        alt={heroImages[current].alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center text-white">
        <p className="text-xs uppercase tracking-[0.5em] text-white/80">Lorem ipsum</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Check out these bitchin little boards yall!
        </h1>
        <p className="max-w-2xl text-lg text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam facilis
          lorem sed est. Non accipimus commissiones; sola nostra parva series
          lignorum paratarum in promptu est.
        </p>
        <Button
          asChild
          className="rounded-full bg-[#d9c89c] px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1c16] hover:bg-[#ceb87f]"
        >
          <Link href="#featured">More info</Link>
        </Button>
      </div>
      <button
        type="button"
        aria-label="Previous"
        onClick={goPrev}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 p-3 text-white/80 transition hover:bg-white/10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={goNext}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 p-3 text-white/80 transition hover:bg-white/10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
