import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="relative py-24 md:py-40 text-center text-white bg-card">
         <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="https://placehold.co/1600x400.png"
            alt="Abstract architectural lines"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-30"
            data-ai-hint="abstract architecture"
            />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">About The Archithan Architects</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/90">
            We are a team of passionate architects and designers committed to creating spaces that enrich lives.
          </p>
        </div>
      </header>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010 by Aisha Shabeeh Shaheen, The Archithan Architects was born from a desire to merge timeless architectural principles with contemporary design innovation. What began as a small studio has grown into a renowned firm, known for its iconic structures and unwavering commitment to quality.
              </p>
              <p className="text-muted-foreground">
                Our journey is marked by a portfolio of diverse projects, each telling a unique story of collaboration, creativity, and technical excellence. We pride ourselves on building lasting relationships with our clients, turning their visions into tangible, breathtaking realities.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://placehold.co/800x600.png"
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

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="mt-3 text-lg text-muted-foreground">The principles that guide our work and define our character.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-background/50">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
                    <Lightbulb className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We constantly explore new materials, technologies, and ideas to push the boundaries of what's possible in architecture.</p>
              </CardContent>
            </Card>
             <Card className="text-center bg-background/50">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
                    <Award className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our commitment to the highest standards of quality and craftsmanship is evident in every detail of our work.</p>
              </CardContent>
            </Card>
             <Card className="text-center bg-background/50">
              <CardHeader>
                <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit">
                    <Users className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We believe the best results come from working closely with our clients, understanding their needs and aspirations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mx-auto shadow-2xl border-4 border-primary">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Aisha Shabeeh Shaheen"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="professional woman"
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-2">Meet Our Founder</h2>
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Aisha Shabeeh Shaheen</h3>
              <p className="text-muted-foreground mb-4">
                Aisha is an award-winning architect with over 20 years of experience in creating iconic and sustainable designs. Her work is celebrated for its poetic use of space, light, and material. She holds a Master's degree in Architecture from the prestigious International Design Institute and is a fellow of the Royal Architectural Society.
              </p>
              <p className="text-muted-foreground">
                Her vision for The Archithan Architects is to create a legacy of architecture that is not only visually stunning but also deeply connected to its environment and the people who inhabit it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
