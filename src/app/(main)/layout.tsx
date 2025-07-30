
'use client';

import { usePathname } from 'next/navigation';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/page-loader";
import { cn } from '@/lib/utils';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageLoader />
      <Header />
      <main className={cn("flex-grow", !isHomePage && "pt-20")}>{children}</main>
      <Footer />
    </div>
  );
}
