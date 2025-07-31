
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
    description: 'A masterpiece of modern residential design, this home balances sharp lines with natural materials to create a peaceful and welcoming environment.',
    techStack: ['AutoCAD', 'SketchUp', 'V-Ray']
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
    description: 'A cutting-edge high-rise that redefines the city skyline, featuring a sustainable design and state-of-the-art facilities for a new era of business.',
    techStack: ['Revit', 'BIM 360', 'Dynamo']
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
    description: 'A dynamic hub for learning and community engagement, designed to inspire discovery with open spaces and abundant natural light.',
    techStack: ['ArchiCAD', 'Rhino', 'Grasshopper']
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
    description: 'An innovative apartment complex that seamlessly integrates green spaces and communal areas, fostering a vibrant urban community.',
    techStack: ['AutoCAD', 'Lumion', 'Green Building Studio']
  },
  { 
    id: 5, 
    title: 'Innovate Hub', 
    category: 'Commercial', 
    images: [
      { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTQ2NTI1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'office building exterior' },
      { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlfGVufDB8fHx8fDE3NTQ2NjI5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'collaborative workspace' },
      { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU0NjYyOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern office meeting' },
    ],
    description: 'A forward-thinking office building designed to foster creativity and collaboration, setting a new benchmark for workspaces.',
    techStack: ['Revit', 'Navisworks', 'Insight']
  },
  { 
    id: 6, 
    title: 'Horizon Art Gallery', 
    category: 'Institutional', 
    images: [
        { src: 'https://images.unsplash.com/photo-1583227564999-5221b6d1b8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb2JlciUyMGFydCUyMGdhbGxlcnl8ZW58MHx8fHwxNzU0NzQxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'art gallery exterior' },
        { src: 'https://images.unsplash.com/photo-1564942250176-3f13ad454b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzU0NjYyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'art gallery interior' },
        { src: 'https://images.unsplash.com/photo-1578326238965-985f4103c0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0fGVufDB8fHx8fDE3NTQ2NjMwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'art exhibit' },
    ],
    description: 'A sculptural space crafted to showcase art, where the architecture itself becomes part of the immersive cultural experience.',
    techStack: ['SketchUp', '3ds Max', 'Adobe Creative Suite']
  },
  { 
    id: 7, 
    title: 'Lakeside Villa', 
    category: 'Residential', 
    images: [
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fHwxNzU0NjUyNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'luxury villa exterior' },
        { src: 'https://images.unsplash.com/photo-1600585152225-358945c58469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGludGVyaW9yfGVufDB8fHx8fDE3NTQ2NjMwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'luxury villa interior' },
        { src: 'https://images.unsplash.com/photo-1615571022219-eb45cf72d813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sfGVufDB8fHx8fDE3NTQ2NjMwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'luxury pool' },
    ],
    description: 'An exquisite villa offering breathtaking lake views, where luxury and nature converge in a seamless architectural expression.',
    techStack: ['AutoCAD', 'Enscape', 'Photoshop']
  },
  { 
    id: 8, 
    title: 'Pinnacle Plaza', 
    category: 'Commercial', 
    images: [
        { src: 'https://images.unsplash.com/photo-1580610447943-1bfbef54f4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMG1hbGx8ZW58MHx8fHwxNzU0NzQxNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'shopping mall exterior' },
        { src: 'https://images.unsplash.com/photo-1555529771-835f59ee5020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvcnxlbnwwfHx8fHwxNzU0NjYzMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'shopping mall interior' },
        { src: 'https://images.unsplash.com/photo-1567958451996-09b34355bf42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmb29kJTIwY291cnR8ZW58MHx8fHwxNzU0NjYzMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'food court' },
    ],
    description: 'A premier shopping destination with a grand, light-filled atrium that creates an unforgettable retail experience.',
    techStack: ['Revit', '3ds Max', 'V-Ray']
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Institutional'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-in fade-in duration-500">
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our dedication to architectural excellence and innovative design.
          </p>
        </header>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/grid">
          {filteredProjects.map((project) => (
              <Card key={project.id} className="group/card bg-card/60 backdrop-blur-sm overflow-hidden border-border/20 flex flex-col transition-all duration-300 ease-in-out group-hover/grid:[&:not(:hover)]:opacity-50 group-hover/grid:[&:not(:hover)]:scale-95 hover:!opacity-100 hover:!scale-105 hover:border-primary">
                  <CardHeader className="p-0 relative">
                    <Carousel 
                      className="w-full"
                      plugins={[
                        Autoplay({
                          delay: 2000,
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
                            <div className="aspect-[4/3] relative">
                              <Image
                                src={image.src}
                                alt={`${project.title} - Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                                data-ai-hint={image.hint}
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
                          <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
                          <CardDescription className="line-clamp-2 mb-4">{project.description}</CardDescription>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground">{tech}</Badge>
                            ))}
                          </div>
                      </div>
                  </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </>
  );
}
