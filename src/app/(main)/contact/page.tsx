import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-in fade-in duration-500">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Let's build something remarkable together.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="bg-card p-8 rounded-lg">
          <h2 className="font-headline text-3xl text-primary mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 text-accent p-3 rounded-full mt-1">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Our Office</h3>
                <p className="text-muted-foreground">123 Architecture Avenue, Design City, 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-accent/20 text-accent p-3 rounded-full mt-1">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">contact@archithanvision.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-accent/20 text-accent p-3 rounded-full mt-1">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg">
           <h2 className="font-headline text-3xl text-primary mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
