
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
    title: 'Serenity House', 
    category: 'Residential', 
    images: [
      { src: '/projects/residential-1.jpg', hint: 'modern house exterior' },
      { src: '/projects/residential-1-interior-1.jpg', hint: 'modern house interior' },
      { src: '/projects/residential-1-interior-2.jpg', hint: 'modern living room' },
    ],
    description: 'A masterpiece of modern residential design, this home balances sharp lines with natural materials to create a peaceful and welcoming environment. The open-plan living spaces are flooded with natural light, seamlessly connecting the interior with the surrounding landscape. Every detail, from the custom cabinetry to the curated art, is a testament to bespoke luxury and thoughtful design.',
    techStack: ['AutoCAD', 'SketchUp', 'V-Ray', 'Sustainable Materials']
  },
  { 
    id: 2, 
    title: 'Quantum Tower', 
    category: 'Commercial', 
    images: [
      { src: '/projects/commercial-1.jpg', hint: 'skyscraper exterior' },
      { src: '/projects/commercial-1-interior-1.jpg', hint: 'office lobby' },
      { src: '/projects/commercial-1-interior-2.jpg', hint: 'modern office' },
    ],
    description: 'A cutting-edge high-rise that redefines the city skyline. Quantum Tower features a double-skin facade for energy efficiency and a sky garden on every tenth floor, offering a new era of business with a focus on employee well-being and sustainable operation. Its dynamic form is both an architectural statement and a functional masterpiece.',
    techStack: ['Revit', 'BIM 360', 'Dynamo', 'LEED Certified']
  },
  { 
    id: 3, 
    title: 'Civic Knowledge Center', 
    category: 'Institutional', 
    images: [
        { src: '/projects/institutional-1.jpg', hint: 'public library exterior' },
        { src: '/projects/institutional-1-interior-1.jpg', hint: 'library interior' },
        { src: '/projects/institutional-1-interior-2.jpg', hint: 'reading area' },
    ],
    description: 'A dynamic hub for learning and community engagement. The design features a grand central atrium that connects all floors, encouraging interaction and discovery. With flexible layouts, digital labs, and quiet reading nooks, it is a space designed to inspire and adapt to the evolving needs of its community.',
    techStack: ['ArchiCAD', 'Rhino', 'Grasshopper', 'Community-Centric Design']
  },
  { 
    id: 4, 
    title: 'The Urban Oasis', 
    category: 'Residential', 
    images: [
        { src: '/projects/residential-2.jpg', hint: 'apartment building' },
        { src: '/projects/residential-2-interior-1.jpg', hint: 'modern apartment interior' },
        { src: '/projects/residential-2-interior-2.jpg', hint: 'apartment living room' },
    ],
    description: 'An innovative apartment complex that seamlessly integrates green spaces and communal areas. The project features rooftop gardens, vertical farms, and shared courtyards, fostering a vibrant urban community where residents can connect with nature and each other. It sets a new standard for sustainable city living.',
    techStack: ['AutoCAD', 'Lumion', 'Green Building Studio', 'Biophilic Design']
  },
  { 
    id: 5, 
    title: 'Innovate Hub', 
    category: 'Commercial', 
    images: [
      { src: '/projects/commercial-2.jpg', hint: 'office building exterior' },
      { src: '/projects/commercial-2-interior-1.jpg', hint: 'collaborative workspace' },
      { src: '/projects/commercial-2-interior-2.jpg', hint: 'modern office meeting' },
    ],
    description: 'A forward-thinking office building designed to foster creativity and collaboration. The interior features modular workspaces, brainstorming pods, and a central atrium for events, setting a new benchmark for modern workspaces that adapt to the dynamic needs of innovative companies.',
    techStack: ['Revit', 'Navisworks', 'Insight', 'Agile Workspaces']
  },
  { 
    id: 6, 
    title: 'Horizon Art Gallery', 
    category: 'Institutional', 
    images: [
        { src: '/projects/institutional-2.jpg', hint: 'art gallery exterior' },
        { src: '/projects/institutional-2-interior-1.jpg', hint: 'art gallery interior' },
        { src: '/projects/institutional-2-interior-2.jpg', hint: 'art exhibit' },
    ],
    description: 'A sculptural space crafted to showcase art, where the architecture itself becomes part of the immersive cultural experience. The design uses controlled natural light and flowing spaces to create a serene journey for visitors, allowing the art to take center stage while the building provides a dramatic backdrop.',
    techStack: ['SketchUp', '3ds Max', 'Adobe Creative Suite', 'Lighting Design']
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Institutional'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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

    