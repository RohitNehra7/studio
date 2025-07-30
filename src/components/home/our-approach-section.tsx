import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Gem, Palette } from "lucide-react";

export function OurApproach() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card">
            <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8 text-center md:text-left">Our Approach to Excellence</h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full">
                        <Palette className="h-7 w-7" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Aesthetic Elegance</h3>
                        <p className="text-muted-foreground">Fusing timeless beauty with functional design to create inspiring and livable spaces.</p>
                    </div>
                    </div>
                    <div className="flex items-start gap-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full">
                        <Zap className="h-7 w-7" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Innovative Solutions</h3>
                        <p className="text-muted-foreground">Leveraging cutting-edge technology to redefine what's possible in modern architecture.</p>
                    </div>
                    </div>
                    <div className="flex items-start gap-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full">
                        <Gem className="h-7 w-7" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Uncompromising Quality</h3>
                        <p className="text-muted-foreground">Committed to the highest standards of craftsmanship from concept to completion.</p>
                    </div>
                    </div>
                </div>
                <div className="mt-12 text-center md:text-left">
                    <Button variant="outline" asChild>
                    <Link href="/about">Learn More About Us</Link>
                    </Button>
                </div>
                </div>
                <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl group">
                    <Image
                        src="https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NTM4OTU3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Interior of a modern building"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint="modern interior"
                    />
                </div>
            </div>
            </div>
        </section>
    );
}
