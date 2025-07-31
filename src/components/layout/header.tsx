
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "./logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navLinks = [
  { 
    href: "/services", 
    label: "Services",
  },
  { href: "/studio", label: "Studio" },
  { href: "/about", label: "About Us" },
  { 
    href: "/contact", 
    label: "Contact",
  },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ href, label, className, isDropdown, dropdownItems }: { href: string; label: string; className?: string, isDropdown?: boolean, dropdownItems?: {href: string, label: string}[] }) => {
    const isActive = pathname.startsWith(href);

    if (isDropdown) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="link"
                        className={cn(
                            "text-lg hover:text-primary hover:no-underline transition-colors duration-300",
                            "text-foreground/80",
                            isActive && "text-primary font-semibold",
                            className
                        )}
                        >
                        {label} <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {dropdownItems?.map(item => (
                         <DropdownMenuItem key={item.href} asChild>
                            <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }


    return (
      <Link href={href} passHref>
        <Button
          variant="link"
          className={cn(
            "text-lg hover:text-primary hover:no-underline transition-colors duration-300",
            "text-foreground/80",
            isActive && "text-primary font-semibold",
            className
          )}
          onClick={() => setSheetOpen(false)}
        >
          {label}
        </Button>
      </Link>
    );
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <Logo className={cn(
            "transition-colors",
            "text-foreground"
          )} />
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className={cn("h-6 w-6", "text-foreground")} />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex flex-col items-center justify-center h-full">
                    <nav className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} className={cn("text-2xl", "!text-foreground/80", pathname === link.href && "!text-primary")}/>
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
