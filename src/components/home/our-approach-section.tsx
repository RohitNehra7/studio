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
        imageSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxob3VzZXxlbnwwfHx8fDE3NTM5OTU1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "house"
    },
    {
        category: "Commercial Vision",
        title: "Transforming business environments",
        description: "Our team designs modern, functional commercial spaces that not only inspire productivity but also embody your brand’s identity and drive success.",
        imageSrc: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxidXNpbmVzc3xlbnwwfHx8fDE3NTM5OTU2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "modern office"
    },
    {
        category: "Interior Mastery",
        title: "Curated interiors, lasting impressions",
        description: "Experience the art of curated interiors where elegance and cultural nuance intertwine. We create bespoke designs that leave a lasting impression.",
        imageSrc: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8fDE3NTQ3NDg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "luxury living room"
    }
];

export function OurApproach() {
    return (
        <section className="relative bg-background text-foreground pt-0">
            <div className="relative h-[350vh]">
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
                            className="bg-card rounded-2xl shadow-2xl w-full max-w-4xl h-full max-h-[80vh] flex flex-col p-4 md:p-6 overflow-hidden border border-border/10"
                        >
                            <div className="text-left mb-4">
                                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">{approach.category}</p>
                                <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-3">{approach.title}</h3>
                                <p className="text-base text-muted-foreground">{approach.description}</p>
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
             <div className="text-center pb-12 md:pb-16">
                 <Button size="lg" asChild>
                    <Link href="/about">
                        More About Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
