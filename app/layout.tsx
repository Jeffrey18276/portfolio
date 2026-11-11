import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeffrey Tom Shaji | Software Engineer",
  description:
    "Portfolio of Jeffrey Tom Shaji — Spring Boot backend engineer at TCS, with interests in AI/ML, LLMs and privacy-preserving systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
