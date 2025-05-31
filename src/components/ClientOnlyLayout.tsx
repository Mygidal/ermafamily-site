"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import AIAssistantFloating from "./AIAssistantFloating";
import { ChatProvider } from "../context/ChatContext";

export default function ClientOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChatPage = pathname.startsWith("/ai");

  return (
    <ChatProvider>
      {!isChatPage && <Header />}
      <main className="w-full max-w-[100vw] grow overflow-x-hidden">
        {children}
      </main>
      <div className="max-w-[100vw] overflow-x-hidden lg:hidden">
        <AIAssistantFloating />
      </div>
      {!isChatPage && <Footer />}
    </ChatProvider>
  );
}
