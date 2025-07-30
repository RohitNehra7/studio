
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Serenity House', category: 'Residential', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NTQ2NTI1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern house', description: 'A masterpiece of modern residential design, this home balances sharp lines with natural materials to create a peaceful and welcoming environment.' },
  { id: 2, title: 'Quantum Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1542330952-bffc59e816b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyfGVufDB8fHx8fDE3NTQ2NTI1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'skyscraper', description: 'A cutting-edge high-rise that redefines the city skyline, featuring a sustainable design and state-of-the-art facilities for a new era of business.' },
  { id: 3, title: 'Civic Knowledge Center', category: 'Institutional', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBsaWJyYXJ5fGVufDB8fHx8fDE3NTQ2NTI1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'public library', description: 'A dynamic hub for learning and community engagement, designed to inspire discovery with open spaces and abundant natural light.' },
  { id: 4, title: 'The Urban Oasis', category: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTQ2NTI1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'apartment building', description: 'An innovative apartment complex that seamlessly integrates green spaces and communal areas, fostering a vibrant urban community.' },
  { id: 5, title: 'Innovate Hub', category: 'Commercial', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTQ2NTI1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'office building', description: 'A forward-thinking office building designed to foster creativity and collaboration, setting a new benchmark for workspaces.' },
  { id: 6, title: 'Horizon Art Gallery', category: 'Institutional', image: 'https://images.unsplash.com/photo-1549492423-4002122c3983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8fDE3NTQ2NTI1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'art gallery', description: 'A sculptural space crafted to showcase art, where the architecture itself becomes part of the immersive cultural experience.' },
  { id: 7, 'title': 'Lakeside Villa', 'category': 'Residential', 'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fDE3NTQ2NTI1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'luxury villa', description: 'An exquisite villa offering breathtaking lake views, where luxury and nature converge in a seamless architectural expression.' },
  { id: 8, 'title': 'Pinnacle Plaza', 'category': 'Commercial', 'image': 'https://images.unsplash.com/photo-1596213295932-047fd6c4c478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGx8ZW58MHx8fHwxNzU0NjUyNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'shopping mall', description: 'A premier shopping destination with a grand, light-filled atrium that creates an unforgettable retail experience.' },
];


const categories = ['All', 'Residential', 'Commercial', 'Institutional'];

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/showcase">
        {filteredProjects.map((project) => (
            <Card key={project.id} className="group/item bg-card/60 backdrop-blur-sm overflow-hidden border border-transparent hover:!border-primary/50 transition-all duration-300 hover:scale-105 group-hover/showcase:hover:!opacity-100 group-hover/showcase:opacity-50">
                <CardHeader className="p-0 relative">
                <div className="overflow-hidden aspect-[4/3]">
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover/item:scale-110"
                    data-ai-hint={project.hint}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
                            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">{project.category}</Badge>
                        </div>
                    </div>
                     <CardDescription className="mt-4 line-clamp-2">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
