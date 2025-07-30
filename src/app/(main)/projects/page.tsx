"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const projects = [
  { id: 1, title: 'Serenity House', category: 'Residential', image: 'https://placehold.co/800x600.png', hint: 'modern house', description: 'A masterpiece of modern residential design, this home balances sharp lines with natural materials to create a peaceful and welcoming environment.' },
  { id: 2, title: 'Quantum Tower', category: 'Commercial', image: 'https://placehold.co/800x600.png', hint: 'skyscraper', description: 'A cutting-edge high-rise that redefines the city skyline, featuring a sustainable design and state-of-the-art facilities for a new era of business.' },
  { id: 3, title: 'Civic Knowledge Center', category: 'Institutional', image: 'https://placehold.co/800x600.png', hint: 'public library', description: 'A dynamic hub for learning and community engagement, designed to inspire discovery with open spaces and abundant natural light.' },
  { id: 4, title: 'The Urban Oasis', category: 'Residential', image: 'https://placehold.co/800x600.png', hint: 'apartment building', description: 'An innovative apartment complex that seamlessly integrates green spaces and communal areas, fostering a vibrant urban community.' },
  { id: 5, title: 'Innovate Hub', category: 'Commercial', image: 'https://placehold.co/800x600.png', hint: 'office building', description: 'A forward-thinking office building designed to foster creativity and collaboration, setting a new benchmark for workspaces.' },
  { id: 6, title: 'Horizon Art Gallery', category: 'Institutional', image: 'https://placehold.co/800x600.png', hint: 'art gallery', description: 'A sculptural space crafted to showcase art, where the architecture itself becomes part of the immersive cultural experience.' },
  { id: 7, 'title': 'Lakeside Villa', 'category': 'Residential', 'image': 'https://placehold.co/800x600.png', hint: 'luxury villa', description: 'An exquisite villa offering breathtaking lake views, where luxury and nature converge in a seamless architectural expression.' },
  { id: 8, 'title': 'Pinnacle Plaza', 'category': 'Commercial', 'image': 'https://placehold.co/800x600.png', hint: 'shopping mall', description: 'A premier shopping destination with a grand, light-filled atrium that creates an unforgettable retail experience.' },
];


const categories = ['All', 'Residential', 'Commercial', 'Institutional'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
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
            className={`transition-all duration-300 ${filter === category ? 'bg-primary text-primary-foreground' : 'border-accent text-accent-foreground hover:bg-accent/20'}`}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {filteredProjects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-primary">
                  <CardHeader className="p-0">
                    <div className="overflow-hidden aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        data-ai-hint={project.hint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">{project.category}</Badge>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14" />
      </Carousel>
    </div>
  );
}
