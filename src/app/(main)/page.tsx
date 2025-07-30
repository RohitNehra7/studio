"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Gem, Palette, Mail, Phone, MapPin } from "lucide-react";
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

export default function HomePage() {
   const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  
  return (
    <div className="animate-in fade-in duration-500">
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
        <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-sm" />
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

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8 text-center md:text-left">Our Approach to Excellence</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Palette className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Aesthetic Elegance</h3>
                    <p className="text-muted-foreground">Fusing timeless beauty with functional design to create inspiring and livable spaces.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Zap className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Innovative Solutions</h3>
                    <p className="text-muted-foreground">Leveraging cutting-edge technology to redefine what's possible in modern architecture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Gem className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Uncompromising Quality</h3>
                    <p className="text-muted-foreground">Committed to the highest standards of craftsmanship from concept to completion.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center md:text-left">
                <Button variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl group">
                 <Image
                    src="https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NTM4OTU3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Interior of a modern building"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint="modern interior"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Let's Build Together</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Have a project in mind or just want to learn more? We'd love to connect with you.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div className="flex flex-col items-center gap-3">
              <div className="bg-accent/20 text-accent p-4 rounded-full">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Office</h3>
              <p className="text-muted-foreground">123 Architecture Ave, Design City</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-accent/20 text-accent p-4 rounded-full">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
              <p className="text-muted-foreground">contact@thearchithanarchitects.com</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-accent/20 text-accent p-4 rounded-full">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
              <p className="text-muted-foreground">(123) 456-7890</p>
            </div>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
