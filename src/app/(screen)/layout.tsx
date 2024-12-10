import BottomNav from "@/components/bottom-nav";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full h-screen">
      {children}
      <div className="absolute bottom-0 right-0 w-full h-[70px]">
        <BottomNav />
      </div>
    </div>
  );
}
