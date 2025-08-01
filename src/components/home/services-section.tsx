
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { DraftingCompass, HardHat, Scaling, View, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4 font-bold">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of services, from initial design concepts to final project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 text-center flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary border-transparent border bg-gradient-to-br from-card to-card/60 h-full">
                <CardHeader className="p-0 flex-shrink-0">
                  <div className="mx-auto bg-primary/10 text-primary p-5 rounded-full w-fit mb-6">
                    {category.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4 flex-grow flex items-center">
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
            <Button size="lg" asChild>
                <Link href="/services">
                    Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
