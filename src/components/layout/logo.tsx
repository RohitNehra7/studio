import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("text-primary", className)}
      aria-label="The Archithan Architects Logo"
    >
       <defs>
        <linearGradient id="grey-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="grey" />
        </linearGradient>
      </defs>
      <g fill="url(#grey-gradient)">
      <path
        d="M 128,150 A 100,40 0 0,0 28,150 H 228 A 100,40 0 0,0 128,150"
      />
      <path
        d="M90 150 V 80 L 100 70 L 110 80 V 150 H 90 z M 115 150 V 75 L 125 65 L 135 75 V 150 H 115 z M 140 150 V 80 L 150 70 L 160 80 V 150 H 140 z M 70 150 L 85 90 V 150 H 70 z M 186 150 L 171 90 V 150 H 186 z"
      />
      <circle cx="195" cy="80" r="15" />
       <path
        d="M185,100 Q195,115 205,100 T215,115 M195,112 Q205,127 215,112 T225,127"
        stroke="grey"
        strokeWidth="4"
        fill="none"
        transform="rotate(-20 200 110)"
      />
      </g>
    </svg>
  );
}
