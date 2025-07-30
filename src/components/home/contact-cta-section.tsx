import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function ContactCallToAction() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-card to-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Let's Build Together</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                    Have a project in mind or just want to learn more? We'd love to connect with you.
                </p>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl">
                        <div className="bg-accent/20 text-accent p-4 rounded-full transition-transform duration-300 hover:scale-110">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Our Office</h3>
                        <p className="text-muted-foreground">123 Architecture Ave, Design City</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl">
                        <div className="bg-accent/20 text-accent p-4 rounded-full transition-transform duration-300 hover:scale-110">
                            <Mail className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                        <p className="text-muted-foreground">contact@thearchithanarchitects.com</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-xl">
                        <div className="bg-accent/20 text-accent p-4 rounded-full transition-transform duration-300 hover:scale-110">
                            <Phone className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
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
