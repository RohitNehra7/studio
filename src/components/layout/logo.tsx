import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-headline", className)}>
      <span className="text-xl font-semibold tracking-tight">
        The Archithan Architects
      </span>
    </div>
  );
}
