
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzUzODk0MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern architectural building"
                fill
                style={{objectFit: 'cover'}}
                className="z-0 animate-zoom-in-out"
                data-ai-hint="architecture building"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                    The Archithan Architects
                </h1>
                <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                    Crafting Tomorrow's Landmarks, Today.
                </p>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-white/80">
                    Founded by visionary architect Aisha Shabeeh Shaheen, we are dedicated to designing spaces that inspire and endure.
                </p>
                <div className="mt-10">
                    <Button size="lg" asChild className="bg-white hover:bg-white/90 text-slate-900">
                        <Link href="/projects">
                            Explore Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
