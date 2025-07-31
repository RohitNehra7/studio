
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const approaches = [
    {
        title: "Aesthetic Elegance",
        description: "Fusing timeless beauty with functional design to create inspiring and livable spaces that stand the test of time.",
        imageSrc: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWN8ZW58MHx8fHwxNzUzOTg2OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "aesthetic",
    },
    {
        title: "Innovative Solutions",
        description: "Leveraging cutting-edge technology and materials to redefine what's possible in modern architecture.",
        imageSrc: "https://images.unsplash.com/photo-1554469384-e52fac86944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMG1vZGVsfGVufDB8fHx8fDE3NTQ3NDI2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "modern building model",
    },
    {
        title: "Uncompromising Quality",
        description: "A steadfast commitment to the highest standards of craftsmanship and materials from concept to completion.",
        imageSrc: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHBsYW5zfGVufDB8fHx8fDE3NTQ3NDI2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "engineer plans",
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
