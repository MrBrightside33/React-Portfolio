import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router"
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function RootLayout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}