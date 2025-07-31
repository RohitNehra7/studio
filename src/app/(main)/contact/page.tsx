
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

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
          <div className="bg-card p-8 rounded-lg">
             <h2 className="font-headline text-3xl text-primary mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
