
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Heart, Leaf, Star, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="relative py-24 md:py-40 text-center text-white bg-card">
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1542361325-11588f495147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NTQ1ODMxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mx-auto shadow-2xl border-4 border-primary">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwwfHx8fDE3NTQ1ODMxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aisha Shabeeh Shaheen"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="professional woman"
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-2 font-bold">Meet Our Founder</h2>
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
            <Card className="text-center bg-card/50">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Award className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Design Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We create timeless, functional, and aesthetic spaces that reflect creativity, precision, and purpose.</p>
              </CardContent>
            </Card>
             <Card className="text-center bg-card/50">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Heart className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Client-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We design with empathy, listening deeply to every client’s vision and delivering tailored, meaningful solutions.</p>
              </CardContent>
            </Card>
             <Card className="text-center bg-card/50">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Leaf className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We integrate environmentally responsible practices and materials to build spaces that respect the planet.</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card/50 md:col-start-1 lg:col-start-auto">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Star className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Integrity & Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We value honesty, fairness, and clear communication in every relationship — from concept to construction.</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-card/50">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Rocket className="h-8 w-8"/>
                </div>
                <CardTitle className="font-headline text-2xl pt-4">Innovation & Adaptability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We embrace bold ideas, emerging technologies, and ever-changing needs to shape the future of architecture.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

    