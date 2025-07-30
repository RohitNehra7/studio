import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
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
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of services, from initial design concepts to final project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="bg-card text-center flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="mx-auto bg-primary/10 text-primary p-5 rounded-full w-fit mb-6">
                  {category.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-primary">{category.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105">
                <Link href="/services">
                    Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
