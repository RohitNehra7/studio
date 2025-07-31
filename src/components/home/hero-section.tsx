
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gem, RefreshCw, Heart, ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative bg-background text-foreground py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="animate-in fade-in slide-in-from-left duration-700 order-2 lg:order-1">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center lg:text-left">
                        Architecture of purpose. Design with soul.
                    </h1>
                    <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        Timeless, sustainable spaces crafted for modern living. We blend precision, context, and elegance to create environments that inspire and endure.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-foreground">
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
                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                        <Button size="lg" asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            <Link href="/projects">
                                See projects
                            </Link>
                        </Button>
                        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/contact">
                                Contact us <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
                 <div className="animate-in fade-in slide-in-from-right duration-700 order-1 lg:order-2">
                    <div className="bg-card p-4 rounded-lg shadow-2xl max-w-md mx-auto lg:max-w-full">
                        <Image
                            src="/logo.jpeg"
                            alt="The Archithan Architects Logo"
                            width={800}
                            height={800}
                            className="w-full h-auto rounded-md"
                            data-ai-hint="company logo"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
