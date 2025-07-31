
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gem, RefreshCw, Heart, ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative bg-background text-foreground py-20 md:py-32">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                <div className="animate-in fade-in slide-in-from-left duration-700">
                    <div className="bg-card p-4 rounded-lg shadow-2xl">
                        <Image
                            src="https://placehold.co/800x800.png"
                            alt="The Archithan Architects Logo"
                            width={800}
                            height={800}
                            className="w-full h-auto rounded-md"
                            data-ai-hint="company logo"
                            priority
                        />
                    </div>
                </div>
                <div className="animate-in fade-in slide-in-from-right duration-700">
                    <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Architecture of purpose. Design with soul.
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                        Timeless, sustainable spaces crafted for modern living. We blend precision, context, and elegance to create environments that inspire and endure.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-foreground">
                        <div className="flex items-center gap-2">
                            <Gem className="h-5 w-5 text-primary" />
                            <span>Residential design</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RefreshCw className="h-5 w-5 text-primary" />
                            <span>Commercial projects</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="h-5 w-5 text-primary" />
                            <span>Turnkey solutions</span>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button size="lg" asChild variant="outline">
                            <Link href="/projects">
                                See projects
                            </Link>
                        </Button>
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Contact us
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
