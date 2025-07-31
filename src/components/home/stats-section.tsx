
export function StatsSection() {
  const stats = [
    { value: "120+", label: "Projects Completed" },
    { value: "12 yrs", label: "Years Experience" },
    { value: "15+", label: "Awards Won" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/40">
          {stats.map((stat, index) => (
            <div key={index} className="py-8 animate-in fade-in-up duration-500" style={{ animationDelay: `${index * 100}ms`}}>
              <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
