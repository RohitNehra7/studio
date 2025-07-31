"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const approaches = [
    {
        title: "Residential Expertise",
        description: "We craft timeless homes where comfort, luxury, and sustainability converge. Our design philosophy centers on creating refined architectural solutions that are meticulously tailored to your unique lifestyle, ensuring every space is both beautiful and deeply personal.",
        imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lfGVufDB8fHx8fDE3NTQ3NDg2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "luxury home",
    },
    {
        title: "Commercial Vision",
        description: "Our team designs modern, functional commercial spaces that not only inspire productivity but also embody your brand’s identity. From innovative office layouts to captivating retail environments, we deliver solutions that drive success.",
        imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU0NjYyOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "modern office",
    },
    {
        title: "Interior Mastery",
        description: "Experience the art of curated interiors where elegance and cultural nuance intertwine. We create bespoke designs that leave a lasting impression, blending luxurious materials and thoughtful details to craft spaces of true distinction.",
        imageSrc: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8fDE3NTQ3NDg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "luxury living room",
    }
];

export function OurApproach() {
    return (
        <section className="relative bg-background text-foreground">
            <div className="text-center py-16 md:py-24">
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Approach to Excellence</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                    Our philosophy is built on three core pillars that guide every project from concept to completion.
                </p>
            </div>
            <div className="relative h-[300vh]">
                {approaches.map((approach, index) => (
                    <div
                        key={index}
                        className="sticky top-0 h-screen w-full flex items-center justify-center"
                        style={{ zIndex: index + 1 }}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={approach.imageSrc}
                                alt={approach.title}
                                fill
                                className="object-cover"
                                data-ai-hint={approach.imageHint}
                            />
                             <div className="absolute inset-0 bg-black/70" />
                        </div>
                        <div className="relative z-10 text-center text-white p-8 max-w-3xl mx-auto">
                           <div className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
                                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">{approach.title}</h3>
                                <p className="text-lg md:text-xl text-white/90">{approach.description}</p>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
             <div className="bg-background text-center py-16 md:py-24">
                 <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/about">
                        Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
