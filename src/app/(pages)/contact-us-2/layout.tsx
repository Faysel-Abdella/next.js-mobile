import { CustomAlert } from "@/components/custom-alert";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <CustomAlert>
        {children}
        </CustomAlert>
    )
  }