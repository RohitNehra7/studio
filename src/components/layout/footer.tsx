import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
             <Link href="/" className="flex items-center gap-2" passHref>
                <span className="text-2xl font-bold text-foreground font-headline">
                    The Archithan Architects
                </span>
            </Link>
            <p className="text-muted-foreground">
              Elegance in Architecture. Vision in Design.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="md:justify-self-end">
             <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-accent hover:text-primary transition-colors"/></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-accent hover:text-primary transition-colors"/></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-accent hover:text-primary transition-colors"/></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-accent hover:text-primary transition-colors"/></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Archithan Architects. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
