import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Gem, Palette } from "lucide-react";

export function OurApproach() {
    return (
        <section className="relative py-20 md:py-32 text-white overflow-hidden">
             <Image
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzUzODk0MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior of a modern building"
                fill
                style={{objectFit: 'cover'}}
                className="z-0 animate-zoom-in-out"
                data-ai-hint="approach"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/80 to-black/60 z-10" />
            <div className="relative z-20 container mx-auto px-4 max-w-4xl text-center">
                <h2 className="font-headline text-3xl md:text-4xl text-white mb-12">Our Approach to Excellence</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:scale-105">
                        <div className="bg-white/10 text-white p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                            <Palette className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Aesthetic Elegance</h3>
                            <p className="text-white/80">Fusing timeless beauty with functional design to create inspiring and livable spaces.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:scale-105">
                        <div className="bg-white/10 text-white p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                            <Zap className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Innovative Solutions</h3>
                            <p className="text-white/80">Leveraging cutting-edge technology to redefine what's possible in modern architecture.</p>
                        </div>
                    </div>
                     <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:scale-105">
                        <div className="bg-white/10 text-white p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                            <Gem className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Uncompromising Quality</h3>
                            <p className="text-white/80">Committed to the highest standards of craftsmanship from concept to completion.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Button variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-transform duration-300 hover:scale-105">
                        <Link href="/about">Learn More About Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
