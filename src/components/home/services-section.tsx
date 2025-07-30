import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DraftingCompass,
  Sofa,
  Trees,
  Home,
  Scaling,
  AppWindow,
  Lamp,
  Leaf,
  View,
  Map,
  ClipboardCheck,
  FileCheck,
  HardHat,
  Package,
  Replace,
  BookUser,
  Armchair,
  CheckCircle,
} from "lucide-react";

const serviceGroups = [
  {
    category: "Core Design Services",
    description: "The creative foundation of every project, from concept to reality.",
    items: [
      {
        icon: <DraftingCompass className="h-8 w-8" />,
        title: "Architectural Design",
        description: "Planning and designing all types of buildings and spaces.",
      },
      {
        icon: <Sofa className="h-8 w-8" />,
        title: "Interior Design",
        description: "Personalized interiors focused on aesthetics and function.",
      },
      {
        icon: <Trees className="h-8 w-8" />,
        title: "Landscape Architecture",
        description: "Designing outdoor spaces and site environments.",
      },
      {
        icon: <Home className="h-8 w-8" />,
        title: "Vastu Consultation",
        description: "Integrating traditional spatial planning principles.",
      },
    ],
  },
  {
    category: "Technical & Engineering Services",
    description: "The backbone of our designs, ensuring precision, safety, and efficiency.",
    items: [
        {
        icon: <Scaling className="h-8 w-8" />,
        title: "Structural Engineering",
        description: "Ensuring structural integrity and safety for all our buildings.",
      },
      {
        icon: <AppWindow className="h-8 w-8" />,
        title: "Building Information Modeling (BIM)",
        description: "3D modeling for coordinated design and flawless execution.",
      },
      {
        icon: <Lamp className="h-8 w-8" />,
        title: "Lighting & Electrical Design",
        description: "Functional and decorative lighting systems for any space.",
      },
      {
        icon: <Leaf className="h-8 w-8" />,
        title: "Sustainability Consulting",
        description: "Energy-efficient and eco-conscious design strategies.",
      },
    ],
  },
    {
    category: "Visualization & Planning",
    description: "Bringing ideas to life and creating strategic frameworks for success.",
    items: [
      {
        icon: <View className="h-8 w-8" />,
        title: "3D Visualization & Walkthroughs",
        description: "Realistic renders and virtual tours to experience the design.",
      },
      {
        icon: <Map className="h-8 w-8" />,
        title: "Master Planning & Urban Design",
        description: "Large-scale planning for sites, campuses, and cities.",
      },
       {
        icon: <ClipboardCheck className="h-8 w-8" />,
        title: "Site Feasibility & Due Diligence",
        description: "Pre-project analysis for zoning, legal, and environmental viability.",
      },
      {
        icon: <FileCheck className="h-8 w-8" />,
        title: "Municipal Drawings & Approvals",
        description: "Permit-ready drawings for local authority submission.",
      },
    ],
  },
  {
    category: "Execution & Delivery",
    description: "From groundbreaking to final handover, we manage every detail.",
    items: [
      {
        icon: <HardHat className="h-8 w-8" />,
        title: "Construction & Project Management",
        description: "On-site execution and delivery oversight for timely completion.",
      },
      {
        icon: <Package className="h-8 w-8" />,
        title: "Turnkey Interior Solutions",
        description: "Complete interior setup from initial design to final move-in.",
      },
      {
        icon: <Replace className="h-8 w-8" />,
        title: "Renovation & Restoration",
        description: "Upgrading or reviving old structures with modern functionality.",
      },
      {
        icon: <CheckCircle className="h-8 w-8" />,
        title: "Post-Occupancy Evaluation",
        description: "Review and feedback to ensure the project meets all expectations.",
      },
    ],
  },
];


export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final construction, we offer a complete suite of services to bring your vision to life with precision and passion.
          </p>
        </div>

        {serviceGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16 md:mb-24">
            <div className="text-center mb-12">
              <h3 className="font-headline text-2xl md:text-3xl text-primary mb-3">{group.category}</h3>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto">{group.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {group.items.map((service, index) => (
                <Card key={index} className="bg-card text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2">
                  <CardHeader className="p-0 pb-4">
                    <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
