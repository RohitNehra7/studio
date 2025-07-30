
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ProjectModal } from '@/components/project-modal';
import type { Project } from '@/components/project-modal';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Serenity House', 
    category: 'Residential', 
    images: [
      { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NTQ2NTI1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern house exterior' },
      { src: 'https://images.unsplash.com/photo-1613553423758-d8713b1b6d7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDB8fHx8fDE3NTQ2NjI4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern house interior' },
      { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8fDE3NTQ2NjI4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'modern living room' },
    ],
    description: 'A masterpiece of modern residential design, this home balances sharp lines with natural materials to create a peaceful and welcoming environment.' 
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
    description: 'A cutting-edge high-rise that redefines the city skyline, featuring a sustainable design and state-of-the-art facilities for a new era of business.' 
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
    description: 'A dynamic hub for learning and community engagement, designed to inspire discovery with open spaces and abundant natural light.' 
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
    description: 'An innovative apartment complex that seamlessly integrates green spaces and communal areas, fostering a vibrant urban community.' 
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
    description: 'A forward-thinking office building designed to foster creativity and collaboration, setting a new benchmark for workspaces.' 
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
    description: 'A sculptural space crafted to showcase art, where the architecture itself becomes part of the immersive cultural experience.' 
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
    description: 'An exquisite villa offering breathtaking lake views, where luxury and nature converge in a seamless architectural expression.' 
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
    description: 'A premier shopping destination with a grand, light-filled atrium that creates an unforgettable retail experience.' 
  },
];


const categories = ['All', 'Residential', 'Commercial', 'Institutional'];

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
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
              className={`transition-all duration-300 ${
                filter === category 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'border-primary text-primary hover:bg-primary/10'
              }`}
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
                      src={project.images[0].src}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover/item:scale-110"
                      data-ai-hint={project.images[0].hint}
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
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => setSelectedProject(project)}>
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                  </CardFooter>
              </Card>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

    