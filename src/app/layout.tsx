import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AIAssistantFloating from "../components/AIAssistantFloating";
import { ChatProvider } from "../context/ChatContext";

import { Inter, Montserrat } from "next/font/google";

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
        className={` ${inter.variable} ${montserrat.variable} flex min-h-screen flex-col overflow-x-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat font-sans text-blue-900`}
        style={{ maxWidth: "100vw" }}
      >
        <ChatProvider>
          <Header />
          <main
            className="w-full max-w-full grow overflow-x-hidden"
            style={{ maxWidth: "100vw", overflowX: "hidden" }}
          >
            {children}
          </main>

          <div className="chat-container-wrapper lg:hidden">
            <AIAssistantFloating />
          </div>

          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}
