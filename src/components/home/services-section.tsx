import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { DraftingCompass, HardHat, Scaling, View, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    icon: <DraftingCompass className="h-10 w-10" />,
    title: "Core Design",
    description: "Architectural, interior, and landscape design.",
  },
  {
    icon: <Scaling className="h-10 w-10" />,
    title: "Technical & Engineering",
    description: "Structural, BIM, and sustainability consulting.",
  },
  {
    icon: <View className="h-10 w-10" />,
    title: "Visualization & Planning",
    description: "3D renders, master planning, and feasibility.",
  },
  {
    icon: <HardHat className="h-10 w-10" />,
    title: "Execution & Delivery",
    description: "Project management, turnkey solutions, and renovation.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 text-white overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzUzODk0MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Architectural sketch"
            fill
            style={{objectFit: 'cover'}}
            className="z-0"
            data-ai-hint="architectural sketch"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/80 to-black/60 z-10" />
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl text-white mb-4">Our Expertise</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We offer a comprehensive range of services, from initial design concepts to final project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 border-white/20 text-center flex flex-col items-center p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="mx-auto bg-white/10 text-white p-5 rounded-full w-fit mb-6">
                  {category.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-white">{category.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
            <Button size="lg" asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-transform duration-300 hover:scale-105">
                <Link href="/services">
                    Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
