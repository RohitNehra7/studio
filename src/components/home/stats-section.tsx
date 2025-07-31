
import { Award, Briefcase, CalendarDays, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    { value: "120+", label: "Projects Completed", icon: <Briefcase className="h-10 w-10" /> },
    { value: "12 yrs", label: "Years Experience", icon: <CalendarDays className="h-10 w-10" /> },
    { value: "15+", label: "Awards Won", icon: <Award className="h-10 w-10" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Users className="h-10 w-10" /> },
  ];

  return (
    <section className="bg-gradient-to-b from-card via-card/80 to-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-3 animate-in fade-in-up duration-500" 
              style={{ animationDelay: `${index * 150}ms`}}
            >
              <div className="text-primary bg-primary/10 p-4 rounded-full transition-all duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
