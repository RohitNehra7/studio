"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const approaches = [
    {
        category: "Residential Expertise",
        title: "Elevate your living spaces",
        description: "We craft timeless homes where comfort, luxury, and sustainability converge, creating refined architectural solutions tailored to your unique lifestyle.",
        imageSrc: "https://images.unsplash.com/photo-1696986293936-d8d080a88f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob21lfGVufDB8fHx8MTc1Mzk4NzgwNXww&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "luxury home",
        buttonText: "View Homes",
        buttonLink: "/projects"
    },
    {
        category: "Commercial Vision",
        title: "Transforming business environments",
        description: "Our team designs modern, functional commercial spaces that not only inspire productivity but also embody your brand’s identity and drive success.",
        imageSrc: "https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzUzOTg3ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "modern office",
        buttonText: "Explore Solutions",
        buttonLink: "/services"
    },
    {
        category: "Interior Mastery",
        title: "Curated interiors, lasting impressions",
        description: "Experience the art of curated interiors where elegance and cultural nuance intertwine. We create bespoke designs that leave a lasting impression.",
        imageSrc: "https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc1Mzk4NzgwNXww&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "luxury living room",
        buttonText: "Discover Designs",
        buttonLink: "/projects"
    }
];

export function OurApproach() {
    return (
        <section className="relative bg-background text-foreground">
            <div className="text-center py-16 md:py-12">
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Approach to Excellence</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                    Our philosophy is built on three core pillars that guide every project from concept to completion.
                </p>
            </div>
            <div className="relative h-[300vh]">
                {approaches.map((approach, index) => (
                    <div
                        key={index}
                        className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-8"
                        style={{ zIndex: index + 1 }}
                    >
                         <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-card rounded-2xl shadow-2xl w-full max-w-4xl h-full max-h-[80vh] flex flex-col p-6 md:p-8 overflow-hidden border border-border/10"
                        >
                            <div className="text-left mb-6">
                                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">{approach.category}</p>
                                <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-3">{approach.title}</h3>
                                <p className="text-base md:text-lg text-muted-foreground">{approach.description}</p>
                            </div>
                            <div className="mt-6 mb-4">
                                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <Link href={approach.buttonLink}>
                                        {approach.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                             <div className="relative flex-grow w-full mt-auto rounded-xl overflow-hidden">
                                <Image
                                    src={approach.imageSrc}
                                    alt={approach.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={approach.imageHint}
                                />
                            </div>
                        </motion.div>
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
