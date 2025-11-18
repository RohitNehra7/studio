
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
      { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NTQ2NTI1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern house exterior' },
      { src: 'https://images.unsplash.com/photo-1613553423758-d8713b1b6d7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDB8fHx8fDE3NTQ2NjI4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern house interior' },
      { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8fDE3NTQ2NjI4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern living room' },
    ],
    description: 'A masterpiece of modern residential design, this home balances sharp lines with natural materials to create a peaceful and welcoming environment. The open-plan living spaces are flooded with natural light, seamlessly connecting the interior with the surrounding landscape. Every detail, from the custom cabinetry to the curated art, is a testament to bespoke luxury and thoughtful design.',
    techStack: ['AutoCAD', 'SketchUp', 'V-Ray', 'Sustainable Materials']
  },
  { 
    id: 2, 
    title: 'Quantum Tower', 
    category: 'Commercial', 
    images: [
      { src: 'https://images.unsplash.com/photo-1422442468333-3a7a1b3c43f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc2t5c2NyYXBlcnxlbnwwfHx8fDE3NTQ3NDEzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'skyscraper exterior' },
      { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBsb2JieXxlbnwwfHx8fDE3NTQ2NjI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'office lobby' },
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU0NjYyOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern office' },
    ],
    description: 'A cutting-edge high-rise that redefines the city skyline. Quantum Tower features a double-skin facade for energy efficiency and a sky garden on every tenth floor, offering a new era of business with a focus on employee well-being and sustainable operation. Its dynamic form is both an architectural statement and a functional masterpiece.',
    techStack: ['Revit', 'BIM 360', 'Dynamo', 'LEED Certified']
  },
  { 
    id: 3, 
    title: 'Civic Knowledge Center', 
    category: 'Institutional', 
    images: [
        { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBsaWJyYXJ5fGVufDB8fHx8fDE3NTQ2NTI1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'public library exterior' },
        { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU0NjYyOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'library interior' },
        { src: 'https://images.unsplash.com/photo-1533679843659-b13a5816d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYXJlYXxlbnwwfHx8fDE3NTQ2NjI5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'reading area' },
    ],
    description: 'A dynamic hub for learning and community engagement. The design features a grand central atrium that connects all floors, encouraging interaction and discovery. With flexible layouts, digital labs, and quiet reading nooks, it is a space designed to inspire and adapt to the evolving needs of its community.',
    techStack: ['ArchiCAD', 'Rhino', 'Grasshopper', 'Community-Centric Design']
  },
  { 
    id: 4, 
    title: 'The Urban Oasis', 
    category: 'Residential', 
    images: [
        { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTQ2NTI1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'apartment building' },
        { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NTQ2NjI5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern apartment interior' },
        { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDB8fHx8fDE3NTQ2NjI5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'apartment living room' },
    ],
    description: 'An innovative apartment complex that seamlessly integrates green spaces and communal areas. The project features rooftop gardens, vertical farms, and shared courtyards, fostering a vibrant urban community where residents can connect with nature and each other. It sets a new standard for sustainable city living.',
    techStack: ['AutoCAD', 'Lumion', 'Green Building Studio', 'Biophilic Design']
  },
  { 
    id: 5, 
    title: 'Innovate Hub', 
    category: 'Commercial', 
    images: [
      { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTQ2NTI1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'office building exterior' },
      { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlfGVufDB8fHx8fDE3NTQ2NjI5ODJ8MA&ixlib-rb-4.1.0&q=80&w=1080', hint: 'collaborative workspace' },
      { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU0NjYyOTI4fDA&ixlib-rb-4.1.0&q=80&w=1080', hint: 'modern office meeting' },
    ],
    description: 'A forward-thinking office building designed to foster creativity and collaboration. The interior features modular workspaces, brainstorming pods, and a central atrium for events, setting a new benchmark for modern workspaces that adapt to the dynamic needs of innovative companies.',
    techStack: ['Revit', 'Navisworks', 'Insight', 'Agile Workspaces']
  },
  { 
    id: 6, 
    title: 'Horizon Art Gallery', 
    category: 'Institutional', 
    images: [
        { src: 'https://images.unsplash.com/photo-1583227564999-5221b6d1b8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb2JlciUyMGFydCUyMGdhbGxlcnl8ZW58MHx8fHwxNzU0NzQxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'art gallery exterior' },
        { src: 'https://images.unsplash.com/photo-1564942250176-3f13ad454b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU0NjYyOTk5fDA&ixlib-rb-4.1.0&q=80&w=1080', hint: 'art gallery interior' },
        { src: 'https://images.unsplash.com/photo-1578326238965-985f4103c0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0fGVufDB8fHx8fDE3NTQ2NjMwMDh8MA&ixlib.rb-4.1.0&q=80&w=1080', hint: 'art exhibit' },
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

