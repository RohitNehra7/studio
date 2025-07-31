
import { Mail, Phone, MapPin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="text-center py-16 md:py-24 bg-gradient-to-b from-card to-background">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Let's build something remarkable together.
        </p>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-card p-8 rounded-lg">
            <h2 className="font-headline text-3xl text-primary mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <a href="https://share.google/1DiYzQ8EmrLUqr54W" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 text-accent p-3 rounded-full mt-1 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Our Office</h3>
                    <p className="text-muted-foreground">
                      Gate No. 1, Plot No. 1/9 Ground Floor, nearby Ozone City, Road, Mahua Khera, Aligarh, Uttar Pradesh 202001
                    </p>
                  </div>
                </div>
              </a>
              <a href="mailto:thearchithanarchitects@gmail.com" className="block p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 text-accent p-3 rounded-full mt-1 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">
                      thearchithanarchitects@gmail.com
                    </p>
                  </div>
                </div>
              </a>
              <a href="tel:+918279891368" className="block p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 text-accent p-3 rounded-full mt-1 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">
                      +91-8279891368
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <Card className="bg-card p-8 rounded-lg text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                  <Instagram className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-3xl text-primary">Follow us on Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">See our latest projects, design inspiration, and behind-the-scenes content.</p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://www.instagram.com/the_archithans" target="_blank" rel="noopener noreferrer">
                    @the_archithans <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card p-8 rounded-lg text-center">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                  <Youtube className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-3xl text-primary">Subscribe on YouTube</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">Watch project tours, design tutorials, and discussions on the future of architecture.</p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://www.youtube.com/@thearchithanarchitects" target="_blank" rel="noopener noreferrer">
                    @thearchithanarchitects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
