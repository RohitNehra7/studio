
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function ContactCallToAction() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4 font-bold">Let's Build Together</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                    Have a project in mind or just want to learn more? We'd love to connect with you.
                </p>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <a href="https://share.google/1DiYzQ8EmrLUqr54W" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl">
                        <div className="bg-accent/20 text-accent p-4 rounded-full transition-transform duration-300 hover:scale-110">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Our Office</h3>
                        <p className="text-muted-foreground text-sm">Gate No. 1, Plot No. 1/9 Ground Floor, nearby Ozone City, Road, Mahua Khera, Aligarh, Uttar Pradesh 202001</p>
                    </a>
                    <a href="mailto:thearchithanarchitects@gmail.com" className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl">
                        <div className="bg-accent/20 text-accent p-4 rounded-full transition-transform duration-300 hover:scale-110">
                            <Mail className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                        <p className="text-muted-foreground">thearchithanarchitects@gmail.com</p>
                    </a>
                    <a href="tel:+918279891368" className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl">
                        <div className="bg-accent/20 text-accent p-4 rounded-full transition-transform duration-300 hover:scale-110">
                            <Phone className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                        <p className="text-muted-foreground">+91-8279891368</p>
                    </a>
                </div>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105">
                    <Link href="/contact">
                        Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
