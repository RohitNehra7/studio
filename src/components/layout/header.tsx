"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    if (pathname === '/') {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setHasScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isHomePage = pathname === "/";

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} passHref>
        <Button
          variant="link"
          className={cn(
            "text-lg hover:text-primary hover:no-underline transition-colors duration-300",
            isHomePage && !hasScrolled ? "text-white/80 hover:text-white" : "text-foreground/80",
            isActive && (isHomePage && !hasScrolled ? "text-white font-semibold" : "text-primary font-semibold"),
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
      "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
      !hasScrolled && isHomePage ? "bg-transparent" : "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" passHref>
          <span className={cn(
            "text-2xl font-bold font-headline transition-colors",
             !hasScrolled && isHomePage ? "text-white" : "text-foreground"
          )}>
            The Archithan Architects
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-4">
             <div className={cn(!hasScrolled && isHomePage ? "[&_#theme-toggle~*]:text-white" : "")}>
              <ThemeToggle />
            </div>
            <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className={cn("h-6 w-6", !hasScrolled && isHomePage ? "text-white" : "text-foreground")} />
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