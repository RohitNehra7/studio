"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const heroImages = [
  { src: "https://images.unsplash.com/photo-1663940019982-c14294717dbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTM4OTU3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Modern architectural building", hint: "architecture building" },
  { src: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NTM4OTU3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Modern house interior", hint: "modern interior" },
  { src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE3NTM4OTU3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Luxury villa with pool", hint: "luxury house" },
  { src: "https://images.unsplash.com/photo-1512414769075-82d2c45d4be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzdHlsaXNoJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzUzODk1NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Stylish living room", hint: "stylish interior" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzcGFjZXxlbnwwfHx8fDE3NTM4OTU3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Modern office space", hint: "office space" },
];

export function HeroSection() {
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
         <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
         <Carousel
          plugins={[plugin.current]}
          className="absolute inset-0 w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{objectFit: 'cover'}}
                  className="z-0"
                  data-ai-hint={image.hint}
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight">
            The Archithan Architects
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-foreground/90">
            Crafting Tomorrow's Landmarks, Today.
          </p>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-foreground/80">
            Founded by visionary architect Aisha Shabeeh Shaheen, we are dedicated to designing spaces that inspire and endure.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/projects">
                Explore Our Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
}
