import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-headline", className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <path
          d="M4 44V34H14V4H24V34H34V44H4Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 24H44L39 14L34 24Z"
          fill="currentColor"
        />
      </svg>

      <span className="text-xl font-semibold tracking-tight">
        The Archithan Architects
      </span>
    </div>
  );
}
