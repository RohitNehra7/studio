
"use client";

import { Award, Briefcase, CalendarDays, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    { value: "120+", label: "Projects Completed", icon: <Briefcase className="h-8 w-8" /> },
    { value: "12 yrs", label: "Years Experience", icon: <CalendarDays className="h-8 w-8" /> },
    { value: "15+", label: "Awards Won", icon: <Award className="h-8 w-8" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Users className="h-8 w-8" /> },
  ];

  return (
    <section className="bg-gradient-to-b from-card via-card/80 to-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-8 text-center lg:text-left">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group flex flex-row items-center justify-center lg:justify-start gap-4 p-4 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:bg-card/50" 
              style={{ animation: `fade-in-up 0.5s ${index * 150}ms ease-out forwards`, opacity: 0 }}
            >
              <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_theme(colors.primary/0.3)] flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
