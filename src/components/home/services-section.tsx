import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DraftingCompass, Sofa, Scaling, Trees, View, HardHat, Hammer, Home, FileCheck, Leaf } from "lucide-react";

const services = [
  {
    icon: <DraftingCompass className="h-10 w-10" />,
    title: "Architectural Design",
    description: "Conceptual and detailed architectural planning for residential, commercial, and institutional projects.",
  },
  {
    icon: <Sofa className="h-10 w-10" />,
    title: "Interior Design",
    description: "Customized interior solutions focused on aesthetics, functionality, and spatial harmony.",
  },
  {
    icon: <Scaling className="h-10 w-10" />,
    title: "Structural Engineering",
    description: "Ensuring safe, compliant, and efficient buildings through expert structural design and analysis.",
  },
  {
    icon: <Trees className="h-10 w-10" />,
    title: "Landscape Architecture",
    description: "Designing outdoor environments and urban green spaces that complement built structures.",
  },
  {
    icon: <View className="h-10 w-10" />,
    title: "3D Visualization",
    description: "Photorealistic 3D renders and walkthroughs for better design understanding.",
  },
  {
    icon: <HardHat className="h-10 w-10" />,
    title: "Project Management",
    description: "End-to-end construction execution, scheduling, and site supervision for timely project delivery.",
  },
  {
    icon: <Hammer className="h-10 w-10" />,
    title: "Renovation & Restoration",
    description: "Upgrading and reviving old structures with a focus on modern utility and architectural integrity.",
  },
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: "Municipal Approvals",
    description: "Preparing and submitting sanction drawings and documentation for local authority approvals.",
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: "Sustainability Consulting",
    description: "Advising on eco-friendly materials and energy-efficient systems for a greener footprint.",
  },
   {
    icon: <Home className="h-10 w-10" />,
    title: "Vastu Consultation",
    description: "Integrating traditional Vastu principles for balanced and harmonious spaces.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final construction, we offer a comprehensive suite of services to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card text-center flex flex-col items-center p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4 flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
