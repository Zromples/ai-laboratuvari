import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "AI.LAB Studio", description: "Create videos and images with AI.LAB." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
