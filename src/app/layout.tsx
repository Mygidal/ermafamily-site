import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AIAssistantFloating from "../components/AIAssistantFloating";
import { ChatProvider } from "../context/ChatContext"; // 🧠

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
      <body
        className={` ${inter.variable} ${montserrat.variable} flex min-h-screen flex-col overflow-x-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat font-sans text-blue-900`}
      >
        <ChatProvider>
          <Header />
          <main className="w-full max-w-full grow overflow-x-hidden">
            {children}
          </main>

          {/* 💬 Мобилен бутон за AI */}
          <div className="lg:hidden">
            <AIAssistantFloating />
          </div>

          {/* 💬 Десктоп бутон се отваря чрез Header → openChat() */}
          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}
