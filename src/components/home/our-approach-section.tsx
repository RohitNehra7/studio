
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Gem, Palette } from "lucide-react";

export function OurApproach() {
    return (
        <section className="relative py-16 md:py-24 bg-card overflow-hidden">
            <div className="relative z-20 container mx-auto px-4 max-w-4xl text-center">
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-12">Our Approach to Excellence</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-background/50 hover:shadow-xl hover:scale-105">
                        <div className="bg-primary/10 text-primary p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                            <Palette className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Aesthetic Elegance</h3>
                            <p className="text-muted-foreground">Fusing timeless beauty with functional design to create inspiring and livable spaces.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-background/50 hover:shadow-xl hover:scale-105">
                        <div className="bg-primary/10 text-primary p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                            <Zap className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Innovative Solutions</h3>
                            <p className="text-muted-foreground">Leveraging cutting-edge technology to redefine what's possible in modern architecture.</p>
                        </div>
                    </div>
                     <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-background/50 hover:shadow-xl hover:scale-105">
                        <div className="bg-primary/10 text-primary p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                            <Gem className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Uncompromising Quality</h3>
                            <p className="text-muted-foreground">Committed to the highest standards of craftsmanship from concept to completion.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-transform duration-300 hover:scale-105">
                        <Link href="/about">Learn More About Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
