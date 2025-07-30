import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function ContactCallToAction() {
    return (
        <section className="py-20 md:py-32 bg-card">
            <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Let's Build Together</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Have a project in mind or just want to learn more? We'd love to connect with you.
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center gap-3">
                <div className="bg-accent/20 text-accent p-4 rounded-full">
                    <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Our Office</h3>
                <p className="text-muted-foreground">123 Architecture Ave, Design City</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                <div className="bg-accent/20 text-accent p-4 rounded-full">
                    <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">contact@thearchithanarchitects.com</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                <div className="bg-accent/20 text-accent p-4 rounded-full">
                    <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
            </div>
            <Button size="lg" asChild>
                <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            </div>
        </section>
    );
}
