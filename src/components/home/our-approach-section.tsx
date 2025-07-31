"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const approaches = [
    {
        title: "Residential Expertise",
        description: "Timeless homes designed for comfort, luxury, and sustainability. Discover refined architecture tailored to your lifestyle.",
        imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lfGVufDB8fHx8fDE3NTQ3NDg2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "luxury home",
    },
    {
        title: "Commercial Vision",
        description: "Modern, functional spaces that inspire productivity and reflect your brand’s identity. Explore our commercial solutions.",
        imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU0NjYyOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "modern office",
    },
    {
        title: "Interior Mastery",
        description: "Elegant, bespoke interiors blending luxury with cultural nuance. Experience interiors crafted for distinction.",
        imageSrc: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8fDE3NTQ3NDg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "luxury living room",
    }
];

export function OurApproach() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Approach to Excellence</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our philosophy is built on three core pillars that guide every project from concept to completion.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {approaches.map((approach, index) => (
                        <Card key={index} className="overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/40">
                             <CardHeader className="p-0">
                                <div className="overflow-hidden aspect-video">
                                    <Image
                                        src={approach.imageSrc}
                                        alt={approach.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        data-ai-hint={approach.imageHint}
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <CardTitle className="font-headline text-2xl text-primary mb-3">{approach.title}</CardTitle>
                                <p className="text-muted-foreground flex-grow">{approach.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-16">
                     <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/about">
                            Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
