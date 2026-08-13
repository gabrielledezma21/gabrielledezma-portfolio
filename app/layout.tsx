import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gabriel Ledezma — Backend Developer | Java & Node.js",
  description:
    "Portfolio de Gabriel Agustín Ledezma: backend con Java, Spring Boot y Node.js; frontend con JavaScript y React; bases de datos y proyectos desplegados.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Node.js",
    "Express",
    "JavaScript",
    "React",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "UNAHUR",
  ],
  authors: [{ name: "Gabriel Agustín Ledezma" }],
  openGraph: {
    title: "Gabriel Ledezma — Backend Developer",
    description: "APIs REST, modelos de datos y proyectos desplegados de extremo a extremo.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${mono.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
