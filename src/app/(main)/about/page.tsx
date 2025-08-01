
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Heart, Leaf, Star, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  const coreValues = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Design Excellence',
      description: 'We create timeless, functional, and aesthetic spaces that reflect creativity, precision, and purpose.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Client-Centric Approach',
      description: 'We design with empathy, listening deeply to every client’s vision and delivering tailored, meaningful solutions.',
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'We integrate environmentally responsible practices and materials to build spaces that respect the planet.',
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Integrity & Transparency',
      description: 'We value honesty, fairness, and clear communication in every relationship — from concept to construction.',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Innovation & Adaptability',
      description: 'We embrace bold ideas, emerging technologies, and ever-changing needs to shape the future of architecture.',
    },
  ];


  return (
    <div className="animate-in fade-in duration-500">
      <header className="relative py-24 md:py-40 text-center text-white bg-card">
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
            About The Archithan Architects
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/90">
            We are a team of passionate architects and designers committed to creating spaces that enrich lives.
          </p>
        </div>
      </header>
      
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4 font-bold">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010 by Aisha Shabeeh Shaheen, The Archithan Architects was born from a desire to merge timeless architectural principles with contemporary design innovation. What began as a small studio has grown into a renowned firm, known for its iconic structures and unwavering commitment to quality.
              </p>
              <p className="text-muted-foreground">
                Our journey is marked by a portfolio of diverse projects, each telling a unique story of collaboration, creativity, and technical excellence. We pride ourselves on building lasting relationships with our clients, turning their visions into tangible, breathtaking realities.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NTQ1ODMxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Architectural team collaboration"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint="team meeting"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="mt-3 text-lg text-muted-foreground">The principles that guide our work and define our character.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {coreValues.map((value, index) => (
               <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="h-full"
              >
                <Card className="text-center bg-gradient-to-br from-card to-card/60 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary border-transparent border">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                        {value.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl pt-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
