
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const projects = [
  { 
    id: 1, 
    title: 'EcoVista Residences', 
    category: 'Residential', 
    images: [
      { src: '/media/projects/ecoVista/ecoVista-1.jpg', hint: 'sustainable apartment exterior' },
      { src: '/media/projects/ecoVista/ecoVista-2.jpg', hint: 'living room with green wall' },
      { src: '/media/projects/ecoVista/ecoVista-3.jpg', hint: 'rooftop garden terrace' },
    ],
    description: 'EcoVista Residences sets a new standard for sustainable urban living. This project masterfully blends biophilic design with cutting-edge green technology, featuring vertical gardens, solar-paneled roofs, and a greywater recycling system. The result is a serene, self-sufficient community that coexists harmoniously with nature in the heart of the city.',
    techStack: ['Revit', 'Biophilic Design', 'LEED Platinum', 'Solar Integration', 'Water Harvesting']
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Institutional'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="animate-in fade-in duration-500">
      <header className="text-center py-16 md:py-24 bg-gradient-to-b from-card to-background">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Portfolio</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of our dedication to architectural excellence and innovative design across various sectors.
        </p>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 group/grid">
          {filteredProjects.map((project, idx) => (
              <Card key={project.id} className="group/card bg-card/60 backdrop-blur-sm overflow-hidden border-border/20 flex flex-col transition-all duration-300 ease-in-out hover:!opacity-100 hover:!scale-105 hover:shadow-2xl hover:border-primary group-hover/grid:[&:not(:hover)]:opacity-60 group-hover/grid:[&:not(:hover)]:scale-95">
                  <CardHeader className="p-0 relative">
                    <Carousel 
                      className="w-full"
                      plugins={[
                        Autoplay({
                          delay: 3000,
                          stopOnInteraction: true,
                          stopOnHover: true,
                        }),
                      ]}
                      opts={{
                        loop: true,
                      }}
                    >
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="aspect-[16/10] relative rounded-t-lg overflow-hidden">
                              <Image
                                src={image.src}
                                alt={`${project.title} - Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                                data-ai-hint={image.hint}
                                priority={idx < 2}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white border-none hover:bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white border-none hover:bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    </Carousel>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex-grow">
                          <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent-foreground">{project.category}</Badge>
                          <CardTitle className="font-headline text-3xl text-primary mb-3">{project.title}</CardTitle>
                          <CardDescription className="text-foreground/80 mb-6 text-base">{project.description}</CardDescription>
                      </div>
                       <CardFooter className="p-0">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <Badge key={tech} variant="outline" className="text-muted-foreground">{tech}</Badge>
                            ))}
                          </div>
                      </CardFooter>
                  </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
