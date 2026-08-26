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
  title: "Gabriel Ledezma — Backend Developer Jr | Java & Spring Boot",
  description:
    "Portfolio de Gabriel Agustín Ledezma, Backend Developer Jr enfocado en Java, Spring Boot, APIs REST, seguridad, PostgreSQL y sistemas de gestión desplegados.",
  keywords: [
    "Backend Developer Jr",
    "Java Developer",
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "JPA",
    "Hibernate",
    "APIs REST",
    "JWT",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Node.js",
    "React",
    "UNAHUR",
  ],
  authors: [{ name: "Gabriel Agustín Ledezma" }],
  openGraph: {
    title: "Gabriel Ledezma — Backend Developer Jr",
    description:
      "Java, Spring Boot, APIs REST, seguridad, persistencia y proyectos desplegados.",
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
