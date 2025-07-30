import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/page-loader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageLoader />
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
