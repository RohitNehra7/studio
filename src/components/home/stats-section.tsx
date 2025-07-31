
"use client";

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
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-4 p-4 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:bg-card/50" 
              style={{ animation: `fade-in-up 0.5s ${index * 150}ms ease-out forwards`, opacity: 0 }}
            >
              <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_theme(colors.primary/0.3)]">
                {stat.icon}
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1 tracking-wider uppercase">{stat.label}</p>
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
