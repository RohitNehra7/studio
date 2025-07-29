import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Modern architectural building"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="modern architecture"
          priority
        />
        <div className="relative z-20 container mx-auto px-4">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Designing with Purpose</h2>
              <p className="text-muted-foreground mb-4">
                At The Archithan Architects, we believe that great architecture is more than just buildings; it's about creating environments that enhance human experience. Our approach blends aesthetic elegance with functional design, ensuring every project is a testament to innovation and quality.
              </p>
              <p className="text-muted-foreground">
                From soaring commercial towers to intimate residential spaces, our portfolio is a narrative of our commitment to excellence and our passion for pushing the boundaries of design.
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl group">
                 <Image
                    src="https://placehold.co/800x600.png"
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
    </div>
  );
}
