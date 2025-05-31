import "../globals.css";
import { Inter, Montserrat } from "next/font/google";
import ClientOnlyLayout from "../components/ClientOnlyLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} flex min-h-screen max-w-[100vw] flex-col overflow-x-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat font-sans text-blue-900`}
      >
        <ClientOnlyLayout>{children}</ClientOnlyLayout>
      </body>
    </html>
  );
}
