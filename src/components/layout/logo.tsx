
import { cn } from "@/lib/utils";
import Image from 'next/image';
import logo from "@/assets/homepage/logo.jpeg";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image src={logo} alt="The Archithan Architects Logo" width={50} height={50} />
    </div>
  );
}
