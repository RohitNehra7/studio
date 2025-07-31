
"use client";

import Image from "next/image";

const approaches = [
    {
        title: "Aesthetic Elegance",
        description: "Fusing timeless beauty with functional design to create inspiring and livable spaces.",
        imageSrc: "https://images.unsplash.com/photo-1511311593843-0b7848b53948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBza2V0Y2h8ZW58MHx8fHwxNzU0NzQyNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "architecture sketch",
    },
    {
        title: "Innovative Solutions",
        description: "Leveraging cutting-edge technology to redefine what's possible in modern architecture.",
        imageSrc: "https://images.unsplash.com/photo-1554469384-e52fac86944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMG1vZGVsfGVufDB8fHx8fDE3NTQ3NDI2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "modern building model",
    },
    {
        title: "Uncompromising Quality",
        description: "Committed to the highest standards of craftsmanship from concept to completion.",
        imageSrc: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHBsYW5zfGVufDB8fHx8fDE3NTQ3NDI2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageHint: "engineer plans",
    }
];

export function OurApproach() {
    return (
        <section className="relative bg-background">
            <div className="text-center py-16 md:py-24">
                 <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Approach to Excellence</h2>
                 <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our philosophy is built on three core pillars that guide every project from concept to completion.
                </p>
            </div>
            <div className="relative h-[300vh]">
                {approaches.map((approach, index) => (
                    <div key={index} style={{ zIndex: index + 1 }} className="sticky top-0 h-screen w-full">
                        <div className="relative h-full w-full flex items-center justify-center">
                            <Image
                                src={approach.imageSrc}
                                alt={approach.title}
                                layout="fill"
                                objectFit="cover"
                                className="z-0"
                                data-ai-hint={approach.imageHint}
                            />
                            <div className="absolute inset-0 bg-black/60 z-10" />
                            <div className="relative z-20 text-center text-white p-8 max-w-3xl">
                                <h3 className="font-headline text-4xl md:text-6xl text-primary mb-4">{approach.title}</h3>
                                <p className="text-lg md:text-2xl text-white/90">{approach.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
