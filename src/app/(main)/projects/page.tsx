"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Serenity House', category: 'Residential', image: 'https://placehold.co/600x400.png', hint: 'modern house' },
  { id: 2, title: 'Quantum Tower', category: 'Commercial', image: 'https://placehold.co/600x400.png', hint: 'skyscraper' },
  { id: 3, title: 'Civic Knowledge Center', category: 'Institutional', image: 'https://placehold.co/600x400.png', hint: 'public library' },
  { id: 4, title: 'The Urban Oasis', category: 'Residential', image: 'https://placehold.co/600x400.png', hint: 'apartment building' },
  { id: 5, title: 'Innovate Hub', category: 'Commercial', image: 'https://placehold.co/600x400.png', hint: 'office building' },
  { id: 6, title: 'Horizon Art Gallery', category: 'Institutional', image: 'https://placehold.co/600x400.png', hint: 'art gallery' },
  { id: 7, 'title': 'Lakeside Villa', 'category': 'Residential', 'image': 'https://placehold.co/600x400.png', hint: 'luxury villa' },
  { id: 8, 'title': 'Pinnacle Plaza', 'category': 'Commercial', 'image': 'https://placehold.co/600x400.png', hint: 'shopping mall' },
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
      
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-primary">
                <CardHeader className="p-0">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      data-ai-hint={project.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">{project.category}</Badge>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
