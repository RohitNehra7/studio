
"use client";

import * as React from 'react';
import Image from 'next/image';
import { X, Github, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

export interface Project {
  id: number;
  title: string;
  category: string;
  images: { src: string; hint: string }[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-card/80 dark:bg-[#131729]/80 backdrop-blur-sm border-border/20 !rounded-2xl">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
          <div className="relative md:order-2">
            <Carousel 
              className="w-full h-full"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden md:rounded-r-2xl">
                      <Image
                        src={image.src}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={image.hint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white border-none hover:bg-black/50" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white border-none hover:bg-black/50" />
            </Carousel>
             <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-20 bg-black/30 text-white rounded-full hover:bg-black/50 hover:text-white"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
          </div>

          <div className="p-8 md:p-10 flex flex-col overflow-y-auto">
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground w-fit mb-4">{project.category}</Badge>
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">{project.title}</h2>
            <p className="text-muted-foreground flex-grow">{project.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {project.githubUrl && (
                <Button asChild className="w-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4"/> View on GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                 <Button asChild className="w-full">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
